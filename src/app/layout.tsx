// 'use client'
 import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/provider";
// import NavBar from "@/components/header/navBar";
import Footer from "@/components/footer/page";
import ToastProvider from "@/components/toast/page";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: ' GenZ Global',
  description: 'Your path to studying in Abroad.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon/favicon.ico',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
           <ToastProvider />
        <Providers>
          {/* <NavBar /> */}

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
