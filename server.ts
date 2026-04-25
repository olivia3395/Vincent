import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for AI van Gogh reply
  app.post("/api/ask-vangogh", async (req, res) => {
    const { letter } = req.body;
    
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "GEMINI_API_KEY is not configured" });
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `You are Vincent van Gogh. Please reply to this letter written to you:
      "${letter}"
      Write in a thoughtful, artistic, and reflective tone, as you would in your letters to Theo.`;

      const result = await model.generateContent(prompt);
      const reply = result.response.text();

      res.json({ reply });
    } catch (error) {
      console.error("Error generating reply:", error);
      res.status(500).json({ error: "Failed to generate reply" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
