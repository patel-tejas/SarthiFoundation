"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Home, Heart, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CausesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className=" bg-gray-50 py-10 md:py-20 ">
      <div className="px-4 md:container-max">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-red-500 font-semibold text-lg mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            OUR OLD AGE HOME
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A <span className="gradient-text">Home</span> for Our Elders
          </motion.h2>

          <motion.p
            className="text-gray-600 text-sm md:text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Providing a safe, comfortable, and caring environment for senior citizens who need support and companionship
            in their golden years.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/sanatan-old-age-home.jpg"
                alt="Sanatan Old Age Home - Modern facility for senior citizens"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>

              {/* Floating Info Card */}
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-8 h-8  md:w-12 md:h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <Home className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900">Sanatan Old Age Home</h3>
              </div>

              <p className="text-gray-600 text-sm lg:text-lg leading-relaxed mb-6">
                At Sarthi Foundation, we believe that our senior citizens deserve dignity, care, and comfort in their
                golden years. Our old age home provides a warm, welcoming environment where elderly individuals can live
                peacefully without any financial burden.
              </p>

              <p className="text-gray-600 text-sm lg:text-lg leading-relaxed mb-8">
                At the heart of our mission lies a deep respect for the elderly — we believe that growing old should not mean growing alone. While we provide a free and welcoming old age home for those in need, we firmly do not promote institutional living for senior citizens as the first option.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">No Fees or Charges</h4>
                  <p className="text-gray-600 text-sm">Completely free accommodation and care</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">24/7 Care</h4>
                  <p className="text-gray-600 text-sm">Round-the-clock support and assistance</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Home className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Comfortable Living</h4>
                  <p className="text-gray-600 text-sm">Clean, safe, and homely environment</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Medical Support</h4>
                  <p className="text-gray-600 text-sm">Regular health checkups </p>
                </div>
              </div>
            </motion.div>

            {/* Know More Button */}
            <motion.div
              className="flex flex-row gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Link href="/donate">
                <motion.button
                  className="bg-red-500 text-white px-4 py-2 lg:px-8 lg:py-4 rounded-full font-semibold sm:text-sm lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="h-3 w-3 lg:h-5 lg:w-5" />
                  <span className="text-sm">Support Us</span>
                </motion.button>
              </Link>

              <Link href="/old-age-home">
                <motion.button
                  className="border-[1.5px] border-red-500 text-red-500 px-4 py-2 lg:px-8 lg:py-4 rounded-full font-semibold text-lg hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="h-3 w-3 lg:h-5 lg:w-5" />
                  <span className="text-sm">Know More</span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
