"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Receipt, ArrowLeft, Calculator, FileCheck, Info } from "lucide-react"
import Link from "next/link"

export default function TaxExemptionPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-24">
        <div className="container-max">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/donate"
              className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors mb-8"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Donation Options
            </Link>

            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Receipt className="h-10 w-10 text-green-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tax <span className="gradient-text">Exemption</span> Benefits
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Save tax while supporting a noble cause under Section 80G of the Income Tax Act
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tax Exemption Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            ref={ref}
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Main Information */}
            <motion.div
              className="bg-green-50 rounded-3xl p-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">80G Tax Exemption Certificate</h2>
                <p className="text-lg text-gray-700">
                  Sarthi Foundation is registered under Section 80G of the Income Tax Act, 1961
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Registration Number</h3>
                  <p className="text-2xl font-mono text-green-600">AAATN4183F</p>
                </div>
                <div className="bg-white rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Exemption Percentage</h3>
                  <p className="text-2xl font-bold text-green-600">50% of Donation Amount</p>
                </div>
              </div>
            </motion.div>

            {/* How It Works */}
            <div className="space-y-8">
              <motion.div
                className="border-l-4 border-green-500 pl-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <Calculator className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">How Tax Exemption Works</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Under Section 80G, you can claim a deduction of 50% of the donated amount from your taxable income.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Example Calculation:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Donation Amount: ₹10,000</li>
                      <li>• Eligible Deduction (50%): ₹5,000</li>
                      <li>• Tax Saved (30% tax bracket): ₹1,500</li>
                      <li>• Effective Cost of Donation: ₹8,500</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="border-l-4 border-blue-500 pl-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center mb-4">
                  <FileCheck className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Required Documents</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Official donation receipt from Sarthi Foundation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Copy of 80G registration certificate (available on request)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Bank statement or transaction proof
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="border-l-4 border-yellow-500 pl-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <Info className="h-6 w-6 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Important Guidelines</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Donations must be made through banking channels (no cash donations eligible)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Maximum deduction limit is 10% of adjusted gross total income
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Receipts must be obtained in the same financial year as the donation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Keep all documents safe for at least 6 years for tax audit purposes
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Receipt Process */}
            <motion.div
              className="bg-blue-50 rounded-3xl p-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Get Your Tax Receipt</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    1
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Make Donation</h4>
                  <p className="text-gray-600 text-sm">Complete your donation through any of our accepted methods</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    2
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Send Details</h4>
                  <p className="text-gray-600 text-sm">Email transaction proof to info@sarthifoundation.org</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    3
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Receive Receipt</h4>
                  <p className="text-gray-600 text-sm">Get your 80G receipt within 7 working days</p>
                </div>
              </div>
            </motion.div>

            {/* Contact for Receipt */}
            <motion.div
              className="bg-gray-50 rounded-3xl p-8 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help with Tax Receipts?</h3>
              <p className="text-gray-700 mb-4">
                Our team is here to assist you with any questions regarding tax exemption benefits or receipt
                generation.
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Email:</span> info@sarthifoundation.org
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +91 98765 43210
                </p>
                <p>
                  <span className="font-semibold">Subject Line:</span> "Tax Receipt Request - [Your Name]"
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
