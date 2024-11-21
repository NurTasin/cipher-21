import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar, ChevronRight, User } from "lucide-react"
import db from "@/lib/db"
import NoticeIcon from "@/components/noticeIcon";
import { routine } from "@/lib/data/routine";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import Link from "next/link";
import NotifyPrompt from "@/components/notifyPrompt";

const weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export default async function HackerStudentDashboard() {
  const token = cookies().get("token");
  if (!token) {
    redirect("/login?msg=unauthorized");
  }
  let tokenData: {
    id: string;
    email: string;
    role: string;
  };
  try {
    tokenData = jwt.verify(token.value, process.env.JWT_SECRET as string) as any;
  } catch (err) {
    redirect("/login?msg=token_error");
  }
  if (!tokenData) {
    redirect("/login?msg=no_token_data");
  }
  const studentData = await db.user.findFirst({
    where: {
      id: tokenData.id,
    },
    select: {
      name: true,
      instituteId: true,
      profile_pic: true
    },
  });
  if (!studentData) {
    redirect("/login?msg=student_not_found");
  }
  const todayDay = weekday[new Date().getDay()];
  const student = {
    name: studentData.name,
    id: studentData.instituteId,
    schedule: routine[todayDay],
    notices: await db.notice.findMany({
      orderBy: { created_at: "desc" },
      take: 3
    }),
  }
  return (
    <div className="min-h-screen bg-black p-4 md:p-8 text-green-400">
      <NotifyPrompt />
      <div className="container mx-auto space-y-8">
        <Card className="bg-gray-900 border-green-500 border overflow-hidden shadow-lg shadow-green-500/20 transition-all hover:shadow-green-500/40">
          <CardHeader className="bg-gradient-to-r from-green-900 to-green-700">
            <div className="flex items-center space-x-4 justify-center">
              {
                studentData.profile_pic ? <img src={studentData.profile_pic} className="h-16 w-16" /> : <User className="h-12 w-12 text-green-300" />
              }
              <div>
                <CardTitle className="text-2xl font-bold text-green-100">{student.name}</CardTitle>
                <p className="text-green-300">ID: {student.id}</p>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card className="bg-gray-900 border-green-500 border overflow-hidden shadow-lg shadow-green-500/20 transition-all hover:shadow-green-500/40">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold text-green-400">Today's Missions</CardTitle>
            <Calendar className="h-6 w-6 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              {
                student.schedule ? (
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b border-green-700">
                        <TableHead className="text-green-400">Time</TableHead>
                        <TableHead className="text-green-400">Subject</TableHead>
                        <TableHead className="text-green-400 hidden sm:table-cell">Teacher</TableHead>
                        <TableHead className="text-green-400">Location</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>

                      {student.schedule.classes.map((item, index) => (
                        <TableRow key={index} className="border-b border-green-900 hover:bg-green-900/30 transition-colors">
                          <TableCell className="font-medium text-green-300">{item.slot}</TableCell>
                          <TableCell className="text-green-400">{item.courseCode}</TableCell>
                          <TableCell className="text-green-400 hidden sm:table-cell">{item.instructor}</TableCell>
                          <TableCell className="text-green-400">{item.roomNumber}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="text-center text-green-400 h-24 flex items-center justify-center text-xl">No Missions Today. Take Rest Hackers!</div>
                )
              }
            </div>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-500">Intel Feed</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {student.notices.map((notice, index) => (
              <Card key={index} className="bg-gray-900 border-green-500 border overflow-hidden shadow-md shadow-green-500/20 transition-all hover:shadow-green-500/40 hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                  <div className="rounded-full bg-green-900 p-3">
                    <NoticeIcon icon={notice.icon} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-green-400">{notice.title}</CardTitle>
                </CardHeader>
                <CardDescription className="text-green-600 px-6 mb-4">{new Date(notice.created_at).toLocaleString()}</CardDescription>
                <CardContent>
                  <p className="text-sm text-green-300 mb-4">{notice.description.length > 100 ? notice.description.slice(0, 100) + "..." : notice.description}</p>
                  <Link href={`/notices/${notice.id}`} className="inline-flex items-center text-sm font-medium text-green-500 hover:text-green-300 transition-colors">
                    Access Data <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}