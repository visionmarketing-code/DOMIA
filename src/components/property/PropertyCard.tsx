"use client";

import { motion } from "framer-motion";
import { Maximize, BedDouble, Bath, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

interface PropertyCardProps {
  id: string | number;
  title: string;
  price: number;
  currency?: "S/" | "USD";
  period?: "/ mes" | "";
  location: string;
  area: number;
  rooms: number;
  bathrooms: number;
  imageUrl?: string;
  isVerified?: boolean;
}

export function PropertyCard({
  id,
  title,
  price,
  currency = "S/",
  period = "/ mes",
  location,
  area,
  rooms,
  bathrooms,
  imageUrl = "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  isVerified = true
}: PropertyCardProps) {
  return (
    <Link href={`/propiedades/${id}`} className="block h-full cursor-pointer">
      <motion.div 
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex flex-col h-full bg-white dark:bg-dark-gray rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:border-primary/50 transition-all duration-300"
      >
        {/* Image Container */}
        <div className="relative h-56 w-full overflow-hidden bg-gray-200 dark:bg-dark">
          {/* Fallback image strategy - real images would use next/image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
          
          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {isVerified && (
              <Badge variant="success">
                <CheckCircle2 size={12} className="mr-1" /> Verificado
              </Badge>
            )}
          </div>
          
          <div className="absolute top-4 right-4">
            <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="mb-2">
            <span className="text-2xl font-bold text-primary dark:text-white">
              {currency}{price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 font-medium ml-1">{period}</span>
          </div>
          
          <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-1">{title}</h3>
          
          <p className="flex items-center text-sm text-gray-500 mb-4 line-clamp-1">
            <MapPin size={14} className="mr-1 inline text-primary" /> {location}
          </p>
          
          {/* Divider */}
          <div className="mt-auto mb-4 border-t border-gray-100 dark:border-gray-800" />
          
          {/* Features */}
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 font-medium">
            <div className="flex items-center gap-1">
              <Maximize size={16} className="text-gray-400" /> {area}m²
            </div>
            <div className="flex items-center gap-1">
              <BedDouble size={16} className="text-gray-400" /> {rooms}
            </div>
            <div className="flex items-center gap-1">
              <Bath size={16} className="text-gray-400" /> {bathrooms}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
