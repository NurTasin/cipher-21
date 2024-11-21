import ProtectedLayout from '@/components/protectedLayout';
import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import OneSignal from 'react-onesignal';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ProtectedLayout>
            {children}
        </ProtectedLayout>
    );
}

export default Layout;
