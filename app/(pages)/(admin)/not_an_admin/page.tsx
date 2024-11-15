"use client";
import { XOctagon } from 'lucide-react'

import Link from "next/link";


export default function Component() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-500 p-4">
      <div className="text-center space-y-6">
        <XOctagon className="mx-auto h-24 w-24 text-red-500" />
        <h1 className="text-4xl md:text-6xl font-bold glitch-effect" aria-label="Unauthorized">
          <span aria-hidden="true" className="glitch-effect__item">Unauthorized</span>
          Unauthorized
          <span aria-hidden="true" className="glitch-effect__item">Unauthorized</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-md mx-auto">
          You have to be ADMIN to access this page
        </p>
        <div className="border-t border-green-700 pt-6">
          <p className="text-sm mb-4">Error Code: 401</p>
          <Link 
            href="/dashboard"
            className="bg-green-300 border-green-500 text-gray-950 hover:bg-green-500 py-3 px-2 rounded-md"
          >
            Go Home
          </Link>
        </div>
      </div>
      <style jsx>{`
        .glitch-effect {
          position: relative;
          display: inline-block;
        }
        .glitch-effect__item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          clip: rect(0, 900px, 0, 0);
        }
        .glitch-effect__item:first-child {
          left: 2px;
          text-shadow: -4px 0 red;
          animation: glitch-anim 1.5s infinite linear alternate-reverse;
        }
        .glitch-effect__item:last-child {
          left: -2px;
          text-shadow: 4px 0 blue;
          animation: glitch-anim 1s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% {
            clip: rect(64px, 9999px, 98px, 0);
          }
          5% {
            clip: rect(30px, 9999px, 16px, 0);
          }
          10% {
            clip: rect(80px, 9999px, 130px, 0);
          }
          15% {
            clip: rect(15px, 9999px, 72px, 0);
          }
          20% {
            clip: rect(50px, 9999px, 180px, 0);
          }
          25% {
            clip: rect(2px, 9999px, 97px, 0);
          }
          30% {
            clip: rect(48px, 9999px, 194px, 0);
          }
          35% {
            clip: rect(24px, 9999px, 45px, 0);
          }
          40% {
            clip: rect(75px, 9999px, 67px, 0);
          }
          45% {
            clip: rect(34px, 9999px, 130px, 0);
          }
          50% {
            clip: rect(90px, 9999px, 74px, 0);
          }
          55% {
            clip: rect(1px, 9999px, 117px, 0);
          }
          60% {
            clip: rect(82px, 9999px, 33px, 0);
          }
          65% {
            clip: rect(54px, 9999px, 86px, 0);
          }
          70% {
            clip: rect(69px, 9999px, 151px, 0);
          }
          75% {
            clip: rect(65px, 9999px, 38px, 0);
          }
          80% {
            clip: rect(32px, 9999px, 12px, 0);
          }
          85% {
            clip: rect(47px, 9999px, 78px, 0);
          }
          90% {
            clip: rect(83px, 9999px, 38px, 0);
          }
          95% {
            clip: rect(21px, 9999px, 93px, 0);
          }
          100% {
            clip: rect(38px, 9999px, 128px, 0);
          }
        }
      `}</style>
    </div>
  )
}