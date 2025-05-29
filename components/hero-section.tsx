"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowRight, Users, Heart } from "lucide-react"
import Image from "next/image"
import heroImg from "@/public/images/heroImg.jpg"

interface AnimatedNumberProps {
  target: number
  duration?: number
  suffix?: string
  prefix?: string
}

function AnimatedNumber({ target, duration = 2000, suffix = "", prefix = "" }: AnimatedNumberProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      setCurrent((prev) => {
        if (prev + increment >= target) {
          clearInterval(timer)
          return target
        }
        return prev + increment
      })
    }, 16)

    return () => clearInterval(timer)
  }, [target, duration])

  return (
    <span className="number-counter">
      {prefix}
      {Math.floor(current).toLocaleString()}
      {suffix}
    </span>
  )
}

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-[70px] pb-12 md:pt-32 md:pb-32 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mt-10">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left max-w-2xl lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-[2.8rem] lg:text-5xl font-bold leading-tight text-gray-900 mb-4 md:mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-accent-yellow block">Feed Others</span>
              <span className="block">Before You Eat</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Volunteers may or may not have the time, they just possess the heart.
            </motion.p>

            {/* Animated Stats */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="text-center min-w-[90px]">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-primary-red">
                  <AnimatedNumber target={300} suffix="+" />
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Volunteers</p>
              </div>
              <div className="text-center min-w-[90px]">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-primary-red">
                  <AnimatedNumber target={1200} suffix="+" />
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Lives Changed</p>
              </div>
              <div className="text-center min-w-[90px]">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-primary-red">
                  <AnimatedNumber target={25} suffix="+" />
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Countries</p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.button
                className="bg-primary-red text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base flex items-center justify-center gap-1.5 hover:bg-red-700 transition-all duration-200 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="h-4 w-4" />
                Donate Now
                <ArrowRight className="h-4 w-4" />
              </motion.button>

              <motion.button
                className="border-2 border-accent-yellow text-gray-900 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-accent-yellow transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="h-4 w-4 inline mr-1.5" />
                Join Volunteers
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="relative w-full max-w-md lg:max-w-lg lg:order-2 mb-6 lg:mb-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-square h-[280px] sm:h-[350px] md:h-[400px] bg-gradient-to-br from-primary-red/10 to-accent-yellow/10 rounded-3xl shadow-xl overflow-hidden">
              <Image
                src={heroImg}
                alt="Hero Image"
                fill
                className="object-cover rounded-3xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}