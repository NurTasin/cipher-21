// app/protected-layout.tsx
import { ReactNode } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import jwt from 'jsonwebtoken';

interface ProtectedLayoutProps {
    children: ReactNode;
    onSuccess?: boolean;
    checkAdmin?: boolean;
    redirectTo?: string;
}

// Validate JWT token with proper typing
const isValidToken = (token: string, checkAdmin: boolean = false): boolean => {
    try {
        const data: any = jwt.verify(token, process.env.JWT_SECRET as string); // Ensure JWT_SECRET is defined in your environment
        if(data.role === 'ADMIN' && checkAdmin) {
            return true;
        }else if(data.role !== 'ADMIN' && checkAdmin) {
            return false;
        }
        return true;
    } catch (error) {
        return false;
    }
};

export default function ProtectedLayout({ children, onSuccess, redirectTo, checkAdmin }: ProtectedLayoutProps) {
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;

    // Redirect if no valid token is found
    if (onSuccess) {
        if(token && isValidToken(token, checkAdmin)) {
            if(redirectTo) {
                redirect(redirectTo);
            }
            else {
                redirect('/dashboard');
            }
        }
    }
    else {
        if (!token || !isValidToken(token, checkAdmin)) {
            if(redirectTo) {
                redirect(redirectTo);
            } else {
                redirect('/login');
            }
        }
    }

    return <>{children}</>;
}
