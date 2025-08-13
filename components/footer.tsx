import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-slate-800 to-amber-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">P</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">PRAXOR</h3>
                <p className="text-xs sm:text-sm text-gray-400">Instruments And Scientific Corporation</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Leading Stockist Dealers of Laboratory Chemicals, Glassware, Instruments, and Equipment since 1992.
              Serving Research, Analytical, Quality Control, and Teaching Laboratories with excellence.
            </p>
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-400 to-amber-400 bg-clip-text text-transparent">
              {"TOGETHER we perform Better"}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-amber-200 transition-colors text-sm sm:text-base">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#detailed-products"
                  className="text-gray-300 hover:text-amber-200 transition-colors text-sm sm:text-base"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#comprehensive-brands"
                  className="text-gray-300 hover:text-amber-200 transition-colors text-sm sm:text-base"
                >
                  Brands
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-amber-200 transition-colors text-sm sm:text-base">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-amber-200 transition-colors text-sm sm:text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Info</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-gray-300">
                PLOT NO 1-B 
                      <br />
                      PRAXOR HOUSE PURATASI STREET,
                      <br />
                      Balamurugan Nagar
                      <br />
                      Alapakkam, Porur
                      <br />
                      Chennai - 600116
                      <br />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-300">+91 95248 63004</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-300 break-all">proxorscientificco@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Praxor Instruments And Scientific Corporation. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
              Established 1992 | Trusted Laboratory Partner
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
