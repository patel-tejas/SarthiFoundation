"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, Snowflake, Users, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { navigateToOurSevas } from "@/lib/navigation"

export default function WinterBlanketDrivePage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const galleryImages = [
    {
      src: "/images/winter-blankets-inventory.jpeg",
      title: "Blanket Preparation",
      description: "Colorful blankets prepared and organized for distribution to those in need",
    },
    {
      src: "/images/winter-blanket-distribution-outdoor.jpeg",
      title: "Community Distribution",
      description: "Volunteers distributing warm blankets to families and elderly in outdoor community events",
    },
    {
      src: "/images/winter-blanket-happy-child.jpeg",
      title: "Happy Beneficiary",
      description: "A joyful child wrapped in a warm, colorful blanket showing the impact of our program",
    },
    {
      src: "/images/winter-blanket-indoor-distribution.jpeg",
      title: "Indoor Distribution Event",
      description: "Organized indoor distribution ensuring children receive quality blankets for winter protection",
    },
    {
      src: "/images/winter-homeless-night.jpeg",
      title: "Addressing Real Need",
      description: "Homeless individuals finding warmth through our blanket distribution during cold winter nights",
    },
    {
      src: "/images/winter-blanket-lockdown-2020.jpeg",
      title: "COVID-19 Lockdown Distribution",
      description:
        "During lockdown in 2020 with the help of Ahmedabad police we had distributed blankets to those in need",
    },
    {
      src: "/images/winter-blanket-distribution.jpg",
      title: "Street Distribution",
      description: "Direct distribution of blankets to homeless individuals on the streets",
    },
  ]

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "1000+", label: "Blankets Distributed" },
    { icon: <MapPin className="h-8 w-8" />, number: "20+", label: "Distribution Points" },
    { icon: <Calendar className="h-8 w-8" />, number: "3", label: "Winter Months" },
    { icon: <Snowflake className="h-8 w-8" />, number: "500+", label: "Families Helped" },
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
    setIsAutoPlaying(false) // Pause auto-play when user interacts
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
    // Resume auto-play after 10 seconds of no interaction
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevImage = () => {
    setIsAutoPlaying(false) // Pause auto-play when user interacts
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
    // Resume auto-play after 10 seconds of no interaction
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToImage = (index: number) => {
    setIsAutoPlaying(false) // Pause auto-play when user interacts
    setCurrentImageIndex(index)
    // Resume auto-play after 10 seconds of no interaction
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

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
            <button
              onClick={navigateToOurSevas}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Our Sevas
            </button>

            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Snowflake className="h-10 w-10 text-blue-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Winter <span className="gradient-text">Blanket Drive</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Providing warmth and comfort during harsh winter months to homeless individuals and families in need
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
                className="text-center p-6 bg-blue-50 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                <p className="text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">About This Seva</h2>
              <p className="text-gray-600 leading-relaxed">
                During the harsh winter months, our Winter Blanket Drive provides essential warmth to those who need it
                most. We distribute high-quality blankets to homeless individuals, families in slum areas, and elderly
                people who struggle to stay warm.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This program runs from November to February, ensuring that the most vulnerable members of our community
                have protection against the cold. Each blanket represents our commitment to human dignity and care.
              </p>
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">What We Provide:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• High-quality warm blankets</li>
                  <li>• Special blankets for children and elderly</li>
                  <li>• Distribution in slum areas and streets</li>
                  <li>• Emergency blankets for sudden cold waves</li>
                  <li>• Coordination with local shelters</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/vNekgS2STMo?si=fcBT4f9SsXnLy6x9&mute=1&enablejsapi=1&rel=0&modestbranding=1"
                  title="Winter Blanket Drive Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
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
                    iframe.src = src.replace("&autoplay=1", "")
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
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
              Gallery - <span className="gradient-text">Winter Blanket Drive</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See how we bring warmth and comfort to those in need during the winter season
            </p>
          </motion.div>

          {/* Main Carousel */}
          <div
            className="relative max-w-4xl mx-auto mb-8"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
                alt={galleryImages[currentImageIndex].title}
                fill
                className="object-cover"
              />

              {/* Navigation Arrows - Smaller and More Transparent */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/60 text-gray-800 p-2 rounded-full shadow-md transition-all duration-200 hover:scale-105 opacity-70 hover:opacity-100"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/60 text-gray-800 p-2 rounded-full shadow-md transition-all duration-200 hover:scale-105 opacity-70 hover:opacity-100"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-bold mb-2">{galleryImages[currentImageIndex].title}</h3>
                <p className="text-white/90 text-sm">{galleryImages[currentImageIndex].description}</p>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {galleryImages.length}
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
          <div className="flex justify-center space-x-2 mb-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentImageIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center space-x-4 mt-8 overflow-x-auto pb-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
                  index === currentImageIndex ? "ring-4 ring-blue-500 scale-110" : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.title} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-max">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Winter Blanket Drive</h2>
            <p className="text-xl mb-8 opacity-90">
              Help us provide warmth and comfort to more families during the cold winter months
            </p>
            <Link href="/donate">
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
