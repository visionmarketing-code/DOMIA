import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { MapPin, KeyRound, ArrowRight } from "lucide-react";

export default function PublishWizard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black font-sans">
      <header className="w-full bg-white dark:bg-dark-gray border-b border-gray-100 dark:border-gray-800 px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary dark:text-white">
          Domia<span className="text-accent">.pe</span>
        </Link>
        <Button variant="ghost" size="sm">
          Guardar y salir
        </Button>
      </header>

      <main className="max-w-3xl mx-auto pt-16 px-4">
        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-12">
          {[1, 2, 3, 4, 5].map((step, idx) => (
            <div key={idx} className="flex items-center flex-1 last:flex-none">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step === 1 ? 'bg-primary text-white ring-4 ring-primary/20' : 'bg-gray-200 text-gray-400 dark:bg-dark dark:text-gray-600'}`}>
                {step}
              </div>
              {step !== 5 && <div className={`h-1 flex-1 mx-2 rounded-full ${step < 1 ? 'bg-primary' : 'bg-gray-200 dark:bg-dark'}`}></div>}
            </div>
          ))}
        </div>

        {/* Wizard Content (Step 1) */}
        <div className="bg-white dark:bg-dark-gray rounded-3xl shadow-sm p-8 md:p-12 border border-gray-100 dark:border-gray-800">
          <h1 className="text-3xl font-bold text-foreground mb-2">¿Qué tipo de propiedad vas a publicar?</h1>
          <p className="text-gray-500 mb-8">Paso 1 de 5: Información básica de tu inmueble.</p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="border-2 border-primary bg-blue-50 dark:bg-dark p-6 rounded-2xl flex flex-col items-center gap-3 text-primary font-bold shadow-sm">
              <KeyRound size={32} className="text-primary" />
              Alquiler
            </button>
            <button className="border border-gray-200 dark:border-gray-700 hover:border-primary/50 p-6 rounded-2xl flex flex-col items-center gap-3 text-foreground font-medium transition-colors">
              <span className="text-3xl leading-none">V</span>
              Venta
            </button>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold text-foreground mb-2">Tipo de Inmueble</label>
            <select className="w-full bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 p-3.5 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground">
              <option>Departamento</option>
              <option>Casa</option>
              <option>Cuarto / Habitación</option>
              <option>Oficina</option>
              <option>Local Comercial</option>
            </select>
          </div>

          <div className="mb-12">
            <Input 
              icon={MapPin}
              label="Ubicación exacta"
              placeholder="Ej. Calle Las Camelias 123, San Isidro"
            />
          </div>

          <div className="flex justify-between items-center border-t border-gray-100 dark:border-gray-800 pt-8 mt-8">
            <Button variant="ghost">Cancelar</Button>
            <Button variant="primary">
              Siguiente Paso <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
