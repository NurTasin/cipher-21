'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
import userData, { IUser } from '@/lib/user'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {toast} = useToast();
  const navigate = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the login logic
    console.log('Login attempted with:', { email, password });
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    if(response.ok) {
      toast({
        title: 'Login successful',
        description: 'You are now logged in.',
      });
      const data = await response.json() as IUser;
      userData.set(data);
      window.location.href = '/dashboard';
    }else{
      const message = (await response.json()).error
      toast({
        variant: 'destructive',
        title: 'Login failed',
        description: message || 'Unknown error',
      });
    }
  }

  return (
    <div className="min-h-[calc(100vh-275px)] md:min-h-[calc(100vh-160px)] flex items-center justify-center text-[#20c20e]">
      <Card className="w-[90%] md:w-full max-w-md bg-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-[#20c20e]">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className='text-[#20c20e]'>Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='text-[#20c20e] placeholder:text-[#20c20e] bg-gray-600 border-1 border-gray-200'
                required
                />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className='text-[#20c20e]'>Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='text-[#20c20e] placeholder:text-[#20c20e] bg-gray-600 border-1 border-gray-200'
                required
                />
            </div>
            <Button type="submit" className="w-full text-[#20c20e]">
              Log In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}