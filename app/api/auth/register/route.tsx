import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
    const body = await req.json() as any;
    console.log(body);
    const { email, password, confirmPassword } = body;
    if (!email || !password || !confirmPassword) {
        return NextResponse.json({ error: "Email, password and confirm password are required" }, { status: 400 });
    }
    if (password !== confirmPassword) {
        return NextResponse.json({ error: "Passwords do not match" }, { status: 400 });
    }
    const user = await db.user.create({
        data: {
            email,
            password: bcrypt.hashSync(password, 10),
        }
    });
    return NextResponse.json({
        id: user.id,
        email: user.email,
    })
}