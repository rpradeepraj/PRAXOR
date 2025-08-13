import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Truck, Clock, Award } from "lucide-react"
import { ImageWithFallback } from "./image-with-fallback"
import missionImg from "../images/laboratory-setup.png"

export function About() {
  const features = [
    {
      icon: Award,
      title: "30+ Years Experience",
      description: "Serving laboratories since 1992 with dedication and expertise.",
      color: "from-slate-700 to-amber-700",
    },
    {
      icon: Truck,
      title: "Own Transportation",
      description: "We have our own transportation and staff facilities for timely delivery.",
      color: "from-amber-600 to-slate-600",
    },
    {
      icon: Clock,
      title: "Ready Stock",
      description: "Most items available from ready stock for immediate supply.",
      color: "from-slate-600 to-amber-600",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "All products sourced from authorized dealers and manufacturers.",
      color: "from-amber-700 to-slate-700",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-white/50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-slate-200 to-amber-200 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-amber-200 to-slate-200 rounded-full opacity-10 animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Praxor Instruments</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are pleased to introduce ourselves as one of the leading Stockist Dealers of Laboratory Chemicals,
              Laboratory Glassware, Instruments, Equipment, and All Laboratory Products since 1992.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The company deals with all items for Research, Analytical, Quality Control and Teaching Laboratories. We
              serve Educational institutions, Physics, Chemistry, Biology Research Labs, Clinical, Testing & Industrial
              Laboratory needs.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 group cursor-pointer transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-amber-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <Card className="bg-gradient-to-br from-slate-50 to-amber-50 border-0 shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="rounded-t-lg overflow-hidden relative">
                <ImageWithFallback
                  src={missionImg}
                  alt="Modern Laboratory Setup"
                  className="w-full h-48 object-cover transform hover:scale-110 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-slate-800 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:scale-110 transition-all duration-300">
                    <span className="text-white font-bold text-2xl">P</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h3>
                </div>
                <blockquote className="text-lg text-gray-700 italic text-center leading-relaxed mb-6">
                  "Our mission is to emerge as a leading vendor for Laboratory Instruments, Chemicals, Equipment &
                  Glassware in domestic and international markets. We continuously innovate and create value for people
                  associated with us beyond their expectations while enhancing our marketing capabilities, improving
                  quality and services, and being socially responsible."
                </blockquote>
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-amber-700 bg-clip-text text-transparent">
                    Since 1992
                  </div>
                  <p className="text-gray-600">Trusted Laboratory Partner</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-slate-100 to-amber-100 rounded-lg transform hover:scale-105 transition-all duration-300">
                  <p className="text-sm text-gray-700 italic text-center leading-relaxed">
                    "A customer is the most important visitor on our premises. He is not dependent on us. We are
                    dependent on him. He is not an interruption in our work. He is the purpose of it. We are not doing
                    him a favor by serving him. He is doing us a favor by giving us an opportunity to do so."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
