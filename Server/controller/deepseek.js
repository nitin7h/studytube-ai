import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const apiKey = process.env.DEEPSEEK_API_KEY;
const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: apiKey,
});

export async function deepseekController(chatData) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: chatData }],
    model: "deepseek-chat",
  });
  console.log(completion.choices[0].message.content);
  return completion.choices[0].message.content;
}
