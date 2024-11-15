import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import jwt from "jsonwebtoken";
import { responseSchema } from "@/lib/responseSchema";


// Reading the funds
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
    let specificId = req.nextUrl.searchParams.get('id')
    if(specificId){
        const independentFund = await db.independentFund.findFirst({
            where:{
                id: parseInt(specificId)
            }
        })
        if(!independentFund){
            return NextResponse.json(responseSchema("NOT_FOUND", "Fund not found"), { status: 404 });
        }
        return NextResponse.json(responseSchema(false, "Fund Retrieved", independentFund), {
            status: 200
        });
    }

    const independentFund = await db.independentFund.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            type: true,
            amount: true,
            creator_id: true,
        },
    });
    return NextResponse.json(responseSchema(false, "Funds Retrieved", independentFund), {
        status: 200
    });
}

// Creating a new fund
export async function POST(req: NextRequest) {
    const { name, description, type, amount } = await req.json();
    if (!name || !description || !type || !amount) {
        return NextResponse.json(responseSchema("BAD_REQUEST", "Missing required fields"), { status: 400 });
    }
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

    if(tokenData.role !== "ADMIN"){
        return NextResponse.json(responseSchema("UNAUTHORIZED", "You don't have admin privileges"), { status: 403 });
    }
    const independentFund = await db.independentFund.create({
        data: {
            name,
            description,
            type,
            amount,
            creator_id: tokenData.id,
        },
    });

    await db.adminActivity.create({
        data: {
            title: `New Fund (#${independentFund.id}) Created by ${tokenData.email}`,
            creator_id: tokenData.id,
        },
    });
    return NextResponse.json(responseSchema(false, "Fund Created", independentFund), {
        status: 200
    });
}

// Updating a fund
export async function PUT(req: NextRequest) {
    const { id, name, description, type, amount } = await req.json();
    if (!id || (!name && !description && !type && !amount)) {
        return NextResponse.json(responseSchema("BAD_REQUEST", "Missing required fields"), { status: 400 });
    }
    if (!id) {
        return NextResponse.json(responseSchema("BAD_REQUEST", "Missing required fields"), { status: 400 });
    }
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

    if(tokenData.role !== "ADMIN"){
        return NextResponse.json(responseSchema("UNAUTHORIZED", "You don't have admin privileges"), { status: 403 });
    }

    const independentFund = await db.independentFund.update({
        where: {
            id: id,
        },
        data: {
            name,
            description,
            type,
            amount,
        },
    });
    await db.adminActivity.create({
        data: {
            title: `Fund (#${id}) Updated by ${tokenData.email}`,
            creator_id: tokenData.id,
        },
    });
    return NextResponse.json(responseSchema(false, "Fund Updated", independentFund), {
        status: 200
    });
}