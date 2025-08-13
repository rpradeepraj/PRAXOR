"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star } from "lucide-react"
import { useState } from "react"
import { ImageWithFallback } from "./image-with-fallback"
import labChemicalsImg from "../images/laboratory-chemicals.png";
import scientificInstrumentsImg from "../images/scientific-instruments.png";
import glasswareCollectionImg from "../images/glassware-collection.png";
import microscopeEquipmentImg from "../images/microscope-equipment.png";
import weighingBalanceImg from "../images/weighing-balance.png";

export function ComprehensiveBrands() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const brandCategories = [
    {
      category: "Chemical Suppliers",
      description: "Leading global and national chemical manufacturers",
      icon: "🧪",
      color: "from-slate-700 to-slate-800",
      image: labChemicalsImg,
      brands: [
        "Thermo Fisher Scientific",
        "Merck Lab Chemicals",
        "Sigma Aldrich",
        "Himedia Reagent",
        "Nice Chemicals",
        "Rankem Laboratory Chemicals",
        "Loba Chemicals",
        "TCI Chemicals",
        "SD Fine Chemicals",
        "Acros Organics",
        "Spectrochem",
        "Finar",
        "SRL",
      ],
    },
    {
      category: "Laboratory Equipment",
      description: "Premium laboratory instruments and equipment manufacturers",
      icon: "🔬",
      color: "from-amber-600 to-amber-700",
      image: scientificInstrumentsImg,
      brands: [
        "Remi Instruments",
        "Shimadzu Balance",
        "Eppendorf Micropipette",
        "Sartorius Filter Paper",
        "Eutech PH Meter",
        "Deep Vision Instruments",
        "Rivotek Instruments",
        "Equitron",
      ],
    },
    {
      category: "Glassware & Plasticware",
      description: "High-quality laboratory glassware and plastic products",
      icon: "🧪",
      color: "from-slate-600 to-slate-700",
      image: glasswareCollectionImg,
      brands: [
        "Borosil Laboratory Glasswares",
        "Glassco Laboratory Glasswares",
        "Tarson",
        "Polylab",
        "Blue Star Slides & Coverslips",
        "Schott German Glassware",
        "J Brand Porcelainware",
        "BD",
        "Riviera",
        "Duran",
      ],
    },
    {
      category: "Analytical Instruments",
      description: "Advanced analytical and testing equipment",
      icon: "📊",
      color: "from-amber-700 to-amber-800",
      image: microscopeEquipmentImg,
      brands: [
        "Microscope",
        "Muffles Furnace",
        "Vertical Autoclave",
        "Test Sieve Shaker",
        "BOD Incubator",
        "Refractometer Bench Type",
        "Vacuum Pump",
        "Orbital Laboratory Shaker",
        "Hot Air Oven",
        "Colony Counter",
        "Lux Meter",
        "Sound Level Meter",
        "Electrophoresis",
        "Lab Oven",
      ],
    },
    {
      category: "Specialized Equipment",
      description: "Specialized laboratory and research equipment",
      icon: "⚗️",
      color: "from-slate-800 to-amber-600",
      image: scientificInstrumentsImg,
      brands: [
        "Gas Chromatography HPLC",
        "Deep Freezer",
        "Moisture Balance Analyzer",
        "Hot Wire Anemometer",
        "Leak Test Apparatus",
        "Lovibond Tintometer",
        "Auto Karl Fischer Titrimeter",
        "Ultrasonic Bath",
        "Water Distillation",
        "Elcometer",
        "Cleveland Open Cup Apparatus",
        "Brookfield Viscometer",
      ],
    },
    {
      category: "Testing & Measurement",
      description: "Precision testing and measurement instruments",
      icon: "📏",
      color: "from-amber-800 to-slate-700",
      image: weighingBalanceImg,
      brands: [
        "pH Electrodes",
        "TDS Meter",
        "Sacrometer",
        "Digital Lab Incubator",
        "Salinity Refractometer",
        "Laminar Air Flow Bench",
        "Whatman Filter Paper",
        "Water And Soil Analysis Kit",
        "Hot Plates",
        "Melting and Boiling Point Apparatus",
        "Standard Calibration Weights Sets",
        "Water Bath",
      ],
    },
  ];

  return (
    <section id="comprehensive-brands" className="py-20 px-4 bg-white/50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-slate-200 to-amber-200 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-amber-200 to-slate-200 rounded-full opacity-10 animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-slate-100 to-amber-100 rounded-full opacity-5 animate-pulse"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-amber-700 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            <span>Authorized Dealer</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Complete Brand Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Authorized stockist and dealer for leading international and national brands across all laboratory
            categories
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {brandCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-amber-700 transition-colors">
                      {category.category}
                    </CardTitle>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden relative">
                  <ImageWithFallback
                    src={category.image || "/placeholder.svg"}
                    alt={category.category}
                    className="w-full h-40 object-cover transform group-hover:scale-110 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {hoveredCard === index && (
                    <div className="absolute top-2 right-2">
                      <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg transform scale-0 group-hover:scale-100 transition-all duration-300">
                        <span className="text-xs font-semibold text-gray-800">{category.brands.length} Brands</span>
                      </div>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-2 mb-4 max-h-48 overflow-y-auto custom-scrollbar">
                  {category.brands.map((brand, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-2 hover:bg-gradient-to-r hover:from-gray-50 hover:to-amber-50 rounded-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <div
                        className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full flex-shrink-0 animate-pulse`}
                      ></div>
                      <span className="text-sm text-gray-700 font-medium hover:text-amber-700 transition-colors">
                        {brand}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <Badge
                    className={`bg-gradient-to-r ${category.color} text-white text-xs transform hover:scale-105 transition-transform`}
                  >
                    <Star className="w-3 h-3 mr-1" />
                    {category.brands.length} Brands
                  </Badge>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-800 text-slate-800 hover:bg-slate-50 bg-transparent text-xs transform hover:scale-105 transition-all duration-300 group"
                    onClick={() => scrollToSection("contact")}
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-800 to-amber-700 text-white p-8 rounded-2xl text-center relative overflow-hidden animate-fade-in-up delay-600">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full animate-float delay-1000"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 animate-fade-in-up">Complete Laboratory Solutions</h3>
            <p className="text-lg opacity-90 mb-6 animate-fade-in-up delay-200">
              From basic laboratory chemicals to advanced analytical instruments - we have everything you need under one
              roof.
            </p>
            <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-200 to-white bg-clip-text text-transparent animate-fade-in-up delay-400">
              {"TOGETHER we perform Better"}
            </div>
            <p className="text-lg opacity-90 mb-8 animate-fade-in-up delay-600">
              {"When your requirements are urgent, 'PRAXOR' should be your natural choice."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-800">
              <Button
                size="lg"
                className="bg-white text-slate-800 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                onClick={() => scrollToSection("contact")}
              >
                <span>Request Complete Catalog</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-800 bg-transparent transform hover:scale-105 transition-all duration-300 group"
                onClick={() => scrollToSection("equipment-catalog")}
              >
                <span>View Equipment Details</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
