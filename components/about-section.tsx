"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    "Regular food distribution in slum areas across the city",
    "Monthly grocery kits for widows and elderly women",
    "Seasonal support including blankets in winter and buttermilk in summer",
    "Educational support through notebooks and stationery for children",
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images Section */}
          <motion.div
            ref={ref}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Main large video */}
              <motion.div
                className="col-span-2 relative h-[400px] rounded-3xl overflow-hidden shadow-xl interactive-image group"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src="https://www.youtube.com/embed/fQfLA-zZQIA?si=_4kBiJvkHbXXuGZN&start=6&mute=1&enablejsapi=1&rel=0&modestbranding=1"
                  title="Sarthi Foundation - Community Service Video"
                  className="w-full h-full object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  onMouseEnter={(e) => {
                    const iframe = e.target as HTMLIFrameElement
                    const src = iframe.src
                    if (!src.includes("autoplay=1")) {
                      iframe.src = src.replace("mute=1", "mute=1&autoplay=1")
                    }
                  }}
                  onMouseLeave={(e) => {
                    const iframe = e.target as HTMLIFrameElement
                    const src = iframe.src
                    iframe.src = src.replace("&autoplay=1", "&mute=0")
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-red/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 text-white pointer-events-none">
                  <p className="font-semibold text-xl">Sarthi Foundation</p>
                  <p className="text-sm opacity-90">Watch Our Impact Story</p>
                </div>
              </motion.div>

              {/* Two smaller images */}
              <motion.div
                className="relative h-[200px] rounded-2xl overflow-hidden shadow-lg interactive-image"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/cm-visit.jpeg"
                  alt="Community leaders and officials with Sarthi Foundation team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-red/30 to-transparent"></div>
              </motion.div>

              <motion.div
                className="relative h-[200px] rounded-2xl overflow-hidden shadow-lg interactive-image"
                whileHover={{ scale: 1.05, rotate: -1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/food-distribution-street.jpeg"
                  alt="Volunteer distributing food to families on the street"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-yellow/30 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-primary-red font-semibold text-lg mb-4 tracking-wide">ABOUT SARTHI FOUNDATION</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Bringing Hope Through <span className="gradient-text">Community Service</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Since 2000 Sarthi Foundation is dedicated to serving underprivileged communities through comprehensive support
                programs. We focus on addressing basic needs like food security, supporting vulnerable groups like
                widows, and providing seasonal assistance to ensure dignity and comfort for all.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.button
                className="bg-primary-red text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="h-5 w-5" />
                Support Our Mission
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
