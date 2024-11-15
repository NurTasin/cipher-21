import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
    const body = await req.json() as any;
    console.log(body);
    const { email, password } = body;
    if (!email || !password) {
        return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }
    const user = await db.user.findUnique({
        where: {
            email,
        },
    });
    if (!user) {
        return NextResponse.json({ error: "Invalid email or password" }, { status: 403 });
    }
    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) {
        return NextResponse.json({ error: "Invalid email or password" }, { status: 403 });
    }
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role,
        },
        process.env.JWT_SECRET as string,
        { expiresIn: "30d" }
    );

    const response = NextResponse.json({
        id: user.id,
        email: user.email,
        name: user.name,
        student_id: user.instituteId,
        role: user.role,
        phone: user.phone,
        profile_pic: user.profile_pic,
    });
    
    response.cookies.set("token", token, { httpOnly: true, maxAge: 60 * 60 * 24 * 30 });

    return response;
}