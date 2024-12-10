"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Shield, LucideShield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import user, { IUser } from "@/lib/user"
import { useRouter } from "next/navigation"

export default function Navbar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState<IUser | null>(null);
    useEffect(() => {
        const userData = user.get();
        if(userData){
            setIsLoggedIn(true);
            setUserData(userData);
        }
    }, [])
    const navItems = [
        { name: "Routine", href: "/routine" },
        { name: "Notices", href: "/notices" },
        { name: "Students", href: "/students" },
        { name: "Funds", href: "/funds" },
        { name: "Resources", href: "/resources/root" },
    ]

    return (
        <nav className="bg-gray-900/40 backdrop-blur-md text-green-400 p-4 shadow-lg fixed w-full z-50 mb-[160px]">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/dashboard" className="text-2xl md:text-3xl font-bold tracking-tighter">
                    CIP<span className="text-red-500">H</span>ER&apos;21
                </Link>

                {/* Desktop Navigation */}
                {
                    isLoggedIn && (

                        <div className="hidden md:flex space-x-4 items-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="hover:text-green-300 transition-colors hover:animate-bounce"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="flex items-center space-x-2">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={userData?.profile_pic || "/img/user-default.png"} alt="User" />
                                            <AvatarFallback>{userData?.name?.split(" ").map((name) => name[0]).join("")}</AvatarFallback>
                                        </Avatar>
                                        <span>{userData?.name} {userData?.role === "ADMIN" && <LucideShield />}</span>
                                        <ChevronDown className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-gray-800 text-green-400 border-green-500">
                                    <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">
                                        <Link href={'/dashboard/profile'} >Profile</Link>
                                    </DropdownMenuItem>
                                    { userData?.role === "ADMIN" && <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer" >
                                        <Link href="/admin">Admin Panel</Link>
                                    </DropdownMenuItem>}
                                    <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer" onClick={async () => {
                                        const response = await fetch("/api/auth/logout");
                                        if (response.ok) {
                                            user.clear();
                                            window.location.href = "/login";
                                        }
                                    }}>
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    )
                }

                {/* Mobile Navigation */}
                {
                    isLoggedIn && (

                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="md:hidden"
                                    aria-label={isOpen ? "Close Menu" : "Open Menu"}
                                >
                                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="bg-gray-900/90 backdrop-blur-md text-green-400 w-[300px] sm:w-[400px]"
                            >
                                <nav className="flex flex-col space-y-4">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="text-lg hover:text-green-300 transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}

                                    <div className="pt-4 border-t border-gray-700">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src={userData?.profile_pic || "/img/user-default.png"} alt="User" />
                                                <AvatarFallback>{userData?.name?.split(" ").map((name) => name[0]).join("")}</AvatarFallback>
                                            </Avatar>
                                            <span>{userData?.name} {userData?.role === "ADMIN" && <Shield />}</span>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            className="w-full justify-start hover:bg-gray-800"
                                            onClick={() => {router.push("/dashboard/profile"); setIsOpen(false)}}
                                        >
                                            Profile
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            className="w-full justify-start hover:bg-gray-800"
                                        >
                                            Settings
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            className="w-full justify-start hover:bg-gray-800"
                                            onClick={async () => {
                                                const response = await fetch("/api/auth/logout");
                                                if (response.ok) {
                                                    user.clear();
                                                    window.location.href = "/login";
                                                }
                                            }}
                                        >
                                            Logout
                                        </Button>
                                    </div>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    )
                }
            </div>
        </nav>
    )
}