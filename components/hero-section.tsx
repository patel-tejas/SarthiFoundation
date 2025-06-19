"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowRight, Heart, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface AnimatedNumberProps {
  target: number
  duration?: number
  suffix?: string
  prefix?: string
}

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      src: "/images/food-distribution-slum.jpg",
      alt: "Food distribution in slum areas with Sarthi Foundation van",
    },
    {
      src: "/images/children-eating-line.jpg",
      alt: "Children and families eating meals during food distribution",
    },
    {
      src: "/images/child-eating-closeup.jpg",
      alt: "Happy child enjoying nutritious meal",
    },
    {
      src: "/images/large-food-distribution.jpg",
      alt: "Large scale organized food distribution event",
    },
    {
      src: "/images/group-photo-children.jpg",
      alt: "Group photo with children and Sarthi Foundation team",
    },
    {
      src: "/images/buttermilk-distribution.jpg",
      alt: "Summer buttermilk distribution program in slum area",
    },
    // {
    //   src: "/images/hero-children.png",
    //   alt: "Children receiving care and support",
    // },
    // {
    //   src: "/images/charity-work.png",
    //   alt: "Community service work",
    // },
  ]

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(timer)
  }, [images.length])

  const nextImage = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/30 backdrop-blur-sm text-white rounded-full hover:bg-white/50 transition-all duration-200 shadow-md z-10"
      >
        <ChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/30 backdrop-blur-sm text-white rounded-full hover:bg-white/50 transition-all duration-200 shadow-md z-10"
      >
        <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// Update the AnimatedNumber component to handle string formats like "5k+"
function AnimatedNumber({ target, duration = 2000, suffix = "", prefix = "" }: AnimatedNumberProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    // For small numbers, animate normally
    if (target <= 1000) {
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
    }
    // For large numbers, use fewer animation steps to reduce jank
    else {
      const steps = 20
      const increment = target / steps
      const stepDuration = duration / steps
      let step = 0

      const timer = setInterval(() => {
        setCurrent(increment * step)
        step++
        if (step > steps) {
          clearInterval(timer)
          setCurrent(target)
        }
      }, stepDuration)
      return () => clearInterval(timer)
    }
  }, [target, duration])

  return (
    <span className="font-bold text-4xl md:text-5xl text-red-500">
      {prefix}
      {Math.floor(current).toLocaleString()}
      {suffix}
    </span>
  )
}

export default function HeroSection() {
  return (
    <section className="bg-white min-h-screen flex items-center pt-20 md:pt-25 w-full justify-center">
      <div className="md:container-max">
        <div className="grid lg:grid-cols-2 justify-between gap-10 lg:gap-20 items-center w-full">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-gray-900">Feed Others</span>
              <br />
              <span className="gradient-text">Before You Eat</span>
            </motion.h1>

            <motion.p
              className="md:text-xl text-gray-600 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Serving communities through food distribution in slum areas, supporting widows with grocery kits, and
              providing seasonal assistance to those in need.
            </motion.p>

            {/* Animated Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 py-1 md:py-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div>
                <div className="mb-2">
                  <span className="font-bold text-4xl md:text-5xl text-red-500">5k+</span>
                </div>
                <p className="text-gray-600 font-medium">Families Fed</p>
              </div>
              <div>
                <div className="mb-2">
                  <span className="font-bold text-4xl md:text-5xl text-red-500">500+</span>
                </div>
                <p className="text-gray-600 font-medium">Widows Supported</p>
              </div>
              <div>
                <div className="mb-2">
                  <span className="font-bold text-4xl md:text-5xl text-red-500">20+</span>
                </div>
                <p className="text-gray-600 font-medium">Slum Areas</p>
              </div>
            </motion.div>

            <motion.div
              className="flex sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link href="/donate">
                <motion.button
                  className="px-2 py-2 bg-red-500 text-white md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-lg flex items-center justify-center gap-1 hover:bg-red-600 transition-all duration-200 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="h-4 w-4 md:h-5 md:w-5" />
                  Donate Now
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                </motion.button>
              </Link>

              <Link href="/#our-sevas">
                <motion.button
                  className="border-[1.5px]  border-yellow-400 text-yellow-600 px-2 py-2 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Sevas
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            className="relative pb-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative h-[300px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ImageCarousel />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
