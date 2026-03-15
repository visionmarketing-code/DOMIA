import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navbar (Placeholder) */}
      <header className="w-full flex justify-between items-center px-6 py-4 fixed top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 dark:bg-dark/80 dark:border-dark-gray">
        <div className="text-2xl font-bold text-primary dark:text-white">
          Domia<span className="text-accent">.pe</span>
        </div>
        <nav className="hidden md:flex gap-6 font-medium text-foreground">
          <Link href="/propiedades" className="hover:text-primary transition-colors">Explorar Propiedades</Link>
          <Link href="/agentes" className="hover:text-primary transition-colors">Agentes</Link>
          <Link href="/nosotros" className="hover:text-primary transition-colors">Nosotros</Link>
        </nav>
        <div className="flex gap-4">
          <Link 
            href="/login" 
            className="hidden md:flex items-center font-medium hover:text-primary transition-colors"
          >
            Iniciar Sesión
          </Link>
          <Link 
            href="/publicar" 
            className="bg-accent hover:bg-accent-dark text-white px-5 py-2 rounded-full font-medium transition-colors shadow-lg shadow-accent/30"
          >
            Publicar Inmueble
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-blue-50 to-background dark:from-dark-gray dark:to-dark">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground dark:text-white max-w-4xl mx-auto mb-6">
          Tu próximo hogar, <br className="hidden sm:block"/>
          <span className="text-primary">sin complicaciones.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          Busca, encuentra y múdate. La plataforma inmobiliaria más avanzada del Perú. 
          Alquila o compra con máxima seguridad.
        </p>

        {/* Search Widget */}
        <div className="w-full max-w-4xl bg-white dark:bg-dark-gray rounded-3xl shadow-xl p-2 sm:p-4 mb-16 border border-gray-100 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex bg-gray-100 dark:bg-dark p-1 rounded-2xl sm:w-1/3">
              <button className="flex-1 bg-white dark:bg-dark-gray shadow-sm rounded-xl py-3 text-sm font-semibold transition-all">
                Alquilar
              </button>
              <button className="flex-1 py-3 text-sm font-semibold text-gray-500 hover:text-foreground transition-all">
                Comprar
              </button>
            </div>
            
            <div className="flex-1 flex bg-gray-50 dark:bg-dark rounded-2xl items-center px-4 relative">
              <span className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </span>
              <input 
                type="text" 
                placeholder="Ej. Miraflores, San Isidro, Surco..." 
                className="w-full bg-transparent border-none focus:ring-0 px-3 py-4 text-foreground outline-none placeholder:text-gray-400"
              />
            </div>

            <button className="bg-primary hover:bg-primary-dark text-white rounded-2xl px-8 py-4 font-semibold transition-colors sm:w-auto w-full flex justify-center items-center gap-2">
              Buscar
            </button>
          </div>
        </div>

        {/* Value Props / Social Proof */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl w-full mx-auto text-center opacity-80">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-foreground dark:text-white">+5,000</span>
            <span className="text-sm font-medium text-gray-500">Inmuebles Verificados</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-foreground dark:text-white">100%</span>
            <span className="text-sm font-medium text-gray-500">Transparencia</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-foreground dark:text-white">IA</span>
            <span className="text-sm font-medium text-gray-500">Búsqueda Inteligente</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-foreground dark:text-white">24/7</span>
            <span className="text-sm font-medium text-gray-500">Soporte Continuo</span>
          </div>
        </div>
      </main>

      {/* Popular locations snippet */}
      <section className="py-20 px-6 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-foreground">Destinos más buscados en Lima</h2>
          <div className="flex flex-wrap gap-4">
            {["Miraflores", "San Isidro", "Santiago de Surco", "La Molina", "Barranco", "San Borja", "Magdalena del Mar", "Lince", "San Miguel"].map(district => (
              <a 
                key={district} 
                href={`/propiedades/lima/${district.toLowerCase().replace(/ /g, '-')}`}
                className="px-6 py-3 rounded-full border border-gray-200 dark:border-gray-800 hover:border-primary hover:text-primary dark:hover:border-primary transition-colors text-sm font-medium"
              >
                {district}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
