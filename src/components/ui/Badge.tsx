export function Badge({ 
  children, 
  variant = "success" 
}: { 
  children: React.ReactNode, 
  variant?: "success" | "warning" | "info" | "default" 
}) {
  const variants = {
    success: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    warning: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    info: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    default: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 ${variants[variant]}`}>
      {children}
    </span>
  );
}
