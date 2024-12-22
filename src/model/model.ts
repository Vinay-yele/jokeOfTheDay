import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
process.env.GOOGLE_API_KEY = "AIzaSyBH9LQDCaV9UNlkt8ZiU-ZKs3L2BIXXWZU";


const model = new ChatGoogleGenerativeAI({
  model: "gemini-pro",
  maxOutputTokens: 2048,
});

// Batch and stream are also supported
export const res =async ()=>{ 
    
  const data=  await model.invoke([
  [
    "human",
    "Tell me a nice joke? new one everytime I ask you",
  ],
]);

return data?.content

}
