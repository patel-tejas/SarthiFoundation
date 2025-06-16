"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, Heart, Users, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function WidowSupportProgramPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const galleryImages = [
    {
      src: "/images/widow-support-community-distribution.jpeg",
      alt: "Community distribution of grocery kits to widows",
      title: "Community Distribution Event",
      description: "Organizing grocery kit distribution for widows in the community",
    },
    {
      src: "/images/widow-support-urban-distribution.jpeg",
      alt: "Urban distribution of grocery kits to widows",
      title: "Urban Distribution Program",
      description: "Reaching widows in urban areas with essential grocery supplies",
    },
    {
      src: "/images/widow-support-individual-distribution.jpeg",
      alt: "Individual distribution of grocery kit to elderly widow",
      title: "Personal Care & Distribution",
      description: "Providing individual attention and care during distribution",
    },
    {
      src: "/images/widow-support-indoor-distribution.jpeg",
      alt: "Indoor distribution event for widow support program",
      title: "Organized Indoor Distribution",
      description: "Formal distribution events ensuring dignity and respect",
    },
    {
      src: "/images/widow-support-mobile-distribution.jpeg",
      alt: "Mobile distribution of grocery supplies to widows",
      title: "Mobile Distribution Service",
      description: "Door-to-door delivery of essential supplies to widows",
    },
    {
      src: "/images/grocery-kits-widows.jpg",
      alt: "Grocery kits being distributed to widows",
      title: "Grocery Kit Distribution",
      description: "Providing essential grocery supplies to widows in need",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(timer)
  }, [isAutoPlaying, galleryImages.length])

  const nextImage = () => {
    setIsAutoPlaying(false)
    setCurrentImageIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevImage = () => {
    setIsAutoPlaying(false)
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1))
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToImage = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentImageIndex(index)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "200+", label: "Widows Supported" },
    { icon: <MapPin className="h-8 w-8" />, number: "12+", label: "Areas Covered" },
    { icon: <Calendar className="h-8 w-8" />, number: "12", label: "Monthly Distributions" },
    { icon: <Heart className="h-8 w-8" />, number: "2.4K+", label: "Grocery Kits Distributed" },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-24">
        <div className="container-max">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/#our-sevas"
              className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors mb-8"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Our Sevas
            </Link>

            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="h-10 w-10 text-purple-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Widow <span className="gradient-text">Support Program</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Providing monthly grocery kits and essential support to widows and elderly women in need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-purple-50 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</h3>
                <p className="text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery - Carousel */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            ref={ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Gallery - <span className="gradient-text">Widow Support Program</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Supporting widows and elderly women with dignity and care
            </p>
          </motion.div>

          {/* Image Carousel */}
          <div className="relative max-w-4xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
                    alt={galleryImages[currentImageIndex].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">{galleryImages[currentImageIndex].title}</h3>
                    <p className="text-lg opacity-90">{galleryImages[currentImageIndex].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons - Smaller and More Transparent */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/40 hover:bg-white/60 backdrop-blur-sm text-gray-800 rounded-full shadow-md transition-all duration-200 hover:scale-105 opacity-70 hover:opacity-100 z-10"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/40 hover:bg-white/60 backdrop-blur-sm text-gray-800 rounded-full shadow-md transition-all duration-200 hover:scale-105 opacity-70 hover:opacity-100 z-10"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play indicator */}
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-500" : "bg-gray-400"}`}></div>
                <span className="text-white text-xs bg-black/50 px-2 py-1 rounded">
                  {isAutoPlaying ? "Auto" : "Paused"}
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center space-x-4 mt-8 overflow-x-auto pb-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
                    index === currentImageIndex ? "ring-4 ring-purple-500 scale-110" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-purple-600 text-white">
        <div className="container-max">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Widow Support Program</h2>
            <p className="text-xl mb-8 opacity-90">
              Help us provide essential support and dignity to more widows and elderly women
            </p>
            <Link href="/donate">
              <motion.button
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Donate Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
