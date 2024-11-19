import { AlertCircle, Clock, ShieldAlert, User } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import db from '@/lib/db';
import NoticeIcon from '@/components/noticeIcon';
import {noticeCategories} from '@/lib/cat2icon';

export default async function SingleNoticePage({ params }: { params: { id: string } }) {
    const noticeId = params.id;
    console.log(noticeId);
    const notice = await db.notice.findUnique({
        where: {
            id: parseInt(noticeId),
        },
        select:{
            title: true,
            description: true,
            icon: true,
            created_by: {
                select: {
                    id: true,
                    name: true,
                }
            },
            created_at: true,
        }
    });
    if (!notice) {
        return (
            <div className="min-h-[calc(100vh-275px)] md:min-h-[calc(100vh-160px)] bg-black p-4 flex items-center justify-center">
                <Card className="w-full max-w-2xl bg-gray-900 text-green-400 border-green-500">
                    <CardHeader className="border-b border-green-500">
                        <CardTitle className="text-2xl md:text-3xl font-mono flex items-center gap-2 text-red-600">
                            <ShieldAlert className="h-6 w-6 md:h-8 md:w-8" />
                            <span>Error</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="mt-4 space-y-4">
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold mb-2 font-mono text-red-600">Notice Not Found</h2>
                            <p className="text-sm md:text-base font-mono leading-relaxed text-red-600">
                                We're sorry, but the notice you are looking for cannot be found. Please check the URL or contact the administrator if you believe this is an error.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
    return (
        <div className="min-h-[calc(100vh-190px)] bg-black p-4 flex items-center justify-center">
      <Card className="w-full max-w-2xl bg-gray-900 text-green-400 border-green-500">
        <CardHeader className="border-b border-green-500">
          <CardTitle className="text-2xl md:text-3xl font-mono flex items-center gap-2">
            <NoticeIcon icon={notice.icon} />
            <span>{noticeCategories[notice.icon].display} Notice</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-4 space-y-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2 font-mono">{notice.title}</h2>
            <p className="text-sm md:text-base font-mono leading-relaxed">
              {notice.description}
            </p>
          </div>
          <div className="pt-4 border-t border-green-500/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs md:text-sm font-mono text-green-300">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span className='flex gap-x-2 items-center'>Author: {notice.created_by.name} 
                {
                    ['be77a62b-0ee2-4f8a-a754-0bfbfa06b714'].includes(notice.created_by.id) && (
                        <img src='/imgs/cipher-21-verified.svg' className="h-4 w-4 rounded-full" alt="Verified" />
                    )
                }
            </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Published: {notice.created_at.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    )
}