"use client";
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, DollarSign, FileText, XCircle } from 'lucide-react'
import { RingLoader } from 'react-spinners';


interface AdminActivity {
  title: string;
  creator_id: string;
  created_at: Date;
}

interface AdminData {
  totalDeposits: number;
  totalWithdrawals: number;
  currentBalance: number;
  adminAcitivities: AdminActivity[];
}
interface Response<T> {
  error?: boolean;
  err_code?: string;
  msg?: string;
  data?: T;
}
export default function AdminPanel() {
  const [adminData, setAdminData] = useState<AdminData | undefined>(undefined)
  const [showModal, setShowModal] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ; (
      async () => {
        setLoading(true)
        const response = await fetch('/api/admin-data');
        const data: Response<AdminData> = await response.json();
        setAdminData(data.data);
        setLoading(false)
      }
    )();
  }, []);
  const handleAction = (action: string) => {
    setShowModal(action)
  }

  const handleCloseModal = () => {
    setShowModal(null)
  }

  return (
    <div className="min-h-[calc(100vh-275px)] md:min-h-[calc(100vh-160px)] bg-black p-4 sm:p-6 lg:p-8 text-green-400">
      {
        loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-5 rounded shadow-lg">
              <h1 className="text-2xl font-bold flex items-center gap-2">
                Loading <RingLoader size={20} />
              </h1>
            </div>
          </div>
        )
      }
      {!loading && adminData && (
        <>
          <Card className="w-full max-w-4xl mx-auto bg-gray-900 border-green-500">
            <CardHeader className="flex flex-col sm:flex-row justify-between items-center border-b border-green-500">
              <CardTitle className="text-2xl font-bold text-green-400">Cipher-21 Admin Panel</CardTitle>
              <div className="flex items-center mt-4 sm:mt-0">
                <DollarSign className="h-6 w-6 text-green-500 mr-2" />
                <span className="text-xl font-semibold text-green-400">Fund Amount: ৳ {adminData.currentBalance.toLocaleString()}</span>
              </div>
            </CardHeader>
            <CardContent className="bg-gray-900">
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <Button onClick={() => handleAction('cancelClass')} className="h-24 bg-green-700 hover:bg-green-600 text-black">
                  <XCircle className="mr-2 h-5 w-5" /> Cancel Class
                </Button>
                <Button onClick={() => handleAction('createFundEntry')} className="h-24 bg-green-700 hover:bg-green-600 text-black">
                  <DollarSign className="mr-2 h-5 w-5" /> Create Fund Entry
                </Button>
                <Button onClick={() => handleAction('createNotice')} className="h-24 bg-green-700 hover:bg-green-600 text-black">
                  <FileText className="mr-2 h-5 w-5" /> Create Notice
                </Button>
              </div>

              <Card className="bg-gray-800 border-green-500">
                <CardHeader>
                  <CardTitle className="text-lg text-green-400">Recent Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {
                      adminData.adminAcitivities.map((activity, index) => (
                        <li key={index} className="flex items-center text-sm text-green-400">
                          <AlertCircle className="mr-2 h-4 w-4 text-green-500" />
                          {activity.title}
                          {"     "}[{activity.created_at.toLocaleString()}]
                        </li>
                      ))
                    }
                  </ul>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4">
              <Card className="w-full max-w-md bg-gray-900 border-green-500">
                <CardHeader>
                  <CardTitle className="text-green-400">
                    {showModal === 'cancelClass' ? 'Cancel Class' :
                      showModal === 'createFundEntry' ? 'Create Fund Entry' :
                        'Create Notice'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {showModal === 'cancelClass' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="className" className="text-green-400">Class Name</Label>
                        <Input id="className" placeholder="Enter class name" className="bg-gray-800 text-green-400 border-green-500" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cancelReason" className="text-green-400">Reason for Cancellation</Label>
                        <Textarea id="cancelReason" placeholder="Enter reason for cancellation" className="bg-gray-800 text-green-400 border-green-500" />
                      </div>
                    </div>
                  )}
                  {showModal === 'createFundEntry' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="amount" className="text-green-400">Amount</Label>
                        <Input id="amount" type="number" placeholder="Enter amount" className="bg-gray-800 text-green-400 border-green-500" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description" className="text-green-400">Description</Label>
                        <Input id="description" placeholder="Enter description" className="bg-gray-800 text-green-400 border-green-500" />
                      </div>
                    </div>
                  )}
                  {showModal === 'createNotice' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="noticeTitle" className="text-green-400">Notice Title</Label>
                        <Input id="noticeTitle" placeholder="Enter notice title" className="bg-gray-800 text-green-400 border-green-500" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="noticeContent" className="text-green-400">Notice Content</Label>
                        <Textarea id="noticeContent" placeholder="Enter notice content" className="bg-gray-800 text-green-400 border-green-500" />
                      </div>
                    </div>
                  )}
                  <div className="flex justify-end space-x-2 mt-4">
                    <Button variant="outline" onClick={handleCloseModal} className="border-green-500 text-green-400 hover:bg-green-700 hover:text-black">Cancel</Button>
                    <Button onClick={handleCloseModal} className="bg-green-700 hover:bg-green-600 text-black">Submit</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </>
      )}
    </div>
  )
}