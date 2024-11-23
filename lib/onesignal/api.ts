export default async function sendNotification(title: string, body: string, link?: string) {
    const res = await fetch(
        `https://api.onesignal.com/notifications`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${process.env.ONE_SIGNAL_API_KEY}`,
            },
            cache: "no-cache",
            body: JSON.stringify({
                app_id: process.env.ONE_SIGNAL_APP_ID,
                headings: {
                    en: title,
                },
                contents: {
                    en: body,
                },
                included_segments: ["All"],
                web_url: link || "https://cipher-21.vercel.app/",
                chrome_web_image: "https://cipher-21.vercel.app/android-chrome-512x512.png",
            }),
        }
    );
    return res.status == 200;
}