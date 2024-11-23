import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import jwt from "jsonwebtoken";
import { responseSchema } from "@/lib/responseSchema";
import { Notice } from "@/prisma/client";
import { NoticeNotification } from "@/lib/onesignal/notifications";

export async function GET(req: NextRequest){
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
    if(specificId){
        const notice = await db.notice.findFirst({
            where:{
                id: parseInt(specificId)
            }
        })
        if(!notice){
            return NextResponse.json(responseSchema("NOT_FOUND", "Notice not found"), { status: 404 });
        }
        return NextResponse.json(responseSchema(false, "Notice Retrieved", notice), {
            status: 200
        });
    }
    const notice = await db.notice.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            icon: true,
        }
    });
    return NextResponse.json(responseSchema(false, "Notices Retrieved", notice),{
        status: 200
    });
}

export async function POST(req: NextRequest) {
    const { title, description, icon } = await req.json();
    if (!title || !description || !icon) {
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

    const notice = await db.notice.create({
        data: {
            title,
            description,
            icon,
            creator_id: tokenData.id,
        },
    });

    await db.adminActivity.create({
        data: {
            title: `New Notice (#${notice.id}) Created by ${tokenData.email}`,
            creator_id: tokenData.id,
        },
    });
    const notificationSent = await NoticeNotification(notice.title, notice.description, req.nextUrl.origin + `/notices/${notice.id}`);
    return NextResponse.json(responseSchema<any>(false, "Notice Created", {
        ...notice,
        notificationSent: notificationSent,
    }),{
        status: 200
    });
}

export async function PUT(req: NextRequest) {
    const { id, title, description, icon } = await req.json();
    if (!id || (!title && !description && !icon)) {
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
    const notice = await db.notice.update({
        where: {
            id: id,
        },
        data: {
            title,
            description,
            icon,
        },
    });
    await db.adminActivity.create({
        data: {
            title: `Notice (#${id}) Updated by ${tokenData.email}`,
            creator_id: tokenData.id,
        },
    });
    return NextResponse.json(responseSchema(false, "Notice Updated", notice),{
        status: 200
    });
}

export async function DELETE(req: NextRequest) {
    const { id } = await req.json();
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
    const notice = await db.notice.delete({
        where: {
            id: id,
        },
    });
    await db.adminActivity.create({
        data: {
            title: `Notice (#${id}) Deleted by ${tokenData.email}`,
            creator_id: tokenData.id,
        },
    });
    return NextResponse.json(responseSchema(false, "Notice Deleted", notice),{
        status: 200
    });
}