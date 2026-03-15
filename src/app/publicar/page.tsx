"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { MapPin, KeyRound, ArrowRight, ArrowLeft, Wand2, Loader2, CheckCircle2 } from "lucide-react";
import { generatePropertyDescription } from "@/app/actions/ai-actions";

export default function PublishWizard() {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    purpose: "Alquiler",
    type: "Departamento",
    location: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    extras: "",
    aiDescription: ""
  });

  const handleGenerateAI = async () => {
    setIsGenerating(true);
    const result = await generatePropertyDescription(
      formData.type,
      formData.location,
      formData.bedrooms || "0",
      formData.bathrooms || "0",
      formData.area || "0",
      formData.extras
    );
    
    if (result.success && result.text) {
      setFormData({ ...formData, aiDescription: result.text });
    } else {
      alert(result.error || "Hubo un error al generar la descripción.");
    }
    setIsGenerating(false);
  };

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
          {[1, 2, 3, 4, 5].map((s, idx) => (
            <div key={idx} className="flex items-center flex-1 last:flex-none">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${s === step ? 'bg-primary text-white ring-4 ring-primary/20' : s < step ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-400 dark:bg-dark dark:text-gray-600'}`}>
                {s < step ? <CheckCircle2 size={16} /> : s}
              </div>
              {s !== 5 && <div className={`h-1 flex-1 mx-2 rounded-full transition-all duration-300 ${s < step ? 'bg-emerald-500' : 'bg-gray-200 dark:bg-dark'}`}></div>}
            </div>
          ))}
        </div>

        {/* Wizard Content Container */}
        <div className="bg-white dark:bg-dark-gray rounded-3xl shadow-sm p-8 md:p-12 border border-gray-100 dark:border-gray-800 transition-all">
          
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="text-3xl font-bold text-foreground mb-2">¿Qué tipo de propiedad vas a publicar?</h1>
              <p className="text-gray-500 mb-8">Paso 1 de 5: Información básica de tu inmueble.</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <button 
                  onClick={() => setFormData({...formData, purpose: "Alquiler"})}
                  className={`p-6 rounded-2xl flex flex-col items-center gap-3 font-bold transition-all ${formData.purpose === "Alquiler" ? "border-2 border-primary bg-blue-50 dark:bg-dark text-primary shadow-sm" : "border border-gray-200 dark:border-gray-700 text-foreground"}`}
                >
                  <KeyRound size={32} className={formData.purpose === "Alquiler" ? "text-primary" : "text-gray-400"} />
                  Alquiler
                </button>
                <button 
                  onClick={() => setFormData({...formData, purpose: "Venta"})}
                  className={`p-6 rounded-2xl flex flex-col items-center gap-3 font-bold transition-all ${formData.purpose === "Venta" ? "border-2 border-primary bg-blue-50 dark:bg-dark text-primary shadow-sm" : "border border-gray-200 dark:border-gray-700 text-foreground"}`}
                >
                  <span className={`text-3xl leading-none ${formData.purpose === "Venta" ? "text-primary" : "text-gray-400"}`}>V</span>
                  Venta
                </button>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-foreground mb-2">Tipo de Inmueble</label>
                <select 
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="w-full bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 p-3.5 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground"
                >
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
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>

              <div className="flex justify-between items-center border-t border-gray-100 dark:border-gray-800 pt-8 mt-8">
                <Button variant="ghost">Cancelar</Button>
                <Button variant="primary" onClick={() => setStep(2)}>
                  Siguiente Paso <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <h1 className="text-3xl font-bold text-foreground mb-2">Características y Magia IA ⚡</h1>
              <p className="text-gray-500 mb-8">Paso 2 de 5: Cuéntanos cómo es y nuestra IA redactará el anuncio perfecto.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <Input label="Área total (m²)" type="number" placeholder="Ej. 120" value={formData.area} onChange={(e) => setFormData({...formData, area: e.target.value})} />
                <Input label="Habitaciones" type="number" placeholder="Ej. 3" value={formData.bedrooms} onChange={(e) => setFormData({...formData, bedrooms: e.target.value})} />
                <Input label="Baños" type="number" placeholder="Ej. 2" value={formData.bathrooms} onChange={(e) => setFormData({...formData, bathrooms: e.target.value})} />
              </div>

              <div className="mb-6">
                <Input label="Extras (Opcional)" placeholder="Ej. Piscina, vista al mar, pet friendly..." value={formData.extras} onChange={(e) => setFormData({...formData, extras: e.target.value})} />
              </div>

              {/* AI Description Generator */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-dark-gray dark:to-dark p-6 rounded-2xl mb-12 border border-blue-100 dark:border-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="flex items-center gap-2 font-bold text-primary dark:text-blue-400">
                      <Wand2 size={18} /> Asistente de Redacción IA
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">Genera una descripción irresistible basada en los datos anteriores.</p>
                  </div>
                  <Button onClick={handleGenerateAI} disabled={isGenerating} variant="primary" size="sm">
                    {isGenerating ? <><Loader2 size={16} className="mr-2 animate-spin"/> Escribiendo...</> : "Generar Texto"}
                  </Button>
                </div>
                
                <textarea 
                  value={formData.aiDescription}
                  onChange={(e) => setFormData({...formData, aiDescription: e.target.value})}
                  placeholder="Tu descripción aparecerá aquí... O puedes escribirla manualmente si lo prefieres."
                  className="w-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-4 min-h-[150px] outline-none focus:border-primary transition-all text-foreground resize-none"
                />
              </div>

              <div className="flex justify-between items-center border-t border-gray-100 dark:border-gray-800 pt-8 mt-8">
                <Button variant="ghost" onClick={() => setStep(1)}>
                  <ArrowLeft size={18} className="mr-2" /> Atrás
                </Button>
                <Button variant="primary" onClick={() => setStep(3)}>
                  Siguiente Paso <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {step > 2 && (
             <div className="animate-in fade-in slide-in-from-right-8 duration-500 text-center py-12">
               <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle2 size={40} />
               </div>
               <h2 className="text-2xl font-bold mb-2">¡Magia lista para la Demo!</h2>
               <p className="text-gray-500 mb-8 max-w-md mx-auto">La integración con Gemini se ha completado en el paso 2. El resto de pasos (fotos y precio) se desarrollarán en la fase de Producción.</p>
               <Button onClick={() => setStep(2)} variant="outline">Volver a Probar la IA</Button>
             </div>
          )}

        </div>
      </main>
    </div>
  );
}
