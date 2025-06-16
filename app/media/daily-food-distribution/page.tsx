"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ArrowLeft, Heart, Users, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function DailyFoodDistributionPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleryImages = [
    {
      src: "/images/food-distribution-slum.jpg",
      alt: "Daily food distribution in slum areas",
      title: "Community Outreach",
      description: "Reaching families in slum areas with nutritious meals",
    },
    {
      src: "/images/children-eating-line.jpg",
      alt: "Children eating in line",
      title: "Children's Nutrition",
      description: "Ensuring every child gets proper nutrition",
    },
    {
      src: "/images/child-eating-closeup.jpg",
      alt: "Child eating meal closeup",
      title: "Nourishing Lives",
      description: "Every meal makes a difference in a child's life",
    },
    {
      src: "/images/large-food-distribution.jpg",
      alt: "Large scale food distribution",
      title: "Large Scale Impact",
      description: "Feeding hundreds of families daily",
    },
    {
      src: "/images/school-children-eating.jpg",
      alt: "School children eating nutritious meals",
      title: "School Nutrition Program",
      description: "Supporting education through proper nutrition",
    },
    {
      src: "/images/mobile-food-distribution.jpg",
      alt: "Mobile food distribution van serving children",
      title: "Mobile Food Service",
      description: "Bringing meals directly to communities in need",
    },
    {
      src: "/images/community-food-serving.jpg",
      alt: "Volunteers serving food to community members",
      title: "Community Kitchen",
      description: "Volunteers dedicating their time to serve fresh meals",
    },
    {
      src: "/images/slum-area-distribution.jpg",
      alt: "Food distribution in slum areas",
      title: "Grassroots Outreach",
      description: "Reaching the most vulnerable communities",
    },
    {
      src: "/images/rural-food-distribution.jpg",
      alt: "Food distribution in rural community",
      title: "Rural Community Support",
      description: "Extending our reach to rural areas",
    },
    {
      src: "/images/community-food-line.jpg",
      alt: "Long line of community members receiving food",
      title: "Daily Impact",
      description: "Hundreds of families served every single day",
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1))
  }

  const images = [
    "/images/food-distribution-slum.jpg",
    "/images/children-eating-line.jpg",
    "/images/child-eating-closeup.jpg",
    "/images/large-food-distribution.jpg",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "500+", label: "Families Fed Daily" },
    { icon: <MapPin className="h-8 w-8" />, number: "15+", label: "Slum Areas Covered" },
    { icon: <Calendar className="h-8 w-8" />, number: "365", label: "Days a Year" },
    { icon: <Heart className="h-8 w-8" />, number: "50K+", label: "Meals Served Monthly" },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-white py-24">
        <div className="container-max">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/#our-sevas"
              className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors mb-8"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Our Sevas
            </Link>

            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="h-10 w-10 text-red-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Daily <span className="gradient-text">Food Distribution</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ensuring no one goes to bed hungry through our daily food distribution program in slum areas across the
              city
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
                className="text-center p-6 bg-red-50 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-red-600 mb-2">{stat.number}</h3>
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
                Our Daily Food Distribution program is the cornerstone of Sarthi Foundation's mission. Every day, our
                dedicated team visits slum areas across the city to provide fresh, nutritious meals to families in need.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that access to food is a basic human right, and through this program, we ensure that no one
                in our community goes to bed hungry. Our meals are prepared with care, keeping in mind the nutritional
                needs of children, adults, and elderly individuals.
              </p>
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">What We Provide:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fresh, hot meals prepared daily</li>
                  <li>• Nutritionally balanced food for all age groups</li>
                  <li>• Special meals for children and pregnant women</li>
                  <li>• Clean drinking water</li>
                  <li>• Seasonal fruits and vegetables</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/food-distribution-slum.jpg"
                  alt="Daily food distribution in slum areas"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery - Carousel */}
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
              Gallery - <span className="gradient-text">Daily Food Distribution</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Witness the impact of our daily food distribution program through these heartwarming moments
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
                    index === currentImageIndex ? "ring-4 ring-red-500 scale-110" : "opacity-70 hover:opacity-100"
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
      <section className="section-padding bg-red-600 text-white">
        <div className="container-max">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Daily Food Distribution</h2>
            <p className="text-xl mb-8 opacity-90">
              Your donation can help us feed more families and expand our reach to additional slum areas
            </p>
            <Link href="/donate">
              <motion.button
                className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
