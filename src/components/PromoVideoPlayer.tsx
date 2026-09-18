import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize2, 
  Sparkles, 
  ShoppingBag, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  Film
} from 'lucide-react';

interface PromoProduct {
  id: string;
  name: string;
  category: 'console' | 'acessorio';
  price: number;
  formattedPrice: string;
  installments: string;
  tagline: string;
  image: string;
  badge: string;
  specs: string[];
}

const PROMO_PRODUCTS: PromoProduct[] = [
  {
    id: 'ps5-slim-disc',
    name: 'PlayStation 5 (PS5)',
    category: 'console',
    price: 2500,
    formattedPrice: 'R$ 2.500,00',
    installments: '10x de R$ 250,00 sem juros',
    tagline: 'A experiência completa de nova geração com SSD ultrarrápido e gráficos em 4K',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1000&q=80',
    badge: 'Nova Geração 4K',
    specs: ['SSD Ultra Veloz', 'Até 120 FPS', 'Tempest 3D Audio', 'Ray Tracing']
  },
  {
    id: 'ps4-slim',
    name: 'PlayStation 4 (PS4)',
    category: 'console',
    price: 1400,
    formattedPrice: 'R$ 1.400,00',
    installments: '10x de R$ 140,00 sem juros',
    tagline: 'O clássico consagrado mundialmente com mais de 4.000 títulos disponíveis',
    image: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?auto=format&fit=crop&w=1000&q=80',
    badge: 'Melhor Custo de Entrada',
    specs: ['Biblioteca Gigante', 'Design Silencioso', '1TB de Armazenamento', 'Full HD HDR']
  },
  {
    id: 'dualsense-standard',
    name: 'Controle de PS5 (DualSense)',
    category: 'acessorio',
    price: 200,
    formattedPrice: 'R$ 200,00',
    installments: '10x de R$ 20,00 sem juros',
    tagline: 'Resposta tátil imersiva, gatilhos adaptáveis dinâmicos e conexão sem fio',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
    badge: 'Imersão Sensorial',
    specs: ['Gatilhos Dinâmicos', 'Vibração Háptica', 'Microfone Integrado', 'Touchpad']
  },
  {
    id: 'dualshock-4-standard',
    name: 'Controle de PS4 (DualShock 4)',
    category: 'acessorio',
    price: 130,
    formattedPrice: 'R$ 130,00',
    installments: '10x de R$ 13,00 sem juros',
    tagline: 'Precisão lendária com barra de luz, touch pad capacitivo e ergonomia consagrada',
    image: 'https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?auto=format&fit=crop&w=800&q=80',
    badge: 'Precisão Clássica',
    specs: ['Barra Luminosa', 'Sensor Sixaxis', 'Analógicos Precisos', 'Bateria Recarregável']
  }
];

interface PromoVideoPlayerProps {
  onAddToCart?: (item: {
    id: string;
    name: string;
    category: 'console' | 'acessorio';
    price: number;
    image: string;
  }) => void;
}

