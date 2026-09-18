import React, { useState } from 'react';
import { 
  Zap, 
  Cpu, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  Volume2, 
  Layers, 
  Gamepad, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { CONSOLES_DATA } from '../data/gamingData';
import { ConsoleItem } from '../types';

interface HeroProps {
  onSelectConsole: (console: ConsoleItem) => void;
  onAddToCart: (item: {
    id: string;
    name: string;
    category: 'console';
    price: number;
    image: string;
  }) => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectConsole,
  onAddToCart,
  onNavigateTo
}) => {
  const [selectedConsoleId, setSelectedConsoleId] = useState<'ps5-pro' | 'ps5-slim-disc' | 'ps4-slim'>('ps5-slim-disc');

  const currentConsole = CONSOLES_DATA.find(c => c.id === selectedConsoleId) || CONSOLES_DATA[1];

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none -z-0"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top pill badge */}
        <div className="flex justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-400 text-xs font-semibold shadow-sm backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
            <span className="text-white font-bold">GERAÇÃO PLAYSTATION</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400 font-bold">Novos Preços Oficiais Atualizados</span>
          </div>
        </div>

        {/* Hero Grid: Main Pitch & Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Rajdhani',sans-serif] leading-[1.08]">
              JOGUE SEM LIMITES. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                O UNIVERSO PLAYSTATION
              </span> <br />
              NA PALMA DA SUA MÃO.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Explore o ecossistema definitivo de videogames:{' '}
              <strong className="text-white font-semibold">PlayStation 5 (R$ 2.500,00)</strong> e o lendário{' '}
              <strong className="text-white font-semibold">PlayStation 4 (R$ 1.400,00)</strong> com controles e acessórios originais prontos para entrega.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 pt-2">
              <button
                id="hero-cta-video"
                onClick={() => onNavigateTo('video-promocional')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 flex items-center gap-2 hover:-translate-y-0.5 transition-all active:translate-y-0"
              >
                <Sparkles className="w-4 h-4" />
                Assistir Vídeo Promocional
              </button>

              <button
                id="hero-cta-consoles"
                onClick={() => onNavigateTo('consoles')}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 flex items-center gap-2 hover:-translate-y-0.5 transition-all active:translate-y-0"
              >
                <Cpu className="w-4 h-4" />
                Explorar Consoles
              </button>

              <button
                id="hero-cta-setup"
                onClick={() => onNavigateTo('setup-builder')}
                className="px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-blue-200 font-semibold text-sm flex items-center gap-1.5 transition-all"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                Monte seu Setup
              </button>
            </div>

            {/* Micro stats banner */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center md:text-left">
              <div>
                <p className="text-2xl font-black text-white font-['Rajdhani',sans-serif]">4.000+</p>
                <p className="text-xs text-slate-400">Jogos Compatíveis</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white font-['Rajdhani',sans-serif]">120 FPS</p>
                <p className="text-xs text-slate-400">Fluidez Máxima 4K</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white font-['Rajdhani',sans-serif]">0.8s</p>
                <p className="text-xs text-slate-400">Carregamento Instantâneo</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Console Switcher Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Console selector pills */}
              <div className="flex items-center p-1 rounded-xl bg-slate-950 border border-slate-800/80 mb-6">
                <button
                  id="tab-hero-ps5-slim"
                  onClick={() => setSelectedConsoleId('ps5-slim-disc')}
                  className={`flex-1 py-2 px-2 text-xs font-bold rounded-lg transition-all ${
                    selectedConsoleId === 'ps5-slim-disc'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  PS5 (R$ 2.500)
                </button>
                <button
                  id="tab-hero-ps4-slim"
                  onClick={() => setSelectedConsoleId('ps4-slim')}
                  className={`flex-1 py-2 px-2 text-xs font-bold rounded-lg transition-all ${
                    selectedConsoleId === 'ps4-slim'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  PS4 (R$ 1.400)
                </button>
                <button
                  id="tab-hero-ps5-pro"
                  onClick={() => setSelectedConsoleId('ps5-pro')}
                  className={`flex-1 py-2 px-2 text-xs font-bold rounded-lg transition-all ${
                    selectedConsoleId === 'ps5-pro'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  PS5 Pro
                </button>
              </div>

              {/* Console preview image */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-950/60 border border-slate-800/60 flex items-center justify-center p-4 group">
                <img
                  src={currentConsole.image}
                  alt={currentConsole.name}
                  className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                
                {/* Badge top right */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-600/90 text-white backdrop-blur-md shadow-md">
                    {currentConsole.highlightBadge || currentConsole.generation}
                  </span>
                </div>

                {/* Console title overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-xl font-bold text-white font-['Rajdhani',sans-serif]">
                    {currentConsole.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1">{currentConsole.tagline}</p>
                </div>
              </div>

              {/* Quick specs grid */}
              <div className="grid grid-cols-2 gap-2.5 my-5 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Resolução & Taxa</span>
                  <span className="text-white font-semibold font-mono">{currentConsole.specs.resolution}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Armazenamento</span>
                  <span className="text-white font-semibold font-mono">{currentConsole.specs.storage}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Ray Tracing</span>
                  <span className="text-blue-400 font-semibold truncate block">
                    {typeof currentConsole.specs.rayTracing === 'string' ? currentConsole.specs.rayTracing : 'Sim'}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Mídia Física</span>
                  <span className="text-emerald-400 font-semibold truncate block">{currentConsole.specs.discDrive}</span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <div>
                  <span className="text-xs text-slate-400 block">A partir de</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-white font-['Rajdhani',sans-serif]">
                      R$ {currentConsole.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <span className="text-[11px] text-blue-400 block font-medium">{currentConsole.installments}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    id={`btn-hero-add-${currentConsole.id}`}
                    onClick={() => onAddToCart({
                      id: currentConsole.id,
                      name: currentConsole.name,
                      category: 'console',
                      price: currentConsole.price,
                      image: currentConsole.image
                    })}
                    className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/25 transition-all"
                  >
                    Adicionar
                  </button>
                  <button
                    onClick={() => onSelectConsole(currentConsole)}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-all"
                    title="Ver ficha técnica completa"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Pillars of Next-Gen Technology Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 flex items-start gap-3.5 hover:border-blue-500/30 transition-colors">
            <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">SSD Ultrarrápido</h4>
              <p className="text-xs text-slate-400 mt-0.5">Carregamento quase instantâneo para não interromper seu gameplay.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 flex items-start gap-3.5 hover:border-blue-500/30 transition-colors">
            <div className="p-2.5 rounded-xl bg-cyan-600/10 text-cyan-400 border border-cyan-500/20 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Ray Tracing Avançado</h4>
              <p className="text-xs text-slate-400 mt-0.5">Reflexos naturais e iluminação fotorrealista calculada em tempo real.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 flex items-start gap-3.5 hover:border-blue-500/30 transition-colors">
            <div className="p-2.5 rounded-xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shrink-0">
              <Gamepad className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Gatilhos Adaptáveis</h4>
              <p className="text-xs text-slate-400 mt-0.5">Sinta a tensão física de cordas de arco e o recuo real de armas no DualSense.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 flex items-start gap-3.5 hover:border-blue-500/30 transition-colors">
            <div className="p-2.5 rounded-xl bg-purple-600/10 text-purple-400 border border-purple-500/20 shrink-0">
              <Volume2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Tempest 3D AudioTech</h4>
              <p className="text-xs text-slate-400 mt-0.5">Imersão sonora tridimensional para detectar passos e tiros em 360 graus.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
