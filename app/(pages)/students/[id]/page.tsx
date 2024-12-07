'use client';

import { useParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Facebook, Shield } from 'lucide-react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { RingLoader } from 'react-spinners';

interface Student {
  instituteId: string;
  name: string;
  home_district: string;
  profile_pic: string;
  bio: string;
  phone: string;
  email: string;
  role: "STUDENT" | "TEACHER" | "ADMIN";
  socials: {
    whatsapp?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    codeforces?: string;
    github?: string;
  };
}

interface Response<T> {
  error?: boolean;
  err_code?: string;
  msg?: string;
  data?: T;
}

export default function HackerStudentProfile() {
  const params = useParams();
  const studentId = params.id as string;
  const [student, setStudent] = useState<Student | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`/api/student?id=${studentId}`);
      const data: Response<Student> = await response.json();
      if (data.error) {
        console.error(data.err_code, data.msg);
      } else {
        setStudent(data.data);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-[calc(100vh-275px)] md:min-h-[calc(100vh-160px)] flex items-center justify-center bg-black p-4">
      <Card className="w-full max-w-md mx-auto bg-gray-900 border-green-500 border-2">
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-5 rounded shadow-lg">
              <h1 className="text-2xl font-bold flex items-center gap-2">
                Loading <RingLoader size={20} />
              </h1>
            </div>
          </div>
        )}
        {!loading && !student && (
          <div className="text-2xl font-mono text-red-500 p-6">Error 404: Student not found in the system</div>
        )}
        {student && (
          <>
            <CardHeader className="flex flex-col items-center">
              <div className="relative">
                <Avatar>
                  <AvatarImage src={student.profile_pic} alt={student.name} className='rounded-full h-[200px]' />
                  <AvatarFallback className="bg-gray-800 text-green-500">
                    {student.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                {student.role === "ADMIN" && (
                  <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1">
                    <Shield className="w-6 h-6 text-black" aria-label="Admin user" />
                  </div>
                )}
              </div>
              <CardTitle className="mt-4 text-2xl font-bold text-green-500">{student.name}</CardTitle>
              {
                student.bio && <CardDescription className="mt-2 text-sm text-green-400">{student.bio}</CardDescription>
              }
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="w-full max-w-xs">
                <dl className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-green-400 items-center text-left">
                  <dt className="font-semibold">ID:</dt>
                  <dd>{student.instituteId}</dd>
                  <dt className="font-semibold">District:</dt>
                  <dd>{student.home_district}</dd>
                  <dt className="font-semibold">Phone:</dt>
                  <dd>
                    <a href={`tel:${student.phone}`} className="text-green-300 hover:text-green-100 hover:underline">
                      {student.phone}
                    </a>
                  </dd>
                  <dt className="font-semibold">Email:</dt>
                  <dd>
                    <a href={`mailto:${student.email}`} className="text-green-300 hover:text-green-100 hover:underline">
                      {student.email}
                    </a>
                  </dd>
                </dl>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mt-4">
                {student.socials.facebook && (
                  <Link
                    key={student.socials.facebook}
                    href={student.socials.facebook}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-700 border-2 border-green-500 group"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my Facebook profile"
                  >
                    <FaFacebookF className="w-4 h-4 text-green-500 group-hover:text-green-400" />
                  </Link>
                )}
                {student.socials.whatsapp && (
                  <Link
                    key={student.socials.whatsapp}
                    href={`https://wa.me/${student.instituteId=="CE-24059" || student.instituteId=="CE-24060" ? "": "+88"}${student.socials.whatsapp}`}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-700 border-2 border-green-500 group"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my Whatsapp profile"
                  >
                    <FaWhatsapp className="w-4 h-4 text-green-500 group-hover:text-green-400" />
                  </Link>
                )}
                {student.socials.instagram && (
                  <Link
                    key={student.socials.instagram}
                    href={student.socials.instagram}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-700 border-2 border-green-500 group"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my Instagram profile"
                  >
                    <FaInstagram className="w-4 h-4 text-green-500 group-hover:text-green-400" />
                  </Link>
                )}
                {student.socials.linkedin && (
                  <Link
                    key={student.socials.linkedin}
                    href={student.socials.linkedin}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-700 border-2 border-green-500 group"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my LinkedIn profile"
                  >
                    <FaLinkedin className="w-4 h-4 text-green-500 group-hover:text-green-400" />
                  </Link>
                )}
                {student.socials.codeforces && (
                  <Link
                    key={student.socials.codeforces}
                    href={student.socials.codeforces}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-700 border-2 border-green-500 group"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my Codeforces profile"
                  >
                    <SiCodeforces className="w-4 h-4 text-green-500 group-hover:text-green-400" />
                  </Link>
                )}
                {student.socials.github && (
                  <Link
                    key={student.socials.github}
                    href={student.socials.github}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-700 border-2 border-green-500 group"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my GitHub profile"
                  >
                    <FaGithub className="w-4 h-4 text-green-500 group-hover:text-green-400" />
                  </Link>
                )}
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
}
