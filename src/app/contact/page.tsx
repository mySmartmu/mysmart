'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MessageSquare, Loader2 } from 'lucide-react';
import { askCompanyAI, ChatMessage } from '@/services/geminiService';

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'ai'>('form');

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  // AI Chat State
  const [messages, setMessages] = useState<{role: 'user' | 'ai', content: string}[]>([
    { role: 'ai', content: "Hi! I'm the mySmart AI Assistant. I can answer questions about mySmart Ltd, our products, and our services. How can I help you?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await askCompanyAI(userMsg, messages);
      setMessages(prev => [...prev, { role: 'ai', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: "Sorry, I'm having trouble connecting to the network." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left Side: Info */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-smart-dark mb-6">Let's build something smart together.</h1>
          <p className="text-lg md:text-xl text-smart-gray mb-6 md:mb-12">
            Whether you want to digitise your operations, build a custom AI-powered application, or explore our product suite, our team is ready.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-smart-blue/10 flex items-center justify-center text-smart-dark">
                <MessageSquare size={20} />
              </div>
              <div>
                <h3 className="font-bold text-smart-dark text-lg">Sales Inquiry</h3>
                <p className="text-smart-gray">sales@mysmart.mu</p>
                <p className="text-smart-gray">+230 58535757</p>
                <p className="text-smart-gray text-sm mt-1">For general enquiries, use the contact form.</p>
              </div>
            </div>

            <div className="p-6 bg-smart-dark rounded-2xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                  <Sparkles className="text-smart-blue" size={20} />
                  Try mySmart AI
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Have questions right now? Switch to the AI tab to chat with our intelligent assistant.
                </p>
                <button
                  onClick={() => setActiveTab('ai')}
                  className="text-sm font-semibold text-smart-blue hover:text-white transition-colors underline"
                >
                  Start Chatting &rarr;
                </button>
              </div>
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-smart-blue/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Card */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-smart-gray/10 overflow-hidden min-h-[400px] md:min-h-[500px] flex flex-col">
          {/* Tab Header */}
          <div className="flex border-b border-gray-100">
            <button
              onClick={() => setActiveTab('form')}
              className={`flex-1 py-4 text-sm font-semibold transition-colors ${activeTab === 'form' ? 'bg-white text-smart-dark border-b-2 border-smart-dark' : 'bg-gray-50 text-smart-gray'}`}
            >
              Contact Form
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`flex-1 py-4 text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${activeTab === 'ai' ? 'bg-white text-smart-dark border-b-2 border-smart-blue' : 'bg-gray-50 text-smart-gray'}`}
            >
              <Sparkles size={14} className={activeTab === 'ai' ? 'text-smart-blue' : ''} />
              AI Assistant
            </button>
          </div>

          {/* Content */}
          <div className="p-4 md:p-8 flex-1 flex flex-col">
            {activeTab === 'form' ? (
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block text-xs font-semibold text-smart-gray uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-smart-blue transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-smart-gray uppercase mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-smart-blue transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-smart-gray uppercase mb-1">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-smart-blue transition-colors h-32 resize-none"
                    placeholder="I'm interested in..."
                  />
                </div>
                {formStatus === 'success' && (
                  <p className="text-green-600 text-sm font-medium">Message sent! We'll be in touch shortly.</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again or email us directly.</p>
                )}
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full py-4 bg-smart-dark text-white rounded-lg font-bold hover:bg-smart-dark/90 transition-all mt-4 disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {formStatus === 'loading' ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : 'Send Message'}
                </button>
              </form>
            ) : (
              <div className="flex flex-col h-[350px] md:h-[450px]">
                <div ref={chatContainerRef} className="flex-1 overflow-y-auto space-y-4 pr-2 mb-4 scrollbar-thin">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] md:max-w-[80%] p-3 md:p-4 rounded-2xl text-sm ${
                        msg.role === 'user'
                          ? 'bg-smart-dark text-white rounded-br-none'
                          : 'bg-smart-blue/10 text-smart-dark rounded-bl-none'
                      }`}>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-smart-blue/10 p-4 rounded-2xl rounded-bl-none flex items-center gap-2">
                        <Loader2 className="animate-spin text-smart-blue" size={16} />
                        <span className="text-xs text-smart-gray">Thinking...</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask about mySmart products..."
                    className="w-full pl-4 pr-12 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-smart-blue shadow-sm text-sm md:text-base"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isLoading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-smart-blue text-white rounded-full flex items-center justify-center hover:bg-smart-blue/90 disabled:opacity-50"
                  >
                    <Send size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
