import React, { useState } from 'react';
import { 
  Tv, 
  Check, 
  Sparkles, 
  Disc, 
  Zap, 
  ShieldCheck, 
  SlidersHorizontal, 
  ArrowRight, 
  Layers, 
  Info,
  ChevronDown
} from 'lucide-react';
import { CONSOLES_DATA } from '../data/gamingData';
import { ConsoleItem } from '../types';

interface ConsoleShowcaseProps {
  onSelectConsoleModal: (item: ConsoleItem) => void;
  onAddToCart: (item: {
    id: string;
    name: string;
    category: 'console';
    price: number;
    image: string;
  }) => void;
  onGoToSetupBuilder: (consoleId: string) => void;
}

export const ConsoleShowcase: React.FC<ConsoleShowcaseProps> = ({
  onSelectConsoleModal,
  onAddToCart,
  onGoToSetupBuilder,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ps5' | 'ps4'>('all');
  const [showComparisonTable, setShowComparisonTable] = useState(false);

  const filteredConsoles = CONSOLES_DATA.filter(c => {
    if (activeTab === 'ps5') return c.generation === 'PS5';
    if (activeTab === 'ps4') return c.generation === 'PS4';
    return true;
  });

  return (
    <section id="consoles" className="py-20 bg-slate-950 text-slate-100 relative">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Tv className="w-3.5 h-3.5" />
              Consoles Oficiais
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Rajdhani',sans-serif]">
              ESCOLHA A SUA MÁQUINA DE COMBATE
            </h2>
            <p className="text-slate-400 max-w-2xl text-base mt-2">
              Da vanguarda da tecnologia gráfica 4K/8K do PS5 Pro à lendária biblioteca do PS4 Slim,
              encontre o console perfeito para o seu orçamento e estilo de jogo.
            </p>
          </div>

          {/* Filter tabs & compare toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex p-1 bg-slate-900 rounded-xl border border-slate-800">
              <button
                id="filter-consoles-all"
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'all'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Todos ({CONSOLES_DATA.length})
              </button>
              <button
                id="filter-consoles-ps5"
                onClick={() => setActiveTab('ps5')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'ps5'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PlayStation 5
              </button>
              <button
                id="filter-consoles-ps4"
                onClick={() => setActiveTab('ps4')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'ps4'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PlayStation 4
              </button>
            </div>

            <button
              id="btn-toggle-comparison"
              onClick={() => setShowComparisonTable(!showComparisonTable)}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-bold flex items-center gap-2 transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              {showComparisonTable ? 'Ocultar Comparativo' : 'Ver Comparativo Técnico'}
            </button>
          </div>
        </div>

        {/* Consoles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredConsoles.map((console) => (
            <div
              key={console.id}
              id={`card-console-${console.id}`}
              className="group flex flex-col justify-between rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 p-5 relative overflow-hidden"
            >
              {/* Highlight Badge */}
              {console.highlightBadge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide uppercase shadow ${
                    console.id === 'ps5-pro'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : console.id.includes('slim-disc')
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-cyan-400 border border-cyan-500/30'
                  }`}>
                    {console.highlightBadge}
                  </span>
                </div>
              )}

              <div>
                {/* Generation pill */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {console.generation}
                  </span>
                  <span className="text-[11px] text-slate-400">{console.edition}</span>
                </div>

                {/* Console Image */}
                <div 
                  onClick={() => onSelectConsoleModal(console)}
                  className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-950/70 border border-slate-800/60 cursor-pointer group-hover:border-slate-700 transition-colors flex items-center justify-center p-3"
                >
                  <img
                    src={console.image}
                    alt={console.name}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <span className="absolute bottom-2 left-2 text-[10px] text-slate-300 flex items-center gap-1 font-medium bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur">
                    <Info className="w-3 h-3 text-blue-400" /> Clique para especificações
                  </span>
                </div>

                {/* Name and Tagline */}
                <div className="mt-4">
                  <h3 className="text-xl font-black text-white font-['Rajdhani',sans-serif] group-hover:text-blue-400 transition-colors">
                    {console.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 min-h-[32px]">
                    {console.tagline}
                  </p>
                </div>

                {/* Key specs highlight */}
                <div className="mt-4 space-y-2 py-3 border-y border-slate-800/70 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Resolução:</span>
                    <span className="text-white font-semibold font-mono text-[11px]">{console.specs.resolution}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Armazenamento:</span>
                    <span className="text-blue-400 font-semibold font-mono text-[11px]">{console.specs.storage}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Mídia:</span>
                    <span className="text-slate-300 font-medium text-[11px] truncate max-w-[150px] text-right">
                      {console.specs.discDrive}
                    </span>
                  </div>
                </div>

                {/* Mini Features List */}
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  {console.features.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-[11px]">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Price and Actions */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <div className="mb-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-400">R$</span>
                    <span className="text-2xl font-black text-white font-['Rajdhani',sans-serif]">
                      {console.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <span className="text-[11px] text-blue-400 font-medium block">{console.installments}</span>
                </div>

                <div className="space-y-2">
                  <button
                    id={`btn-add-console-${console.id}`}
                    onClick={() => onAddToCart({
                      id: console.id,
                      name: console.name,
                      category: 'console',
                      price: console.price,
                      image: console.image
                    })}
                    className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-600/20 transition-all active:scale-[0.98]"
                  >
                    Adicionar ao Carrinho
                  </button>

                  <button
                    id={`btn-build-setup-${console.id}`}
                    onClick={() => onGoToSetupBuilder(console.id)}
                    className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-blue-400" />
                    Montar Setup com este Console
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Side-by-side Comparison Section (PS5 Pro vs PS5 Slim vs PS4 Slim) */}
        {showComparisonTable && (
          <div id="comparativo" className="mt-16 pt-12 border-t border-slate-800/80 animate-in fade-in duration-300">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
                Ficha Técnica Comparativa
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-['Rajdhani',sans-serif] mt-3">
                PLAYSTATION 5 PRO vs SLIM vs PLAYSTATION 4
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Entenda exatamente o salto de poder gráfico, velocidade do SSD e suporte a tecnologias de cada geração.
              </p>
            </div>

            {/* Responsive Table Wrapper */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/80">
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider w-1/4">Recurso / Especificação</th>
                    <th className="p-4 text-sm font-extrabold text-white font-['Rajdhani',sans-serif] w-1/4 bg-blue-950/30 border-x border-slate-800">
                      PS5 Pro (Mais Poderoso)
                    </th>
                    <th className="p-4 text-sm font-extrabold text-white font-['Rajdhani',sans-serif] w-1/4">
                      PS5 Slim (Com Disco / Digital)
                    </th>
                    <th className="p-4 text-sm font-extrabold text-white font-['Rajdhani',sans-serif] w-1/4">
                      PS4 Slim (Entrada)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70 text-xs sm:text-sm">
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-semibold text-slate-300">Resolução Alvo</td>
                    <td className="p-4 font-mono font-bold text-blue-400 bg-blue-950/20 border-x border-slate-800">
                      4K Nativo a 60FPS / 8K c/ PSSR
                    </td>
                    <td className="p-4 font-mono text-slate-200">4K Ultra HD HDR</td>
                    <td className="p-4 font-mono text-slate-400">1080p Full HD com HDR</td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-semibold text-slate-300">Taxa Máxima de Quadros</td>
                    <td className="p-4 font-mono font-bold text-blue-400 bg-blue-950/20 border-x border-slate-800">
                      120 FPS + VRR Avançado
                    </td>
                    <td className="p-4 font-mono text-slate-200">Até 120 FPS c/ VRR</td>
                    <td className="p-4 font-mono text-slate-400">30 a 60 FPS</td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-semibold text-slate-300">Upscaling por IA</td>
                    <td className="p-4 font-bold text-emerald-400 bg-blue-950/20 border-x border-slate-800 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      PSSR (Exclusivo do Pro)
                    </td>
                    <td className="p-4 text-slate-400">Reconstrução Temporal padrão</td>
                    <td className="p-4 text-slate-500">Não disponível</td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-semibold text-slate-300">Ray Tracing</td>
                    <td className="p-4 font-bold text-white bg-blue-950/20 border-x border-slate-800">
                      Até 3x mais veloz (Reflexos completos)
                    </td>
                    <td className="p-4 text-slate-300">Suportado via Hardware dedicado</td>
                    <td className="p-4 text-slate-500">Sem suporte</td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-semibold text-slate-300">Armazenamento Interno</td>
                    <td className="p-4 font-mono font-bold text-blue-400 bg-blue-950/20 border-x border-slate-800">
                      2 TB SSD Integrado (5.5 GB/s)
                    </td>
                    <td className="p-4 font-mono text-slate-200">1 TB SSD Integrado (5.5 GB/s)</td>
                    <td className="p-4 font-mono text-slate-400">1 TB HDD Mecânico SATA (100 MB/s)</td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-semibold text-slate-300">Tempo de Loading (Média)</td>
                    <td className="p-4 font-mono font-bold text-emerald-400 bg-blue-950/20 border-x border-slate-800">
                      ~ 0.5 a 1.2 segundos
                    </td>
                    <td className="p-4 font-mono text-emerald-400">~ 1 a 2 segundos</td>
                    <td className="p-4 font-mono text-rose-400">~ 30 a 50 segundos</td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-semibold text-slate-300">Retrocompatibilidade</td>
                    <td className="p-4 text-slate-300 bg-blue-950/20 border-x border-slate-800">
                      Jogos de PS4 aprimorados via Game Boost
                    </td>
                    <td className="p-4 text-slate-300">Mais de 4.000 títulos de PS4</td>
                    <td className="p-4 text-slate-400">Biblioteca nativa de PS4</td>
                  </tr>

                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-semibold text-slate-300">Controle Compatível</td>
                    <td className="p-4 text-slate-300 bg-blue-950/20 border-x border-slate-800">
                      DualSense e DualSense Edge
                    </td>
                    <td className="p-4 text-slate-300">DualSense e DualSense Edge</td>
                    <td className="p-4 text-slate-400">DualShock 4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
