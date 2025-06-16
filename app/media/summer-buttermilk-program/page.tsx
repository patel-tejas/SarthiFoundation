"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, Milk, Users, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function MilkSevaPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  const galleryImages = [
    {
      src: "/images/milk-seva-logistics-preparation.jpeg",
      alt: "Milk distribution preparation and logistics",
      title: "Distribution Preparation",
      description: "Organizing and preparing milk supplies for community distribution",
    },
    {
      src: "/images/milk-seva-community-distribution-1.jpeg",
      alt: "Volunteers distributing milk to children",
      title: "Community Outreach",
      description: "Our volunteers distributing nutritious milk to children in slum areas",
    },
    {
      src: "/images/milk-seva-community-care.jpeg",
      alt: "Young girl caring for toddler with milk",
      title: "Family Care",
      description: "Ensuring every family member receives proper nutrition",
    },
    {
      src: "/images/milk-seva-family-distribution.jpeg",
      alt: "Family milk distribution event",
      title: "Community Distribution",
      description: "Families gathering to receive fresh milk and dairy products",
    },
    {
      src: "/images/milk-seva-happy-children.jpeg",
      alt: "Happy children with Amul milk bottles",
      title: "Joyful Recipients",
      description: "Children's smiles show the impact of our milk seva program",
    },
    {
      src: "/images/milk-seva-children-celebration.jpeg",
      alt: "Children celebrating with milk bottles",
      title: "Community Celebration",
      description: "Children celebrating the joy of receiving nutritious milk",
    },
    {
      src: "/images/buttermilk-distribution.jpg",
      alt: "Summer buttermilk distribution",
      title: "Summer Buttermilk",
      description: "Special buttermilk distribution during hot summer months for hydration",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isPaused, galleryImages.length])

  // Pause auto-play when user interacts
  const handleUserInteraction = () => {
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000) // Resume after 10 seconds
  }

  const nextImage = () => {
    handleUserInteraction()
    setCurrentImageIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    handleUserInteraction()
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1))
  }

  const goToImage = (index: number) => {
    handleUserInteraction()
    setCurrentImageIndex(index)
  }

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "3000+", label: "Children Served Daily" },
    { icon: <MapPin className="h-8 w-8" />, number: "40+", label: "Distribution Points" },
    { icon: <Calendar className="h-8 w-8" />, number: "365", label: "Days a Year" },
    { icon: <Milk className="h-8 w-8" />, number: "15K+", label: "Bottles Distributed Monthly" },
  ]

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
            <Link
              href="/#our-sevas"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Our Sevas
            </Link>

            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Milk className="h-10 w-10 text-blue-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Milk Seva</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Providing nutritious milk and dairy products to children and families throughout the year, ensuring proper
              nutrition and healthy growth in underserved communities.
            </p>
            <p className="text-lg text-gray-500">
              During summer months, we also distribute refreshing buttermilk to help communities stay hydrated in the
              heat.
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
              Gallery - <span className="gradient-text">Milk Seva Program</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nourishing communities with fresh milk and dairy products year-round
            </p>
          </motion.div>

          {/* Image Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
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

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-200 shadow-lg z-10 opacity-70 hover:opacity-100"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-200 shadow-lg z-10 opacity-70 hover:opacity-100"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Auto-play indicator and controls */}
              <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                <div
                  className={`w-2 h-2 rounded-full ${isAutoPlaying && !isPaused ? "bg-green-400" : "bg-gray-400"}`}
                ></div>
                <span className="text-white text-sm bg-black/30 px-2 py-1 rounded">
                  {currentImageIndex + 1} / {galleryImages.length}
                </span>
              </div>

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
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center space-x-4 mt-8 overflow-x-auto pb-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
                    index === currentImageIndex ? "ring-4 ring-blue-500 scale-110" : "opacity-70 hover:opacity-100"
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
      <section className="section-padding bg-blue-500 text-white">
        <div className="container-max">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Milk Seva Program</h2>
            <p className="text-xl mb-8 opacity-90">
              Help us provide nutritious milk to more children and families in need
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
