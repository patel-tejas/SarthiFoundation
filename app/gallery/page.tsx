"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Filter, Grid, Heart } from "lucide-react"

interface GalleryItem {
  id: number
  src: string
  alt: string
  category: string
  title: string
  description: string
}

export default function GalleryPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [filter, setFilter] = useState("all")

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "/images/education-boy.png",
      alt: "Educational program in action",
      category: "education",
      title: "Educational Bursaries Program",
      description: "Providing quality education to underprivileged children",
    },
    {
      id: 2,
      src: "/images/charity-work.png",
      alt: "Community development project",
      category: "community",
      title: "Community Development",
      description: "Building stronger communities together",
    },
    {
      id: 3,
      src: "/images/hero-children.png",
      alt: "Children receiving support",
      category: "children",
      title: "Child Support Program",
      description: "Ensuring every child has a bright future",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Healthcare outreach program",
      category: "healthcare",
      title: "Healthcare Access Initiative",
      description: "Bringing medical care to remote areas",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Volunteer training session",
      category: "volunteers",
      title: "Volunteer Training",
      description: "Empowering volunteers with skills and knowledge",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Food distribution program",
      category: "community",
      title: "Food Distribution",
      description: "Fighting hunger in local communities",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=600",
      alt: "School construction project",
      category: "education",
      title: "School Construction",
      description: "Building schools for better education",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Medical camp",
      category: "healthcare",
      title: "Medical Camp",
      description: "Free healthcare services for all",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Children playing",
      category: "children",
      title: "Recreation Activities",
      description: "Creating joyful moments for children",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Volunteer group photo",
      category: "volunteers",
      title: "Volunteer Team",
      description: "Our dedicated volunteer community",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Water well project",
      category: "community",
      title: "Clean Water Project",
      description: "Providing access to clean drinking water",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Library opening",
      category: "education",
      title: "Community Library",
      description: "Opening doors to knowledge and learning",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects", icon: <Grid className="h-4 w-4" /> },
    { id: "education", label: "Education", icon: <Grid className="h-4 w-4" /> },
    { id: "healthcare", label: "Healthcare", icon: <Heart className="h-4 w-4" /> },
    { id: "community", label: "Community", icon: <Grid className="h-4 w-4" /> },
    { id: "children", label: "Children", icon: <Grid className="h-4 w-4" /> },
    { id: "volunteers", label: "Volunteers", icon: <Grid className="h-4 w-4" /> },
  ]

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return

    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1
    }

    setSelectedImage(filteredItems[newIndex])
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-green via-green-600 to-primary-red text-white py-24">
        <div className="container-max">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our <span className="text-accent-yellow">Gallery</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Witness the transformative power of compassion through these inspiring moments from our programs and
              communities worldwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max">
          <motion.div
            ref={ref}
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-8">
              <Filter className="h-6 w-6 text-primary-red mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Filter by Category</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    filter === category.id
                      ? "bg-gradient-to-r from-primary-red to-red-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow-md border border-gray-200"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.icon}
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" layout>
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group cursor-pointer"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => openLightbox(item)}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90 leading-relaxed">{item.description}</p>
                      <div className="mt-3">
                        <span className="inline-block bg-accent-yellow text-gray-900 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-accent-yellow rounded-2xl transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Results count */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-gray-600">
              Showing <span className="font-semibold text-primary-red">{filteredItems.length}</span>{" "}
              {filteredItems.length === 1 ? "project" : "projects"}
              {filter !== "all" && (
                <span>
                  {" "}
                  in <span className="font-semibold capitalize">{filter}</span>
                </span>
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-gray-900/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-5xl max-h-full w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                {/* Image */}
                <div className="relative h-[60vh] md:h-[70vh]">
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    fill
                    className="object-cover"
                  />

                  {/* Close Button */}
                  <motion.button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full hover:bg-white transition-all duration-200 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.button>

                  {/* Navigation Buttons */}
                  <motion.button
                    onClick={() => navigateImage("prev")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full hover:bg-white transition-all duration-200 shadow-lg"
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </motion.button>

                  <motion.button
                    onClick={() => navigateImage("next")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full hover:bg-white transition-all duration-200 shadow-lg"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </motion.button>
                </div>

                {/* Image Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedImage.description}</p>
                    </div>
                    <span className="inline-block bg-gradient-to-r from-primary-red to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold capitalize ml-4">
                      {selectedImage.category}
                    </span>
                  </div>

                  {/* Navigation dots */}
                  <div className="flex justify-center space-x-2 mt-6">
                    {filteredItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(filteredItems[index])}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          filteredItems[index].id === selectedImage.id
                            ? "bg-primary-red scale-125"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
