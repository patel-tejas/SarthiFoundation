"use client"

export const navigateToOurSevas = () => {
  // Check if we're in a browser environment
  if (typeof window !== "undefined") {
    // If we're already on the home page, just scroll
    if (window.location.pathname === "/") {
      const element = document.getElementById("our-sevas")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Navigate to home page with hash
      window.location.href = "/#our-sevas"
    }
  }
}
