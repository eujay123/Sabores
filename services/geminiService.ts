import { GoogleGenAI, Type } from "@google/genai";
import { RecommendationResponse } from "../types";

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCakeRecommendation = async (
  occasion: string,
  preferences: string,
  guestCount: number
): Promise<RecommendationResponse> => {
  try {
    const model = ai.models;
    
    const prompt = `
      Atue como um chef confeiteiro de classe mundial da confeitaria "Sabores".
      O cliente está pedindo uma recomendação para um evento.
      
      Detalhes do evento:
      - Ocasião: ${occasion}
      - Preferências de sabor/tema: ${preferences}
      - Número de convidados: ${guestCount}

      Sugira um bolo principal e acompanhamentos doces que combinem perfeitamente.
      Seja sofisticado, criativo e apetitoso nas descrições.
    `;

    const response = await model.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "Você é um consultor especialista em confeitaria fina. Suas respostas devem ser em Português do Brasil, elegantes e focadas em vender a experiência 'Sabores'.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            cakeSuggestion: {
              type: Type.STRING,
              description: "Nome criativo e descrição visual do bolo principal.",
            },
            flavorProfile: {
              type: Type.STRING,
              description: "Descrição detalhada dos sabores (massa, recheio, cobertura).",
            },
            suggestedSweets: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Lista de 3 a 4 docinhos finos que harmonizam com o bolo.",
            },
            reasoning: {
              type: Type.STRING,
              description: "Uma breve explicação de por que essa combinação é perfeita para a ocasião.",
            },
          },
          required: ["cakeSuggestion", "flavorProfile", "suggestedSweets", "reasoning"],
        },
      },
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("No response from AI");
    }

    return JSON.parse(resultText) as RecommendationResponse;

  } catch (error) {
    console.error("Error fetching recommendation:", error);
    throw error;
  }
};

export const generateProductImage = async (productName: string, description: string): Promise<string | null> => {
  try {
    const model = ai.models;
    const prompt = `Professional food photography of ${productName}: ${description}. High resolution, delicious, bakery style, soft lighting, photorealistic, 4k.`;

    const response = await model.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        }
      }
    });

    // Iterate through parts to find the image
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};
