"use server";

import { createClient } from "@/lib/supabase/server";
import type { Property } from "@/types/property";

// Fetch all active properties (with optional filters)
export async function getProperties(filters?: {
  type?: "sale" | "rent";
  district?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
}): Promise<Property[]> {
  const supabase = await createClient();

  let query = supabase
    .from("properties")
    .select("*, property_images(*)")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (filters?.type) {
    query = query.eq("type", filters.type);
  }
  if (filters?.district) {
    query = query.ilike("district", `%${filters.district}%`);
  }
  if (filters?.minPrice) {
    query = query.gte("price", filters.minPrice);
  }
  if (filters?.maxPrice) {
    query = query.lte("price", filters.maxPrice);
  }
  if (filters?.bedrooms) {
    query = query.eq("bedrooms", filters.bedrooms);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching properties:", error);
    return [];
  }

  return (data as Property[]) || [];
}

// Fetch a single property by ID
export async function getPropertyById(id: string): Promise<Property | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("properties")
    .select("*, property_images(*)")
    .eq("id", id)
    .eq("is_active", true)
    .single();

  if (error) {
    console.error("Error fetching property:", error);
    return null;
  }

  return data as Property;
}

// Fetch recent properties (for home page)
export async function getRecentProperties(limit = 6): Promise<Property[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("properties")
    .select("*, property_images(*)")
    .eq("is_active", true)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching recent properties:", error);
    return [];
  }

  return (data as Property[]) || [];
}
