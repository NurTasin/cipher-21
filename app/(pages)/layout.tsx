import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Cipher-21 Web Portal",
  description: "The Official Cipher-21 Web Portal",
  openGraph: {
    type: "website",
    url: "https://cipher-21.vercel.app/",
    title: "Cipher-21 Web Portal",
    description: "The Official Cipher-21 Web Portal",
    images: [
      {
        url: "https://cipher-21.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Cipher-21 Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black text-[#149414]`}
      >
        <Navbar />
        <main className="pt-16"> {/* Adjust padding to match navbar height */}
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
