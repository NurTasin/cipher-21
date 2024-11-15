'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Shield } from 'lucide-react'

import { RingLoader } from "react-spinners";

interface Student {
    id: string
    instituteId: string
    name: string
    home_district: string
    phone: string
    role: "STUDENT" | "TEACHER" | "ADMIN"
}

interface Response<T> {
    error?: boolean;
    err_code?: string;
    msg?: string;
    data?: T;
}

export default function HackerStudentTable() {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState('')
    const [students, setStudents] = useState<Student[]>([])
    const [error, setError] = useState<string | undefined>(undefined)
    const [loading, setLoading] = useState(false)

    const filteredStudents = students.filter(student =>
        Object.values(student).some(value =>
            value.toLowerCase().includes(searchTerm.toLowerCase())
        )
    )

    useEffect(() => {
        setLoading(true)
        fetch('/api/student').then(res => res.json()).then((data: Response<Student[]>) => {
            setStudents(data.data || [])
        }).catch(err => {
            setError(err.message)
            console.log(err)
        }).finally(() => {
            setLoading(false)
            setError(undefined)
        })
    }, [])
    const handleRowClick = (studentId: string) => {
        router.push(`/students/${studentId}`)
    }

    return (
        <div className="min-h-[calc(100vh-275px)] md:min-h-[calc(100vh-160px)] bg-black text-green-500 p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-green-400">Student Database</h1>
                <div className="mb-4">
                    {loading && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white p-5 rounded shadow-lg">
                                <h1 className="text-2xl font-bold flex items-center gap-2">
                                    Loading <RingLoader size={20} />
                                </h1>
                            </div>
                        </div>
                    )}
                    <Input
                        type="text"
                        placeholder="Search the database..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-black border-green-500 text-green-500 placeholder-green-700 focus:ring-green-500 focus:border-green-500"
                    />
                </div>
                <div className="overflow-x-auto">
                    {error && <div className="text-red-500 text-xl">{error}</div>}
                    <Table className="w-full">
                        <TableCaption className="text-green-700">Classified student information. Access with caution.</TableCaption>
                        <TableHeader>
                            <TableRow className="border-green-500">
                                <TableHead className="text-green-400">ID</TableHead>
                                <TableHead className="text-green-400">Name</TableHead>
                                <TableHead className="text-green-400 hidden sm:table-cell">Home District</TableHead>
                                <TableHead className="text-green-400 hidden md:table-cell">Phone Number</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredStudents.map((student) => (
                                <TableRow
                                    key={student.instituteId}
                                    onClick={() => handleRowClick(student.id)}
                                    className="border-green-500 cursor-pointer hover:bg-green-900"
                                >
                                    <TableCell className="font-mono">{student.instituteId}</TableCell>
                                    <TableCell className="font-mono flex gap-x-2 items-center">{student.name} {student.role === "ADMIN" && (<Shield className='w-4 h-4' />)}</TableCell>
                                    <TableCell className="font-mono hidden sm:table-cell">{student.home_district}</TableCell>
                                    <TableCell className="font-mono hidden md:table-cell">{student.phone}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}