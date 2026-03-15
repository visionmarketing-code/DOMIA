import Link from "next/link";
import { SlidersHorizontal, Map, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PropertyCard } from "@/components/property/PropertyCard";
import { getProperties } from "@/app/actions/property-actions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propiedades en Lima | Domia",
  description: "Encuentra departamentos, casas y locales en alquiler o venta en Lima, Perú. Usa Domia para buscar tu inmueble ideal con inteligencia artificial.",
};

export default async function SearchResults({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const type = params?.type as "sale" | "rent" | undefined;
  const properties = await getProperties({ type });

  return (
    <div className="flex flex-col h-screen md:flex-row bg-background">
      {/* Sidebar List */}
      <div className="w-full md:w-1/2 lg:w-[60%] flex flex-col h-full overflow-y-auto p-4 lg:p-6">
        
        {/* Navbar inside sidebar */}
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

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          <Link href="/propiedades">
            <Button variant={!type ? "primary" : "ghost"} size="sm">Todos</Button>
          </Link>
          <Link href="/propiedades?type=rent">
            <Button variant={type === "rent" ? "primary" : "ghost"} size="sm">Alquiler</Button>
          </Link>
          <Link href="/propiedades?type=sale">
            <Button variant={type === "sale" ? "primary" : "ghost"} size="sm">Venta</Button>
          </Link>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-foreground">
            {type === "rent" ? "En alquiler" : type === "sale" ? "En venta" : "Todas las propiedades"} en Lima
          </h1>
          <span className="text-sm text-gray-500 hidden sm:block">
            {properties.length} resultado{properties.length !== 1 ? "s" : ""}
          </span>
        </div>
        
        {/* Property Grid or Empty State */}
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-20">
            {properties.map((prop) => {
              const mainImage =
                prop.property_images?.find((img) => img.is_main)?.url ||
                prop.property_images?.[0]?.url ||
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80";

              return (
                <PropertyCard
                  key={prop.id}
                  id={prop.id}
                  title={prop.title}
                  price={prop.price}
                  location={`${prop.district}, ${prop.city}`}
                  area={prop.area_sqm}
                  rooms={prop.bedrooms}
                  bathrooms={prop.bathrooms}
                  isVerified={prop.is_verified}
                  imageUrl={mainImage}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-20">
            <div className="w-20 h-20 bg-gray-100 dark:bg-dark rounded-full flex items-center justify-center mb-6">
              <Building2 size={36} className="text-gray-400" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">Aún no hay propiedades publicadas</h2>
            <p className="text-gray-500 mb-8 max-w-sm">
              Sé el primero en publicar tu inmueble. Nuestro asistente de IA te ayudará a redactar el anuncio perfecto.
            </p>
            <Link href="/publicar">
              <Button variant="primary">Publicar mi Inmueble</Button>
            </Link>
          </div>
        )}
      </div>

      {/* Map View */}
      <div className="hidden md:block w-1/2 lg:w-[40%] bg-zinc-100 dark:bg-dark sticky top-0 h-screen border-l border-gray-200 dark:border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-dark-gray/50 z-10">
          <div className="bg-white/80 dark:bg-dark-gray/80 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 text-center max-w-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Map size={32} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Vista de Mapa Interactiva</h3>
            <p className="text-sm text-gray-500 mb-6">
              Conectando Mapbox para mostrar los inmuebles en el mapa muy pronto.
            </p>
            <Button variant="primary" size="sm" fullWidth>
              Próximamente
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
