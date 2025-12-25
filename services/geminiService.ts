
import { GoogleGenAI } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeMood = async (journalText: string) => {
  const ai = getAI();
  const prompt = `Act as an expert psychologist and emotional intelligence coach. 
  Analyze the following journal entry and provide a concise, empathetic insight and one actionable suggestion for the user. 
  Entry: "${journalText}"
  
  Return the response in JSON format:
  {
    "analysis": "A brief summary of what you detected in their mood and thoughts.",
    "suggestion": "One specific actionable advice for their day."
  }`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });
    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      analysis: "We're currently unable to analyze your entry, but reflecting is already a great step.",
      suggestion: "Take 3 deep breaths and focus on one small win from today."
    };
  }
};

export const generateChatResponse = async (history: { role: string, parts: { text: string }[] }[], message: string) => {
  const ai = getAI();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: 'You are Persona Assistant, a friendly and supportive emotional intelligence companion. Your goal is to help users process their feelings, explore triggers, and develop healthier mental habits. Always be empathetic, concise, and non-judgmental. If someone is in crisis, suggest professional help.'
    }
  });

  try {
    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm sorry, I hit a snag. How are you feeling otherwise?";
  }
};
