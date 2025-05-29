"use client"

import Link from "next/link"
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container-max py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-3xl font-bold">Sarthi Foundation</span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-lg">
              Making a difference in communities worldwide through compassion, dedication, and your generous support.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-red transition-all duration-300"
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
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/programs", label: "Our Programs" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-yellow transition-colors duration-200 text-lg"
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
            <h3 className="text-xl font-bold mb-6">Our Programs</h3>
            <ul className="space-y-4">
              {[
                "Educational Bursaries",
                "Income Generation",
                "Healthcare Access",
                "Clean Water Projects",
                "Community Development",
              ].map((program, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-accent-yellow transition-colors duration-200 text-lg">
                    {program}
                  </a>
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
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary-red flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-lg">123 Charity Lane</p>
                  <p className="text-gray-400 text-lg">New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary-red flex-shrink-0" />
                <a
                  href="mailto:info@orphange.org"
                  className="text-gray-400 hover:text-accent-yellow transition-colors duration-200 text-lg"
                >
                  info@orphange.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary-red flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-accent-yellow transition-colors duration-200 text-lg"
                >
                  (123) 456-7890
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
          <p className="text-gray-400 text-lg">
            &copy; {new Date().getFullYear()} Orphange. All rights reserved. Built with ❤️ for a better world.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
