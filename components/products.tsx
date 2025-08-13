"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FlaskRoundIcon as Flask, Microscope, Thermometer, Zap, Beaker, Settings } from "lucide-react"

export function Products() {
  const products = [
    {
      icon: Flask,
      title: "Laboratory Chemicals",
      description: "High-quality chemicals from leading brands like Merck, Sigma Aldrich, Loba, and more.",
      color: "from-slate-700 to-slate-800",
      image: "/images/chemical-bottles.png",
    },
    {
      icon: Beaker,
      title: "Laboratory Glassware",
      description: "Premium glassware from Borosil, Glassco, and other trusted manufacturers.",
      color: "from-amber-600 to-amber-700",
      image: "/images/glassware-collection.png",
    },
    {
      icon: Microscope,
      title: "Analytical Instruments",
      description: "Advanced instruments including microscopes, spectrophotometers, and chromatography systems.",
      color: "from-slate-600 to-slate-700",
      image: "/images/scientific-instruments.png",
    },
    {
      icon: Thermometer,
      title: "Measuring Equipment",
      description: "Precision instruments like pH meters, thermometers, hydrometers, and balances.",
      color: "from-amber-700 to-amber-800",
      image: "/images/scientific-instruments.png",
    },
    {
      icon: Zap,
      title: "REMI Equipment",
      description: "Complete range of REMI products including centrifuges, incubators, and autoclaves.",
      color: "from-slate-800 to-amber-600",
      image: "/images/scientific-instruments.png",
    },
    {
      icon: Settings,
      title: "Lab Equipment",
      description: "Hot air ovens, water baths, stirrers, and other essential laboratory equipment.",
      color: "from-amber-800 to-slate-700",
      image: "/images/scientific-instruments.png",
    },
  ]

  return (
    <section id="products" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Product Range</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive laboratory solutions for Research, Analytical, Quality Control, and Teaching Laboratories
            since 1992.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader>
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800 to-amber-700 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Need Something Specific?</h3>
            <p className="text-lg mb-6 opacity-90">
              {"Can't find what you're looking for? We stock thousands of products from leading manufacturers."}
            </p>
            <button
              className="bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
