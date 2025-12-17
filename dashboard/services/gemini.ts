import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateDocumentation = async (
  systemName: string,
  sections: string[],
  onChunk: (text: string) => void
): Promise<string> => {
  try {
    const prompt = `
      You are a technical compliance officer for the UK Government. 
      Generate a draft Annex IV technical documentation snippet for an AI system named "${systemName}".
      
      Please generate content for the following sections: ${sections.join(', ')}.
      
      Tone: Professional, bureaucratic, precise, and technical.
      Format: Markdown. 
      Do not include preamble. Start directly with the content.
    `;

    const response = await ai.models.generateContentStream({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    let fullText = '';
    for await (const chunk of response) {
      if (chunk.text) {
        fullText += chunk.text;
        onChunk(fullText);
      }
    }
    return fullText;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};