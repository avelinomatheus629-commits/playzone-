import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, ExternalLink } from 'lucide-react';
import { FAQ_DATA } from '../data/gamingData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-950 text-slate-100 relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-['Rajdhani',sans-serif]">
            PERGUNTAS FREQUENTES SOBRE PLAYSTATION
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Entenda retrocompatibilidade, diferenças entre modelos, assinaturas PlayStation Plus e periféricos.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-blue-500/40 shadow-lg shadow-blue-950/20'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-bold text-sm sm:text-base text-white font-['Rajdhani',sans-serif]">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg shrink-0 transition-transform ${
                    isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support callout */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-blue-950/40 border border-blue-800/40 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white font-['Rajdhani',sans-serif]">
              Ainda tem dúvidas sobre qual console escolher?
            </h4>
            <p className="text-xs text-slate-400">
              Nossa equipe gamer está disponível para recomendar a melhor configuração para sua sala ou quarto.
            </p>
          </div>
          <button
            onClick={() => alert('Canal de atendimento gamer iniciado! Horário de suporte: Seg a Sex das 09h às 20h.')}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-xs shrink-0 flex items-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-blue-400" />
            Falar com Especialista
          </button>
        </div>

      </div>
    </section>
  );
};
