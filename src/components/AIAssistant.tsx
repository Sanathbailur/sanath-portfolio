import { useState } from "react";
import { Bot, Send } from "lucide-react";
import { assistantContext } from "@/data/assistantContext";

const OPENAI_API_KEY =
  "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";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm Sanath's AI Assistant. Ask me anything!" }
  ]);
  const [input, setInput] = useState("");

  // 📩 SEND MESSAGE (TEXT ONLY)
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput("");

    setMessages(prev => [...prev, { sender: "user", text: userMsg }]);

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: assistantContext },
          ...messages.map(m => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text,
          })),
          { role: "user", content: userMsg }
        ],
      }),
    });

    const data = await response.json();
    const botReply =
      data.choices?.[0]?.message?.content ||
      "Sorry, I couldn't answer that.";

    setMessages(prev => [...prev, { sender: "bot", text: botReply }]);
  };

  return (
    <>
      {/* ⭐ Floating Button */}
      <button
        id="ai-open"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <Bot className="h-6 w-6" />
      </button>

      {/* ⭐ AI Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-2xl border">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Bot className="h-5 w-5" /> AI Assistant
            </h3>
            <button onClick={() => setIsOpen(false)}>❌</button>
          </div>

          {/* Chat Messages */}
          <div className="h-64 overflow-y-auto mb-3 p-2 border rounded-lg">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 p-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-primary/20 text-right"
                    : "bg-muted"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Row */}
          <div className="flex gap-2 items-center">
            <input
              className="flex-1 border p-2 rounded-lg"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              className="bg-primary text-white p-2 rounded-lg"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