export const PromoVideoPlayer: React.FC<PromoVideoPlayerProps> = ({ onAddToCart }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0); // 0 to 4 (scene 4 is recap/summary)
  const [sceneProgress, setSceneProgress] = useState(0); // 0 to 100%
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const SCENE_DURATION_MS = 5000; // 5 seconds per product
  const TOTAL_SCENES = 5; // 4 products + 1 final recap

  // Audio synthesizer for subtle ambient sound effect when unmuted
  const playSynthBeep = () => {
    if (isMuted) return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } catch {
      // Audio context might be restricted before interaction
    }
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = 50; // update 20 times per second
    const increment = (interval / SCENE_DURATION_MS) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + increment >= 100) {
          setCurrentScene((curr) => {
            const next = (curr + 1) % TOTAL_SCENES;
            playSynthBeep();
            return next;
          });
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, isMuted]);

  const handleNext = () => {
    setCurrentScene((prev) => (prev + 1) % TOTAL_SCENES);
    setSceneProgress(0);
    playSynthBeep();
  };

  const handlePrev = () => {
    setCurrentScene((prev) => (prev - 1 + TOTAL_SCENES) % TOTAL_SCENES);
    setSceneProgress(0);
    playSynthBeep();
  };

  const handleRestart = () => {
    setCurrentScene(0);
    setSceneProgress(0);
    setIsPlaying(true);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const isRecapScene = currentScene === 4;
  const currentProduct = !isRecapScene ? PROMO_PRODUCTS[currentScene] : null;

  return (
    <div 
      ref={containerRef}
      id="promo-video-player"
      className={`relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl transition-all ${
        isFullscreen ? 'h-screen max-w-none rounded-none' : 'aspect-[16/9] sm:aspect-[16/9] min-h-[440px]'
      }`}
    >
      {/* Cinematic Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 pointer-events-none"></div>
      
      {/* PlayStation Dynamic Neon Glow Layers */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/25 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-600/20 blur-[130px] rounded-full pointer-events-none"></div>

      {/* Floating PlayStation Symbols Watermark */}
      <div className="absolute top-6 right-8 flex items-center gap-3 text-slate-700/40 text-sm font-mono select-none pointer-events-none">
        <span className="text-emerald-500/30 font-black">▲</span>
        <span className="text-rose-500/30 font-black">●</span>
        <span className="text-blue-500/30 font-black">✖</span>
        <span className="text-amber-500/30 font-black">■</span>
        <span className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">OFFICIAL PROMO</span>
      </div>

      {/* Live "REC" / ON-AIR Broadcast Watermark */}
      <div className="absolute top-6 left-8 flex items-center gap-2 z-20">
        <span className="flex h-2.5 w-2.5 rounded-full bg-rose-500 animate-ping"></span>
        <span className="px-2 py-0.5 rounded bg-rose-600/90 text-[10px] font-black tracking-wider text-white uppercase shadow">
          VÍDEO PROMOCIONAL
        </span>
        <span className="text-[11px] font-mono text-slate-400 font-bold ml-1">
          00:0{currentScene * 5 + Math.floor((sceneProgress / 100) * 5)} / 00:25
        </span>
      </div>

      {/* Main Video Scene Content */}
      <div className="relative z-10 w-full h-full p-6 sm:p-10 flex flex-col justify-between">
        
        {/* Scene Area */}
        <div className="flex-1 flex items-center justify-center my-auto">
          {!isRecapScene && currentProduct ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-in fade-in zoom-in-95 duration-500 key={currentProduct.id}">
              
              {/* Product Visual Card */}
              <div className="md:col-span-6 flex justify-center">
                <div className="relative group w-full max-w-md h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-700/60 shadow-2xl p-4 flex items-center justify-center">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full h-full object-cover rounded-xl transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-lg">
                      {currentProduct.badge}
                    </span>
                  </div>

                  {/* Spec pills on image bottom */}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                    {currentProduct.specs.map((spec, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700 text-slate-300 font-mono font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Info & NEW PRICE */}
              <div className="md:col-span-6 space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/40 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  Oferta Promocional Oficial
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Rajdhani',sans-serif] tracking-tight leading-none">
                  {currentProduct.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
                  {currentProduct.tagline}
                </p>

                {/* THE HIGHLIGHTED NEW PRICE */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/70 via-slate-900 to-slate-950 border border-blue-500/50 shadow-xl inline-block w-full max-w-md">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Preço Exclusivo do Vídeo:
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-emerald-400 font-['Rajdhani',sans-serif] tracking-tight drop-shadow-md">
                      {currentProduct.formattedPrice}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-blue-400 mt-1 block">
                    ou {currentProduct.installments}
                  </span>
                </div>

                {onAddToCart && (
                  <div className="pt-2">
                    <button
                      onClick={() => onAddToCart({
                        id: currentProduct.id,
                        name: currentProduct.name,
                        category: currentProduct.category,
                        price: currentProduct.price,
                        image: currentProduct.image
                      })}
                      className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 mx-auto md:mx-0 transition-transform active:scale-95"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Garantir com este Preço
                    </button>
                  </div>
                )}

              </div>

            </div>
          ) : (
            /* Scene 5: Grand Recap of all 4 updated prices */
            <div className="w-full text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
              <div>
                <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider">
                  Resumo Geral do Vídeo Promocional
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white font-['Rajdhani',sans-serif] mt-2">
                  CONFIRA A TABELA DE NOVOS PREÇOS OFICIAIS
                </h3>
              </div>

              {/* Grid of the 4 requested products */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
                {PROMO_PRODUCTS.map((prod) => (
                  <div
                    key={prod.id}
                    className="p-4 rounded-2xl bg-slate-900/90 border border-blue-500/30 text-center space-y-2 shadow-lg hover:border-blue-400 transition-colors"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                      <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1 font-['Rajdhani',sans-serif]">
                      {prod.name}
                    </h4>
                    <div className="text-xl sm:text-2xl font-black text-emerald-400 font-['Rajdhani',sans-serif]">
                      {prod.formattedPrice}
                    </div>
                    <span className="text-[10px] text-blue-400 block font-medium">
                      {prod.installments}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Preços 100% atualizados e prontos para divulgação oficial.
              </div>
            </div>
          )}
        </div>

        {/* Video Scrubber & Playback Controls Bar */}
        <div className="pt-4 border-t border-slate-800/80 space-y-3">
          
          {/* Scene Progress Indicators / Multi-Segment Timeline */}
          <div className="grid grid-cols-5 gap-1.5">
            {Array.from({ length: TOTAL_SCENES }).map((_, idx) => {
              let fillPercent = 0;
              if (idx < currentScene) fillPercent = 100;
              else if (idx === currentScene) fillPercent = sceneProgress;

              return (
                <div 
                  key={idx}
                  onClick={() => {
                    setCurrentScene(idx);
                    setSceneProgress(0);
                  }}
                  className="h-1.5 bg-slate-800 rounded-full overflow-hidden cursor-pointer hover:h-2 transition-all"
                  title={`Cena ${idx + 1}`}
                >
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-400 transition-all duration-75"
                    style={{ width: `${fillPercent}%` }}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-md"
                title={isPlaying ? 'Pausar Vídeo' : 'Reproduzir Vídeo'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              <button
                onClick={handleRestart}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Reiniciar Vídeo do Começo"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={handlePrev}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Cena Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Próxima Cena"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-2 rounded-xl transition-colors ${
                  !isMuted ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
                title={isMuted ? 'Ativar Efeitos Sonoros' : 'Silenciar'}
              >
                {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
            </div>

            {/* Middle label */}
            <div className="hidden sm:flex items-center gap-1.5 font-['Rajdhani',sans-serif] font-bold text-sm text-slate-200">
              <Film className="w-4 h-4 text-blue-400" />
              <span>
                {isRecapScene 
                  ? 'Cena 5 de 5: Tabela Completa de Preços' 
                  : `Cena ${currentScene + 1} de 5: ${currentProduct?.name}`}
              </span>
            </div>

            {/* Right: Fullscreen */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title={isFullscreen ? 'Sair de Tela Cheia' : 'Tela Cheia'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
