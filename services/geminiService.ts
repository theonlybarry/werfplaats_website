import { GoogleGenAI } from "@google/genai";
import { PitchTone } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateRecruitmentPitch = async (jobTitle: string, tone: PitchTone): Promise<string> => {
  try {
    const prompt = `
      Schrijf een korte, pakkende recruitment 'hook' (maximaal 50 woorden) voor de functie: ${jobTitle}.
      De toon moet zijn: ${tone}.
      De doelgroep is Nederlands.
      Gebruik emoji's waar passend.
      Het doel is om mensen te laten klikken op een advertentie.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Kon geen tekst genereren. Probeer het later opnieuw.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Er is een fout opgetreden bij het genereren van de tekst.";
  }
};

export const remakeContent = async (currentContent: string, instruction: string): Promise<string> => {
  try {
    const prompt = `
      Je bent een expert copywriter en web editor.
      Herschrijf de volgende tekst op basis van deze instructie: "${instruction}".
      
      Huidige tekst: "${currentContent}"
      
      Regels:
      1. Geef ALLEEN de nieuwe tekst terug. Geen uitleg, geen aanhalingstekens rondom het antwoord.
      2. Houd de lengte ongeveer gelijk, tenzij de instructie anders zegt.
      3. Zorg dat het past binnen de context van een recruitment marketing website.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || currentContent;
  } catch (error) {
    console.error("Gemini API Error (Remake):", error);
    return currentContent;
  }
};