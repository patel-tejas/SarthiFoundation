"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, ArrowLeft, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function DonationPolicyPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-24">
        <div className="container-max">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/donate"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Donation Options
            </Link>

            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <FileText className="h-10 w-10 text-blue-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Donation Policy</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transparency and accountability in every donation we receive
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            ref={ref}
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {/* Introduction */}
              <motion.div
                className="bg-blue-50 rounded-3xl p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Donors</h2>
                <p className="text-gray-700 leading-relaxed">
                  At Sarthi Foundation, we believe in complete transparency and accountability. Every donation we
                  receive is handled with the utmost care and directed towards our mission of serving underprivileged
                  communities. This policy outlines how we manage, utilize, and report on the generous contributions we
                  receive.
                </p>
              </motion.div>

              {/* Policy Sections */}
              <div className="space-y-6">
                <motion.div
                  className="border-l-4 border-blue-500 pl-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1. Donation Acceptance</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      We accept donations through multiple channels: cheque, online transfer (NEFT/RTGS/IMPS), and UPI
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      All donations are voluntary and made without any coercion or pressure
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      We reserve the right to decline donations that may conflict with our mission or values
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="border-l-4 border-green-500 pl-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2. Fund Utilization</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      85% of donations go directly to program activities and beneficiary support
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      10% is allocated for administrative expenses and operational costs
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      5% is reserved for emergency response and future program development
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="border-l-4 border-yellow-500 pl-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3. Transparency & Reporting</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Annual financial reports are published and made available to all stakeholders
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Quarterly impact reports showcase how donations are making a difference
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Donors can request specific information about fund utilization at any time
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="border-l-4 border-red-500 pl-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4. Tax Benefits & Receipts</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      All donations are eligible for tax exemption under Section 80G of the Income Tax Act
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Official receipts are provided within 7 working days of donation confirmation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Digital receipts are sent via email for online donations
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="border-l-4 border-purple-500 pl-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5. Donor Privacy & Communication</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Donor information is kept strictly confidential and never shared with third parties
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Donors can opt-out of communication at any time
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      We respect donor preferences regarding recognition and anonymity
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Contact Information */}
              <motion.div
                className="bg-gray-50 rounded-3xl p-8 mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Questions or Concerns?</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  If you have any questions about our donation policy or would like more information about how your
                  contribution is being used, please don't hesitate to contact us.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-semibold">Email:</span> info@sarthifoundation.org
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span> +91 98765 43210
                  </p>
                  <p>
                    <span className="font-semibold">Address:</span> Sarthi Foundation Office, Mumbai, Maharashtra
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
