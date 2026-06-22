"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, ArrowUpRight } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  time: string;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome to Shahroze Studio. I am your design assistant. How can I help you discover our collections today?",
      sender: "bot",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Math.random().toString(),
      text: inputValue,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    const userText = inputValue.toLowerCase();
    setInputValue("");
    setIsTyping(true);

    // Auto replies based on keywords
    setTimeout(() => {
      let replyText = "I've passed your request to our customer care team. For instant assistance, you can also text us directly on WhatsApp using the icon at the bottom-left of the page!";
      
      if (userText.includes("order") || userText.includes("track")) {
        replyText = "To check your order status, please navigate to the Account section. For custom inquiries, please share your order number (e.g. ORD-9284-SS).";
      } else if (userText.includes("size") || userText.includes("sizing") || userText.includes("fit")) {
        replyText = "Our garments feature a relaxed streetwear fit. We recommend ordering your true size. You can see specific fabric details and chest measurements on each individual product page.";
      } else if (userText.includes("shipping") || userText.includes("deliver")) {
        replyText = "We offer free express shipping on orders over Rs. 5,000. Standard orders take 3-5 business days within Pakistan, and 7-14 business days internationally.";
      } else if (userText.includes("return") || userText.includes("refund")) {
        replyText = "We offer a 30-day return policy for unworn items in original packaging. You can read the full step-by-step instructions on our Returns & Refund Policy page.";
      } else if (userText.includes("discount") || userText.includes("coupon") || userText.includes("promo")) {
        replyText = "You can use code 'WELCOME10' at checkout to receive 10% off your initial order, or 'STUDIO20' for 20% off!";
      }

      const botMessage: Message = {
        id: Math.random().toString(),
        text: replyText,
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      {/* Mini Toggle Chat Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-luxury-black text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl dark:bg-white dark:text-luxury-black"
          aria-label="Open Live Chat"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="flex h-[450px] w-[330px] flex-col rounded-xl border border-luxury-border bg-white shadow-2xl transition-colors duration-300 dark:border-luxury-charcoal dark:bg-luxury-charcoal sm:w-[360px]">
          
          {/* Header */}
          <div className="flex items-center justify-between bg-luxury-black px-4 py-3.5 text-white rounded-t-xl dark:bg-luxury-beige-dark dark:text-luxury-black">
            <div className="flex items-center space-x-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase">STUDIO ASSISTANT</p>
                <p className="text-[9px] opacity-75">Online • Typically replies instantly</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="opacity-75 hover:opacity-100 transition-opacity"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Message List Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-luxury-lightGray/40 dark:bg-luxury-black/20">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col max-w-[80%] ${
                  msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                }`}
              >
                <div
                  className={`rounded-xl px-3 py-2 text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-luxury-black text-white rounded-tr-none dark:bg-white dark:text-luxury-black"
                      : "bg-white text-luxury-black border border-luxury-border rounded-tl-none dark:bg-luxury-charcoal dark:text-white dark:border-luxury-charcoal/60 shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-luxury-gray mt-1 px-1 dark:text-luxury-beige/50">
                  {msg.time}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex flex-col items-start max-w-[80%]">
                <div className="rounded-xl px-4 py-2 bg-white text-luxury-black border border-luxury-border rounded-tl-none dark:bg-luxury-charcoal dark:border-luxury-charcoal/60 shadow-sm flex items-center space-x-1.5">
                  <span className="h-1.5 w-1.5 bg-luxury-gray rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="h-1.5 w-1.5 bg-luxury-gray rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="h-1.5 w-1.5 bg-luxury-gray rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          <div className="px-4 py-2 border-t border-luxury-border/60 bg-white flex flex-wrap gap-1.5 dark:bg-luxury-charcoal dark:border-luxury-charcoal/60">
            <button
              onClick={() => {
                setInputValue("How is the sizing fit?");
              }}
              className="text-[9px] tracking-wider uppercase border border-luxury-border px-2 py-1 rounded-full text-luxury-gray hover:bg-luxury-lightGray dark:border-luxury-charcoal/60 dark:hover:bg-luxury-black dark:text-luxury-beige/80"
            >
              Sizing Fit
            </button>
            <button
              onClick={() => {
                setInputValue("How do I track my order?");
              }}
              className="text-[9px] tracking-wider uppercase border border-luxury-border px-2 py-1 rounded-full text-luxury-gray hover:bg-luxury-lightGray dark:border-luxury-charcoal/60 dark:hover:bg-luxury-black dark:text-luxury-beige/80"
            >
              Track Order
            </button>
            <button
              onClick={() => {
                setInputValue("Can I get a discount code?");
              }}
              className="text-[9px] tracking-wider uppercase border border-luxury-border px-2 py-1 rounded-full text-luxury-gray hover:bg-luxury-lightGray dark:border-luxury-charcoal/60 dark:hover:bg-luxury-black dark:text-luxury-beige/80"
            >
              Discount Codes
            </button>
          </div>

          {/* Message input */}
          <form
            onSubmit={handleSendMessage}
            className="flex items-center p-3 border-t border-luxury-border bg-white rounded-b-xl transition-colors duration-300 dark:border-luxury-charcoal dark:bg-luxury-charcoal"
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-transparent text-xs text-luxury-black outline-none placeholder:text-luxury-gray/70 dark:text-white"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-1 text-luxury-black hover:text-luxury-gray dark:text-white dark:hover:text-luxury-beige disabled:opacity-35"
              aria-label="Send message"
            >
              <Send className="h-4.5 w-4.5" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
