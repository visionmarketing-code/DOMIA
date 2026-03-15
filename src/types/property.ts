// TypeScript types for Domia Real Estate Platform

export type PropertyType = 
  | "apartment" 
  | "house" 
  | "room" 
  | "office" 
  | "commercial";

export type ListingPurpose = "sale" | "rent";

export type Property = {
  id: string;
  created_at: string;
  title: string;
  description: string | null;
  ai_description: string | null;
  price: number;
  currency: "PEN" | "USD";
  type: ListingPurpose;
  property_type: PropertyType;
  address: string;
  district: string;
  city: string;
  lat: number | null;
  lng: number | null;
  area_sqm: number;
  bedrooms: number;
  bathrooms: number;
  parking_spots: number;
  is_verified: boolean;
  is_active: boolean;
  owner_id: string;
  property_images?: PropertyImage[];
};

export type PropertyImage = {
  id: string;
  property_id: string;
  url: string;
  is_main: boolean;
  created_at: string;
};

// Helper to format price in Peruvian format
export function formatPrice(price: number, currency: "PEN" | "USD" = "PEN"): string {
  if (currency === "USD") {
    return `$${price.toLocaleString("en-US")}`;
  }
  return `S/ ${price.toLocaleString("es-PE")}`;
}
