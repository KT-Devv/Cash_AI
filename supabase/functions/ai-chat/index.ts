// @deno-types="npm:@types/node@20.11.24"
import { createClient } from "npm:@huggingface/inference@2.6.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Content-Type": "application/json"
};

// Initialize Hugging Face client with environment variable
const hf = createClient({
  accessToken: Deno.env.get("HF_ACCESS_TOKEN") || "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"
});

Deno.serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    // Validate request method
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        { status: 405, headers: corsHeaders }
      );
    }

    // Parse and validate request body
    const { message } = await req.json();
    if (!message?.trim()) {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Generate response with better banking-specific prompt
    const response = await hf.textGeneration({
      model: "meta-llama/Meta-Llama-3-8B-Instruct", // Use a more capable model
      inputs: `[INST] <<SYS>>
        You are a helpful banking assistant. Provide concise, professional answers about:
        - Account balances
        - Transaction history
        - Fund transfers
        - Loan applications
        - Security issues
        <</SYS>>
        ${message} [/INST]`,
      parameters: {
        max_new_tokens: 150,
        temperature: 0.7,
        top_p: 0.9,
        repetition_penalty: 1.1
      }
    });

    // Sanitize and format response
    const cleanResponse = response.generated_text
      .replace(/<\/?s>/g, "") // Remove any XML tags
      .split("\n")[0] // Take first line
      .trim();

    return new Response(
      JSON.stringify({ response: cleanResponse }),
      { headers: corsHeaders }
    );

  } catch (error) {
    console.error("Server Error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Internal server error",
        message: error.message 
      }),
      { status: 500, headers: corsHeaders }
    );
  }
});