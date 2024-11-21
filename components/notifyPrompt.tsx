"use client";

import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function NotifyPrompt() {
    useEffect(() => {
        // Ensure this runs only on the client side
        if (typeof window !== "undefined") {
            OneSignal.init({
                appId: "bae9c67d-0130-455d-af0a-352dbdab3e2c",
                safari_web_id: "web.onesignal.auto.28671d66-3da8-4a50-bcc4-1b29e015670b",
                allowLocalhostAsSecureOrigin: true, // For development purposes on localhost
            });

            OneSignal.Slidedown.promptPush(); // Automatically prompt the user
        }
    }, []);
    return (<></>);
}