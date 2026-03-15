"use server";

import { GoogleGenAI } from '@google/genai';

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generatePropertyDescription(
  propertyType: string, 
  location: string, 
  bedrooms: number | string, 
  bathrooms: number | string, 
  area: number | string,
  extraFeatures: string = ""
) {
  try {
    const prompt = `
      Actúa como un experto agente inmobiliario peruano (escribiendo en español latino, claro y vendedor).
      Basándote en los siguientes datos de una propiedad, escribe una descripción atractiva de máximo 2 párrafos 
      para publicarla en un portal inmobiliario web. 
      Destaca los beneficios de vivir ahí e invita al usuario a agendar una visita.

      Datos de la propiedad:
      - Tipo: ${propertyType}
      - Ubicación: ${location}
      - Habitaciones: ${bedrooms}
      - Baños: ${bathrooms}
      - Área total: ${area} m²
      - Extras / Amenidades: ${extraFeatures || 'Ninguna mencionada'}

      REGLA: Tu respuesta debe ser SOLO la descripción atractiva, sin saludos ni introducciones tipo "Aquí tienes la descripción:".
    `;

    // Make the request to Gemini API securely from the server
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: prompt,
    });

    return { 
      success: true, 
      text: response.text 
    };

  } catch (error) {
    console.error("Error generating AI description:", error);
    return { 
      success: false, 
      error: "No pudimos conectar con nuestra IA en este momento. Intenta redactar una descripción manual." 
    };
  }
}
