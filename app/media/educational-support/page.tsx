"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, BookOpen, Users, GraduationCap, Heart, ArrowLeft, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { navigateToOurSevas } from "@/lib/navigation"

export default function EducationalSupportPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [userInteracted, setUserInteracted] = useState(false)

  // Placeholder images - will be replaced when user uploads actual images
  const images = [
    {
      src: "/images/education-distribution-1.jpeg",
      title: "Notebook Distribution Drive",
      caption: "Distributing notebooks and stationery to children in slum areas",
    },
    {
      src: "/images/education-children-notebooks.jpeg",
      title: "Happy Children with Notebooks",
      caption: "Children excited to receive their new educational materials",
    },
    {
      src: "/images/education-outdoor-event.jpeg",
      title: "Community Education Event",
      caption: "Organizing educational awareness programs in communities",
    },
    {
      src: "/images/education-girl-receiving.jpeg",
      title: "Individual Support",
      caption: "Personal attention to ensure every child gets educational support",
    },
    {
      src: "/images/education-child-orange.jpeg",
      title: "Bright Futures",
      caption: "Supporting children's dreams through education",
    },
    {
      src: "/images/educational-support-children.jpg",
      title: "Group Learning Support",
      caption: "Encouraging group learning and peer support",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || userInteracted) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, userInteracted, images.length])

  // Resume auto-play after user interaction
  useEffect(() => {
    if (userInteracted) {
      const timeout = setTimeout(() => {
        setUserInteracted(false)
        setIsAutoPlaying(true)
      }, 10000)

      return () => clearTimeout(timeout)
    }
  }, [userInteracted])

  const nextImage = () => {
    setUserInteracted(true)
    setIsAutoPlaying(false)
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setUserInteracted(true)
    setIsAutoPlaying(false)
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToImage = (index: number) => {
    setUserInteracted(true)
    setIsAutoPlaying(false)
    setCurrentImageIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
    setUserInteracted(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="h-16 w-16 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold">Educational Support</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Empowering children through education - providing notebooks, stationery, and learning materials to build
            brighter futures
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center">
              <Users className="h-6 w-6 mr-2" />
              <span>2000+ Children Supported</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="h-6 w-6 mr-2" />
              <span>50+ Schools Reached</span>
            </div>
            <div className="flex items-center">
              <Heart className="h-6 w-6 mr-2" />
              <span>Year-Round Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Educational Support in Action</h2>

          <div className="relative">
            {/* Main Image Display */}
            <div
              className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl mb-6"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => !userInteracted && setIsAutoPlaying(true)}
            >
              <Image
                src={images[currentImageIndex].src || "/placeholder.svg"}
                alt={images[currentImageIndex].title}
                fill
                className="object-cover"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-70 hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-70 hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Auto-play Controls */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                  onClick={toggleAutoPlay}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                  aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isAutoPlaying && !userInteracted ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                </button>
                <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {images.length}
                </div>
                <div
                  className={`w-2 h-2 rounded-full ${isAutoPlaying && !userInteracted ? "bg-green-400" : "bg-gray-400"}`}
                />
              </div>

              {/* Image Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{images[currentImageIndex].title}</h3>
                <p className="text-white/90 text-sm">{images[currentImageIndex].caption}</p>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex justify-center gap-2 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
                    index === currentImageIndex ? "ring-2 ring-green-500 opacity-100" : "opacity-60 hover:opacity-80"
                  }`}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.title} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How We Support Education</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Notebooks & Stationery</h3>
                <p className="text-gray-600">
                  We provide notebooks, pens, pencils, erasers, and other essential stationery items to children in slum
                  areas and underprivileged communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <GraduationCap className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">School Support</h3>
                <p className="text-gray-600">
                  We work directly with schools in underserved areas to identify children who need educational support
                  and provide them with necessary materials.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community Outreach</h3>
                <p className="text-gray-600">
                  Our volunteers visit communities regularly to distribute educational materials and encourage parents
                  to prioritize their children's education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Our Educational Impact</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">2000+</div>
              <div className="text-gray-600">Children Supported</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Schools Reached</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">25K+</div>
              <div className="text-gray-600">Notebooks Distributed</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">12</div>
              <div className="text-gray-600">Months Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Support a Child's Education Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Every notebook, every pencil, every small gesture can change a child's future. Join us in building brighter
            tomorrows through education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Donate for Education
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* Back to Our Sevas */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <Button onClick={navigateToOurSevas} variant="outline" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Our Sevas
          </Button>
        </div>
      </section>
    </div>
  )
}
