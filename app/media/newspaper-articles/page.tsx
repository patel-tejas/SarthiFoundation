"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ArrowLeft, Newspaper, Calendar, Eye, X } from "lucide-react"
import Link from "next/link"

interface NewsArticle {
  id: number
  title: string
  date: string
  language: string
  publication: string
  description: string
  image: string
}

export default function NewspaperArticlesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null)

  const articles: NewsArticle[] = [
    {
      id: 1,
      title: "Sarthi Foundation Provides Food to 90,000 People",
      date: "2023",
      language: "Gujarati",
      publication: "Local Gujarati Daily",
      description:
        "Coverage of Sarthi Foundation's massive food distribution program reaching 90,000 beneficiaries in slum areas.",
      image: "/images/newspaper-1.jpg",
    },
    {
      id: 2,
      title: "Police and Sarthi Foundation Distribute 500 Blankets",
      date: "COVID-19 Period",
      language: "English",
      publication: "Social Media - IPS Ajay Choudhary",
      description:
        "Joint initiative between Sola Police and Sarthi Foundation to distribute blankets to needy people during COVID-19.",
      image: "/images/newspaper-2.jpg",
    },
    {
      id: 3,
      title: "Food Distribution Program in Slum Areas",
      date: "2023",
      language: "Gujarati",
      publication: "Prabhat Newspaper",
      description: "Detailed coverage of Sarthi Foundation's food distribution program covering multiple slum areas.",
      image: "/images/newspaper-3.jpg",
    },
    {
      id: 4,
      title: "Nutritious Meals for 90,000 Children - Gujarati",
      date: "December 9, 2023",
      language: "Gujarati",
      publication: "Ahmedabad Express",
      description:
        "Sarthi Foundation's contribution to Akshayapatra's midday meal scheme providing nutritious meals to children.",
      image: "/images/newspaper-4.jpg",
    },
    {
      id: 5,
      title: "Nutritious Meals for 90,000 Children - English",
      date: "December 9, 2023",
      language: "English",
      publication: "Ahmedabad Daily",
      description:
        "English coverage of Sarthi Foundation's donation helping provide nutritious meals to 90,000 children under Akshayapatra's scheme.",
      image: "/images/newspaper-5.jpg",
    },
    {
      id: 6,
      title: "Notebook Distribution to Students",
      date: "June 15, 2021",
      language: "Gujarati",
      publication: "Divya Bhaskar",
      description:
        "Coverage of Sarthi Foundation distributing notebooks and educational materials to underprivileged students.",
      image: "/images/newspaper-6.jpg",
    },
    {
      id: 7,
      title: "Blanket Distribution for Homeless",
      date: "Winter 2021",
      language: "Hindi",
      publication: "Local Hindi Daily",
      description:
        "Joint effort by police and Sarthi Foundation to distribute blankets to people sleeping under the open sky.",
      image: "/images/newspaper-7.jpg",
    },
  ]

  const openModal = (article: NewsArticle) => {
    setSelectedArticle(article)
  }

  const closeModal = () => {
    setSelectedArticle(null)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-24">
        <div className="container-max">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/#our-sevas"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors mb-8"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Media
            </Link>

            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Newspaper className="h-10 w-10 text-indigo-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Newspaper</span> Articles
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Media coverage and recognition of Sarthi Foundation's work in newspapers and social media
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
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
              Media <span className="gradient-text">Coverage</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our work has been recognized and covered by various newspapers and media outlets, showcasing the impact of
              our programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => openModal(article)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Eye className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {article.language}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {article.date}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2 py-1 rounded">
                      {article.publication}
                    </span>
                    <button className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm">
                      View Full Article
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Full Article View */}
      {selectedArticle && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-3 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full hover:bg-white transition-all duration-200 shadow-lg"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Article Image */}
            <div className="relative h-[70vh] overflow-auto">
              <Image
                src={selectedArticle.image || "/placeholder.svg"}
                alt={selectedArticle.title}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Article Info */}
            <div className="p-8 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedArticle.language}
                  </span>
                  <span className="text-gray-600 flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {selectedArticle.date}
                  </span>
                </div>
                <span className="text-indigo-600 font-semibold">{selectedArticle.publication}</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">{selectedArticle.title}</h3>

              <p className="text-gray-600 leading-relaxed">{selectedArticle.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Call to Action */}
      <section className="section-padding bg-indigo-600 text-white">
        <div className="container-max">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of the story that newspapers write about. Support our programs and help us create more positive
              impact
            </p>
            <Link href="/donate">
              <motion.button
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
