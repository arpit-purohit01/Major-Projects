import dotenv from 'dotenv'
import { GoogleGenAI } from "@google/genai";
dotenv.config()
const apiKey = process.env.API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });
  console.log(response.text);
}

export default main;