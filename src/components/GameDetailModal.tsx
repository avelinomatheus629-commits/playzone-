import React from 'react';
import { X, Star, Sparkles, Gamepad2, Layers, Check, ShoppingBag, Award } from 'lucide-react';
import { GameItem } from '../types';

interface GameDetailModalProps {
  game: GameItem | null;
  onClose: () => void;
  onAddToCart: (item: {
    id: string;
    name: string;
    category: 'jogo';
    price: number;
    image: string;
    platformOrColor?: string;
  }) => void;
}

export const GameDetailModal: React.FC<GameDetailModalProps> = ({
  game,
  onClose,
  onAddToCart
}) => {
  if (!game) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with close button */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-950">
          <img 
            src={game.bannerImage || game.image} 
            alt={game.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>

          <button
            id="btn-close-game-modal"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Floating platforms badge */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            {game.platforms.map(p => (
              <span key={p} className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-blue-600 text-white shadow">
                {p}
              </span>
            ))}
            {game.isExclusive && (
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-purple-600 text-white shadow flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> PlayStation Studios
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-['Rajdhani',sans-serif]">
                {game.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Desenvolvedora: <strong className="text-slate-200">{game.developer}</strong> • Publicado por: <strong className="text-slate-200">{game.publisher}</strong>
              </p>
            </div>

            {/* Metascore and Rating */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="text-center p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Metascore</span>
                <span className="text-lg font-black text-emerald-400 font-mono block leading-none mt-1">
                  {game.metascore}
                </span>
              </div>
              <div className="text-center p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Avaliação</span>
                <span className="text-lg font-black text-amber-400 font-mono block leading-none mt-1 flex items-center justify-center gap-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400" /> {game.rating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>

          {/* Synopsis */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">
              Sinopse & Visão Geral
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {game.description}
            </p>
          </div>

          {/* PS5 Enhancements & DualSense Sensory Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* PS5 Features */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wide">
                <Layers className="w-4 h-4" />
                Otimizações no PS5
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {game.ps5Enhancements.map((enh, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{enh}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DualSense Features */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wide">
                <Gamepad2 className="w-4 h-4" />
                Recursos do DualSense
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {game.dualSenseFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {game.tags.map((tag, idx) => (
              <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 font-medium">
                {tag}
              </span>
            ))}
          </div>

          {/* Price and CTA */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div>
              {game.originalPrice && (
                <span className="text-xs line-through text-slate-500 block">
                  R$ {game.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="text-2xl font-black text-white font-['Rajdhani',sans-serif]">
                R$ {game.price.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300"
              >
                Voltar
              </button>
              <button
                onClick={() => {
                  onAddToCart({
                    id: game.id,
                    name: game.title,
                    category: 'jogo',
                    price: game.price,
                    image: game.image,
                    platformOrColor: game.platforms.join(' & ')
                  });
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30"
              >
                <ShoppingBag className="w-4 h-4" />
                Comprar Jogo
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
