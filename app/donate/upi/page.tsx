"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Smartphone, QrCode, CreditCard, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function UpiDonatePage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Open the Paytm App on your smartphone",
      description: "Launch the Paytm application on your mobile device",
    },
    {
      icon: <QrCode className="h-12 w-12" />,
      title: "Select the Scan & Pay option",
      description: "Choose the scan and pay feature from the main menu",
    },
    {
      icon: <QrCode className="h-12 w-12" />,
      title: "Enter the relevant details and scan the QR",
      description: "Input donation amount and scan our QR code",
    },
    {
      icon: <CreditCard className="h-12 w-12" />,
      title: "Click on Proceed to Pay",
      description: "Complete your donation by proceeding with payment",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-24">
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
              <Link
                href="/donate"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Donation Options
              </Link>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                CONTRIBUTE TO <span className="text-purple-600">SARTHI FOUNDATION</span> THROUGH UPI
              </h1>

              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Technologically updated, Sarthi Foundation (NGO) has made donations easier. Our non-profit
                  organization
                  <span className="font-semibold"> accepts payments online</span> to ensure that nothing stops you from
                  <span className="font-semibold"> contributing for a good cause</span>.
                </p>
                <p>
                  You are just one click away from donating to our non-profit organization (NGO), Sarthi Foundation,
                  through UPI. You will face no hassles, and can input the number or bank account details, or
                  <span className="font-semibold"> scan our QR Code and your donation will be made</span>.
                </p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-white p-8 flex items-center justify-center">
                <Image
                  src="/images/sarthi-upi-qr.png"
                  alt="Sarthi Foundation UPI QR Code Scanner"
                  width={300}
                  height={400}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
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
              STEPS TO CONTRIBUTE TOWARDS DONATION THROUGH UPI
            </h2>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* QR Code */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">FOR RECEIPT</h3>
              <div className="bg-white rounded-3xl p-8 shadow-xl max-w-md mx-auto">
                <Image
                  src="/images/sarthi-upi-qr.png"
                  alt="Sarthi Foundation UPI QR Code for donations"
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Receipt Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900">Receipt & Tax Benefits</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  You can also download and use the QR code for making a donation through any UPI app. For receiving a
                  hard copy of the receipt kindly send us the transaction details/ payment screenshot on
                  <span className="font-semibold text-purple-600"> info@sarthifoundation.org</span>.
                </p>
                <p>
                  Donations made through this QR Code are also eligible for tax benefits under section
                  <span className="font-semibold"> 80G of the Income Tax Act</span>.
                </p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">UPI ID</h4>
                <p className="text-lg font-mono text-purple-600 mb-4">8401908905-1@okbizaxis</p>

                <h4 className="font-bold text-gray-900 mb-2">For Receipt</h4>
                <p className="text-gray-700">Send payment screenshot to: info@sarthifoundation.org</p>
                <h4 className="font-bold text-gray-900 mt-4 mb-2">Contact Us</h4>
                <p className="text-gray-700">Phone: +91 98790 90111</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
