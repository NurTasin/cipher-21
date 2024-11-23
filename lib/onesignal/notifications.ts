import sendNotification from "./api";

export async function NoticeNotification(title: string, body: string, url: string) {
    return await sendNotification(`[Notice] ${title}`, body, url);
}

export async function ClassCancelNotification(title: string, classCode: string) {
    return await sendNotification(`[Class Cancelled] ${title}`, `Class ${classCode} has been cancelled.`);
}