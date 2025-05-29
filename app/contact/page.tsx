"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, Check, Clock, Globe } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)

    setTimeout(() => {
      setIsSuccess(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 3000)
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
              Get in <span className="text-accent-yellow">Touch</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to make a difference? We'd love to hear from you and explore how we can work together to create
              positive change.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Image Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px] rounded-3xl overflow-hidden shadow-2xl">
            {/* Contact Form */}
            <motion.div
              ref={ref}
              className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-md mx-auto w-full">
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mr-4">
                      <Send className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
                  </div>
                  <p className="text-gray-600">We're here to help and answer any questions you might have.</p>
                </motion.div>

                {isSuccess ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <Check className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Thank You!</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-accent-yellow focus:outline-none transition-all duration-200 bg-white"
                        whileFocus={{ scale: 1.02 }}
                      />
                      <motion.input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-accent-yellow focus:outline-none transition-all duration-200 bg-white"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>

                    <motion.input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone (Optional)"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-accent-yellow focus:outline-none transition-all duration-200 bg-white"
                      whileFocus={{ scale: 1.02 }}
                    />

                    <motion.input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-accent-yellow focus:outline-none transition-all duration-200 bg-white"
                      whileFocus={{ scale: 1.02 }}
                    />

                    <motion.textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-accent-yellow focus:outline-none transition-all duration-200 resize-none bg-white"
                      whileFocus={{ scale: 1.02 }}
                    />

                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary-red to-red-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </div>
            </motion.div>

            {/* Contact Image */}
            <motion.div
              className="relative bg-gray-200 lg:bg-transparent"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="h-full min-h-[400px] lg:min-h-full relative interactive-image">
                <Image
                  src="/images/charity-work.png"
                  alt="Contact us - Children and volunteers"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-red/40 via-transparent to-accent-yellow/20"></div>

                {/* Floating contact info */}
                <motion.div
                  className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Quick Contact</h3>
                  <p className="text-gray-600 text-sm">We're always here to help and support your journey with us.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Multiple Ways to <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the most convenient way to reach out to us. We're committed to responding promptly to all
              inquiries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="h-8 w-8" />,
                title: "Email Us",
                subtitle: "Send us an email anytime",
                contact: "info@orphange.org",
                link: "mailto:info@orphange.org",
                color: "from-primary-red to-red-600",
                delay: 0.2,
              },
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Call Us",
                subtitle: "Mon-Fri 9am-6pm EST",
                contact: "(123) 456-7890",
                link: "tel:+1234567890",
                color: "from-accent-yellow to-yellow-400",
                delay: 0.3,
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Visit Us",
                subtitle: "Come see us in person",
                contact: "123 Charity Lane, New York, NY 10001",
                link: "#",
                color: "from-dark-green to-green-600",
                delay: 0.4,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center h-full border border-gray-100"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div
                    className={`mx-auto w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.subtitle}</p>
                  <a
                    href={item.link}
                    className="text-primary-red font-semibold hover:text-red-700 transition-colors duration-200 break-words"
                  >
                    {item.contact}
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-primary-red mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM
                </p>
                <p>
                  <span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM
                </p>
                <p>
                  <span className="font-semibold">Sunday:</span> Closed
                </p>
                <p className="text-sm text-primary-red mt-4">Emergency contact available 24/7</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-dark-green mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Global Presence</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-semibold">Headquarters:</span> New York, USA
                </p>
                <p>
                  <span className="font-semibold">Regional Offices:</span> 25+ Countries
                </p>
                <p>
                  <span className="font-semibold">Active Projects:</span> 50+ Locations
                </p>
                <p className="text-sm text-dark-green mt-4">Serving communities worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
