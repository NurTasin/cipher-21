"use client";
import { useEffect, useState } from "react";
import { getToken } from "firebase/messaging";
import { messaging } from "@/lib/firebase";

export default function Home() {
  useEffect(() => {
    ;(async ()=>{
      if(localStorage.msgToken){
        console.log("Token already exists");
        return;
      }
      const notificationAccess = await Notification.requestPermission();
      if(notificationAccess === "granted"){
        console.log("Notification permission granted");
        const token = await getToken(messaging, { vapidKey: process.env.VAPID });
        console.log(token);
        localStorage.msgToken = token;
      }else{
        alert("Notification permission not granted. You might not get important notifications.");
      }
    })()
  },[]);
  return (
    <div className="mx-auto">
      Hello
    </div>
  );
}
