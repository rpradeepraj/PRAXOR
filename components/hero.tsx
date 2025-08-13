"use client"

import { Button } from "@/components/ui/button"
import { Award, Truck, Users, Clock, ArrowRight, Play } from "lucide-react"
import { useState } from "react"
import { ImageWithFallback } from "./image-with-fallback"
import hero from "../images/hero-laboratory.png"

export function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-slate-200 to-amber-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-amber-200 to-slate-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="animate-fade-in-up">
              <div className="inline-block bg-gradient-to-r from-slate-800 to-amber-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 transform hover:scale-105 transition-all duration-300 shadow-lg">
                <span className="flex items-center space-x-2">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Trusted Since 1992</span>
                </span>
              </div>
            </div>

            <div className="animate-fade-in-up delay-200">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
                Leading Stockist of{" "}
                <span className="bg-gradient-to-r from-slate-800 via-amber-700 to-slate-600 bg-clip-text text-transparent animate-gradient block sm:inline">
                  Laboratory Solutions
                </span>
              </h1>
            </div>

            <div className="animate-fade-in-up delay-400">
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Our mission is to emerge as a leading vendor for Laboratory Instruments, Chemicals, Equipment &
                Glassware in domestic and international markets. We continuously innovate and create value for people
                associated with us beyond their expectations.
              </p>
            </div>

            <div className="animate-fade-in-up delay-600">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-slate-800 to-amber-700 hover:from-slate-900 hover:to-amber-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group w-full sm:w-auto"
                  onClick={() => scrollToSection("detailed-products")}
                >
                  <span>View Products</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-800 text-slate-800 hover:bg-slate-50 bg-transparent transform hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
                  onClick={() => scrollToSection("contact")}
                >
                  <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span>Contact Us</span>
                </Button>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="animate-fade-in-up delay-800">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { icon: Award, value: "30+", label: "Years Experience", color: "from-slate-700 to-slate-800" },
                  { icon: Users, value: "1000+", label: "Happy Clients", color: "from-amber-600 to-amber-700" },
                  { icon: Truck, value: "24/7", label: "Delivery", color: "from-slate-600 to-slate-700" },
                  { icon: Clock, value: "Ready", label: "Stock", color: "from-amber-700 to-amber-800" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300"
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-800 group-hover:text-amber-700 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-right order-first lg:order-last">
            <div
              className="relative z-10 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <ImageWithFallback
                src={hero}
                alt="Modern Laboratory Equipment and Scientific Instruments"
                className="w-full h-64 sm:h-80 lg:h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 object-cover"
                loading="eager"
                fallbackSrc=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Floating Elements */}
            <div
              className={`absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-slate-400 to-amber-400 rounded-2xl opacity-30 transform transition-all duration-500 ${isHovered ? "rotate-12 scale-110" : "rotate-6"}`}
            ></div>
            <div
              className={`absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-amber-400 to-slate-400 rounded-2xl opacity-20 transform transition-all duration-500 ${isHovered ? "-rotate-12 scale-110" : "-rotate-6"}`}
            ></div>

            {/* Floating Info Cards */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-float">
              <div className="text-xs sm:text-sm font-semibold text-gray-800">ISO Certified</div>
              <div className="text-xs text-gray-600">Quality Assured</div>
            </div>

            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-float delay-1000">
              <div className="text-xs sm:text-sm font-semibold text-gray-800">30+ Brands</div>
              <div className="text-xs text-gray-600">Authorized Dealer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
