import Link from "next/link";

export default function PropertyDetails({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      {/* Navbar Minimal */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 dark:bg-dark/90 dark:border-dark-gray px-6 py-4">
        <div className="flex justify-between max-w-7xl mx-auto">
          <Link href="/propiedades" className="text-primary font-medium flex items-center gap-2">
            ← Volver a resultados
          </Link>
          <div className="flex gap-4">
            <button className="text-gray-500 hover:text-red-500">❤️ Guardar</button>
            <button className="text-gray-500 hover:text-primary">🔗 Compartir</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-4">
        {/* Gallery Grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[50vh] rounded-3xl overflow-hidden mb-10">
          <div className="col-span-2 row-span-2 bg-gray-200 dark:bg-dark-gray hover:opacity-90 transition-opacity cursor-pointer"></div>
          <div className="bg-gray-200 dark:bg-dark-gray hover:opacity-90 transition-opacity cursor-pointer"></div>
          <div className="bg-gray-200 dark:bg-dark-gray hover:opacity-90 transition-opacity cursor-pointer"></div>
          <div className="bg-gray-200 dark:bg-dark-gray hover:opacity-90 transition-opacity cursor-pointer"></div>
          <div className="bg-gray-200 dark:bg-dark-gray hover:opacity-90 transition-opacity cursor-pointer relative">
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-medium">Ver todas (15)</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Main Info */}
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold text-foreground mb-2">Exclusivo Departamento en San Isidro con Vista</h1>
            <p className="text-gray-500 mb-6">Av. Javier Prado Oeste 1234, San Isidro, Lima</p>
            
            <div className="flex items-center gap-6 py-6 border-y border-gray-100 dark:border-gray-800 mb-8">
              <div className="flex flex-col"><span className="font-bold text-foreground">120</span> <span className="text-sm text-gray-500">m² Totales</span></div>
              <div className="flex flex-col"><span className="font-bold text-foreground">3</span> <span className="text-sm text-gray-500">Habitaciones</span></div>
              <div className="flex flex-col"><span className="font-bold text-foreground">2.5</span> <span className="text-sm text-gray-500">Baños</span></div>
              <div className="flex flex-col"><span className="font-bold text-foreground">1</span> <span className="text-sm text-gray-500">Cochera</span></div>
            </div>

            <h2 className="text-xl font-bold mb-4">Descripción generada por IA ⚡</h2>
            <div className="bg-blue-50 dark:bg-dark-gray p-6 rounded-2xl mb-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Despierta cada mañana con luz natural. Este depa de 120m² en el corazón de San Isidro redefine el confort. Cocina concepto abierto ideal para tus reuniones, acabados premium y balcón con excelente vista a la ciudad. El edificio cuenta con áreas comunes de última generación.
              </p>
            </div>
          </div>

          {/* Sticky Sidebar CTA */}
          <div className="md:w-1/3">
            <div className="sticky top-28 bg-white dark:bg-dark-gray rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
              <div className="text-3xl font-bold text-foreground mb-1">S/ 3,500 <span className="text-lg font-normal text-gray-500">/ mes</span></div>
              <p className="text-sm text-gray-500 mb-8">+ S/ 350 Mantenimiento</p>

              <button className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 rounded-2xl transition-colors shadow-lg shadow-accent/20 mb-4">
                Contactar al Propietario
              </button>
              <button className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-dark dark:hover:bg-black font-medium text-foreground py-4 rounded-2xl transition-colors">
                Agendar Visita
              </button>

              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-bold text-foreground flex items-center gap-2">Juan Pérez <span className="text-accent text-sm">✔ Verificado</span></div>
                  <div className="text-sm text-gray-500">Propietario / Responde en 5 min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
