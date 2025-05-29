"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { QrCode, Smartphone, Copy, Check, CreditCard, Shield } from "lucide-react"
import Image from "next/image"

export default function UpiPaymentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [copiedUpi, setCopiedUpi] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState("100")

  const upiId = "orphange@paytm"
  const predefinedAmounts = ["50", "100", "250", "500", "1000"]

  const copyUpiId = async () => {
    try {
      await navigator.clipboard.writeText(upiId)
      setCopiedUpi(true)
      setTimeout(() => setCopiedUpi(false), 2000)
    } catch (err) {
      console.error("Failed to copy UPI ID:", err)
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-dark-green font-semibold text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            SUPPORT OUR MISSION
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Donate via <span className="gradient-text">UPI</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Make a quick and secure donation using UPI. Your contribution helps us continue our mission of empowering
            communities worldwide.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* QR Code Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 mb-8 relative overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-red to-accent-yellow"></div>

              <div className="mb-6">
                <QrCode className="h-12 w-12 text-primary-red mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Scan QR Code</h3>
                <p className="text-gray-600">Use any UPI app to scan and donate</p>
              </div>

              {/* QR Code Placeholder */}
              <motion.div
                className="bg-gray-100 rounded-2xl p-8 mb-6 interactive-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-48 h-48 mx-auto bg-white rounded-xl shadow-inner flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="UPI QR Code"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </motion.div>

              {/* UPI ID */}
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <p className="text-sm text-gray-600 mb-2">UPI ID:</p>
                <div className="flex items-center justify-between bg-white rounded-lg p-3 border">
                  <span className="font-mono text-lg font-semibold text-gray-900">{upiId}</span>
                  <motion.button
                    onClick={copyUpiId}
                    className="ml-2 p-2 text-primary-red hover:bg-red-50 rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {copiedUpi ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                  </motion.button>
                </div>
                {copiedUpi && (
                  <motion.p
                    className="text-green-600 text-sm mt-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    UPI ID copied to clipboard!
                  </motion.p>
                )}
              </div>

              {/* Security Badges */}
              <div className="flex items-center justify-center space-x-4 text-gray-500 text-sm">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CreditCard className="h-4 w-4" />
                  <span>UPI Protected</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Amount Selection & Instructions */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Quick Amount Selection */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Smartphone className="h-6 w-6 text-primary-red mr-3" />
                Quick Donate
              </h3>

              <p className="text-gray-600 mb-6">Select an amount or enter your own:</p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {predefinedAmounts.map((amount) => (
                  <motion.button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`p-4 rounded-xl font-semibold transition-all duration-200 ${
                      selectedAmount === amount
                        ? "bg-primary-red text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ₹{amount}
                  </motion.button>
                ))}
              </div>

              <div className="relative mb-6">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">₹</span>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={selectedAmount}
                  onChange={(e) => setSelectedAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-accent-yellow focus:outline-none transition-colors duration-200 text-lg"
                  min="1"
                />
              </div>

              <motion.div
                className="bg-gradient-to-r from-primary-red to-red-600 text-white p-4 rounded-xl text-center"
                whileHover={{ scale: 1.02 }}
              >
                <p className="font-semibold">Selected Amount: ₹{selectedAmount}</p>
                <p className="text-sm opacity-90 mt-1">Scan QR code to proceed</p>
              </motion.div>
            </div>

            {/* Instructions */}
            <motion.div
              className="bg-gradient-to-br from-accent-yellow/10 to-yellow-50 rounded-3xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4">How to Donate:</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <p className="text-gray-700">Open any UPI app (PhonePe, Paytm, GPay, etc.)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <p className="text-gray-700">Scan the QR code or use our UPI ID</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <p className="text-gray-700">Enter the amount and complete the payment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <p className="text-gray-700">Your donation helps change lives!</p>
                </div>
              </div>
            </motion.div>

            {/* Supported Apps */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-gray-600 mb-4">Supported UPI Apps:</p>
              <div className="flex justify-center space-x-4">
                {["PhonePe", "Paytm", "GPay", "BHIM"].map((app) => (
                  <div key={app} className="bg-white rounded-lg px-4 py-2 shadow-sm border">
                    <span className="text-sm font-medium text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
