"use client";

import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function NotifyPrompt() {
    useEffect(() => {
        // Ensure this runs only on the client side
        if (typeof window !== "undefined") {
            OneSignal.init({
                appId: "073374a7-f4d0-4624-a194-3546b97ac6a5",
                safari_web_id: "web.onesignal.auto.1a1cd43f-104c-4ac2-b069-e07775f1eeb9",
                allowLocalhostAsSecureOrigin: true, // For development purposes on localhost
            });

            OneSignal.Slidedown.promptPush(); // Automatically prompt the user
        }
    }, []);
    return (<></>);
}