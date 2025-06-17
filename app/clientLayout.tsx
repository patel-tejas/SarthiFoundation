"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import type React from "react"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppChat from "@/components/whatsapp-chat"

const montserrat = Montserrat({ subsets: ["latin"] })

function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
        {/* <WhatsAppChat /> */}
      </body>
    </html>
  )
}
