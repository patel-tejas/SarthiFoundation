"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import {
  ArrowLeft,
  Home,
  Heart,
  Users,
  Shield,
  Clock,
  Utensils,
  Activity,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function OldAgeHomePage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const facilities = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Comfortable Accommodation",
      description: "Clean, well-ventilated rooms with proper bedding and furniture for a homely environment.",
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Nutritious Meals",
      description: "Three wholesome meals daily with special dietary considerations for health conditions.",
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Medical Care",
      description: "Regular health checkups, medication management, and emergency medical assistance.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Social Activities",
      description: "Recreational programs, cultural events, and social interaction opportunities.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "24/7 Security",
      description: "Round-the-clock security and safety measures for peace of mind.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Personal Care",
      description: "Assistance with daily activities and personal hygiene when needed.",
    },
  ]

  const stats = [
    { number: "30+", label: "Senior Citizens Cared For" },
    { number: "24/7", label: "Care & Support" },
    { number: "0", label: "Fees or Charges" },
    { number: "2+", label: "Years of Service" },
  ]

  const galleryImages = [
    {
      src: "/images/old-age-home-entrance.jpeg",
      alt: "Residents of Sanatan Old Age Home standing at the entrance",
      title: "Our Residents",
      description: "At the entrance of our home",
    },
    {
      src: "/images/old-age-home-residents-indoor.jpeg",
      alt: "Residents gathered in the common area of Sanatan Old Age Home",
      title: "Community Living",
      description: "Sharing moments together",
    },
    {
      src: "/images/old-age-home-celebration.jpeg",
      alt: "Celebration event at Sanatan Old Age Home",
      title: "Special Celebrations",
      description: "Making memories together",
    },
    {
      src: "/images/old-age-home-temple-visit.jpeg",
      alt: "Residents visiting a temple",
      title: "Spiritual Activities",
      description: "Temple visits and prayers",
    },
    {
      src: "/images/old-age-home-mealtime.jpeg",
      alt: "Residents enjoying a meal together",
      title: "Nutritious Meals",
      description: "Enjoying food together",
    },
    {
      src: "/images/old-age-home-outing.jpeg",
      alt: "Residents on an outing to a restaurant",
      title: "Community Outings",
      description: "Exploring the world together",
    },
    {
      src: "/images/old-age-home-birthday.jpeg",
      alt: "Elderly couple celebrating a birthday with cake",
      title: "Birthday Celebrations",
      description: "Making special moments for our residents",
    },
    {
      src: "/images/old-age-home-dining.jpeg",
      alt: "Group of residents having a meal together at a large table",
      title: "Community Dining",
      description: "Sharing meals and building bonds",
    },
    {
      src: "/images/old-age-home-dormitory.jpeg",
      alt: "Dormitory room with comfortable beds for residents",
      title: "Comfortable Accommodation",
      description: "Clean and well-maintained living spaces",
    },
    {
      src: "/images/old-age-home-residents-chatting.jpeg",
      alt: "Two elderly women chatting in their room",
      title: "Companionship",
      description: "Building friendships and support systems",
    },
    {
      src: "/images/old-age-home-carrom.jpeg",
      alt: "Carrom board game setup for recreational activities",
      title: "Recreational Activities",
      description: "Engaging games and activities for mental stimulation",
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1))
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-24">
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
              <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>

              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Home className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Sanatan <span className="gradient-text">Old Age Home</span>
                  </h1>
                  <p className="text-xl text-green-600 font-semibold">A Home Away From Home</p>
                </div>
              </div>

              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  At Sarthi Foundation, we believe that our senior citizens deserve dignity, care, and comfort in their
                  golden years. Our Sanatan Old Age Home provides a warm, welcoming environment where elderly
                  individuals can live peacefully without any financial burden.
                </p>
                <p>
                  We offer completely free accommodation, meals, medical care, and companionship to senior citizens who
                  need support. Our dedicated staff ensures that every resident feels at home and receives the love and
                  attention they deserve.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/donate">
                  <motion.button
                    className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart className="h-5 w-5" />
                    Support Our Elders
                  </motion.button>
                </Link>

                <Link href="/contact">
                  <motion.button
                    className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="h-5 w-5" />
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Image - Old Age Home Building */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/sanatan-old-age-home.jpg"
                  alt="Sanatan Old Age Home - Building exterior with caretakers"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Sanatan Old Age Home</h3>
                  <p className="text-lg opacity-90">Providing dignity, comfort, and love to senior citizens</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* About Section */}
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
              About Our <span className="gradient-text">Old Age Home</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Sanatan Old Age Home is more than just a shelter - it's a place where senior citizens find family, care,
              and the respect they deserve in their golden years.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900">Our Philosophy</h3>
              <p className="text-gray-600 leading-relaxed">
                At the heart of our mission lies a deep respect for the elderly — we believe that growing old should not
                mean growing alone. While we provide a free and welcoming old age home for those in need, we firmly do
                not promote institutional living for senior citizens as the first option. We believe elders deserve to
                live with their families, surrounded by love and belonging. Our team actively engages in counseling
                families, encouraging reconciliation and helping seniors return to their loved ones whenever possible.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For those without family or in urgent need, our home offers care, dignity, and companionship —
                completely free of cost. Every resident is treated like family, and we strive to create a nurturing
                space where they feel safe, respected, and emotionally fulfilled.
              </p>

              <div className="bg-green-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">Our Promise:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Completely free accommodation and care</li>
                  <li>• No hidden charges or fees</li>
                  <li>• Respect for individual preferences and dignity</li>
                  <li>• Family-like environment with compassionate care</li>
                  <li>• Medical support and emergency care</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/sanatan-old-age-home.jpg"
                  alt="Sanatan Old Age Home facility"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Facilities</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide comprehensive care and facilities to ensure our residents live comfortably and happily
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{facility.title}</h3>
                <p className="text-gray-600 text-center">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Image Carousel */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Life at <span className="gradient-text">Sanatan Old Age Home</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A glimpse into the daily life and activities of our beloved residents
            </p>
          </motion.div>

          {/* Image Carousel */}
          <div className="relative max-w-4xl mx-auto">
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

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-200 shadow-lg z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-200 shadow-lg z-10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
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
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
                    index === currentImageIndex ? "ring-4 ring-green-500 scale-110" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">Visit or Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                We welcome visitors and encourage family members to stay connected with their loved ones. Our doors are
                always open for those who want to learn more about our services or visit our facility.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">Ahmedabad & Junagadh, Gujarat</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 98254 33151</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">oldagehome@sarthifoundation.org</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visiting Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-semibold text-gray-900">Monday - Friday</span>
                  <span className="text-gray-600">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-semibold text-gray-900">Saturday</span>
                  <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-semibold text-gray-900">Sunday</span>
                  <span className="text-gray-600">11:00 AM - 3:00 PM</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Please call ahead to schedule your visit and ensure the best experience for our residents.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Call to Action */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-max">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Elders</h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Your support helps us provide free accommodation, meals, medical care, and companionship to senior
              citizens who need it most. Every donation makes a difference in ensuring our elders live with dignity and
              comfort in their golden years.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Free Accommodation</h3>
                <p className="opacity-90">Comfortable living spaces for all residents</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nutritious Meals</h3>
                <p className="opacity-90">Three wholesome meals daily for every resident</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Medical Care</h3>
                <p className="opacity-90">Regular health checkups and medical support</p>
              </div>
            </div>

            <Link href="/donate">
              <motion.button
                className="bg-white text-green-600 px-12 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="h-6 w-6" />
                Donate Now
              </motion.button>
            </Link>

            <p className="text-sm opacity-75 mt-6">
              Your donation is tax-exempt under Section 80G of the Income Tax Act
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
