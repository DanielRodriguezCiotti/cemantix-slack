import { serve } from "https://deno.land/std@0.119.0/http/server.ts";

async function handler(_req: Request): Promise<Response> {
  const body = await _req.json();
  const body_string = JSON.stringify(body);
  return new Response(body_string);
}

serve(handler);