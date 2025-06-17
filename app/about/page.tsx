"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Heart, Users, Target, Award, Mail, Phone, Linkedin, Star, Facebook } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const teamMembers = [
  
    { 
      name: "Rajesh Solanki",
      position: "Managing Trustee",
      image: "/placeholder.svg?height=300&width=300",
      description: "Dedicated social worker specializing in women empowerment and child welfare programs.",
      email: "priya@sarthifoundation.org",
      phone: "+91 98765 43211",
      linkedin: "#",
    },
    
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Compassion",
      description: "We serve with love and empathy, understanding the struggles of those we help.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Building stronger communities through collective action and shared responsibility.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Impact",
      description: "Creating measurable, lasting change in the lives of those we serve.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "Maintaining the highest standards in all our programs and initiatives.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section with Logo */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-24">
        <div className="container-max">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div
              className="flex justify-center mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/logo.jpg"
                  alt="Sarthi Foundation Logo"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              About <span className="gradient-text">Sarthi Foundation</span>
            </motion.h1>

            <motion.div
              className="space-y-6 text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p>Since 2000</p>
              <p>Registration Number: <span className="font-bold">No-E/13670/MAY.2001/AHMEDABAD</span></p>
              <p>
                Sarthi Foundation is a non-profit organization dedicated to serving underprivileged communities through
                comprehensive support programs. Founded with the vision of creating a more equitable society, we focus
                on addressing basic human needs and empowering individuals to build better lives.
              </p>

              <p>
                Our mission is rooted in the principle of "જમ્યા પહેલાં જમાડો"(Feed others before you eat) in gujarati - a
                philosophy that drives our daily food distribution programs in slum areas across the city. We believe
                that no one should go to bed hungry, and every individual deserves dignity, care, and opportunity.
              </p>

              <p>
                Through our various initiatives including food distribution, widow support programs, seasonal
                assistance, and educational support, we have touched the lives of thousands of families. Our work
                extends beyond immediate relief to create sustainable impact in communities that need it most.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Legacy Section - Founder Tribute */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our <span className="gradient-text">Legacy</span>
            </motion.h2>

            <motion.p
              className="text-gray-600 text-lg max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Honoring the vision and dedication of our beloved founder who laid the foundation for our mission of
              service.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-96 lg:h-auto overflow-hidden">
                  <Image
                    src="./images/founder.jpg"
                    alt="Yogesh Solanki - Founder"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">Yogesh Solanki</h3>
                    <p className="text-yellow-300 font-semibold">Founder & Visionary</p>
                    <p className="text-sm opacity-90 mt-2">2000 - March 25, 2025</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900">In Loving Memory</h4>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      Yogesh Solanki founded Sarthi Foundation in 2000 with a simple yet profound belief: that every
                      individual deserves dignity, care, and the opportunity to thrive. His vision of "જમ્યા પહેલાં જમાડો"
                      (Feed others before you eat) became the cornerstone of our organization.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      For over two decades, he dedicated his life to serving underprivileged communities, establishing
                      programs that have touched thousands of lives. His compassionate leadership and unwavering
                      commitment to social justice continue to inspire our work today.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Though he left us on March 25, 2025, his legacy lives on through every meal distributed, every
                      child educated, and every family supported. We honor his memory by continuing the mission he
                      started with such passion and dedication.
                    </p>

                    <div className="bg-yellow-50 rounded-2xl p-6 border-l-4 border-yellow-500">
                      <p className="text-gray-800 italic font-medium">
                        "Service to humanity is the highest form of worship. When we feed the hungry, we feed our own
                        souls."
                      </p>
                      <p className="text-gray-600 text-sm mt-2">- Yogesh Solanki, Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to the communities we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Leadership Team Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max">
          <motion.div
            ref={ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Current <span className="gradient-text">Leadership</span>
            </motion.h2>

            <motion.p
              className="text-gray-600 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Meet the dedicated individuals who continue our founder's mission and work tirelessly to create positive
              change in communities across the region.
            </motion.p>
          </motion.div>

          <div className="flex items-center justify-center ">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white w-[400px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative w-[400px] h-[400px] overflow-hidden">
                  <Image src={"./images/md.jpg"} alt={member.name} fill className="object-contain" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-yellow-300 font-semibold">{member.position}</p>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-3 text-red-500" />
                      <Link href={`mailto:rajeshsolanki1978.rs@gmail.com`} className="hover:text-red-500 transition-colors">
                        rajeshsolanki1978.rs@gmail.com
                      </Link>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-3 text-red-500" />
                      <a href={`tel:+919825433151`} className="hover:text-red-500 transition-colors">
                        +91 9825433151
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Facebook className="h-4 w-4 mr-3 text-red-500" />
                      <Link href={"https://www.facebook.com/share/1AVadKkSM7/"} className="hover:text-red-500 transition-colors">
                        Connect on Facebook
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To serve underprivileged communities by providing essential support including food distribution,
                  healthcare access, educational assistance, and empowerment programs that create lasting positive
                  impact and restore dignity to those in need.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  A world where every individual has access to basic necessities, opportunities for growth, and the
                  dignity they deserve. We envision communities where compassion drives action and collective
                  responsibility creates sustainable change.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/sarthi-logo.jpg"
                  alt="Sarthi Foundation - Krishna and Arjuna representing guidance and wisdom"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h4 className="text-2xl font-bold mb-2">Guided by Wisdom</h4>
                  <p className="text-lg opacity-90">
                    Like the eternal bond between Krishna and Arjuna, we believe in guidance, support, and walking
                    together towards a better tomorrow.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
