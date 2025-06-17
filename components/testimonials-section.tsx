"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  name: string
  location: string
  quote: string
  image: string
}

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      name: "Sunita Devi",
      location: "Dharavi Slum, Mumbai",
      quote:
        "Sarthi Foundation has been a blessing for our family. The daily food distribution ensures my children never go hungry, and the grocery kits help us manage our monthly needs.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Kamala Widow",
      location: "Govandi, Mumbai",
      quote:
        "As a widow, it was difficult to manage daily expenses. The monthly grocery kits from Sarthi Foundation have given me hope and dignity. I am forever grateful.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Ravi Kumar",
      location: "Kurla Slum, Mumbai",
      quote:
        "During winter, the blankets provided by Sarthi Foundation saved my family from the cold. In summer, the buttermilk distribution keeps us healthy and hydrated.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  return (
    <section className="section-padding bg-white">
      <div className="px-4 lg:container-max">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-red-500 font-semibold text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            STORIES OF HOPE
          </motion.p>

          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            What People Say
          </motion.h2>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative overflow-hidden rounded-lg bg-gray-50 p-4 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Quote className="h-5 w-5 lg:h-12 lg:w-12 text-yellow-400 mx-auto mb-6" />

                <blockquote className="text-sm lg:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <div className="w-11 h-11 lg:w-16 lg:h-16 rounded-full overflow-hidden">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-sm lg:text-lg text-gray-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600 text-sm lg:text-base">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute hidden md:inline left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronLeft className="lg:h-6 lg:w-6 text-gray-600" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute hidden md:inline right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronRight className="h-4 w-4 lg:h-6 lg:w-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-red-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
