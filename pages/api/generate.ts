import { OpenAIStream, OpenAIStreamPayload } from "../../utils/OpenAIStream";
import type { ChatGPTMessage } from "../../utils/OpenAIStream";
import { verifySignature } from "../../utils/auth";

export const config = {
  runtime: "edge",
  unstable_allowDynamic: [
    "/node_modules/js-sha256/src/sha256.js",
  ]
};

const handler = async (req: Request): Promise<Response> => {

  if (!process.env.NEXT_PUBLIC_USE_USER_KEY) {
    return new Response("NEXT_PUBLIC_USE_USER_KEY", {
      status: 501,
      statusText: "No environment variable set: NEXT_PUBLIC_USE_USER_KEY"
    });
  }
  if (process.env.NEXT_PUBLIC_USE_USER_KEY === 'false') {
    if (!process.env.OPENAI_API_KEY) {
      return new Response("OPENAI_API_KEY", {
        status: 501,
        statusText: "No environment variable set: OPENAI_API_KEY"
      });
    }
  }

  const { prompt, time, sign, api_key } = (await req.json()) as {
    prompt: ChatGPTMessage[];
    time: number;
    sign: string;
    api_key?: string;
  };

  if (!await verifySignature({
    t: time, m: prompt?.[prompt.length - 1]?.content || ''
  }, sign)) {
    return new Response("Invalid signature", { status: 400 });
  }

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: prompt,
    temperature: 0.8,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 2000,
    stream: true,
    n: 1,
    api_key,
  }

  const stream = await OpenAIStream(payload);
  return new Response(stream);
};

export default handler;
