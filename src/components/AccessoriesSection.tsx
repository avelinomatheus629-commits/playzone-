import React, { useState } from 'react';
import { 
  Headphones, 
  Gamepad2, 
  Sparkles, 
  Check, 
  Star, 
  Tv, 
  BatteryCharging, 
  ShoppingBag, 
  Palette
} from 'lucide-react';
import { ACCESSORIES_DATA } from '../data/gamingData';
import { AccessoryItem } from '../types';

interface AccessoriesSectionProps {
  onAddToCart: (item: {
    id: string;
    name: string;
    category: 'acessorio';
    price: number;
    image: string;
    platformOrColor?: string;
  }) => void;
}

export const AccessoriesSection: React.FC<AccessoriesSectionProps> = ({
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  // Track selected color for items with color choices
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({
    'dualsense-standard': 'Branco Clássico'
  });

  const filteredAccessories = ACCESSORIES_DATA.filter((acc) => {
    if (activeCategory === 'all') return true;
    return acc.category === activeCategory;
  });

  const handleColorSelect = (accessoryId: string, colorName: string) => {
    setSelectedColors(prev => ({
      ...prev,
      [accessoryId]: colorName
    }));
  };

  return (
    <section id="acessorios" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Headphones className="w-3.5 h-3.5" />
            Equipamentos & Imersão Sensorial
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Rajdhani',sans-serif]">
            ACESSÓRIOS DE ALTA PERFORMANCE
          </h2>
          <p className="text-slate-400 text-base mt-2">
            Eleve seu gameplay a novos patamares com a linha oficial PlayStation: respostas táteis com DualSense,
            drivers magnéticos planares no Pulse Elite e a imersão de realidade virtual com o PS VR2.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            id="filter-acc-all"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Todos os Acessórios ({ACCESSORIES_DATA.length})
          </button>

          <button
            id="filter-acc-controles"
            onClick={() => setActiveCategory('controles')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeCategory === 'controles'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            Controles & Volantes
          </button>

          <button
            id="filter-acc-audio"
            onClick={() => setActiveCategory('audio')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeCategory === 'audio'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Headphones className="w-3.5 h-3.5" />
            Headsets & Áudio 3D
          </button>

          <button
            id="filter-acc-vr"
            onClick={() => setActiveCategory('vr-streaming')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeCategory === 'vr-streaming'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            VR & PlayStation Portal
          </button>

          <button
            id="filter-acc-power"
            onClick={() => setActiveCategory('energia-suporte')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeCategory === 'energia-suporte'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <BatteryCharging className="w-3.5 h-3.5" />
            Bases de Recarga & Energia
          </button>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAccessories.map((acc) => {
            const activeColor = selectedColors[acc.id] || (acc.availableColors ? acc.availableColors[0].name : undefined);

            return (
              <div
                key={acc.id}
                id={`card-acc-${acc.id}`}
                className="group flex flex-col justify-between rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/20 p-5 relative overflow-hidden"
              >
                {/* Badge */}
                {acc.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-indigo-900/80 border border-indigo-700/60 text-indigo-200 shadow">
                      {acc.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Image container */}
                  <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-950/70 border border-slate-800/60 flex items-center justify-center p-3 mb-4">
                    <img
                      src={acc.image}
                      alt={acc.name}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                    {/* Compatibility pill */}
                    <div className="absolute bottom-2 left-2 flex gap-1">
                      {acc.compatibility.map(c => (
                        <span key={c} className="text-[10px] font-mono font-bold bg-slate-900/90 border border-slate-700 text-slate-300 px-1.5 py-0.5 rounded">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title & description */}
                  <h3 className="text-lg font-bold text-white font-['Rajdhani',sans-serif] leading-tight group-hover:text-indigo-400 transition-colors">
                    {acc.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {acc.shortDesc}
                  </p>

                  {/* Color selector if available */}
                  {acc.availableColors && (
                    <div className="mt-3.5 pt-3 border-t border-slate-800/80">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                          <Palette className="w-3 h-3 text-slate-400" /> Cor Selecionada:
                        </span>
                        <span className="text-[10px] font-bold text-slate-200">{activeColor}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {acc.availableColors.map((color) => (
                          <button
                            key={color.name}
                            type="button"
                            onClick={() => handleColorSelect(acc.id, color.name)}
                            className={`w-6 h-6 rounded-full border-2 transition-all ${
                              activeColor === color.name 
                                ? 'border-blue-400 scale-110 shadow-sm ring-1 ring-blue-400' 
                                : 'border-slate-700 hover:border-slate-500'
                            }`}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                            aria-label={color.name}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlights list */}
                  <ul className="mt-3.5 space-y-1.5 text-xs text-slate-300">
                    {acc.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px]">
                        <Check className="w-3 h-3 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Pricing & CTA */}
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <div className="mb-3">
                    <span className="text-2xl font-black text-white font-['Rajdhani',sans-serif]">
                      R$ {acc.price.toFixed(2)}
                    </span>
                    <span className="text-[11px] text-indigo-400 font-medium block">{acc.installments}</span>
                  </div>

                  <button
                    id={`btn-add-acc-${acc.id}`}
                    onClick={() => onAddToCart({
                      id: acc.id,
                      name: acc.name,
                      category: 'acessorio',
                      price: acc.price,
                      image: acc.image,
                      platformOrColor: activeColor
                    })}
                    className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 transition-all active:scale-[0.98]"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Adicionar Acessório
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
