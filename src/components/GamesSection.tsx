import React, { useState } from 'react';
import { 
  Disc, 
  Star, 
  Search, 
  Sparkles, 
  Gamepad2, 
  Check, 
  Filter, 
  Layers, 
  Flame, 
  Eye, 
  ShoppingBag
} from 'lucide-react';
import { GAMES_DATA } from '../data/gamingData';
import { GameItem } from '../types';

interface GamesSectionProps {
  onSelectGameModal: (game: GameItem) => void;
  onAddToCart: (item: {
    id: string;
    name: string;
    category: 'jogo';
    price: number;
    image: string;
    platformOrColor?: string;
  }) => void;
}

export const GamesSection: React.FC<GamesSectionProps> = ({
  onSelectGameModal,
  onAddToCart,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('all');

  const genres = ['all', 'Ação / Aventura', 'RPG', 'Corrida', 'Plataforma'];

  const filteredGames = GAMES_DATA.filter((game) => {
    // Filter tab
    if (activeFilter === 'exclusives' && !game.isExclusive) return false;
    if (activeFilter === 'ps5-only' && !game.platforms.includes('PS5')) return false;
    if (activeFilter === 'ps4-compat' && !game.platforms.includes('PS4')) return false;
    if (activeFilter === 'goty' && game.metascore < 90) return false;

    // Genre
    if (selectedGenre !== 'all' && !game.genre.toLowerCase().includes(selectedGenre.toLowerCase())) {
      return false;
    }

    // Search
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = game.title.toLowerCase().includes(q);
      const matchGenre = game.genre.toLowerCase().includes(q);
      const matchTag = game.tags.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchGenre && !matchTag) return false;
    }

    return true;
  });

  return (
    <section id="jogos" className="py-20 bg-slate-900/60 text-slate-100 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Disc className="w-3.5 h-3.5" />
            Catálogo de Jogos Incríveis
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Rajdhani',sans-serif]">
            HISTÓRIAS QUE DEFINEM GERAÇÕES
          </h2>
          <p className="text-slate-400 text-base mt-2">
            Dos épicos premiados do PlayStation Studios aos fenômenos globais.
            Vivencie mundos em 4K HDR a 60/120 FPS com imersão total do DualSense.
          </p>
        </div>

        {/* Filter bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              id="filter-games-all"
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Todos os Jogos
            </button>

            <button
              id="filter-games-exclusives"
              onClick={() => setActiveFilter('exclusives')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeFilter === 'exclusives'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Sparkles className="w-3 h-3 text-purple-300" />
              Exclusivos PlayStation
            </button>

            <button
              id="filter-games-goty"
              onClick={() => setActiveFilter('goty')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeFilter === 'goty'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
              Metascore 90+ (GotY)
            </button>

            <button
              id="filter-games-ps4-compat"
              onClick={() => setActiveFilter('ps4-compat')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'ps4-compat'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Disponível no PS4
            </button>
          </div>

          {/* Search within games */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="input-search-games"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar título ou gênero..."
              className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Games Grid */}
        {filteredGames.length === 0 ? (
          <div className="text-center py-16 bg-slate-950/40 rounded-2xl border border-slate-800">
            <Disc className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-base font-semibold text-slate-300">Nenhum jogo encontrado para estes filtros.</p>
            <p className="text-xs text-slate-500 mt-1">Tente pesquisar com outros termos ou redefinir os filtros.</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
                setSelectedGenre('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200"
            >
              Redefinir Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                id={`card-game-${game.id}`}
                className="group flex flex-col justify-between rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/20 overflow-hidden"
              >
                <div>
                  {/* Game Art Container */}
                  <div 
                    onClick={() => onSelectGameModal(game)}
                    className="relative h-56 w-full overflow-hidden bg-slate-900 cursor-pointer"
                  >
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                    {/* Metascore pill top left */}
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-950/85 backdrop-blur border border-slate-700/80 shadow">
                        <span className="text-[10px] uppercase font-bold text-slate-400">Meta</span>
                        <span className={`text-xs font-black font-mono px-1 rounded ${
                          game.metascore >= 90 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {game.metascore}
                        </span>
                      </div>
                    </div>

                    {/* Exclusivity / Featured badge top right */}
                    <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
                      {game.isExclusive && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white shadow-md">
                          PlayStation Studios
                        </span>
                      )}
                    </div>

                    {/* Platforms tag bottom left */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                      {game.platforms.map((p) => (
                        <span
                          key={p}
                          className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-900/90 border border-slate-700 text-slate-200 backdrop-blur"
                        >
                          {p}
                        </span>
                      ))}
                      <span className="text-[10px] text-slate-300 font-medium bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur">
                        {game.genre.split('/')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4">
                    <h3 
                      onClick={() => onSelectGameModal(game)}
                      className="text-lg font-bold text-white font-['Rajdhani',sans-serif] leading-tight group-hover:text-blue-400 transition-colors cursor-pointer line-clamp-1"
                    >
                      {game.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {game.developer} • {game.releaseYear}
                    </p>

                    <p className="text-xs text-slate-400 mt-2.5 line-clamp-2 leading-relaxed">
                      {game.description}
                    </p>

                    {/* Tags preview */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {game.tags.slice(0, 2).map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price & CTA */}
                <div className="p-4 pt-2 border-t border-slate-900 flex items-center justify-between mt-2">
                  <div>
                    {game.originalPrice && (
                      <span className="text-[11px] line-through text-slate-500 block">
                        R$ {game.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-xl font-extrabold text-white font-['Rajdhani',sans-serif]">
                      R$ {game.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      id={`btn-view-game-${game.id}`}
                      onClick={() => onSelectGameModal(game)}
                      className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                      title="Ver Ficha Técnica do Jogo"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      id={`btn-add-game-${game.id}`}
                      onClick={() => onAddToCart({
                        id: game.id,
                        name: game.title,
                        category: 'jogo',
                        price: game.price,
                        image: game.image,
                        platformOrColor: game.platforms.join(' & ')
                      })}
                      className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-blue-600/20 transition-all active:scale-95"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Comprar
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
