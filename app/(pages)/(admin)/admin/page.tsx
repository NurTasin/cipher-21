"use client";
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, DollarSign, FileText, XCircle } from 'lucide-react'
import { RingLoader } from 'react-spinners';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { noticeCategoriesList } from '@/lib/cat2icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';


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

interface NoticeModal {
  title?: string;
  description?: string;
  category?: string;
}

interface FundModal {
  title?: string;
  type?: string;
  amount?: number;
}

export default function AdminPanel() {
  const [adminData, setAdminData] = useState<AdminData | undefined>(undefined)
  const [showModal, setShowModal] = useState<string | null>(null)
  const [noticeModalShow, setNoticeModalShow] = useState(false)
  const [noticeModalData, setNoticeModalData] = useState<NoticeModal>({
    category: undefined,
    title: undefined,
    description: undefined
  })
  const [fundModalShow, setFundModalShow] = useState(false)
  const [fundModalData, setFundModalData] = useState<FundModal>({
    title: undefined,
    type: undefined,
    amount: undefined
  })
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

  const handleNoticeModalSubmit = async () => {
    setLoading(true)
    const response = await fetch('/api/notice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: noticeModalData.title,
        description: noticeModalData.description,
        icon: noticeModalData.category
      })
    });
    if (response.status === 200) {
      setNoticeModalShow(false);
      toast({
        title: 'Notice Created',
        description: 'Notice created successfully.',
      })
    } else {
      const message = (await response.json()).error
      toast({
        variant: 'destructive',
        title: 'Notice Creation Failed',
        description: message || 'Unknown error',
      });
    }
    setLoading(false)
  }

  const handleFundModalSubmit = async () => {
    if(!fundModalData.title || !fundModalData.amount || !fundModalData.type) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive'
      });
      return;
    }
    setLoading(true)
    const response = await fetch('/api/fund-entry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `Fund created on ${new Date().toLocaleDateString()}`,
        description: fundModalData.title,
        type: fundModalData.type,
        amount: fundModalData.amount
      })
    });
    if(response.ok) {
      setShowModal(null);
      toast({
        title: 'Fund entry created',
        description: 'Fund entry created successfully',
      });
    }else{
      toast({
        title: 'Error',
        description: 'Error creating fund entry',
        variant: 'destructive'
      });
    }
    setLoading(false);
    console.log(fundModalData);
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
                {/* Fund Entry Modal */}
                <Dialog open={fundModalShow} onOpenChange={setFundModalShow}>
                  <DialogTrigger>
                    <Button className="h-24 bg-green-700 hover:bg-green-600 text-black px-12">
                      <FileText className="mr-2 h-5 w-5" /> Create Fund Entry
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-gray-900 border-green-500">
                    <DialogHeader>
                      <DialogTitle className="text-green-500">Create a New Fund Entry</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-2">
                      <label htmlFor="title" className="text-sm font-medium text-green-500">
                        Title
                      </label>
                      <Input
                        id="title"
                        placeholder="Enter notice title"
                        className="bg-gray-800 border-green-500 text-green-500 placeholder-green-700"
                        onChange={(e) => {
                          setFundModalData({
                            ...fundModalData,
                            title: e.target.value
                          })
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="type" className="text-sm font-medium text-green-500">
                        Type
                      </label>
                      <Select
                        onValueChange={(val) => {
                          setFundModalData({
                            ...fundModalData,
                            type: val
                          })
                        }}
                      >
                        <SelectTrigger id="type" className="bg-gray-800 border-green-500 text-green-500">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-green-500">
                          <SelectItem value={"DEPOSIT"} className="text-green-500">{"Deposit"}</SelectItem>
                          <SelectItem value={"WITHDRAW"} className="text-green-500">{"Expense"}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="amount" className="text-sm font-medium text-green-500">
                        Amount
                      </label>
                        <Input id="amount" type="number" placeholder="Enter amount" className="bg-gray-800 text-green-400 border-green-500"
                          onChange={(e) => {
                            setFundModalData({
                              ...fundModalData,
                              amount: parseFloat(e.target.value)
                            })
                          }}
                        />
                    </div>
                    <div className="flex justify-end space-x-2 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setFundModalShow(false)}
                        className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-green-500 text-black hover:bg-green-600"
                        onClick={() => {
                          handleFundModalSubmit()
                        }}
                      >
                        Submit
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Notice Modal */}
                <Dialog open={noticeModalShow} onOpenChange={setNoticeModalShow}>
                  <DialogTrigger>
                    <Button className="h-24 bg-green-700 hover:bg-green-600 text-black px-12">
                      <FileText className="mr-2 h-5 w-5" /> Create Notice
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-gray-900 border-green-500">
                    <DialogHeader>
                      <DialogTitle className="text-green-500">Create a New Notice</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-2">
                      <label htmlFor="title" className="text-sm font-medium text-green-500">
                        Title
                      </label>
                      <Input
                        id="title"
                        placeholder="Enter notice title"
                        className="bg-gray-800 border-green-500 text-green-500 placeholder-green-700"
                        onChange={(e) => {
                          setNoticeModalData({
                            ...noticeModalData,
                            title: e.target.value
                          })
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="description" className="text-sm font-medium text-green-500">
                        Description
                      </label>
                      <Textarea
                        id="description"
                        placeholder="Enter notice description"
                        className="bg-gray-800 border-green-500 text-green-500 placeholder-green-700"
                        onChange={(e) => {
                          setNoticeModalData({
                            ...noticeModalData,
                            description: e.target.value
                          })
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="category" className="text-sm font-medium text-green-500">
                        Category
                      </label>
                      <Select
                        onValueChange={(value) => {
                          setNoticeModalData({
                            ...noticeModalData,
                            category: value
                          })
                        }}
                      >
                        <SelectTrigger id="category" className="bg-gray-800 border-green-500 text-green-500">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-green-500">
                          {
                            noticeCategoriesList.map((category, index) => (
                              <SelectItem key={index} value={category[1]} className="text-green-500">{category[0]}</SelectItem>
                            ))
                          }
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex justify-end space-x-2 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setNoticeModalShow(false)}
                        className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-green-500 text-black hover:bg-green-600"
                        onClick={() => {
                          handleNoticeModalSubmit()
                        }}
                      >
                        Submit
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
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
        </>
      )}
    </div>
  )
}