
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;
let currentLang: 'en' | 'fr' | null = null;

export const initializeChat = (lang: 'en' | 'fr'): Chat => {
  // Maintaining a stateful session for continuity in the conversation.
  // Re-initialize if language changes significantly.
  if (chatSession && currentLang === lang) return chatSession;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  currentLang = lang;
  
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are the 'Pro Athlete Assistant'. 
      Your tone is supportive, expert, and professional. 
      You help coaches, parents, athletes, and athletic directors understand injury prevention, performance metrics, and training optimization.
      Focus on science-backed advice but keep it accessible.
      If asked about pricing, reference the 14-day free trial.
      Keep responses under 60 words.
      CRITICAL: You must respond exclusively in ${lang === 'en' ? 'English' : 'French'}.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string, lang: 'en' | 'fr'): Promise<string> => {
  if (!process.env.API_KEY) return "Service connection required.";

  try {
    const chat = initializeChat(lang);
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || (lang === 'en' ? "I'm having trouble connecting." : "J'ai du mal à me connecter.");
  } catch (error) {
    console.error("Gemini Error:", error);
    if (error instanceof Error && error.message.includes("Requested entity was not found")) {
      chatSession = null;
    }
    return lang === 'en' ? "Error syncing with systems." : "Erreur lors de la synchronisation.";
  }
};
