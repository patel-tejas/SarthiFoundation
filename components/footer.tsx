"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-20 pb-10 lg:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {/* Logo and Description */}
          <motion.div
            className="space-y-3 lg:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-xl lg:text-3xl font-bold hover:text-accent-yellow transition-colors duration-200">
                Sarthi Foundation
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-lg">
              Making a difference in communities worldwide through compassion, dedication, and your generous support.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/SarthiFoundation2001" },
                { icon: Youtube, href: "http://www.youtube.com/@sarthifoundation.official9463" },
                { icon: Instagram, href: "https://www.instagram.com/sarthi_foundation_official?r=nametag" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 lg:w-12 lg:h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-red transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-6 hover:text-accent-yellow transition-colors duration-200">
              Quick Links
            </h3>
            <ul className="space-y-1 lg:space-y-4">
              {[
                { href: "/", label: "Home"},
                { href: "/about", label: "About Us"},
                { href: "/#our-sevas", label: "Our Sevas"},
                { href: "/csr-partnerships", label: "CSR"},
                { href: "/contact", label: "Contact"},
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-yellow transition-colors duration-200 text-sm lg:text-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/#our-sevas">
              <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-6 hover:text-accent-yellow transition-colors duration-200">
                Our Sevas
              </h3>
            </Link>
            <ul className="space-y-1 lg:space-y-4">
              {[
                { href: "/media/daily-food-distribution", label: "Daily Food Distribution" },
                { href: "/media/winter-blanket-drive", label: "Winter Blanket Drive" },
                { href: "/media/summer-buttermilk-program", label: "Summer Buttermilk Program" },
                { href: "/media/festival-sweet-distribution", label: "Festival Sweet Distribution" },
                { href: "/media/educational-support", label: "Educational Support" },
                { href: "/media/widow-support-program", label: "Widow Support Program" },
              ].map((seva, index) => (
                <li key={index}>
                  <Link
                    href={seva.href}
                    className="text-gray-400 hover:text-accent-yellow transition-colors duration-200 text-sm lg:text-lg"
                  >
                    {seva.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-6 hover:text-accent-yellow transition-colors duration-200">
              Contact Us
            </h3>
            <div className="space-y-2 lg:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 lg:h-6 lg:w-6 text-primary-red flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm lg:text-lg hover:text-accent-yellow transition-colors duration-200">
                    09, Shayona Green, S.G.Highway, New Gota, Ahmedabad, Gujarat 382481
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 lg:h-6 lg:w-6 text-primary-red flex-shrink-0" />
                <a
                  href="mailto:info@orphange.org"
                  className="text-gray-400 hover:text-accent-yellow transition-colors duration-200 text-sm lg:text-lg"
                >
                  info@sathifoundation.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 lg:h-6 lg:w-6 text-primary-red flex-shrink-0" />
                <a
                  href="tel:+919825433151"
                  className="text-gray-400 hover:text-accent-yellow transition-colors duration-200 text-sm lg:text-lg"
                >
                  +91 98254 33151
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-16 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-base lg:text-lg hover:text-accent-yellow transition-colors duration-200">
            &copy; {new Date().getFullYear()} Sarthi Foundation
          </p>
          <p className="text-gray-400 text-base lg:text-lg hover:text-accent-yellow transition-colors duration-200">
             All rights reserved.
          </p>
          <p className="text-gray-400 text-base lg:text-lg hover:text-accent-yellow transition-colors duration-200">
              Built with ❤️ for a better world.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
