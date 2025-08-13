"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-slate-800 to-amber-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">P</span>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-800">PRAXOR</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Scientific Corporation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer text-sm xl:text-base"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer text-sm xl:text-base"
              onClick={() => scrollToSection("detailed-products")}
            >
              Products
            </button>
            <button
              className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer text-sm xl:text-base"
              onClick={() => scrollToSection("equipment-catalog")}
            >
              Equipment
            </button>
            <button
              className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer text-sm xl:text-base"
              onClick={() => scrollToSection("comprehensive-brands")}
            >
              Brands
            </button>
            <button
              className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer text-sm xl:text-base"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <button
              className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer text-sm xl:text-base"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="hidden 2xl:inline">+91 95248 63004</span>
              <span className="xl:inline 2xl:hidden">Call Us</span>
            </div>
            <Button
              size="sm"
              className="bg-gradient-to-r from-slate-800 to-amber-700 hover:from-slate-900 hover:to-amber-800"
              onClick={() => scrollToSection("contact")}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Contact & Menu */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Mobile Contact */}
            <div className="hidden sm:flex lg:hidden items-center space-x-1 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">+91 95248 63004</span>
            </div>

            {/* Mobile Get Quote Button */}
            <Button
              size="sm"
              className="hidden sm:flex lg:hidden xl:hidden bg-gradient-to-r from-slate-800 to-amber-700 hover:from-slate-900 hover:to-amber-800 text-xs px-3 py-2"
              onClick={() => scrollToSection("contact")}
            >
              Quote
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-3">
              <button
                className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer text-left py-2 px-4 hover:bg-gray-50 rounded-md"
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
              <button
                className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer text-left py-2 px-4 hover:bg-gray-50 rounded-md"
                onClick={() => scrollToSection("detailed-products")}
              >
                Products
              </button>
              <button
                className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer text-left py-2 px-4 hover:bg-gray-50 rounded-md"
                onClick={() => scrollToSection("equipment-catalog")}
              >
                Equipment
              </button>
              <button
                className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer text-left py-2 px-4 hover:bg-gray-50 rounded-md"
                onClick={() => scrollToSection("comprehensive-brands")}
              >
                Brands
              </button>
              <button
                className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer text-left py-2 px-4 hover:bg-gray-50 rounded-md"
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
              <button
                className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer text-left py-2 px-4 hover:bg-gray-50 rounded-md"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>

              {/* Mobile Contact Info */}
              <div className="px-4 py-3 border-t mt-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <Phone className="w-4 h-4" />
                  <span>+91 95248 63004</span>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-slate-800 to-amber-700 hover:from-slate-900 hover:to-amber-800"
                  onClick={() => scrollToSection("contact")}
                >
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
