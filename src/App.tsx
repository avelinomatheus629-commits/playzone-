import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PromoVideoPlayer } from './components/PromoVideoPlayer';
import { ConsoleShowcase } from './components/ConsoleShowcase';
import { GamesSection } from './components/GamesSection';
import { AccessoriesSection } from './components/AccessoriesSection';
import { SetupBuilder } from './components/SetupBuilder';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ConsoleDetailModal } from './components/ConsoleDetailModal';
import { GameDetailModal } from './components/GameDetailModal';
import { SearchModal } from './components/SearchModal';
import { CartDrawer } from './components/CartDrawer';
import { ConsoleItem, GameItem, CartItem } from './types';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Start with a DualSense in cart as a helpful preview
    {
      id: 'dualsense-standard',
      name: 'Controle de PS5 (DualSense)',
      category: 'acessorio',
      price: 200,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      platformOrColor: 'Midnight Black'
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedConsoleModal, setSelectedConsoleModal] = useState<ConsoleItem | null>(null);
  const [selectedGameModal, setSelectedGameModal] = useState<GameItem | null>(null);
  const [presetSetupConsoleId, setPresetSetupConsoleId] = useState<string | null>(null);
  
  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleAddToCart = (item: {
    id: string;
    name: string;
    category: 'console' | 'jogo' | 'acessorio';
    price: number;
    image: string;
    platformOrColor?: string;
  }) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id && i.platformOrColor === item.platformOrColor);
      if (existing) {
        return prev.map(i =>
          i === existing ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    showToast(`${item.name} adicionado ao seu setup!`);
  };

  const handleAddMultipleToCart = (newItems: CartItem[]) => {
    setCartItems(prev => {
      const updated = [...prev];
      newItems.forEach(newItem => {
        const existing = updated.find(i => i.id === newItem.id);
        if (existing) {
          existing.quantity += newItem.quantity;
        } else {
          updated.push(newItem);
        }
      });
      return updated;
    });
    showToast(`${newItems.length} itens do Setup adicionados ao carrinho!`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoToSetupBuilder = (consoleId: string) => {
    setPresetSetupConsoleId(consoleId);
    scrollToSection('setup-builder');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900/95 border border-blue-500/50 text-white shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Main Header / Navbar */}
      <Navbar
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateTo={scrollToSection}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onSelectConsole={(c) => setSelectedConsoleModal(c)}
          onAddToCart={handleAddToCart}
          onNavigateTo={scrollToSection}
        />

        {/* Dedicated Promotional Video Section */}
        <section id="video-promocional" className="py-12 bg-slate-950/90 relative border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Vídeo Promocional Oficial
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-['Rajdhani',sans-serif]">
                VÍDEO PROMOCIONAL COM OS NOVOS PREÇOS
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Apresentação cinematográfica com os novos valores atualizados: PlayStation 5 (R$ 2.500,00), PlayStation 4 (R$ 1.400,00), Controle de PS5 (R$ 200,00) e Controle de PS4 (R$ 130,00).
              </p>
            </div>

            <PromoVideoPlayer onAddToCart={handleAddToCart} />
          </div>
        </section>

        {/* Consoles Showcase with Comparison Table */}
        <ConsoleShowcase
          onSelectConsoleModal={(c) => setSelectedConsoleModal(c)}
          onAddToCart={handleAddToCart}
          onGoToSetupBuilder={handleGoToSetupBuilder}
        />

        {/* Games Showcase */}
        <GamesSection
          onSelectGameModal={(g) => setSelectedGameModal(g)}
          onAddToCart={handleAddToCart}
        />

        {/* Accessories Showcase */}
        <AccessoriesSection
          onAddToCart={handleAddToCart}
        />

        {/* Interactive "Monte seu Setup Gamer" */}
        <SetupBuilder
          onAddMultipleToCart={handleAddMultipleToCart}
          presetConsoleId={presetSetupConsoleId}
        />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onNavigateTo={scrollToSection} />

      {/* Modals & Slide-over Drawers */}
      <ConsoleDetailModal
        consoleItem={selectedConsoleModal}
        onClose={() => setSelectedConsoleModal(null)}
        onAddToCart={handleAddToCart}
      />

      <GameDetailModal
        game={selectedGameModal}
        onClose={() => setSelectedGameModal(null)}
        onAddToCart={handleAddToCart}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onAddToCart={(item) => {
          handleAddToCart(item);
          setIsCartOpen(true);
        }}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
