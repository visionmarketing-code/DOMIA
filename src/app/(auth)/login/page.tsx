"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Mail, Lock, ArrowRight, AlertCircle } from "lucide-react";
import { useState, useRef } from "react";
import { signIn } from "@/app/actions/auth-actions";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsLoading(true);
    setError(null);

    const formData = new FormData(formRef.current);
    const result = await signIn(formData);

    if (result?.error) {
      setError("Credenciales incorrectas. Verifica tu correo y contraseña.");
      setIsLoading(false);
    }
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

        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 text-red-700 dark:text-red-400 text-sm">
            <AlertCircle size={18} />
            {error}
          </div>
        )}

        <form ref={formRef} onSubmit={handleLogin} className="space-y-6">
          <Input 
            icon={Mail}
            name="email"
            type="email"
            label="Correo Electrónico"
            placeholder="tumail@ejemplo.com"
            required
          />
          
          <div>
            <Input 
              icon={Lock}
              name="password"
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
