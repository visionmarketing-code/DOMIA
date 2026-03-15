import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { signOut } from "@/app/actions/auth-actions";
import { Home, PlusCircle, Settings, LogOut, Building2, Eye, TrendingUp } from "lucide-react";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const fullName = user.user_metadata?.full_name || user.email;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-dark-gray border-r border-gray-100 dark:border-gray-800 flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800">
          <Link href="/" className="text-2xl font-bold text-primary">
            Domia<span className="text-accent">.pe</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 dark:bg-dark text-primary font-semibold text-sm">
            <Home size={18} /> Panel Principal
          </Link>
          <Link href="/publicar" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark font-medium text-sm transition-colors">
            <PlusCircle size={18} /> Publicar Inmueble
          </Link>
          <Link href="/dashboard/propiedades" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark font-medium text-sm transition-colors">
            <Building2 size={18} /> Mis Propiedades
          </Link>
          <Link href="/dashboard/configuracion" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark font-medium text-sm transition-colors">
            <Settings size={18} /> Configuración
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-100 dark:border-gray-800">
          <form action={signOut}>
            <button type="submit" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 font-medium text-sm transition-colors">
              <LogOut size={18} /> Cerrar Sesión
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-foreground">
            ¡Hola, {fullName?.split(" ")[0]}! 👋
          </h1>
          <p className="text-gray-500 mt-1">Aquí tienes un resumen de tu actividad en Domia.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { label: "Propiedades Activas", value: "0", icon: Building2, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
            { label: "Visitas Recibidas", value: "0", icon: Eye, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
            { label: "Consultas", value: "0", icon: TrendingUp, color: "text-violet-500", bg: "bg-violet-50 dark:bg-violet-900/20" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-dark-gray rounded-2xl p-6 border border-gray-100 dark:border-gray-800 flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center`}>
                <stat.icon size={24} className={stat.color} />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-8 text-white flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Publica tu primer inmueble</h2>
            <p className="text-blue-100">Llega a miles de personas buscando propiedades en el Perú.</p>
          </div>
          <Link href="/publicar" className="ml-4 flex-shrink-0 bg-white text-primary font-bold px-6 py-3 rounded-2xl hover:bg-blue-50 transition-colors flex items-center gap-2 whitespace-nowrap">
            <PlusCircle size={18} /> Publicar Ahora
          </Link>
        </div>
      </main>
    </div>
  );
}
