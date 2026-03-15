import Link from "next/link";

export default function SearchResults() {
  return (
    <div className="flex flex-col h-screen md:flex-row bg-background">
      {/* Sidebar List */}
      <div className="w-full md:w-1/2 lg:w-[60%] flex flex-col h-full overflow-y-auto p-4 lg:p-6 custom-scrollbar">
        
        {/* Navbar inside sidebar for clean layout */}
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
          <Link href="/" className="text-2xl font-bold text-primary dark:text-white">
            Domia<span className="text-accent">.pe</span>
          </Link>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-100 dark:bg-dark-gray rounded-full text-sm font-medium">Filtros</button>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-4">Departamentos en alquiler en Lima</h1 >
        
        {/* Grid of property cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Link href={`/propiedades/${i}`} key={i} className="group flex flex-col bg-white dark:bg-dark-gray rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gray-200 dark:bg-dark w-full relative">
                {/* Placeholder Image */}
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-dark/90 px-3 py-1 rounded-full text-xs font-bold text-emerald-600">Verificado</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-foreground">S/ 2,500 <span className="text-sm text-gray-400 font-normal">/ mes</span></h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-1">Hermoso depa en Miraflores con vista al mar</p>
                <div className="flex gap-4 mt-3 text-sm text-gray-500">
                  <span>80 m²</span>
                  <span>2 Hab.</span>
                  <span>2 Baños</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Map View */}
      <div className="hidden md:block w-1/2 lg:w-[40%] bg-blue-50 dark:bg-dark sticky top-0 h-screen border-l border-gray-200 dark:border-gray-800 relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
          {/* Map Placeholder Text */}
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto mb-2 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <p className="font-semibold text-gray-500">Mapa Interactivo de Zona</p>
            <p className="text-sm text-gray-400">(Integración Mapbox pendiente)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
