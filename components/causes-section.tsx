"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, BookOpen, Heart, Users } from "lucide-react"
import Image from "next/image"

interface CauseCardProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  bgColor: string
  textColor: string
  index: number
  icon: React.ReactNode
  image: string
  progress: number
}

function CauseCard({
  title,
  description,
  buttonText,
  buttonLink,
  bgColor,
  textColor,
  index,
  icon,
  image,
  progress,
}: CauseCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
    >
      {/* Image Container with 4:3 aspect ratio */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
        <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
          <div className="text-primary-red">{icon}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <motion.h3
          className="text-xl font-bold mb-3 text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-600 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        >
          {description}
        </motion.p>

        {/* Progress Bar */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-700">Progress</span>
            <span className="text-sm font-bold text-primary-red">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-primary-red h-2 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${progress}%` } : {}}
              transition={{ duration: 1, delay: index * 0.2 + 0.6 }}
            />
          </div>
        </motion.div>

        <motion.a
          href={buttonLink}
          className="inline-flex items-center gap-2 text-primary-red font-semibold hover:text-red-700 transition-colors duration-200 group-hover:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
          whileHover={{ x: 10 }}
        >
          <ArrowRight className="h-4 w-4" />
          <span className="border-b-2 border-accent-yellow hover:border-accent-yellow/70 transition-colors duration-200">
            {buttonText}
          </span>
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function CausesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const causes = [
    {
      title: "Clean Water Project",
      description: "Providing access to clean and safe drinking water for communities in remote areas.",
      buttonText: "Learn More",
      buttonLink: "/programs",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      icon: <BookOpen className="h-6 w-6" />,
      image: "/images/charity-work.png",
      progress: 75,
    },
    {
      title: "Education for All",
      description: "Ensuring every child has access to quality education and learning opportunities.",
      buttonText: "Learn More",
      buttonLink: "/programs",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      icon: <Heart className="h-6 w-6" />,
      image: "/images/education-boy.png",
      progress: 60,
    },
    {
      title: "Healthcare Access",
      description: "Bringing essential healthcare services to underserved communities worldwide.",
      buttonText: "Learn More",
      buttonLink: "/programs",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      icon: <Users className="h-6 w-6" />,
      image: "/images/hero-children.png",
      progress: 85,
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-primary-red font-semibold text-lg mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            OUR CAUSES
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Making a <span className="gradient-text">Difference</span> Together
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Every contribution helps us create lasting positive change in communities around the world.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <CauseCard key={index} {...cause} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
