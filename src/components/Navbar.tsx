import React, { useState } from 'react';
import { 
  Gamepad2, 
  Search, 
  ShoppingBag, 
  Menu, 
  X, 
  Sparkles, 
  SlidersHorizontal, 
  Disc, 
  Headphones, 
  Tv, 
  HelpCircle,
  Flame
} from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cartItems: CartItem[];
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItems,
  onOpenCart,
  onOpenSearch,
  onNavigateTo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavClick = (sectionId: string) => {
    onNavigateTo(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl transition-all">
      {/* Top micro announcement */}
      <div className="bg-gradient-to-r from-blue-900/60 via-indigo-900/50 to-blue-900/60 border-b border-blue-500/20 py-1.5 px-4 text-center text-xs font-medium text-blue-200 flex items-center justify-center gap-2">
        <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
        <span className="font-semibold text-white">Especial PlayStation:</span> Frete Grátis em consoles e até 10x sem juros no cartão de crédito!
        <span className="hidden md:inline-block text-blue-300">| Cupom <strong className="text-white font-mono bg-blue-800/80 px-1.5 py-0.5 rounded">GAMER10</strong> para 10% OFF</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo with PlayStation symbols aesthetic */}
          <div 
            id="brand-logo" 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-500/25 border border-blue-400/30 group-hover:scale-105 transition-transform duration-300">
              <Gamepad2 className="w-6 h-6 text-white" />
              <div className="absolute -inset-1 rounded-xl bg-blue-500/20 blur -z-10 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-tight text-white font-['Rajdhani',sans-serif]">
                  PLAY<span className="text-blue-500">ZONE</span>
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-950 text-blue-400 border border-blue-800/60">
                  PS5 & PS4
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 tracking-wider">
                <span className="text-emerald-400 font-bold">▲</span>
                <span className="text-rose-400 font-bold">●</span>
                <span className="text-blue-400 font-bold">✖</span>
                <span className="text-amber-400 font-bold">■</span>
                <span className="ml-1 text-slate-400">GAMING HUB</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              id="nav-video-promo"
              onClick={() => handleNavClick('video-promocional')}
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-emerald-300 hover:text-emerald-200 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Vídeo Promocional
            </button>

            <button
              id="nav-consoles"
              onClick={() => handleNavClick('consoles')}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-2"
            >
              <Tv className="w-4 h-4 text-blue-400" />
              Consoles
            </button>

            <button
              id="nav-compare"
              onClick={() => handleNavClick('comparativo')}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
              PS5 vs PS4
            </button>

            <button
              id="nav-games"
              onClick={() => handleNavClick('jogos')}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-2"
            >
              <Disc className="w-4 h-4 text-purple-400" />
              Jogos
            </button>

            <button
              id="nav-accessories"
              onClick={() => handleNavClick('acessorios')}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-2"
            >
              <Headphones className="w-4 h-4 text-indigo-400" />
              Acessórios
            </button>

            <button
              id="nav-setup-builder"
              onClick={() => handleNavClick('setup-builder')}
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-blue-300 bg-blue-950/70 hover:bg-blue-900/60 border border-blue-700/40 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Monte seu Setup
            </button>

            <button
              id="nav-faq"
              onClick={() => handleNavClick('faq')}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition-colors flex items-center gap-1.5"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Dúvidas
            </button>
          </nav>

          {/* Action buttons (Search & Cart) */}
          <div className="flex items-center gap-2.5">
            {/* Search Trigger */}
            <button
              id="btn-open-search"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 text-sm transition-colors group"
              title="Buscar consoles, jogos e acessórios"
            >
              <Search className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
              <span className="hidden sm:inline-block text-xs font-medium">Buscar catálogo...</span>
              <kbd className="hidden md:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400">
                /
              </kbd>
            </button>

            {/* Cart / Wishlist Button */}
            <button
              id="btn-open-cart"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline-block">Meu Setup</span>
              {totalCartCount > 0 && (
                <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-bold bg-white text-blue-700 rounded-full shadow">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile menu hamburger */}
            <button
              id="btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Abrir menu mobile"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => handleNavClick('video-promocional')}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 text-left font-medium text-emerald-200"
          >
            <span className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-emerald-400" /> Vídeo Promocional (Novos Preços)
            </span>
            <span className="text-xs text-emerald-400 font-semibold">Assistir</span>
          </button>

          <button
            onClick={() => handleNavClick('consoles')}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-left font-medium text-slate-200"
          >
            <span className="flex items-center gap-3">
              <Tv className="w-4 h-4 text-blue-400" /> Consoles PS5 & PS4
            </span>
            <span className="text-xs text-blue-400 font-semibold">Ver modelos</span>
          </button>

          <button
            onClick={() => handleNavClick('comparativo')}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-left font-medium text-slate-200"
          >
            <span className="flex items-center gap-3">
              <SlidersHorizontal className="w-4 h-4 text-cyan-400" /> Comparativo Técnico
            </span>
            <span className="text-xs text-cyan-400 font-semibold">PS5 vs PS4</span>
          </button>

          <button
            onClick={() => handleNavClick('jogos')}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-left font-medium text-slate-200"
          >
            <span className="flex items-center gap-3">
              <Disc className="w-4 h-4 text-purple-400" /> Jogos Exclusivos & Lançamentos
            </span>
            <span className="text-xs text-purple-400 font-semibold">Catálogo</span>
          </button>

          <button
            onClick={() => handleNavClick('acessorios')}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-left font-medium text-slate-200"
          >
            <span className="flex items-center gap-3">
              <Headphones className="w-4 h-4 text-indigo-400" /> Controles & Acessórios
            </span>
            <span className="text-xs text-indigo-400 font-semibold">DualSense & Áudio</span>
          </button>

          <button
            onClick={() => handleNavClick('setup-builder')}
            className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border border-blue-500/40 text-left font-bold text-white shadow"
          >
            <span className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-blue-300" /> Monte seu Setup com Desconto
            </span>
            <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full font-bold">10% OFF</span>
          </button>

          <button
            onClick={() => handleNavClick('faq')}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-900 text-left font-medium text-slate-400"
          >
            <span className="flex items-center gap-3">
              <HelpCircle className="w-4 h-4" /> Dúvidas Frequentes (FAQ)
            </span>
          </button>
        </div>
      )}
    </header>
  );
};
