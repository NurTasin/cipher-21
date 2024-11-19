import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import db from "@/lib/db";

// Define a type for transactions
type Transaction = {
    id: number;
    type: "DEPOSIT" | "WITHDRAW";
    description: string;
    amount: number;
    created_at: Date;
};

const formatDate = (timestamp: Date) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

const getData = async () => {
    const transactions: Transaction[] = await db.independentFund.findMany();

    const totalDeposits = transactions
        .filter((t) => t.type === "DEPOSIT")
        .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = transactions
        .filter((t) => t.type === "WITHDRAW")
        .reduce((sum, t) => sum + t.amount, 0);

    const currentBalance = totalDeposits - totalExpenses;

    return { transactions, totalDeposits, totalExpenses, currentBalance };
};

export const revalidate = 300; // ISR: Revalidate every 5 minutes

export default async function FundPage() {
    const { transactions, totalDeposits, totalExpenses, currentBalance } = await getData();

    return (
        <div className="min-h-[calc(100vh-275px)] md:min-h-[calc(100vh-160px)] w-full md:max-w-3xl mx-auto p-6 bg-black text-green-500 font-mono">
            <h2 className="text-2xl font-bold mb-4">Fund Tracker</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-green-500">Description</TableHead>
                        <TableHead className="text-green-500 text-center">Date</TableHead>
                        <TableHead className="text-green-500 text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {transactions.map((transaction) => (
                        <TableRow key={transaction.id} className="border-b border-green-900">
                            <TableCell className="font-medium">
                                {transaction.type === "DEPOSIT" ? (
                                    <span className="text-green-500 flex items-center">
                                        <ArrowUpIcon className="mr-2 h-4 w-4" />
                                        {transaction.description}
                                    </span>
                                ) : (
                                    <span className="text-red-500 flex items-center">
                                        <ArrowDownIcon className="mr-2 h-4 w-4" />
                                        {transaction.description}
                                    </span>
                                )}
                            </TableCell>
                            <TableCell className="text-green-500 text-center">
                                {formatDate(transaction.created_at)}
                            </TableCell>
                            <TableCell className="text-right">
                                <span
                                    className={
                                        transaction.type === "DEPOSIT" ? "text-green-500" : "text-red-500"
                                    }
                                >
                                    ৳&nbsp;{transaction.amount.toFixed(2)}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="mt-6 space-y-2">
                <div className="flex justify-between">
                    <span>Total Deposits:</span>
                    <span className="text-green-500">৳&nbsp;{totalDeposits.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Total Expenses:</span>
                    <span className="text-red-500">৳&nbsp;{totalExpenses.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-green-900 pt-2">
                    <span>Current Balance:</span>
                    <span className={currentBalance >= 0 ? "text-green-500" : "text-red-500"}>
                        ৳&nbsp;{currentBalance.toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
}
