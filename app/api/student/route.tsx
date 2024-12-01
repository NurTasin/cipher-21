import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import jwt from "jsonwebtoken";
import { responseSchema } from "@/lib/responseSchema";

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
    const specificId = req.nextUrl.searchParams.get('id')
    if (specificId) {
        const student = await db.user.findFirst({
            where: {
                id: specificId
            },
            select: {
                id: true,
                instituteId: true,
                name: true,
                phone: true,
                gender: true,
                home_district: true,
                email: true,
                profile_pic: true,
                whatsapp: true,
                facebook: true,
                instagram: true,
                linkedin: true,
                codeforces: true,
                github: true,
                role: true,
            }
        })
        if (!student) {
            return NextResponse.json(responseSchema("NOT_FOUND", "Student not found"), { status: 404 });
        }
        return NextResponse.json(responseSchema<any>(false, "Student Found", {
            id: student.id,
            instituteId: student.instituteId,
            name: student.name,
            phone: student.gender==="FEMALE"? tokenData.role==="ADMIN"? student.phone: "HIDDEN": student.phone,
            home_district: student.home_district,
            email: student.email,
            profile_pic: student.profile_pic,
            role: student.role,
            socials:{
                whatsapp: student.whatsapp,
                facebook: student.facebook,
                instagram: student.instagram,
                linkedin: student.linkedin,
                codeforces: student.codeforces,
                github: student.github,
            }
        }));
    }
    const students = await db.user.findMany({
        orderBy: {
            instituteId: "asc"
        },
        select: {
            id: true,
            instituteId: true,
            name: true,
            phone: true,
            gender: true,
            home_district: true,
            role: true,
        }
    });
    return NextResponse.json(responseSchema(false, "Students Retrieved", students.map(student=>{
        student.phone=student.gender==="FEMALE"? tokenData.role==="ADMIN"? student.phone: "HIDDEN": student.phone
        return student
    })), {
        status: 200,
    });
}