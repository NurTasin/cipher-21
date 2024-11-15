import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    const response = NextResponse.json({
        "success": true
    });
    response.cookies.delete("token");
    return response;
}