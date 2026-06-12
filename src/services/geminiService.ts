export type ChatMessage = { role: 'user' | 'ai'; content: string };

type AiResponse = {
  response?: string;
  error?: string;
};

export const askCompanyAI = async (
  userQuestion: string,
  conversationHistory: ChatMessage[]
): Promise<string> => {
  const res = await fetch('/api/ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userQuestion, conversationHistory }),
  });

  const data = await res.json().catch(() => ({})) as AiResponse;

  if (!res.ok) {
    throw new Error(data.error || 'AI request failed');
  }

  return data.response || "I apologize, I couldn't generate a response at this moment.";
};
