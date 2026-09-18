import React from 'react';
import { X, Check, Disc, Zap, Volume2, ShieldCheck, ShoppingBag } from 'lucide-react';
import { ConsoleItem } from '../types';

interface ConsoleDetailModalProps {
  consoleItem: ConsoleItem | null;
  onClose: () => void;
  onAddToCart: (item: {
    id: string;
    name: string;
    category: 'console';
    price: number;
    image: string;
  }) => void;
}

export const ConsoleDetailModal: React.FC<ConsoleDetailModalProps> = ({
  consoleItem,
  onClose,
  onAddToCart
}) => {
  if (!consoleItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-console-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with image */}
        <div className="flex flex-col sm:flex-row gap-6 items-start pb-6 border-b border-slate-800">
          <div className="w-full sm:w-48 h-44 rounded-2xl overflow-hidden bg-slate-950 shrink-0 border border-slate-800">
            <img 
              src={consoleItem.image} 
              alt={consoleItem.name} 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">
                {consoleItem.generation}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {consoleItem.edition}
              </span>
            </div>

            <h3 className="text-2xl font-black text-white font-['Rajdhani',sans-serif]">
              {consoleItem.name}
            </h3>
            
            <p className="text-xs text-slate-300">
              {consoleItem.tagline}
            </p>

            <div className="pt-2">
              <span className="text-2xl font-black text-white font-['Rajdhani',sans-serif]">
                R$ {consoleItem.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
              <span className="text-xs text-blue-400 block font-medium">
                {consoleItem.installments}
              </span>
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <div className="py-6 space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
            Especificações Técnicas Oficiais
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Resolução de Saída</span>
              <span className="text-white font-semibold text-xs mt-0.5 block">{consoleItem.specs.resolution}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Taxa de Atualização / FPS</span>
              <span className="text-white font-semibold text-xs mt-0.5 block">{consoleItem.specs.targetFps}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Armazenamento Interno</span>
              <span className="text-white font-semibold text-xs mt-0.5 block">{consoleItem.specs.storage} ({consoleItem.specs.storageType})</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Ray Tracing</span>
              <span className="text-blue-400 font-semibold text-xs mt-0.5 block">
                {typeof consoleItem.specs.rayTracing === 'string' ? consoleItem.specs.rayTracing : 'Suportado'}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Unidade de Disco Óptico</span>
              <span className="text-emerald-400 font-semibold text-xs mt-0.5 block">{consoleItem.specs.discDrive}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Compatibilidade com Jogos</span>
              <span className="text-white font-semibold text-xs mt-0.5 block">{consoleItem.specs.backwardCompatibility}</span>
            </div>
          </div>

          {/* Key Features */}
          <div className="pt-2">
            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wide mb-2.5">
              Destaques de Engenharia
            </h5>
            <div className="space-y-2">
              {consoleItem.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300"
          >
            Fechar
          </button>
          <button
            onClick={() => {
              onAddToCart({
                id: consoleItem.id,
                name: consoleItem.name,
                category: 'console',
                price: consoleItem.price,
                image: consoleItem.image
              });
              onClose();
            }}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30"
          >
            <ShoppingBag className="w-4 h-4" />
            Adicionar ao Carrinho
          </button>
        </div>

      </div>
    </div>
  );
};
