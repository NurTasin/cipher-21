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
    if(tokenData.role !== "ADMIN"){
        return NextResponse.json(responseSchema("UNAUTHORIZED", "You don't have admin privileges"), { status: 403 });
    }
    const totalDeposits = await db.independentFund.aggregate({
        where: {
            type: "DEPOSIT"
        },
        _sum: {
            amount: true
        }
    });
    const totalWithdrawals = await db.independentFund.aggregate({
        where: {
            type: "WITHDRAW"
        },
        _sum: {
            amount: true
        }
    });
    const lastAdminActivity = await db.adminActivity.findMany({
        orderBy: {
            created_at: "desc"
        },
        take: 10
    });
    const currentBalance = (totalDeposits._sum.amount||0) - (totalWithdrawals._sum.amount || 0);
    return NextResponse.json(responseSchema(false, "Admin Data Retrieved", {
        totalDeposits: totalDeposits._sum.amount,
        totalWithdrawals: totalWithdrawals._sum.amount,
        currentBalance: currentBalance,
        adminAcitivities: lastAdminActivity
    }));
}