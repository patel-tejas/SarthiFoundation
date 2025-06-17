"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showMediaDropdown, setShowMediaDropdown] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle scrolling to section after navigation
  useEffect(() => {
    const hash = window.location.hash
    if (hash && pathname === "/") {
      const sectionId = hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 300)
    }
  }, [pathname])

  const mediaItems = [
   
    { href: "/media/covid-relief-services", label: "COVID-19 Relief Services" },
    { href: "/media/newspaper-articles", label: "Newspaper Articles" },
  ]

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/#our-sevas", label: "Our Sevas" },
    { href: "/csr-partnerships", label: "CSR" },
    { href: "/contact", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2)

      // If we're already on the home page, just scroll
      if (pathname === "/") {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        // Navigate to home with hash - fix the URL construction
        router.push(href) // This will be "/#our-sevas"
      }
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-2 md:container-max">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-16 md:w-12 md:h-12 rounded-lg overflow-hidden">
              <Image
                src="/images/logo.jpg"
                alt="Sarthi Foundation Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-lg md:text-2xl font-bold text-gray-900">Sarthi Foundation</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  if (item.href.startsWith("/#")) {
                    handleNavClick(item.href)
                  } else {
                    router.push(item.href)
                  }
                }}
                className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}

            {/* Media Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowMediaDropdown(true)}
              onMouseLeave={() => setShowMediaDropdown(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium">
                Media
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              <AnimatePresence>
                {showMediaDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  >
                    {mediaItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/donate"
              className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600 transition-colors duration-200"
            >
              DONATE NOW
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
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => {
                      setIsOpen(false)
                      if (item.href.startsWith("/#")) {
                        handleNavClick(item.href)
                      } else {
                        router.push(item.href)
                      }
                    }}
                    className="block w-full text-left text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </button>
                ))}

                {/* Mobile Media Menu */}
                <div className="space-y-2">
                  <p className="text-gray-900 font-semibold">Media</p>
                  {mediaItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block pl-4 text-gray-600 hover:text-red-500 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/donate"
                  className="inline-block bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  DONATE NOW
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
