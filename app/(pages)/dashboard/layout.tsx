import ProtectedLayout from '@/components/protectedLayout';
import Head from 'next/head';
import Script from 'next/script';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Script
                src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
                strategy="afterInteractive" // Ensure it loads after page hydration
            />
            <Script id="onesignal-init" strategy="afterInteractive">
                {`
                   window.OneSignalDeferred = window.OneSignalDeferred || [];
                    OneSignalDeferred.push(async function(OneSignal) {
                        await OneSignal.init({
                        appId: "bae9c67d-0130-455d-af0a-352dbdab3e2c",
                        safari_web_id: "web.onesignal.auto.28671d66-3da8-4a50-bcc4-1b29e015670b",
                        notifyButton: {
                            enable: true,
                        },
                        });
                    });
                `}
            </Script>
            <ProtectedLayout>
                {children}
            </ProtectedLayout>
        </>
    );
}

export default Layout;
