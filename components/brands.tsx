export function Brands() {
  const brands = [
    "Merck",
    "Fisher Scientific",
    "Loba",
    "Rankem",
    "SD Fine",
    "Spectrochem",
    "Finar",
    "Himedia",
    "Sigma Aldrich",
    "Fluka",
    "Lancaster",
    "Borosil",
    "Tarsons",
    "Polylab",
    "Whatman",
    "Sartorius",
    "Pall",
    "Olympus",
    "Getner",
    "Ajay",
    "REMI",
    "Shimadzu",
    "Thermo Fisher",
    "Eppendorf",
    "TCI Chemicals",
    "Eutech",
    "Acros Organics",
    "Glassco",
    "Deep Vision",
  ]

  return (
    <section id="brands" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Authorized Stockist & Dealer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are proud stockist dealers of leading international and national brands in laboratory equipment and
            chemicals.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-slate-600 to-amber-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">{brand.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-gray-800 text-sm">{brand}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-800 to-amber-700 text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ready Stock Available</h3>
          <p className="text-lg opacity-90 mb-6">
            Most items available from our ready stock for immediate supply. When your requirements are urgent, PRAXOR
            should be your natural choice.
          </p>
          <div className="text-3xl font-bold">{"TOGETHER we perform Better"}</div>
        </div>
      </div>
    </section>
  )
}
