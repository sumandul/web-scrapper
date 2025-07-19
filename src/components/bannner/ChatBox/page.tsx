"use client";
import React, { useState } from "react";

export default function ChatBox({ jobId }: { jobId: string }) {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ job_id: jobId, message: userMessage.content }),
      });
      const data = await res.json();
      const botMessage = { role: "bot", content: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (e) {
      setMessages((prev) => [...prev, { role: "bot", content: "⚠️ Failed to get response." }]);
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 mt-6">
      <h2 className="text-white text-xl font-semibold mb-3">💬 Chat with AI on this content</h2>
      <div className="space-y-2 max-h-80 overflow-y-auto mb-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded ${
              msg.role === "user" ? "bg-blue-600 text-white self-end ml-auto w-fit" : "bg-gray-700 text-gray-100"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          placeholder="Ask something about this article..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded text-white font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
