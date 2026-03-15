"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  fullWidth = false,
  className = "",
  ...props 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-colors outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary/50 shadow-md shadow-primary/20",
    secondary: "bg-accent text-white hover:bg-accent-dark focus:ring-accent/50 shadow-md shadow-accent/20",
    outline: "border-2 border-primary text-primary hover:bg-blue-50 dark:hover:bg-primary/10",
    ghost: "text-gray-600 hover:text-foreground hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-gray dark:hover:text-white"
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  );
}
