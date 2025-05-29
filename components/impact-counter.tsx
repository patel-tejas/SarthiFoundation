"use client"

import { useEffect, useState, type ReactNode } from "react"

interface ImpactCounterProps {
  icon: ReactNode
  count: number
  label: string
  prefix?: string
}

export default function ImpactCounter({ icon, count, label, prefix = "" }: ImpactCounterProps) {
  const [displayCount, setDisplayCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds animation
    const steps = 50
    const stepValue = count / steps
    const stepTime = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= count) {
        setDisplayCount(count)
        clearInterval(timer)
      } else {
        setDisplayCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [count])

  const formattedCount = displayCount.toLocaleString()

  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 transition-transform hover:scale-105">
      <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-3xl md:text-4xl font-bold mb-2">
        {prefix}
        {formattedCount}
      </h3>
      <p className="text-gray-600">{label}</p>
    </div>
  )
}
