"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ArrowLeft, Shield, Heart, Users, Truck, Calendar, Award } from "lucide-react"
import Link from "next/link"

export default function CovidReliefServicesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const images = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "5000+", label: "Families Served" },
    { icon: <Truck className="h-8 w-8" />, number: "100+", label: "Daily Food Packets" },
    { icon: <Calendar className="h-8 w-8" />, number: "180", label: "Days of Service" },
    { icon: <Heart className="h-8 w-8" />, number: "24/7", label: "Emergency Support" },
  ]

  const services = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Emergency Food Distribution",
      description:
        "Daily distribution of cooked meals and dry ration kits to families affected by lockdown restrictions.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety Equipment Distribution",
      description:
        "Provided masks, sanitizers, and protective equipment to frontline workers and vulnerable communities.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Medical Support",
      description:
        "Assisted families with medical emergencies, oxygen support, and hospital coordination during the crisis.",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Mobile Relief Units",
      description:
        "Deployed mobile units to reach remote areas and provide door-to-door assistance to quarantined families.",
    },
  ]

  const timeline = [
    {
      date: "March 2020",
      title: "Immediate Response",
      description: "Launched emergency food distribution within 24 hours of lockdown announcement.",
    },
    {
      date: "April 2020",
      title: "Expanded Operations",
      description: "Scaled up to serve 100+ families daily across multiple slum areas in the city.",
    },
    {
      date: "May 2020",
      title: "Medical Support",
      description: "Added medical assistance and oxygen support services for COVID-19 patients.",
    },
    {
      date: "June 2020",
      title: "Safety Equipment",
      description: "Distributed thousands of masks, sanitizers, and protective equipment.",
    },
    {
      date: "July 2020",
      title: "Community Kitchens",
      description: "Established community kitchens to provide hot meals to migrant workers.",
    },
    {
      date: "August 2020",
      title: "Sustained Support",
      description: "Continued relief operations even as restrictions began to ease gradually.",
    },
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
              Back to Media
            </Link>

            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="h-10 w-10 text-red-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              COVID-19 <span className="gradient-text">Relief Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Standing with communities during the pandemic - Our emergency response and relief operations during the
              COVID-19 lockdown period
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
              <h2 className="text-3xl font-bold text-gray-900">Our COVID-19 Response</h2>
              <p className="text-gray-600 leading-relaxed">
                When the COVID-19 pandemic struck and nationwide lockdowns were imposed, Sarthi Foundation immediately
                mobilized to support the most vulnerable communities. We understood that while the virus was a health
                crisis, the lockdown created an immediate survival crisis for daily wage workers, migrant laborers, and
                families living in slum areas.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team worked tirelessly, often risking their own safety, to ensure that no family went hungry during
                these unprecedented times. We adapted our regular programs and launched emergency services to meet the
                urgent needs of the community.
              </p>
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Our Commitment During Crisis:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Immediate emergency food distribution</li>
                  <li>• 24/7 helpline for medical emergencies</li>
                  <li>• Safety equipment for frontline workers</li>
                  <li>• Support for quarantined families</li>
                  <li>• Coordination with government relief efforts</li>
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
                  src="/placeholder.svg?height=500&width=600"
                  alt="COVID-19 relief work by Sarthi Foundation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Emergency Relief Operations</h3>
                  <p className="text-lg opacity-90">Serving communities during the pandemic</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Emergency <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our comprehensive response to the COVID-19 crisis included multiple emergency services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Relief <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A chronological overview of our COVID-19 relief operations during the lockdown period
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 mb-8 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-4 h-4 bg-red-500 rounded-full mt-2"></div>
                <div className="bg-white rounded-2xl p-6 shadow-lg flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <span className="text-red-600 font-semibold">{item.date}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
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
              Gallery - <span className="gradient-text">COVID-19 Relief Work</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Documenting our relief efforts and community support during the pandemic
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`COVID-19 relief work image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Award className="h-10 w-10 text-yellow-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Recognition & <span className="gradient-text">Appreciation</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our COVID-19 relief efforts were recognized by local authorities, media, and the community. We received
              appreciation from the police department, local government officials, and numerous families whose lives we
              touched during this difficult period.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Police Appreciation</h3>
              <p className="text-gray-600">
                Recognized by local police for our collaboration in distributing relief materials to needy families
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Media Coverage</h3>
              <p className="text-gray-600">
                Featured in local newspapers and social media for our dedicated service during the pandemic
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Support</h3>
              <p className="text-gray-600">
                Overwhelming support and gratitude from thousands of families we served during the crisis
              </p>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Continue Supporting Our Mission</h2>
            <p className="text-xl mb-8 opacity-90">
              The pandemic taught us the importance of community support. Help us continue our mission of serving those
              in need, not just during crises, but every day.
            </p>
            <Link href="/donate">
              <motion.button
                className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Support Our Work
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
