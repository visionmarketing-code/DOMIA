import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Heart, Share, CheckCircle2 } from "lucide-react";

export default function PropertyDetails({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      {/* Navbar Minimal */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 dark:bg-dark/90 dark:border-dark-gray px-6 py-4">
        <div className="flex justify-between max-w-7xl mx-auto items-center">
          <Link href="/propiedades" className="text-primary font-medium flex items-center gap-2 hover:underline">
            ← Volver a resultados
          </Link>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <Heart size={18} className="mr-2" /> Guardar
            </Button>
            <Button variant="ghost" size="sm">
              <Share size={18} className="mr-2" /> Compartir
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-4">
        {/* Gallery Grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[50vh] rounded-3xl overflow-hidden mb-10">
          <div className="col-span-2 row-span-2 bg-gray-200 dark:bg-dark-gray hover:opacity-90 transition-opacity cursor-pointer bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80")' }}></div>
          <div className="bg-gray-200 dark:bg-dark-gray hover:opacity-90 transition-opacity cursor-pointer bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1502672260266-1c1de2d9d924?auto=format&fit=crop&w=600&q=80")' }}></div>
          <div className="bg-gray-200 dark:bg-dark-gray hover:opacity-90 transition-opacity cursor-pointer bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80")' }}></div>
          <div className="bg-gray-200 dark:bg-dark-gray hover:opacity-90 transition-opacity cursor-pointer bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80")' }}></div>
          <div className="bg-gray-200 dark:bg-dark-gray hover:opacity-90 transition-opacity cursor-pointer relative bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80")' }}>
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-medium hover:bg-black/50 transition-colors">Ver todas (15)</div>
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
            <div className="bg-blue-50/50 dark:bg-dark-gray p-6 rounded-2xl mb-8 border border-blue-100 dark:border-gray-800">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Despierta cada mañana con luz natural. Este depa de 120m² en el corazón de San Isidro redefine el confort. Cocina concepto abierto ideal para tus reuniones, acabados premium y balcón con excelente vista a la ciudad. El edificio cuenta con áreas comunes de última generación.
              </p>
            </div>
            
            <h2 className="text-xl font-bold mb-4 mt-8">Características Principales</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500"/> Pet Friendly</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500"/> Seguridad 24/7</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500"/> Ascensor Directo</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-500"/> Áreas Verdes</div>
            </div>
          </div>

          {/* Sticky Sidebar CTA */}
          <div className="md:w-1/3">
            <div className="sticky top-28 bg-white dark:bg-dark-gray rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
              <div className="text-3xl font-bold text-foreground mb-1">S/ 3,500 <span className="text-lg font-normal text-gray-500">/ mes</span></div>
              <p className="text-sm text-gray-500 mb-8">+ S/ 350 Mantenimiento</p>

              <Button variant="secondary" size="lg" fullWidth className="mb-4">
                Contactar al Propietario
              </Button>
              <Button variant="outline" size="lg" fullWidth>
                Agendar Visita
              </Button>

              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-xl font-bold">JP</div>
                <div>
                  <div className="font-bold text-foreground flex items-center gap-1">Juan Pérez <CheckCircle2 size={14} className="text-emerald-500"/></div>
                  <div className="text-sm text-gray-500 flex flex-col items-start gap-1 mt-1">
                    <span className="bg-gray-100 dark:bg-dark px-2 py-0.5 rounded text-xs -ml-1">Propietario</span>
                    Responde en ~5 min
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
