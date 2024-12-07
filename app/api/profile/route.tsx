import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import jwt from "jsonwebtoken";
import { responseSchema } from "@/lib/responseSchema";
import bcrypt from "bcrypt";


export async function GET(req: NextRequest) {
    const token = req.cookies.get("token");
    if (!token) {
        return NextResponse.json(responseSchema("UNAUTHORIZED", "Unauthorized"), { status: 403 });
    }
    let tokenData: {
        id: string;
        email: string;
        role: string;
    };
    try {
        tokenData = jwt.verify(token.value, process.env.JWT_SECRET as string) as any;
    } catch (err) {
        return NextResponse.json(responseSchema("TOKEN_ERROR", "Token Validation Error"), { status: 403 });
    }
    if (!tokenData) {
        return NextResponse.json(responseSchema("TOKEN_ERROR", "No token data available"), { status: 403 });
    }

    const profile = await db.user.findFirst({
        where: {
            id: tokenData.id
        },
        select: {
            id: true,
            name: true,
            phone: true,
            email: true,
            role: true,
        }
    })
    if (!profile) {
        return NextResponse.json(responseSchema("NOT_FOUND", "Profile not found"), { status: 404 });
    }
    return NextResponse.json(responseSchema(false, "Profile Retrieved", {
        id: profile.id,
        name: profile.name,
        phone: profile.phone,
        email: profile.email,
        role: profile.role,
    }));
}

export async function PUT(req: NextRequest) {
    const token = req.cookies.get("token");
    if (!token) {
        return NextResponse.json(responseSchema("UNAUTHORIZED", "Unauthorized"), { status: 403 });
    }
    let tokenData: {
        id: string;
        email: string;
        role: string;
    };
    try {
        tokenData = jwt.verify(token.value, process.env.JWT_SECRET as string) as any;
    } catch (err) {
        return NextResponse.json(responseSchema("TOKEN_ERROR", "Token Validation Error"), { status: 403 });
    }
    if (!tokenData) {
        return NextResponse.json(responseSchema("TOKEN_ERROR", "No token data available"), { status: 403 });
    }
    if(req.nextUrl.searchParams.get("profile_pic")){
        // Only update profile picture
        const new_profile_pic = (await req.json() as any).profile_pic;
        if(!new_profile_pic){
            return NextResponse.json(responseSchema("INVALID_DATA", "Invalid data"), { status: 400 });
        }
        const profile = await db.user.update({
            where: {
                id: tokenData.id
            },
            data: {
                profile_pic: new_profile_pic
            }
        })
        if(!profile){
            return NextResponse.json(responseSchema("NOT_FOUND", "Profile not found"), { status: 404 });
        }
        return NextResponse.json(responseSchema(false, "Profile updated", {
            profile_pic: new_profile_pic
        }));
    }else{
        // Update all other fields
        const body = await req.json() as any;
        const { name, phone, email, password, new_password, bio} = body;
        if(!name && !phone && !email && !password && !new_password){
            return NextResponse.json(responseSchema("INVALID_DATA", "Invalid data"), { status: 400 });
        }
        if(password && new_password){
            const currPassHash = await db.user.findFirst({
                where: {
                    id: tokenData.id
                },
                select: {
                    password: true
                }
            })
            if(!currPassHash){
                return NextResponse.json(responseSchema("NOT_FOUND", "Profile not found"), { status: 404 });
            }
            const isValid = bcrypt.compareSync(password, currPassHash.password);
            if(!isValid){
                return NextResponse.json(responseSchema("INVALID_PASSWORD", "Invalid password"), { status: 400 });
            }
            const newPassHash = await bcrypt.hash(new_password, 10);
            const profile = await db.user.update({
                where: {
                    id: tokenData.id
                },
                data: {
                    name,
                    phone,
                    email,
                    password: newPassHash
                }
            })
            if(!profile){
                return NextResponse.json(responseSchema("NOT_FOUND", "Profile not found"), { status: 404 });
            }
            return NextResponse.json(responseSchema(false, "Profile updated", {
                name,
                phone,
                email,
                password: body.new_password
            }));
        }else{
            const profile = await db.user.update({
                where: {
                    id: tokenData.id
                },
                data: {
                    name,
                    phone,
                    email,
                    bio
                }
            })
            if(!profile){
                return NextResponse.json(responseSchema("NOT_FOUND", "Profile not found"), { status: 404 });
            }
            return NextResponse.json(responseSchema(false, "Profile updated", {
                name,
                phone,
                email
            }));
        }
    }
}