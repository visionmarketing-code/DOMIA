"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Connect mapped Supabase function
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black p-4">
      <div className="w-full max-w-md bg-white dark:bg-dark-gray rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
        
        <div className="text-center mb-10">
          <Link href="/" className="text-3xl font-bold text-primary dark:text-white inline-block mb-2">
            Domia<span className="text-accent">.pe</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground mt-4">Iniciar Sesión</h1>
          <p className="text-gray-500 mt-2">Bienvenido de vuelta a tu plataforma inmobiliaria.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <Input 
            icon={Mail}
            type="email"
            label="Correo Electrónico"
            placeholder="tumail@ejemplo.com"
            required
          />
          
          <div>
            <Input 
              icon={Lock}
              type="password"
              label="Contraseña"
              placeholder="••••••••"
              required
            />
            <div className="flex justify-end mt-2">
              <Link href="/recuperar" className="text-sm text-primary font-medium hover:underline">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            fullWidth 
            disabled={isLoading}
            className="h-12 mt-4"
          >
            {isLoading ? "Iniciando sesión..." : "Ingresar"}
            {!isLoading && <ArrowRight size={18} className="ml-2" />}
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          ¿No tienes una cuenta?{" "}
          <Link href="/registro" className="text-primary font-bold hover:underline">
            Regístrate aquí
          </Link>
        </div>
      </div>
    </div>
  );
}
