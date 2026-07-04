import { useState } from "react";
import "./AIChat.css";

function AIChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "Hello! 👋 I'm your AI Gaming Assistant. Ask me to recommend games based on category, budget, or rating."
    }
  ]);

  const sendMessage = async () => {
  if (message.trim() === "") return;

  const userMessage = message;

  // Show user message
  setMessages((prev) => [
    ...prev,
    { sender: "You", text: userMessage },
    { sender: "AI", text: "I'm thinking... 🤖" }
  ]);

  setMessage("");

  try {
    const response = await fetch("http://127.0.0.1:5000/ai/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: userMessage
      })
    });

    const data = await response.json();

    setMessages((prev) => {
      const updated = [...prev];
      updated[updated.length - 1] = {
        sender: "AI",
        text: data.reply
      };
      return updated;
    });

  } catch (error) {

    setMessages((prev) => {
      const updated = [...prev];
      updated[updated.length - 1] = {
        sender: "AI",
        text: "❌ Unable to connect to AI."
      };
      return updated;
    });

    console.error(error);
  }
};

  return (
    <div className="chat-container">

      <h1>🎮 AI Gaming Assistant</h1>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "You" ? "user-msg" : "ai-msg"}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask me about games..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={sendMessage}>
          Send
        </button>
      </div>

    </div>
  );
}

export default AIChat;