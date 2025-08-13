import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { DetailedProducts } from "@/components/detailed-products"
import { EquipmentCatalog } from "@/components/equipment-catalog"
import { ComprehensiveBrands } from "@/components/comprehensive-brands"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-slate-100">
      <Header />
      <Hero />
      <DetailedProducts />
      <EquipmentCatalog />
      <ComprehensiveBrands />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
