"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock,Instagram, Facebook } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ready to serve your laboratory needs. Contact us for quotes, product information, or any assistance you
            need.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card className="bg-gradient-to-br from-slate-800 to-amber-700 text-white border-0 h-full">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl font-bold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Address</h3>
                    <p className="opacity-90 text-xs sm:text-sm leading-relaxed">
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
                      {/* (Opp to Viveks Showroom Porur) */}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Phone</h3>
                    <p className="opacity-90 text-sm sm:text-base">+91 95248 63004</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Email</h3>
                    <p className="opacity-90 text-xs sm:text-sm break-all">proxorscientificco@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Business Hours</h3>
                    <p className="opacity-90 text-xs sm:text-sm">
                      Mon - Sat: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="flex space-x-2">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-sm sm:text-base">Follow Us</h3>
              <div className="flex space-x-4 text-xs sm:text-sm">
                <a
                  href="https://www.instagram.com/praxorindia/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity underline"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/PRAXORCHENNAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity underline"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <form
                  className="space-y-4 sm:space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    alert("Thank you for your message! We will contact you soon.")
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Organization</label>
                      <input
                        type="text"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="Your organization name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Product Interest</label>
                    <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base">
                      <option>Select product category</option>
                      <option>Laboratory Chemicals</option>
                      <option>Laboratory Glassware</option>
                      <option>Analytical Instruments</option>
                      <option>REMI Equipment</option>
                      <option>Measuring Equipment</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-slate-800 to-amber-700 hover:from-slate-900 hover:to-amber-800 text-sm sm:text-base"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800 to-amber-700 text-white p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Need Urgent Requirements?</h3>
            <p className="text-base sm:text-lg mb-6 opacity-90 px-4">
              {"When your requirements are urgent, 'PRAXOR' should be your natural choice."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <Button
                size="lg"
                className="bg-white text-slate-800 hover:bg-gray-100 w-full sm:w-auto text-sm sm:text-base"
                onClick={() => window.open("tel:+919524863004", "_self")}
              >
                Call Now: +91 95248 63004
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-800 bg-transparent w-full sm:w-auto text-sm sm:text-base"
                onClick={() => window.open("mailto:proxorscientificco@gmail.com", "_self")}
              >
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
