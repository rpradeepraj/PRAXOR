"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, AlertCircle, CheckCircle } from "lucide-react"
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    productInterest: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone) => {
    if (!phone) return true // Phone is optional
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
  }

  const validateForm = () => {
    const newErrors = {}

    // Required field validations
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long'
    }

    // Optional field validations
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    return newErrors
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }

  }

  const sendEmail = async (templateParams: any) => {
    try {
      const result = await emailjs.send(
        'service_27mmv8o',
        'template_r4d1s9f',
        templateParams,
        {
          publicKey: 't8JXle3tKCOANC6at',
        }
      );
      return result;
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw error;
    }
  };

  // const sendEmail = async (templateParams:any) => {
  //   // Replace these with your actual EmailJS credentials
  //   const SERVICE_ID = 'service_27mmv8o' // Replace with your EmailJS service ID
  //   const TEMPLATE_ID = 'template_r4d1s9f' // Replace with your EmailJS template ID
  //   const PUBLIC_KEY = 't8JXle3tKCOANC6at' // Replace with your EmailJS public key

  //   try {
  //     // Load EmailJS if not already loaded
  //     if (!window.emailjs) {
  //       const script = document.createElement('script')
  //       script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'
  //       script.onload = () => {
  //         window.emailjs.init(PUBLIC_KEY)
  //       }
  //       document.head.appendChild(script)
        
  //       // Wait for script to load
  //       await new Promise(resolve => {
  //         script.onload = resolve
  //       })
  //     }

  //     const response = await window.emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
  //     return response
  //   } catch (error) {
  //     console.error('EmailJS Error:', error)
  //     throw error
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    const formErrors = validateForm()
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        organization: formData.organization || 'Not provided',
        product_interest: formData.productInterest || 'Not specified',
        message: formData.message,
        to_name: 'Praxor Scientific', // Your company name
        reply_to: formData.email
      }

      await sendEmail(templateParams)
      
      setSubmitStatus('success')
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        organization: '',
        productInterest: '',
        message: ''
      })
      setErrors({})
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800 text-sm sm:text-base">
                      Thank you for your message! We will contact you soon.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-800 text-sm sm:text-base">
                      Sorry, there was an error sending your message. Please try again or contact us directly.
                    </p>
                  </div>
                )}

                <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base ${
                          errors.fullName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-600 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Organization</label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="Your organization name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Product Interest</label>
                    <select 
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                    >
                      <option value="">Select product category</option>
                      <option value="Laboratory Chemicals">Laboratory Chemicals</option>
                      <option value="Laboratory Glassware">Laboratory Glassware</option>
                      <option value="Analytical Instruments">Analytical Instruments</option>
                      <option value="REMI Equipment">REMI Equipment</option>
                      <option value="Measuring Equipment">Measuring Equipment</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-slate-800 to-amber-700 hover:from-slate-900 hover:to-amber-800 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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