"use client";

import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function NotifyPrompt() {
    useEffect(() => {
        // Ensure this runs only on the client side
        if (typeof window !== "undefined") {
            OneSignal.init({
                appId: "fe41eacd-a963-4bee-81a0-64209815b20a",
                safari_web_id: "web.onesignal.auto.313afc18-65a3-4cb5-bd8a-eabd69c6e4d8",
                allowLocalhostAsSecureOrigin: true, // For development purposes on localhost
            });

            OneSignal.Slidedown.promptPush(); // Automatically prompt the user
        }
    }, []);
    return (<></>);
}