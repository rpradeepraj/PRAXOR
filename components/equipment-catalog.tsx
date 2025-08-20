"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, ArrowRight, Zap, FileText, FileSpreadsheet } from "lucide-react"
import { useState } from "react"
import { ImageWithFallback } from "./image-with-fallback"
import Autoclave from "../images/Autoclave.jpg"
import Bacteriological_Incubator from "../images/Bacteriological_Incubator.jpeg"
import B_O_D_Incubator from "../images/B_O_D_Incubator.png"
import Hot_Air_Oven from "../images/Hot_Air_Oven.jpg"
import Muffle_Furnace from "../images/Muffle_Furnace.jpg"
import Serological_Water_Bath from "../images/Serological_Water_Bath.jpg"
import Laboratory_Water_Bath from "../images/Laboratory_Water_Bath.jpg"








export function EquipmentCatalog() {
  const [activeTab, setActiveTab] = useState("sterilization")
  const [hoveredEquipment, setHoveredEquipment] = useState<string | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/PSC_CATLOG_2022.pdf"; // Correct path
    link.download = "PSC_CATLOG_2022.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadExcel = () => {
    // Create a link to download the Excel file from public folder
    const link = document.createElement("a")
    link.href = "./psc_ocr.xls" // Assumes Excel file is in public folder
    link.download = "psc_ocr.xls"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const downloadSpecification = (equipmentName: string) => {
    const specContent = `
PRAXOR INSTRUMENTS AND SCIENTIFIC CORPORATION
Technical Specification Sheet

Equipment: ${equipmentName}
Date: ${new Date().toLocaleDateString()}

For detailed specifications and quotations, please contact:
Phone: +91 95248 63004
Email: proxorscientificco@gmail.com
Address: PLOT NO 1-B PRAXOR HOUSE PURATASI STREET, Balamurugan Nagar, Alapakkam, Porur, Chennai, Tamil Nadu 600116

Visit our website for complete product catalog.
    `

    const blob = new Blob([specContent], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${equipmentName.replace(/\s+/g, "_")}_Specification.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const equipmentCategories = [
    {
      id: "sterilization",
      name: "Sterilization Equipment",
      shortName: "Sterilization",
      icon: "🔥",
      equipment: [
        {
          model: "PSCI-101",
          name: "Autoclave (Vertical)",
          description: "Double walled construction with stainless steel boiler for sterilization applications",
          applications: ["Medical", "Agriculture", "Educational Institutions", "Bio-Technology", "Hospitals"],
          specifications: {
            "Temperature Range": "Up to 134°C",
            Pressure: "15-30 psi",
            Material: "SS 304 Grade Inner",
            "Power Supply": "230V, 1 Phase, 50Hz",
          },
          models: [
            { size: "250x450mm", capacity: "22 ltrs", power: "2 kw" },
            { size: "300x500mm", capacity: "40 ltrs", power: "3 kw" },
            { size: "350x600mm", capacity: "50 ltrs", power: "3 kw" },
          ],
          image: Autoclave,
        },
      ],
    },
    {
      id: "incubation",
      name: "Incubation Equipment",
      shortName: "Incubation",
      icon: "🌡️",
      equipment: [
        {
          model: "PSCI-102/103",
          name: "Bacteriological Incubator",
          description: "Double/Triple walled incubator for bacterial culture and BOD applications",
          applications: ["Bio-Oxygen Demand test", "Cell/tissue culture", "Bacteria micro-organism culture"],
          specifications: {
            "Temperature Range": "+5°C above ambient to 80°C",
            Accuracy: "±2°C to 3°C",
            Material: "SS 304 Grade Inner",
            Insulation: "Glass wool",
          },
          models: [
            { size: "350x350x350mm", shelves: "1 nos", power: "300w" },
            { size: "450x450x450mm", shelves: "2 nos", power: "500w" },
            { size: "600x600x600mm", shelves: "3 nos", power: "750w" },
          ],
          image: Bacteriological_Incubator,
        },
        {
          model: "PSCI-104",
          name: "B.O.D. Incubator",
          description: "Super deluxe type with digital temperature controller for BOD testing",
          applications: [
            "Biochemical Oxygen Demand tests",
            "Plant and Insect Studies",
            "Chemical oxygen demand determination",
          ],
          specifications: {
            "Temperature Range": "5°C to 60°C ±1°C",
            Compressor: "Kirloskar-Copeland",
            Controller: "Digital with RTD Sensor",
            Capacity: "4.0 to 15.0 Cu.Ft",
          },
          models: [
            { size: "455x610x410mm", capacity: "4.0 Cu.Ft", power: "1.0 kw" },
            { size: "505x830x415mm", capacity: "6.0 Cu.Ft", power: "1.5 kw" },
            { size: "650x900x580mm", capacity: "12.0 Cu.Ft", power: "2.0 kw" },
          ],
          image: B_O_D_Incubator,
        },
      ],
    },
    {
      id: "heating",
      name: "Heating Equipment",
      shortName: "Heating",
      icon: "🔥",
      equipment: [
        {
          model: "PSCI-115/116",
          name: "Hot Air Oven",
          description: "Laboratory and Deluxe type ovens for thermal processing applications",
          applications: ["Component testing", "Core hardening", "General lab work", "Drying", "Sterilization"],
          specifications: {
            "Temperature Range": "+5°C above ambient to 250°C",
            Accuracy: "±1°C to 2°C",
            Material: "SS 304 Grade Inner",
            Heating: "Nichrome wire elements",
          },
          models: [
            { size: "350x350x350mm", shelves: "1 no", power: "1.2kw" },
            { size: "450x450x450mm", shelves: "2 nos", power: "1.8kw" },
            { size: "600x600x600mm", shelves: "3 nos", power: "3.0kw" },
          ],
          image: Hot_Air_Oven,
        },
        {
          model: "PSCI-112/113",
          name: "Muffle Furnace",
          description: "High temperature furnaces for heat treating processes",
          applications: ["Hospitals", "Research centers", "Heat treating process", "High temperature applications"],
          specifications: {
            "Operating Temperature": "1100°C / 1350°C",
            "Max Temperature": "1150°C / 1400°C",
            "Heating Element": "Kanthal A1 / Silicon Carbide",
            Controller: "Digital PID with Thermocouple",
          },
          models: [
            { size: "100x100x225mm", power: "2.0kw", type: "Standard" },
            { size: "150x150x300mm", power: "3.5kw", type: "Standard" },
            { size: "300x300x300mm", power: "7.5kw", type: "High Temp" },
          ],
          image: Muffle_Furnace,
        },
      ],
    },
    {
      id: "water-baths",
      name: "Water Bath Systems",
      shortName: "Water Baths",
      icon: "💧",
      equipment: [
        {
          model: "PSCI-111",
          name: "Serological Water Bath",
          description: "Versatile water baths for clinical and serological procedures",
          applications: ["Clinical procedures", "Incubation", "Inactivation", "Agglutination", "Serological tests"],
          specifications: {
            "Temperature Range": "Ambient to 90°C ±1°C",
            Material: "SS 304 Grade Inner",
            Control: "Capillary thermostat",
            Insulation: "Glass wool",
          },
          models: [
            { size: "250x175x175mm", racks: "2 racks", power: "1 KW" },
            { size: "350x250x175mm", racks: "4 racks", power: "1.5 KW" },
            { size: "600x300x175mm", racks: "8 racks", power: "3 KW" },
          ],
          image: Serological_Water_Bath,
        },
        {
          model: "PSCI-125/126",
          name: "Laboratory Water Bath",
          description: "Rectangular water baths with multiple holes for laboratory use",
          applications: [
            "Industrial clinical laboratories",
            "Academic facilities",
            "Government research",
            "Environmental applications",
          ],
          specifications: {
            "Temperature Range": "5°C ambient to 90°C",
            Holes: "6 or 12 holes",
            Material: "SS inner, MS/SS outer",
            Control: "Thermostat control",
          },
          models: [
            { type: "6 Holes", size: "350x250x100mm", power: "1000W" },
            { type: "12 Holes", size: "400x300x100mm", power: "1500W" },
          ],
          image: Laboratory_Water_Bath,
        },
      ],
    },
  ]

  return (
    <section id="equipment-catalog" className="py-8 sm:py-12 lg:py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-r from-slate-200 to-amber-200 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-gradient-to-r from-amber-200 to-slate-200 rounded-full opacity-10 animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Equipment Catalog</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Detailed specifications and technical information for our complete range of laboratory equipment
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
          <Button
            onClick={downloadPDF}
            className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-h-[44px]"
          >
            <FileText className="w-4 h-4 mr-2" />
            Download PDF Catalog
          </Button>
          <Button
            onClick={downloadExcel}
            className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-h-[44px]"
          >
            <FileSpreadsheet className="w-4 h-4 mr-2" />
            Download Excel Catalog
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-6 sm:mb-8 bg-white/80 backdrop-blur-sm h-auto p-1 gap-1">
            {equipmentCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-xs sm:text-sm p-2 sm:p-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-800 data-[state=active]:to-amber-700 data-[state=active]:text-white transition-all duration-300 min-h-[44px] flex flex-col sm:flex-row items-center justify-center"
              >
                <span className="text-base sm:text-lg mb-1 sm:mb-0 sm:mr-2">{category.icon}</span>
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden text-center leading-tight">{category.shortName}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {equipmentCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-in-up">
              <div className="grid gap-6 sm:gap-8">
                {category.equipment.map((equipment, index) => (
                  <Card
                    key={index}
                    className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                    onMouseEnter={() => setHoveredEquipment(equipment.name)}
                    onMouseLeave={() => setHoveredEquipment(null)}
                  >
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-slate-800 to-amber-700 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Zap className="w-6 h-6 text-white" />
                            </div>
                            <div className="min-w-0">
                              <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800 hover:text-amber-700 transition-colors break-words">
                                {equipment.name}
                              </CardTitle>
                              <Badge className="bg-gradient-to-r from-slate-800 to-amber-700 text-white mt-2 sm:mt-1">
                                Model: {equipment.model}
                              </Badge>
                            </div>
                          </div>
                          <CardDescription className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            {equipment.description}
                          </CardDescription>
                        </div>
                        <div className="relative w-full lg:w-48 flex justify-center lg:justify-end">
                          <ImageWithFallback
                            src={equipment.image || "/placeholder.svg"}
                            alt={equipment.name}
                            className="w-full max-w-48 h-50 object-cover rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
                            loading="lazy"
                          />
                          {hoveredEquipment === equipment.name && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-center justify-center">
                              <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg transform scale-0 animate-scale-in">
                                <span className="text-xs font-semibold text-gray-800">View Details</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6 p-4 sm:p-6 lg:mt-[-100px]">
                      <div className="animate-fade-in-up delay-200">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <span className="w-2 h-2 bg-amber-600 rounded-full mr-2 "></span>
                          Applications:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {equipment.applications.map((app, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2 hover:text-amber-600 transition-colors cursor-pointer p-2 rounded hover:bg-gray-50"
                            >
                              <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse flex-shrink-0"></span>
                              <span className="text-sm text-gray-600">{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="animate-fade-in-up delay-300">
                          <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                            <span className="w-2 h-2 bg-slate-600 rounded-full mr-2"></span>
                            Technical Specifications:
                          </h4>
                          <div className="space-y-2">
                            {Object.entries(equipment.specifications).map(([key, value]) => (
                              <div
                                key={key}
                                className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-200 hover:bg-gray-50 transition-colors rounded px-2 gap-1"
                              >
                                <span className="text-sm font-medium text-gray-700">{key}:</span>
                                <span className="text-sm text-gray-600 font-semibold">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="animate-fade-in-up delay-400">
                          <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                            <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
                            Available Models:
                          </h4>
                          <div className="space-y-3">
                            {equipment.models.map((model, idx) => (
                              <div
                                key={idx}
                                className="bg-gradient-to-r from-gray-50 to-amber-50 p-3 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105"
                              >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                                  {Object.entries(model).map(([key, value]) => (
                                    <div key={key} className="break-words">
                                      <span className="font-medium text-gray-700 capitalize">{key}: </span>
                                      <span className="text-gray-600 font-semibold">{value}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up delay-500">
                        <Button
                          className="w-full sm:w-auto bg-gradient-to-r from-slate-800 to-amber-700 hover:from-slate-900 hover:to-amber-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group min-h-[44px]"
                          onClick={() => scrollToSection("contact")}
                        >
                          <span>Request Quote</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full sm:w-auto border-slate-800 text-slate-800 hover:bg-slate-50 bg-transparent transform hover:scale-105 transition-all duration-300 group min-h-[44px]"
                          onClick={() => downloadSpecification(equipment.name)}
                        >
                          <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                          <span className="hidden sm:inline">Download Specifications</span>
                          <span className="sm:hidden">Download Specs</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
