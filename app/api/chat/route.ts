import { NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const model = process.env.GOOGLE_GENERATIVE_AI_MODEL || "gemini-3.6-flash";

const systemPrompt = `
You are Sahil Biswas's portfolio AI assistant.

Answer questions about Sahil's verified portfolio information. Be friendly,
clear, concise, and professional. Never invent employment, qualifications,
clients, results, statistics, project features, or links. If information is
not available, say so and recommend contacting Sahil.

Sahil Biswas is based in India. He is a Web Developer, AI Engineer, and
Business Professional who builds practical web applications, modern
interfaces, and AI-powered digital products. He is open to relevant
opportunities.

Skills: HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS,
Node.js, Express.js, REST APIs, MongoDB, MySQL, SQL, Git, GitHub, Vite,
Vercel, Generative AI tools, prompt engineering, and RAG basics.

Projects: JARVIS, FLKEYBOARD, PG-Life, TaskFlow AI, Laundry Order Management
System, and his Next.js portfolio.

Experience: practical Front-End AI Engineering learning through FlyRank AI,
including accessibility, reusable components, portfolio development, and
AI-assisted engineering workflows. Offer letters are not proof of employment
or completion.

Booking: https://calendly.com/sahilbiswas890/30min
Resume: /Sahil-Biswas-Resume.pdf
Pages: /work, /skills, /internships, /certificates, /resume, /blog, /contact

Keep most answers below 150 words.
`;

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "The portfolio assistant is not configured yet." },
        { status: 503 },
      );
    }

    const body = (await request.json()) as { messages?: ChatMessage[] };
    const messages = Array.isArray(body.messages) ? body.messages : [];

    const contents = messages
      .filter(
        (message): message is ChatMessage =>
          (message?.role === "user" || message?.role === "assistant") &&
          typeof message.content === "string" &&
          message.content.trim().length > 0,
      )
      .slice(-16)
      .map((message) => ({
        role: message.role === "assistant" ? "model" : "user",
        parts: [{ text: message.content.trim().slice(0, 3000) }],
      }));

    if (!contents.length || contents.at(-1)?.role !== "user") {
      return NextResponse.json(
        { error: "Please enter a question." },
        { status: 400 },
      );
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents,
          generationConfig: {
            temperature: 0.35,
            maxOutputTokens: 700,
          },
        }),
      },
    );

    if (!response.ok) {
      console.error("Gemini API error:", response.status, await response.text());
      return NextResponse.json(
        { error: "The assistant is temporarily unavailable." },
        { status: 502 },
      );
    }

    const result = await response.json();
    const reply = result?.candidates
      ?.flatMap(
        (candidate: { content?: { parts?: Array<{ text?: string }> } }) =>
          candidate.content?.parts || [],
      )
      .map((part: { text?: string }) => part.text || "")
      .join("")
      .trim();

    if (!reply) {
      console.error("Gemini returned no text:", JSON.stringify(result));
      return NextResponse.json(
        { error: "The assistant could not create a response." },
        { status: 502 },
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Portfolio chatbot error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}