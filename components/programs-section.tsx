"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface ProgramCardProps {
  title: string
  description: string
  image: string
  index: number
}

function ProgramCard({ title, description, image, index }: ProgramCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <motion.h3
          className="text-xl font-bold mb-3 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-600 mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        >
          {description}
        </motion.p>

        <motion.a
          href="#"
          className="inline-flex items-center gap-2 text-dark-green font-semibold hover:text-primary-red transition-colors duration-200 hover:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
        >
          <ArrowRight className="h-4 w-4" />
          Learn More
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const programs = [
    {
      title: "Educational Bursaries",
      description:
        "Orphange offers assistance with uniforms, fees, school supplies, counseling, child safety, activities to improve capacity, and help for generating revenue.",
      image: "/images/education-boy.png",
    },
    {
      title: "Income Generations",
      description:
        "Orphange offers assistance with uniforms, fees, school supplies, counseling, child safety, activities to improve capacity, and help for generating revenue.",
      image: "/images/charity-work.png",
    },
    {
      title: "Reintegration Programs",
      description:
        "Orphange offers assistance with uniforms, fees, school supplies, counseling, child safety, activities to improve capacity, and help for generating revenue.",
      image: "/images/hero-children.png",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-dark-green font-semibold text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            PROGRAMS THAT MAKE AN IMPACT
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our Programs
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Today, we're building on the success of our trial to see how large-scale lump-sum cash payments affect
            refugees.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="bg-dark-green text-white px-8 py-4 rounded-md font-semibold hover:bg-green-800 transition-colors duration-200 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="h-5 w-5" />
            Read More
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
