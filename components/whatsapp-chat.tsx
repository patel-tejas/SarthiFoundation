"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function WhatsAppChat() {
  const phoneNumber = "+1234567890" // Replace with actual WhatsApp number
  const message = "Hello! I'm interested in learning more about your programs."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="whatsapp-float flex items-center justify-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </motion.button>
  )
}
