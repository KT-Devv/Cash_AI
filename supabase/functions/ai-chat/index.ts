// @deno-types="npm:@types/node@20.11.24"
import { createClient } from "npm:@huggingface/inference@2.6.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Content-Type": "application/json"
};

const hf = createClient({
  accessToken: "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"
});

Deno.serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders
    });
  }

  try {
    const { message } = await req.json();

    if (!message) {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        {
          status: 400,
          headers: corsHeaders
        }
      );
    }

    // Process the message using the HuggingFace API
    const response = await hf.textGeneration({
      model: "gpt2",
      inputs: `Banking Assistant: ${message}\nResponse:`,
      parameters: {
        max_length: 150,
        temperature: 0.7,
        top_p: 0.9,
        return_full_text: false
      }
    });

    return new Response(
      JSON.stringify({ response: response.generated_text }),
      { headers: corsHeaders }
    );

  } catch (error) {
    console.error("Error processing request:", error);
    
    return new Response(
      JSON.stringify({ 
        error: "Failed to process request",
        details: error.message 
      }),
      { 
        status: 500,
        headers: corsHeaders
      }
    );
  }
});