"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import {
  ArrowLeft,
  Building2,
  Target,
  Users,
  TrendingUp,
  Award,
  Heart,
  CheckCircle,
  Mail,
  Phone,
  FileText,
} from "lucide-react"
import Link from "next/link"

export default function CSRPartnershipsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Fulfill CSR Mandates",
      description: "Meet your corporate social responsibility requirements while creating real impact in communities.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Measurable Impact",
      description: "Receive detailed reports and metrics showing the direct impact of your partnership.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Brand Recognition",
      description: "Enhance your corporate reputation through association with meaningful social causes.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Employee Engagement",
      description: "Provide volunteer opportunities and team-building activities for your employees.",
    },
  ]

  const impactStats = [
    { number: "5+", label: "Corporate Partners" },
    { number: "₹2Cr+", label: "CSR Funds Utilized" },
    { number: "10K+", label: "Lives Impacted" },
    { number: "100%", label: "Transparency" },
  ]

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
              <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>

              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    CSR <span className="gradient-text">Partnerships</span>
                  </h1>
                  <p className="text-xl text-blue-600 font-semibold">Creating Impact Together</p>
                </div>
              </div>

              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Partner with Sarthi Foundation to fulfill your Corporate Social Responsibility goals while creating
                  meaningful, measurable impact in communities across India.
                </p>
                <p>
                  Our transparent, results-driven approach ensures your CSR investment directly translates into positive
                  change for thousands of families in need.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Link href="#partnership-tiers">
                  <motion.button
                    className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Building2 className="h-5 w-5" />
                    Explore Partnerships
                  </motion.button>
                </Link> */}

                <Link href="#contact-csr">
                  <motion.button
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="h-5 w-5" />
                    Get in Touch
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/charity-work.png"
                  alt="Corporate partnership and community impact"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Partnership Impact</h3>
                  <p className="text-lg opacity-90">Together, we create lasting change in communities</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</h3>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Partner <span className="gradient-text">With Us?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our CSR partnerships offer more than just compliance - they create meaningful impact and lasting value for
              your organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   

      {/* Contact Section */}
      <section id="contact-csr" className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">Ready to Partner With Us?</h2>
              <p className="text-gray-600 leading-relaxed">
                Let's discuss how we can align your CSR goals with our impactful programs. Our team will work with you
                to create a customized partnership that maximizes both social impact and corporate value.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">csr@sarthifoundation.org</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">CSR Proposal</h4>
                    <p className="text-gray-600">Request detailed partnership proposal</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-3xl p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Partnership Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Tax Benefits</h4>
                    <p className="text-gray-600 text-sm">100% tax exemption under Section 80G</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparency</h4>
                    <p className="text-gray-600 text-sm">Detailed impact reports and fund utilization</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Recognition</h4>
                    <p className="text-gray-600 text-sm">Brand visibility and social media coverage</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Employee Engagement</h4>
                    <p className="text-gray-600 text-sm">Volunteer opportunities and team building</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-max">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your CSR Journey Today</h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join hands with Sarthi Foundation to create meaningful impact while fulfilling your corporate social
              responsibility goals. Together, we can build stronger communities and a better future.
            </p>

            <Link href="mailto:csr@sarthifoundation.org">
              <motion.button
                className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="h-6 w-6" />
                Partner With Us
              </motion.button>
            </Link>

            <p className="text-sm opacity-75 mt-6">All partnerships are eligible for tax benefits under Section 80G</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
