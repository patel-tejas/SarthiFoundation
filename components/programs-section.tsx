"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ProgramCardProps {
  title: string
  description: string
  image: string
  index: number
  href: string
}

function ProgramCard({ title, description, image, index, href }: ProgramCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Link href={href} className="rounded-lg">
      <motion.div
        ref={ref}
        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ y: -10 }}
      >
        <div className="relative h-52 lg:h-64 overflow-hidden rounded-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>

        <div className="p-6 rounded-lg">
          <motion.h3
            className="text-lg lg:text-xl font-bold mb-3 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-gray-600 mb-4 text-sm leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="inline-flex items-center gap-2 text-red-500 font-semibold hover:text-red-700 transition-colors duration-200 hover:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
          >
            <ArrowRight className="h-4 w-4" />
            <span className="text-sm lg:text-lg">Learn More</span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  )
}

export default function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const programs = [
    {
      title: "Daily Food Distribution",
      description:
        "We distribute fresh, nutritious meals in slum areas daily, ensuring families have access to proper nutrition and no one goes to bed hungry.",
      image: "/images/food-distribution-slum.jpg",
      href: "/media/daily-food-distribution",
    },
    {
      title: "Festival Celebration",
      description:
        "During Diwali and other festivals, we distribute sweets and special meals to bring joy and celebration to underprivileged families.",
      image: "/images/festival-sweet-boxes.jpg",
      href: "/media/festival-sweet-distribution",
    },
    {
      title: "Widow Support Program",
      description:
        "Monthly grocery kits and essential supplies for widows and elderly women who struggle to meet their basic daily needs.",
      image: "/images/grocery-kits-widows.jpg",
      href: "/media/widow-support-program",
    },
    {
      title: "Winter Blanket Drive",
      description:
        "During harsh winter months, we distribute warm blankets to homeless individuals and families in slum areas to protect them from cold.",
      image: "/images/winter-blanket-distribution.jpg",
      href: "/media/winter-blanket-drive",
    },
    {
      title: "Milk Seva",
      description:
        "We provide free milk and buttermilk to people in slum areas and on streets to help them stay nourished and healthy throughout the year.",
      image: "/images/buttermilk-distribution.jpg",
      href: "/media/summer-buttermilk-program",
    },
    {
      title: "Educational Support",
      description:
        "We provide notebooks, stationery, and educational materials to children in slum areas to support their learning and academic growth.",
      image: "/images/educational-support-children.jpg",
      href: "/media/educational-support",
    },
  ]

  return (
    <section id="our-sevas" className="section-padding bg-white">
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
            SEVAS THAT MAKE AN IMPACT
          </motion.p>

          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our Sevas
          </motion.h2>

          <motion.p
            className="text-gray-600 text-[15px] lg:text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            From daily food distribution to seasonal support, our comprehensive programs address the diverse needs of
            underprivileged communities throughout the year.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
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
          <Link href="/donate">
            <motion.button
              className="bg-red-500 text-white px-8 py-4 font-semibold hover:bg-red-600 transition-colors duration-200 inline-flex items-center gap-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="h-5 w-5" />
              <span className="">Support All Sevas</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
