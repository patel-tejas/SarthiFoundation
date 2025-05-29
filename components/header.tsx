"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import logo from "@/public/images/sarthi_logo.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Our Programs" },
    { href: "/teams", label: "Teams" },
    { href: "/volunteer", label: "Become a Volunteer" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-gray-100 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-[70px] md:h-[80px]">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Sarthi Foundation Logo"
              width={80}
              height={80}
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <span className="text-[18px] md:text-xl font-bold text-gray-900">Sarthi Foundation</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-red transition-colors duration-200 font-medium text-[15px]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/volunteer"
              className="bg-accent-yellow text-gray-900 px-5 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-colors duration-200 text-sm"
            >
              VOLUNTEER
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-4 px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-gray-700 hover:text-primary-red transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2">
                  <Link
                    href="/volunteer"
                    className="inline-block bg-accent-yellow text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-colors duration-200 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    VOLUNTEER
                  </Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}