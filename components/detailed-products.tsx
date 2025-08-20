"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FlaskRoundIcon as Flask,
  Microscope,
  Thermometer,
  Zap,
  Beaker,
  Settings,
  TestTube,
  Scale,
  ArrowRight,
} from "lucide-react"
import { useState } from "react"
import { ImageWithFallback } from "./image-with-fallback"

import flaskImg from "../images/laboratory-chemicals.png";
import glasswareImg from "../images/glassware-collection.png";
import scientificInstrumentsImg from "../images/scientific-instruments.png";
import shiMedia from "../images/hiMedia.png";

import microscopeEquipmentImg from "../images/microscope-equipment.png";
import weighingBalanceImg from "../images/weighing-balance.png";
import Laboratory_Chemicals from "../images/chemcal_lab.jpg"
import Whatman_Filter_Papers from "../images/Whatman_Filter_Papers.png"



export function DetailedProducts() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const productCategories = [
    {
      icon: Flask,
      title: "Laboratory Chemicals",
      description: "High-quality chemicals in various grades for all laboratory applications",
      color: "from-slate-700 to-slate-800",
      grades: ["HPLC GRADE", "AR GRADE", "ACS GRADE", "LR", "SUPRAPUR", "EUROPEAN PHARMACOPOEIA GRADE"],
      brands: ["MERCK", "FISHER", "RANKEM", "LOBA", "SRL", "SD FINE", "SPECTROCHEM", "SIGMA ALDRICH", "TCI"],
      image: Laboratory_Chemicals,
    },
    {
      icon: Beaker,
      title: "Laboratory Glassware & Plasticware",
      description: "Complete range of laboratory glassware and plastic equipment",
      color: "from-amber-600 to-amber-700",
      items: ["BEAKER", "BOTTLES", "BURETTES", "CYLINDERS", "DESICCATORS", "FLASK", "PIPETTES", "TEST TUBE"],
      brands: ["BOROSIL", "BD", "RIVIERA", "DURAN", "TARSON", "POLYLAB", "GLOSIL", "BOROSILICATE GLASS"],
      image: glasswareImg,
    },
    {
      icon: TestTube,
      title: "HiMedia Cultures & Media",
      description: "Comprehensive range of culture media and microbiological products",
      color: "from-slate-600 to-slate-700",
      items: [
        "READY PREPARED MEDIA",
        "DEHYDRATED CULTURE MEDIA",
        "MEDIA SUPPLEMENTS",
        "ANTIMICROBIAL SUSCEPTIBILITY SYSTEMS",
        "BACTERIOLOGICAL DIFFERENTIATION AIDS",
        "NEOGEN PRODUCTS",
        "LYOPHILIZED ATCC CULTURES",
        "MOLECULAR BIOLOGY KITS",
      ],
      brands: ["HIMEDIA"],
      image: shiMedia,
    },
    {
      icon: Settings,
      title: "Whatman Filter Papers",
      description: "Premium filtration solutions for all laboratory needs",
      color: "from-amber-700 to-amber-800",
      items: [
        "QUALITATIVE FILTER PAPERS",
        "WET STRENGTHENED GRADES",
        "FOLDED PREPLEATED GRADES",
        "QUANTITATIVE FILTER PAPERS",
        "HARDENED LOW ASH GRADES",
        "GLASS MICROFIBER FILTERS",
        "EXTRACTION THIMBLES",
        "PTFE MEMBRANES",
        "CELLULOSE NITRATE",
        "SYRINGE FILTER",
      ],
      brands: ["WHATMAN"],
      image: Whatman_Filter_Papers,
    },
    {
      icon: Thermometer,
      title: "Digital Instruments",
      description: "Precision digital instruments for accurate measurements",
      color: "from-slate-800 to-amber-600",
      items: [
        "PH METER",
        "TDS METER",
        "CONDUCTIVITY METER",
        "POTENTIOMETER",
        "VISCOMETER",
        "FLASH & FIRE POINT",
        "BOMB CALORIMETER",
        "MELTING POINT APPARATUS",
        "REFRACTOMETER",
        "ANEMOMETER",
        "LUXMETER",
        "SOUND LEVEL METER",
        "TACHOMETER",
        "D.O METER",
        "FLAMEPHOTOMETER",
        "ORP",
        "HYDROMETER",
        "MOISTURE METER",
        "ORBITAL SHAKERS",
      ],
      brands: ["EUTECH", "DEEP VISION", "LOVIBOND"],
      image: scientificInstrumentsImg,
    },
    {
      icon: Microscope,
      title: "Analytical Instruments",
      description: "Advanced analytical equipment for research and quality control",
      color: "from-amber-800 to-slate-700",
      items: [
        "AUTOCLAVE",
        "BOD INCUBATOR",
        "CENTRIFUGE",
        "DEEP FREEZER",
        "ELECTROPHORESIS",
        "FUME HOOD",
        "HOT PLATE",
        "HEATING MANTELS",
        "HUMIDITY CHAMBER",
        "INCUBATORS",
        "JAR TEST APPARATUS",
        "KARL FISHER TITRATOR",
        "LAMINAR AIR FLOW",
        "MICROPIPETTE",
        "MAGNETIC STIRRER",
        "MUFFLE FURNACE",
        "SOXHLET APPARATUS",
        "ULTRA SONICATOR",
      ],
      brands: ["REMI", "SHIMADZU", "EPPENDORF", "SARTORIUS"],
      image: microscopeEquipmentImg,
    },
    {
      icon: Scale,
      title: "Weighing Balances",
      description: "Precision weighing solutions for all laboratory applications",
      color: "from-slate-700 to-amber-700",
      items: [
        "MICRO ANALYTICAL BALANCE",
        "SEMI-MICRO ANALYTICAL BALANCE",
        "ANALYTICAL BALANCE",
        "PRECISION TOP LOADING BALANCE",
        "LAB WEIGHT BOXES",
        "PHYSICAL & CHEMICAL BALANCE",
      ],
      brands: ["SHIMADZU", "SARTORIUS"],
      image: weighingBalanceImg,
    },
    {
      icon: Zap,
      title: "Crucibles & Accessories",
      description: "High-temperature resistant crucibles and laboratory accessories",
      color: "from-amber-600 to-slate-600",
      items: [
        "SILICA",
        "GLASS SINTERED",
        "NICKEL",
        "PORCELAIN",
        "QUARTZ",
        "ALUMINA",
        "AGATE MORTAR AND PESTLE",
        "SPECTROPHOTOMETER CELLS",
        "CUVETTES",
        "VM CRUCIBLE",
        "PLATINUM WARE",
        "TEFLON",
      ],
      brands: ["J BRAND", "BLUE STAR"],
      image: flaskImg,
    },
  ];

  return (
    <section
      id="detailed-products"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white/50 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-slate-200 to-amber-200 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-amber-200 to-slate-200 rounded-full opacity-10 animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Complete Product Catalog</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive range of laboratory products with detailed specifications and technical support
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {productCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl mx-auto sm:mx-0 flex-shrink-0`}
                  >
                    <category.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div className="text-center sm:text-left ml-6">
                    <CardTitle className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-amber-700 transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-600">
                      {category.description}
                    </CardDescription>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden mb-4 relative">
                  <ImageWithFallback
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-110 transition-all duration-500"
                    loading="lazy"
                    fallbackSrc={`/placeholder.svg?height=200&width=400&text=${encodeURIComponent(category.title)}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {hoveredCard === index && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* <div className="bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-lg transform scale-0 group-hover:scale-100 transition-all duration-300">
                        <span className="text-xs sm:text-sm font-semibold text-gray-800">View Details</span>
                      </div> */}
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                {category.grades && (
                  <div className="animate-fade-in-up delay-200">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Available Grades:</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {category.grades.map((grade, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs transform hover:scale-105 transition-transform cursor-pointer"
                        >
                          {grade}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {category.items && (
                  <div className="animate-fade-in-up delay-300">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Products Available:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs sm:text-sm text-gray-600">
                      {category.items.slice(0, 8).map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-1 hover:text-amber-600 transition-colors cursor-pointer py-1"
                        >
                          <span className="w-1 h-1 bg-amber-600 rounded-full animate-pulse flex-shrink-0"></span>
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                      {category.items.length > 8 && (
                        <div className="col-span-1 sm:col-span-2 text-amber-600 font-medium hover:text-amber-700 transition-colors cursor-pointer text-xs sm:text-sm">
                          +{category.items.length - 8} more items
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="animate-fade-in-up delay-400">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Authorized Brands:</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {category.brands.map((brand, idx) => (
                      <Badge
                        key={idx}
                        className="bg-gradient-to-r from-slate-600 to-amber-600 text-white text-xs transform hover:scale-105 transition-all duration-200 cursor-pointer hover:shadow-lg"
                      >
                        {brand}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-slate-800 to-amber-700 hover:from-slate-900 hover:to-amber-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group animate-fade-in-up delay-500 text-sm sm:text-base"
                  onClick={() => scrollToSection("contact")}
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
