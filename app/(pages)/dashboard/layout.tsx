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
                    window.OneSignalDeferred.push(async function(OneSignal) {
                        await OneSignal.init({
                            appId: "42107061-c920-43f8-82f2-3bc7ee6ebebe",
                            safari_web_id: "web.onesignal.auto.175a5781-a0a7-4966-97e0-0bfa01fcdb1f",
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
