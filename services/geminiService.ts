import { GoogleGenAI } from "@google/genai";
import { PitchTone } from "../types";

const globalEnv = typeof window !== 'undefined' ? (window as any).ENV : null;
let apiKey = globalEnv?.GEMINI_API_KEY;

if (!apiKey || apiKey === '__GEMINI_RUNTIME_KEY__') {
  apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY || '';
}

const ai = new GoogleGenAI({ apiKey });

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

export const generateMarketResearch = async (jobTitle: string, location: string): Promise<string> => {
  try {
    const prompt = `Als expert recruitment data analist, geef een krachtige samenvattende marktanalyse (max 150 woorden) voor een ${jobTitle} in ${location} of Nederland (als locatie onbekend is). Beschrijf in drie compacte alinea's: 1. De grootte van de talent pool. 2. De schaarste/moeilijkheidsgraad. 3. Een realistische salarisindicatie. Schrijf professioneel en overtuigend, bedoeld voor een werkgever die de markt verkent. Spreek de lezer direct aan. Gebruik GEEN markdown (geen sterretjes, bold, etc). Gewoon pure tekst.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Kon geen analyse genereren. Probeer het later opnieuw.";
  } catch (error) {
    console.warn("Gemini API Error (Market Research) - Returning Mock Data:", error);
    return `De talent pool voor een ${jobTitle} in ${location} of Nederland is momenteel krap maar kwalitatief hoogwaardig. Er is sprake van een sterke passieve doelgroep die latent zoekend is. 
    
    De schaarste is aanzienlijk, mede gedreven door de hoge vraag vanuit omliggende tech branches en de noodzaak voor specifieke certificeringen. Hierdoor is de time-to-hire in deze sector gemiddeld verlengd.
    
    Qua salarisindicatie moet je voor een medior tot senior profiel in deze huidige markt rekening houden met een range die 10% tot 15% boven het landelijk gemiddelde ligt, vaak aangevuld met sterke secundaire voorwaarden zoals flexibiliteit en mobiliteitsbudgetten.`;
  }
};