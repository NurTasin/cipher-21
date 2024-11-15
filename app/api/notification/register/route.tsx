import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import jwt from "jsonwebtoken";
import {UAParser} from "ua-parser-js";
import { formatDeviceInfo } from "@/lib/utils";

export async function POST(req: NextRequest) {
    const body = await req.json() as any;
    const { msgToken } = body;
    const {browser, device, os} = UAParser(req.headers.get("user-agent")?.toString());
    if (!msgToken) {
        return NextResponse.json({ error: "msgToken is required" }, { status: 400 });
    }
    const token = req.cookies.get("token");
    if (!token) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }
    let tokenData:{
        id: string;
        email: string;
        role: string;
    };
    try {
        tokenData = jwt.verify(token.value, process.env.JWT_SECRET as string) as any;
    } catch (err) {
        return NextResponse.json({ error: "Token Error" }, { status: 403 });
    }
    if (!tokenData) {
        return NextResponse.json({ error: "Token Error" }, { status: 403 });
    }

    const tokenEntry = await db.notificationTokens.create({
        data:{
            token: msgToken,
            userId: tokenData.id,
            deviceDetails: formatDeviceInfo({
            browser,
            device,
            os
        })
        }
    })
    return NextResponse.json({ success: true , msg: "Token enlisted", data: tokenEntry });
}