"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Award, Star, TrendingUp } from "lucide-react"

export default function AwardsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center mb-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
              <Award className="h-8 w-8 text-yellow-500" />
            </div>
          </motion.div>

          <motion.p
            className="text-red-500 font-semibold text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            RECOGNITION & ACHIEVEMENTS
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Awards & <span className="gradient-text">Media</span> Recognition
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Our commitment to community service has been recognized by prestigious organizations, validating our impact
            and dedication to creating positive change.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Times CSR Award Card */}
          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SAVE_20211005_051950.jpg-A6kTlPoZwgsL0QG5fUaM2NxAKB858I.jpeg"
                alt="Times CSR Awards 2021 Gujarat - Certificate of Appreciation for Sarthi Foundation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full py-1 px-3 flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span className="text-sm font-semibold">2021</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Times CSR Awards</h3>
              </div>

              <p className="text-gray-600 mb-4">
                Felicitated by Times Group for outstanding contribution towards society in the field of "Providing food
                to the needy people" at the Times CSR Awards 2021 Gujarat.
              </p>

              <div className="flex items-center text-sm text-gray-500">
                <span className="flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  Times Group
                </span>
                <span className="mx-2">•</span>
                <span>Gujarat, 2021</span>
              </div>
            </div>
          </motion.div>

          {/* BounceBack Bharat Award Card */}
          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SAVE_20210718_141106.jpg-4wuFqCMZHYA7nYItldqZv8QdsC2Rjr.jpeg"
                alt="BounceBack Bharat Awards - Recognition for Sarthi Foundation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full py-1 px-3 flex items-center">
                <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                <span className="text-sm font-semibold">2021</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">BounceBack Bharat Awards</h3>
              </div>

              <p className="text-gray-600 mb-4">
                Recognized for exceptional resilience and community service during challenging times by FM 95 Radio One
                at the prestigious BounceBack Bharat Awards.
              </p>

              <div className="flex items-center text-sm text-gray-500">
                <span className="flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  FM 95 Radio One
                </span>
                <span className="mx-2">•</span>
                <span>India, 2021</span>
              </div>
            </div>
          </motion.div>

          {/* Akshaya Patra Certificate Card */}
          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/akshaya-patra-certificate.jpeg"
                alt="Akshaya Patra Certificate of Gratitude for Mid-Day Meal Programme support"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full py-1 px-3 flex items-center">
                <Award className="h-4 w-4 text-blue-500 mr-1" />
                <span className="text-sm font-semibold">2024</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Akshaya Patra Certificate</h3>
              </div>

              <p className="text-gray-600 mb-4">
                Certificate of Gratitude from Akshaya Patra Foundation for generous contribution in supporting
                Government school children through the Mid-Day Meal programme in Gujarat.
              </p>

              <div className="flex items-center text-sm text-gray-500">
                <span className="flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  Akshaya Patra Foundation
                </span>
                <span className="mx-2">•</span>
                <span>Gujarat, 2024</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
