import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Disc, Tv, Headphones, ArrowRight, ShoppingBag } from 'lucide-react';
import { CONSOLES_DATA, GAMES_DATA, ACCESSORIES_DATA } from '../data/gamingData';
import { CartItem } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  // Search across collections
  const matchedConsoles = trimmed
    ? CONSOLES_DATA.filter(c => c.name.toLowerCase().includes(trimmed) || c.tagline.toLowerCase().includes(trimmed))
    : [];

  const matchedGames = trimmed
    ? GAMES_DATA.filter(g => 
        g.title.toLowerCase().includes(trimmed) || 
        g.genre.toLowerCase().includes(trimmed) ||
        g.tags.some(t => t.toLowerCase().includes(trimmed))
      )
    : [];

  const matchedAccessories = trimmed
    ? ACCESSORIES_DATA.filter(a => a.name.toLowerCase().includes(trimmed) || a.shortDesc.toLowerCase().includes(trimmed))
    : [];

  const totalMatches = matchedConsoles.length + matchedGames.length + matchedAccessories.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-950/60">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por PS5, PS4, Spider-Man, DualSense, Headset..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 rounded bg-slate-800 text-slate-400 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!trimmed ? (
            <div className="py-8 text-center text-slate-400 text-xs space-y-2">
              <p className="font-semibold text-slate-300">Sugestões rápidas de pesquisa:</p>
              <div className="flex flex-wrap justify-center gap-2 pt-1">
                {['PS5 Pro', 'DualSense', 'Spider-Man 2', 'God of War', 'PS4 Slim', 'Pulse Elite', 'VR2'].map(sug => (
                  <button
                    key={sug}
                    onClick={() => setQuery(sug)}
                    className="px-3 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>
          ) : totalMatches === 0 ? (
            <div className="py-8 text-center text-slate-400 text-sm">
              Nenhum item encontrado para &quot;{query}&quot;.
            </div>
          ) : (
            <div className="space-y-4">
              {/* Consoles results */}
              {matchedConsoles.length > 0 && (
                <div>
                  <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <Tv className="w-3.5 h-3.5" /> Consoles ({matchedConsoles.length})
                  </span>
                  <div className="space-y-1.5">
                    {matchedConsoles.map(c => (
                      <div
                        key={c.id}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 hover:bg-slate-800/60 border border-slate-800 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <img src={c.image} alt={c.name} className="w-10 h-10 object-cover rounded-lg" />
                          <div>
                            <span className="text-xs font-bold text-white block">{c.name}</span>
                            <span className="text-[11px] text-slate-400">{c.specs.storage}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold text-white">R$ {c.price.toFixed(2)}</span>
                          <button
                            onClick={() => {
                              onAddToCart({
                                id: c.id,
                                name: c.name,
                                category: 'console',
                                price: c.price,
                                quantity: 1,
                                image: c.image
                              });
                              onClose();
                            }}
                            className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white"
                            title="Adicionar"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Games results */}
              {matchedGames.length > 0 && (
                <div>
                  <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <Disc className="w-3.5 h-3.5" /> Jogos ({matchedGames.length})
                  </span>
                  <div className="space-y-1.5">
                    {matchedGames.map(g => (
                      <div
                        key={g.id}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 hover:bg-slate-800/60 border border-slate-800 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <img src={g.image} alt={g.title} className="w-10 h-10 object-cover rounded-lg" />
                          <div>
                            <span className="text-xs font-bold text-white block">{g.title}</span>
                            <span className="text-[11px] text-slate-400">{g.platforms.join(' & ')} • {g.genre}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold text-white">R$ {g.price.toFixed(2)}</span>
                          <button
                            onClick={() => {
                              onAddToCart({
                                id: g.id,
                                name: g.title,
                                category: 'jogo',
                                price: g.price,
                                quantity: 1,
                                image: g.image,
                                platformOrColor: g.platforms[0]
                              });
                              onClose();
                            }}
                            className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white"
                            title="Adicionar"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Accessories results */}
              {matchedAccessories.length > 0 && (
                <div>
                  <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <Headphones className="w-3.5 h-3.5" /> Acessórios ({matchedAccessories.length})
                  </span>
                  <div className="space-y-1.5">
                    {matchedAccessories.map(a => (
                      <div
                        key={a.id}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 hover:bg-slate-800/60 border border-slate-800 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <img src={a.image} alt={a.name} className="w-10 h-10 object-cover rounded-lg" />
                          <div>
                            <span className="text-xs font-bold text-white block">{a.name}</span>
                            <span className="text-[11px] text-slate-400">{a.shortDesc}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold text-white">R$ {a.price.toFixed(2)}</span>
                          <button
                            onClick={() => {
                              onAddToCart({
                                id: a.id,
                                name: a.name,
                                category: 'acessorio',
                                price: a.price,
                                quantity: 1,
                                image: a.image
                              });
                              onClose();
                            }}
                            className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white"
                            title="Adicionar"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
