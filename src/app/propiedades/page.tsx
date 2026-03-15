import Link from "next/link";
import { SlidersHorizontal, Map } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PropertyCard } from "@/components/property/PropertyCard";

export default function SearchResults() {
  
  // Dummy data generated for the MVP view
  const dummyProperties = [
    { id: 1, title: "Moderno Depa con Vista al Mar", price: 3200, location: "Miraflores, Lima", area: 90, rooms: 2, bathrooms: 2, isVerified: true, imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Amplio Flat cerca a Parque Kennedy", price: 2800, location: "Miraflores, Lima", area: 75, rooms: 1, bathrooms: 1, isVerified: false, imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1de2d9d924?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Duplex Exclusivo en Zona Financiera", price: 4500, location: "San Isidro, Lima", area: 120, rooms: 3, bathrooms: 3, isVerified: true, imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "Acogedor departamento de estreno", price: 2100, location: "Surco, Lima", area: 65, rooms: 2, bathrooms: 1, isVerified: true, imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "Penthouse con Piscina Privada", price: 6500, location: "San Isidro, Lima", area: 200, rooms: 4, bathrooms: 4, isVerified: true, imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "Departamento amoblado ideal para expats", price: 3500, location: "Barranco, Lima", area: 85, rooms: 2, bathrooms: 2, isVerified: true, imageUrl: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80" },
  ];

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
            <Button variant="outline" size="sm">
              <SlidersHorizontal size={16} className="mr-2" /> Filtros
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-foreground">Departamentos en alquiler en Lima</h1 >
          <span className="text-sm text-gray-500 hidden sm:block">Mostrando {dummyProperties.length} resultados</span>
        </div>
        
        {/* Grid of property cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-20">
          {dummyProperties.map((prop) => (
            <PropertyCard 
              key={prop.id}
              id={prop.id}
              title={prop.title}
              price={prop.price}
              location={prop.location}
              area={prop.area}
              rooms={prop.rooms}
              bathrooms={prop.bathrooms}
              isVerified={prop.isVerified}
              imageUrl={prop.imageUrl}
            />
          ))}
        </div>
      </div>

      {/* Map View */}
      <div className="hidden md:block w-1/2 lg:w-[40%] bg-zinc-100 dark:bg-dark sticky top-0 h-screen border-l border-gray-200 dark:border-gray-800 relative overflow-hidden">
        {/* Decorative Map Pattern instead of blank div */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cartographer.png")' }}></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-dark-gray/50 z-10">
          <div className="bg-white/80 dark:bg-dark-gray/80 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 text-center max-w-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Map size={32} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Vista de Mapa Interactiva</h3>
            <p className="text-sm text-gray-500 mb-6">Estamos conectando los servidores de Mapbox para mostrarte los inmuebles directamente aquí en tu próxima visita.</p>
            <Button variant="primary" size="sm" fullWidth>
              Simular Carga de Mapa
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
