import { LucideIcon } from "lucide-react";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon: Icon, label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="block text-sm font-medium text-foreground mb-2">{label}</label>}
        <div className="relative flex items-center">
          {Icon && (
            <span className="absolute left-4 text-gray-400">
              <Icon size={20} />
            </span>
          )}
          <input
            ref={ref}
            className={`
              w-full bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 
              rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary 
              transition-all text-foreground placeholder-gray-400
              ${Icon ? "pl-12 pr-4 py-3.5" : "px-4 py-3.5"}
              ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
              ${className}
            `}
            {...props}
          />
        </div>
        {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
