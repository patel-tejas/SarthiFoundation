"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface StatItemProps {
  number: string
  label: string
  delay: number
}

function StatItem({ number, label, delay }: StatItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayNumber, setDisplayNumber] = useState("0")

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setDisplayNumber(number)
      }, delay * 200)
    }
  }, [isInView, number, delay])

  return (
    <motion.div
      ref={ref}
      className="text-center text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
    >
      <motion.h3
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: delay * 0.1 + 0.2 }}
      >
        {displayNumber}
      </motion.h3>
      <p className="text-lg md:text-xl">{label}</p>
    </motion.div>
  )
}

export default function StatsSection() {
  const stats = [
    { number: "$500K", label: "People We Helped In 2021" },
    { number: "300+", label: "Volunteers In 2021" },
    { number: "1,200+", label: "Funds Campaign" },
    { number: "$80M", label: "Funds We Collected" },
  ]

  return (
    <section className="bg-dark-green section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} number={stat.number} label={stat.label} delay={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
