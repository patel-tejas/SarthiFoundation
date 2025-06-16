"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { CreditCard, Building2, Smartphone, FileText, Receipt } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DonatePage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showBankDetails, setShowBankDetails] = useState(false)

  const scrollToBankDetails = () => {
    setShowBankDetails(true)
    setTimeout(() => {
      const element = document.getElementById("bank-details")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-24">
        <div className="container-max">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                HOW TO DONATE TO <span className="gradient-text">SARTHI FOUNDATION</span>
              </h1>

              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  We thank you for choosing Sarthi Foundation, one of the most respected fundraising organizations in
                  India. Our NGO utilizes online fundraising to help the needy.
                </p>
                <p>Please find below the relevant information for making donations to our organization:</p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-07%20162241-5HakJcZuwKtxwH2dJMRqphn1G7pIWT.png"
                  alt="Person holding donation cheque"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Donation Methods Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            ref={ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ways to <span className="gradient-text">Donate</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose your preferred method to make a donation and help us continue our mission
            </p>
          </motion.div>

          {/* Donation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* By Cheque Card */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-200"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
              onClick={scrollToBankDetails}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">BY CHEQUE</h3>
                <p className="text-gray-600 leading-relaxed">
                  You can make fundraising for non-profits fruitful by sending a Cheque/Bank Draft drawn in favour of
                  Sarthi Foundation payable at your nearest branch.
                </p>
              </div>
            </motion.div>

            {/* Online Transfer Card */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-green-200"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10 }}
              onClick={scrollToBankDetails}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">ONLINE TRANSFER</h3>
                <p className="text-gray-600 leading-relaxed">
                  To make online fundraising easy, we offer the option of online transfer to our donors through
                  NEFT/RTGS/IMPS.
                </p>
              </div>
            </motion.div>

            {/* By UPI Card */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-200"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <Link href="/donate/upi">
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Smartphone className="h-10 w-10 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800 mb-4">BY UPI</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Quick and secure donations using UPI. Scan QR code or use our UPI ID for instant transfers through
                    any UPI app.
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Policy Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/donate/policy">
              <motion.button
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="h-5 w-5" />
                Our Donation Policy
              </motion.button>
            </Link>

            <Link href="/donate/tax-exemption">
              <motion.button
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Receipt className="h-5 w-5" />
                Tax Exemption
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bank Details Section */}
      {showBankDetails && (
        <motion.section
          id="bank-details"
          className="section-padding bg-gray-50"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.8 }}
        >
          <div className="container-max">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">BANK DETAILS</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Use the following bank details for cheque payments or online transfers (NEFT/RTGS/IMPS)
              </p>
            </motion.div>

            {/* Punjab National Bank Details */}
            <motion.div
              className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-12 w-12 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Punjab National Bank</h3>
                <p className="text-gray-600">Primary Account for Donations</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <h4 className="font-bold text-gray-900 mb-2">Account Number</h4>
                  <p className="text-xl font-mono text-blue-600">1234567890123456</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <h4 className="font-bold text-gray-900 mb-2">Branch Code</h4>
                  <p className="text-xl font-mono text-blue-600">001234</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <h4 className="font-bold text-gray-900 mb-2">IFSC Code</h4>
                  <p className="text-xl font-mono text-blue-600">PUNB0001234</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-2">Account Name</h4>
                <p className="text-lg text-gray-700">Sarthi Foundation</p>
                <h4 className="font-bold text-gray-900 mb-2 mt-4">Branch Address</h4>
                <p className="text-gray-700">Main Branch, Mumbai, Maharashtra</p>
              </div>
            </motion.div>

            <motion.div
              className="text-center text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg">
                With online fundraising, we are able to connect with citizens across India. It helps us connect with our
                donors who want to learn more about our programs and initiatives.
              </p>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Tax Exemption Footer */}
      <section className="py-16 bg-gray-100">
        <div className="container-max">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-lg text-gray-700 mb-2">
              All the donations to Sarthi Foundation are tax exempted under 80G of the Indian Income Tax Act
            </p>
            <p className="text-lg font-semibold text-gray-900">Charity Id: AAATN4183F</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
