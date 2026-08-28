
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { translations } from '../translations';

interface AIChatProps {
  lang: 'en' | 'fr';
}

const AIChat: React.FC<AIChatProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].ai;
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: t.initialMessage }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset initial message when language changes if no conversation has started
    if (messages.length === 1) {
      setMessages([{ role: 'model', text: t.initialMessage }]);
    }
  }, [lang]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    const responseText = await sendMessageToGemini(input, lang);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-6 w-[90vw] md:w-[400px] bg-[#002337]/95 backdrop-blur-3xl border border-white/20 rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <div className="bg-[#005776] p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-white" />
                <h3 className="font-heading font-black italic text-white tracking-widest text-sm uppercase">{t.assistantName}</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-50 transition-opacity">
                <X size={20} />
              </button>
            </div>

            <div 
              ref={chatContainerRef}
              className="h-[400px] overflow-y-auto p-8 space-y-6 scroll-smooth"
            >
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-3xl text-sm leading-relaxed ${
                    msg.role === 'user' ? 'bg-[#005776] text-white font-semibold' : 'bg-[#005776]/10 text-white border border-white/20'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#005776]/10 p-4 rounded-full flex gap-2">
                    <span className="w-1.5 h-1.5 bg-[#005776] rounded-full animate-pulse" />
                    <span className="w-1.5 h-1.5 bg-[#005776] rounded-full animate-pulse delay-75" />
                    <span className="w-1.5 h-1.5 bg-[#005776] rounded-full animate-pulse delay-150" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-white/10 bg-[#005776]/5">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={t.placeholder}
                  className="flex-1 bg-transparent text-white placeholder-white text-sm focus:outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="text-[#005776] hover:text-white transition-colors disabled:opacity-30"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 md:h-16 px-6 md:px-8 bg-[#005776] flex items-center justify-center gap-3 rounded-full shadow-2xl blue-glow z-50 group border-none cursor-pointer text-white"
      >
        <span className="font-heading font-black italic text-white text-xl tracking-tighter">
          {isOpen ? t.close : t.ask}
        </span>
        <div className="p-2 bg-white/10 rounded-full">
          <MessageSquare size={20} className="text-white" />
        </div>
      </motion.button>
    </div>
  );
};

export default AIChat;
