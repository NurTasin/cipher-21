import NoticeIcon from "@/components/noticeIcon";
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import db from "@/lib/db";
import { ChevronLeft, ChevronRight, Shield, Zap, AlertTriangle, FileText } from "lucide-react"
import Link from "next/link";

const perPage = 9;

export default async function NoticePage({ searchParams }: { searchParams: { page: string } }) {
    const noticeCount = await db.notice.count();
    const pagesNeeded = Math.ceil(noticeCount / perPage);
    const currentPage = parseInt(searchParams.page || "1");
    const notices = await db.notice.findMany({
        take: perPage,
        orderBy: {
            created_at: "desc",
        },
        skip: (currentPage - 1) * perPage,
    });

    return (
        <div className="min-h-[calc(100vh-275px)] md:min-h-[calc(100vh-160px)] bg-black text-green-500 p-4 md:p-8">
            <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-center">Cipher'21 Notice Board</h1>
            </header>
            <main className="max-w-[90%] mx-auto">
                <div className="grid gap-6 md:grid-cols-3">
                    {notices.map((notice) => (
                        <Card key={notice.id} className="bg-gray-900 border-green-500">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-xl text-green-400">{notice.title}</CardTitle>
                                <NoticeIcon icon={notice.icon} />
                            </CardHeader>
                            <CardDescription className="text-green-600 px-6 mb-4">{new Date(notice.created_at).toLocaleDateString()}</CardDescription>
                            <CardContent>
                                <p className="text-green-500">{notice.description.length > 50 ? notice.description.slice(0, 50) + "..." : notice.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Link href={`/notices/${notice.id}`} className="text-green-400 border-green-500 hover:bg-green-900">
                                    Access Data
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </main>
            <footer className="mt-12 flex flex-col items-center space-y-4">
                {
                    pagesNeeded > 1 ? (
                        <div className="flex justify-center items-center space-x-2">
                            {
                                currentPage > 1 && (
                                    <Link
                                        href={`/notices?page=${currentPage - 1}`}
                                        className="flex items-center justify-center w-8 h-8 bg-gray-800 text-green-500 border border-green-500 rounded hover:bg-green-900"
                                    >
                                        <ChevronLeft className="h-4 w-4" />
                                        <span className="sr-only">Previous page</span>
                                    </Link>
                                )
                            }
                            {Array.from({ length: pagesNeeded }, (_, i) => i + 1).map((i) => (
                                <Link
                                    key={i}
                                    href={`/notices?page=${i}`}
                                    className={`flex items-center justify-center w-8 h-8 border rounded ${i === currentPage
                                            ? "bg-green-500 text-white border-green-500"
                                            : "bg-gray-800 text-green-500 border-gray-600 hover:bg-gray-700"
                                        }`}
                                >
                                    {i}
                                </Link>
                            ))}
                            {
                                currentPage < pagesNeeded && (
                                    <Link
                                        href={`/notices?page=${currentPage + 1}`}
                                        className="flex items-center justify-center w-8 h-8 bg-gray-800 text-green-500 border border-green-500 rounded hover:bg-green-900"
                                    >
                                        <ChevronRight className="h-4 w-4" />
                                        <span className="sr-only">Next page</span>
                                    </Link>
                                )
                            }
                        </div>
                    ) : (
                        <div className="h-12"></div>
                    )
                }
                <p className="text-green-500 text-sm">Showing page {currentPage} of {pagesNeeded}</p>
            </footer>
        </div>
    )
}