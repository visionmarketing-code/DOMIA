"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Mail, Lock, User, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { useState, useRef } from "react";
import { signUp } from "@/app/actions/auth-actions";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState<"seeker" | "owner">("seeker");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsLoading(true);
    setError(null);

    const formData = new FormData(formRef.current);
    formData.append("user_type", userType);

    const result = await signUp(formData);

    if (result?.error) {
      setError(result.error);
      setIsLoading(false);
    } else {
      setSuccess(true);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black p-4">
        <div className="w-full max-w-md bg-white dark:bg-dark-gray rounded-3xl shadow-xl p-12 text-center border border-gray-100 dark:border-gray-800">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-2xl font-bold mb-2">¡Cuenta creada!</h2>
          <p className="text-gray-500 mb-8">Revisa tu correo electrónico para confirmar tu cuenta y acceder.</p>
          <Link href="/login">
            <Button variant="primary" fullWidth>Ir a Iniciar Sesión</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black p-4 py-12">
      <div className="w-full max-w-md bg-white dark:bg-dark-gray rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
        
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold text-primary dark:text-white inline-block mb-2">
            Domia<span className="text-accent">.pe</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground mt-4">Crear una cuenta</h1>
          <p className="text-gray-500 mt-2">Únete a la nueva era inmobiliaria del Perú.</p>
        </div>

        {/* User Type Selection */}
        <div className="flex p-1 bg-gray-100 dark:bg-dark rounded-xl mb-8">
          <button 
            type="button"
            onClick={() => setUserType("seeker")}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${userType === "seeker" ? "bg-white dark:bg-dark-gray text-primary shadow-sm" : "text-gray-500 hover:text-foreground"}`}
          >
            Busco Propiedad
          </button>
          <button 
            type="button"
            onClick={() => setUserType("owner")}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${userType === "owner" ? "bg-white dark:bg-dark-gray text-primary shadow-sm" : "text-gray-500 hover:text-foreground"}`}
          >
            Soy Propietario
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-700 dark:text-red-400 text-sm">
            <AlertCircle size={18} />
            {error}
          </div>
        )}

        <form ref={formRef} onSubmit={handleRegister} className="space-y-5">
          <Input 
            icon={User}
            name="full_name"
            type="text"
            label="Nombre Completo"
            placeholder="Juan Pérez"
            required
          />

          <Input 
            icon={Mail}
            name="email"
            type="email"
            label="Correo Electrónico"
            placeholder="tumail@ejemplo.com"
            required
          />
          
          <Input 
            icon={Lock}
            name="password"
            type="password"
            label="Contraseña"
            placeholder="Mínimo 8 caracteres"
            required
          />

          <Button 
            type="submit" 
            variant="primary" 
            fullWidth 
            disabled={isLoading}
            className="h-12 mt-6"
          >
            {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
            {!isLoading && <ArrowRight size={18} className="ml-2" />}
          </Button>
        </form>

        <p className="mt-6 text-xs text-center text-gray-500">
          Al registrarte, aceptas nuestros <Link href="/terminos" className="text-primary hover:underline">Términos de Servicio</Link> y <Link href="/privacidad" className="text-primary hover:underline">Políticas de Privacidad</Link>.
        </p>

        <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-100 dark:border-gray-800 pt-6">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/login" className="text-primary font-bold hover:underline">
            Inicia sesión aquí
          </Link>
        </div>
      </div>
    </div>
  );
}
