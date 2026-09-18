import React, { useState } from 'react';
import { Gamepad2, Mail, Check, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigateTo: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTo }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80">
      
      {/* Newsletter Bar */}
      <div className="border-b border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 text-blue-400 border border-blue-800/60 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            Alertas de Lançamento & Ofertas
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white font-['Rajdhani',sans-serif]">
            RECEBA NOTIFICAÇÕES DE DROPS DE PS5 E JOGOS
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Seja avisado em primeira mão sobre estoques de edições especiais, pré-vendas e promoções da PlayStation Store.
          </p>

          <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu melhor e-mail gamer..."
              required
              className="flex-1 px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-all shrink-0 shadow-lg shadow-blue-600/30"
            >
              Inscrever-se
            </button>
          </form>

          {subscribed && (
            <div className="mt-3 text-xs text-emerald-400 font-semibold flex items-center justify-center gap-1.5 animate-in fade-in">
              <Check className="w-4 h-4" /> Inscrição realizada! Você receberá os melhores alertas do universo PlayStation.
            </div>
          )}
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <span className="font-black text-xl text-white font-['Rajdhani',sans-serif]">
                PLAY<span className="text-blue-500">ZONE</span> GAMING
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Sua central completa para consoles PlayStation 5, PlayStation 4, acessórios oficiais e títulos aclamados mundialmente. Experiência de jogo sem limites com tecnologia de ponta.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-emerald-400 font-bold">▲ Triângulo</span>
              <span className="text-rose-400 font-bold">● Círculo</span>
              <span className="text-blue-400 font-bold">✖ Xis</span>
              <span className="text-amber-400 font-bold">■ Quadrado</span>
            </div>
          </div>

          {/* Consoles */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Consoles
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateTo('consoles')} className="hover:text-white transition-colors">
                  PlayStation 5 Pro
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('consoles')} className="hover:text-white transition-colors">
                  PS5 Slim Edição com Disco
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('consoles')} className="hover:text-white transition-colors">
                  PS5 Slim Digital
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('consoles')} className="hover:text-white transition-colors">
                  PlayStation 4 Slim
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('comparativo')} className="hover:text-cyan-400 transition-colors">
                  Tabela Comparativa PS5 vs PS4
                </button>
              </li>
            </ul>
          </div>

          {/* Jogos & Destaques */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Jogos em Destaque
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateTo('jogos')} className="hover:text-white transition-colors">
                  Marvel&apos;s Spider-Man 2
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('jogos')} className="hover:text-white transition-colors">
                  God of War Ragnarök
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('jogos')} className="hover:text-white transition-colors">
                  The Last of Us Part I
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('jogos')} className="hover:text-white transition-colors">
                  Elden Ring & Astro Bot
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('jogos')} className="hover:text-white transition-colors">
                  Exclusivos PlayStation Studios
                </button>
              </li>
            </ul>
          </div>

          {/* Acessórios & Recursos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Acessórios & Setup
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateTo('acessorios')} className="hover:text-white transition-colors">
                  Controles Sem Fio DualSense
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('acessorios')} className="hover:text-white transition-colors">
                  Controle DualSense Edge
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('acessorios')} className="hover:text-white transition-colors">
                  Headsets PULSE Elite & 3D
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('acessorios')} className="hover:text-white transition-colors">
                  PlayStation Portal & PS VR2
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('setup-builder')} className="text-blue-400 font-bold hover:text-blue-300 transition-colors">
                  Monte seu Setup com Desconto
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 PlayZone Hub. Inspirado no universo PlayStation. Marcas registradas pertencem aos seus respectivos proprietários.</p>
          <div className="flex items-center gap-4">
            <span>Privacidade</span>
            <span>Termos de Uso</span>
            <span>Garantia de 1 Ano</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
