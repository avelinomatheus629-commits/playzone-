import React, { useState } from 'react';
import { 
  Sparkles, 
  Tv, 
  Gamepad2, 
  Headphones, 
  Disc, 
  Check, 
  Plus, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck,
  Percent
} from 'lucide-react';
import { CONSOLES_DATA, GAMES_DATA, ACCESSORIES_DATA } from '../data/gamingData';
import { ConsoleItem, GameItem, AccessoryItem, CartItem } from '../types';

interface SetupBuilderProps {
  onAddMultipleToCart: (items: CartItem[]) => void;
  presetConsoleId?: string | null;
}

export const SetupBuilder: React.FC<SetupBuilderProps> = ({
  onAddMultipleToCart,
  presetConsoleId
}) => {
  // Setup State
  const [selectedConsole, setSelectedConsole] = useState<ConsoleItem>(
    CONSOLES_DATA.find(c => c.id === presetConsoleId) || CONSOLES_DATA[1] // default PS5 Slim
  );

  const [selectedExtraController, setSelectedExtraController] = useState<AccessoryItem | null>(null);
  const [selectedAudioOrImmersion, setSelectedAudioOrImmersion] = useState<AccessoryItem | null>(null);
  const [selectedGames, setSelectedGames] = useState<GameItem[]>([GAMES_DATA[0]]); // Spider-Man 2 by default
  const [setupAddedMessage, setSetupAddedMessage] = useState(false);

  // Controllers available
  const availableControllers = ACCESSORIES_DATA.filter(a => a.category === 'controles');
  
  // Audio & Immersion
  const availableAudio = ACCESSORIES_DATA.filter(a => a.category === 'audio' || a.category === 'vr-streaming');

  // Toggle game selection (max 3)
  const toggleGame = (game: GameItem) => {
    if (selectedGames.some(g => g.id === game.id)) {
      setSelectedGames(selectedGames.filter(g => g.id !== game.id));
    } else {
      if (selectedGames.length >= 3) {
        // replace last
        setSelectedGames([...selectedGames.slice(1), game]);
      } else {
        setSelectedGames([...selectedGames, game]);
      }
    }
  };

  // Pricing calculations
  const rawConsolePrice = selectedConsole.price;
  const rawControllerPrice = selectedExtraController ? selectedExtraController.price : 0;
  const rawAudioPrice = selectedAudioOrImmersion ? selectedAudioOrImmersion.price : 0;
  const rawGamesPrice = selectedGames.reduce((acc, g) => acc + g.price, 0);

  const subtotal = rawConsolePrice + rawControllerPrice + rawAudioPrice + rawGamesPrice;
  
  // Combo discount: 8% discount if user builds a complete bundle (Console + Game + Accessory)
  const isCompleteCombo = selectedGames.length > 0 && (selectedExtraController !== null || selectedAudioOrImmersion !== null);
  const discountRate = isCompleteCombo ? 0.08 : 0.04;
  const discountAmount = subtotal * discountRate;
  const finalPrice = subtotal - discountAmount;
  const installmentsValue = (finalPrice / 10).toFixed(2);

  const handleAddAllToCart = () => {
    const itemsToAdd: CartItem[] = [];

    // Console
    itemsToAdd.push({
      id: selectedConsole.id,
      name: selectedConsole.name,
      category: 'console',
      price: selectedConsole.price,
      quantity: 1,
      image: selectedConsole.image
    });

    // Controller
    if (selectedExtraController) {
      itemsToAdd.push({
        id: selectedExtraController.id,
        name: selectedExtraController.name,
        category: 'acessorio',
        price: selectedExtraController.price,
        quantity: 1,
        image: selectedExtraController.image
      });
    }

    // Audio
    if (selectedAudioOrImmersion) {
      itemsToAdd.push({
        id: selectedAudioOrImmersion.id,
        name: selectedAudioOrImmersion.name,
        category: 'acessorio',
        price: selectedAudioOrImmersion.price,
        quantity: 1,
        image: selectedAudioOrImmersion.image
      });
    }

    // Games
    selectedGames.forEach(game => {
      itemsToAdd.push({
        id: game.id,
        name: game.title,
        category: 'jogo',
        price: game.price,
        quantity: 1,
        image: game.image,
        platformOrColor: game.platforms[0]
      });
    });

    onAddMultipleToCart(itemsToAdd);
    setSetupAddedMessage(true);
    setTimeout(() => setSetupAddedMessage(false), 4000);
  };

  return (
    <section id="setup-builder" className="py-20 bg-slate-900/80 text-slate-100 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-600/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Configurador Interativo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-['Rajdhani',sans-serif]">
            MONTE SEU SETUP PLAYSTATION IDEAL
          </h2>
          <p className="text-slate-400 text-base mt-2">
            Combine seu console favorito, controle extra, áudio imersivo e os melhores jogos com desconto exclusivo de combo.
          </p>
        </div>

        {/* Builder Layout: 2 Columns (Config Steps on Left, Dynamic Summary on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Steps Column (Left 7 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Step 1: Escolha o Console */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs">
                  1
                </div>
                <h3 className="text-lg font-bold text-white font-['Rajdhani',sans-serif]">
                  Escolha seu Console PlayStation
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CONSOLES_DATA.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedConsole(c)}
                    className={`p-3.5 rounded-xl text-left border transition-all flex items-center justify-between gap-3 ${
                      selectedConsole.id === c.id
                        ? 'bg-blue-950/50 border-blue-500 shadow-md shadow-blue-500/10'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img src={c.image} alt={c.name} className="w-12 h-12 object-cover rounded-lg" />
                      <div>
                        <span className="text-xs font-bold text-white block">{c.name}</span>
                        <span className="text-[11px] text-slate-400 block">{c.specs.storage} • {c.specs.discDrive}</span>
                        <span className="text-xs font-bold text-blue-400 mt-0.5 block">
                          R$ {c.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>
                    {selectedConsole.id === c.id && (
                      <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Controle Adicional */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold text-xs">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-white font-['Rajdhani',sans-serif]">
                    Adicione um Controle Extra (Multiplayer / Pro)
                  </h3>
                </div>
                {selectedExtraController && (
                  <button
                    onClick={() => setSelectedExtraController(null)}
                    className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-medium"
                  >
                    <Trash2 className="w-3 h-3" /> Remover
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedExtraController(null)}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    selectedExtraController === null
                      ? 'bg-slate-900 border-indigo-500/80 text-white'
                      : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span className="text-xs font-bold block">Apenas 1 Controle</span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">Usa o que vem no console</span>
                  <span className="text-xs font-bold text-emerald-400 mt-1 block">Sem custo adicional</span>
                </button>

                {availableControllers.slice(0, 2).map((ctrl) => (
                  <button
                    key={ctrl.id}
                    type="button"
                    onClick={() => setSelectedExtraController(ctrl)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      selectedExtraController?.id === ctrl.id
                        ? 'bg-indigo-950/50 border-indigo-500 text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-xs font-bold block truncate">{ctrl.name}</span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">{ctrl.badge || 'Gatilhos Adaptáveis'}</span>
                    <span className="text-xs font-bold text-indigo-400 mt-1 block">
                      + R$ {ctrl.price.toFixed(2)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Áudio & Imersão */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-purple-600 text-white font-bold text-xs">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-white font-['Rajdhani',sans-serif]">
                    Áudio 3D ou Acessório de Imersão
                  </h3>
                </div>
                {selectedAudioOrImmersion && (
                  <button
                    onClick={() => setSelectedAudioOrImmersion(null)}
                    className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-medium"
                  >
                    <Trash2 className="w-3 h-3" /> Remover
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedAudioOrImmersion(null)}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    selectedAudioOrImmersion === null
                      ? 'bg-slate-900 border-purple-500/80 text-white'
                      : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span className="text-xs font-bold block">Pular por enquanto</span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">Uso áudio da minha TV</span>
                  <span className="text-xs font-bold text-emerald-400 mt-1 block">R$ 0,00</span>
                </button>

                {availableAudio.slice(0, 3).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedAudioOrImmersion(item)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      selectedAudioOrImmersion?.id === item.id
                        ? 'bg-purple-950/50 border-purple-500 text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-xs font-bold block truncate">{item.name}</span>
                    <span className="text-[11px] text-slate-400 block mt-0.5 truncate">{item.shortDesc}</span>
                    <span className="text-xs font-bold text-purple-400 mt-1 block">
                      + R$ {item.price.toFixed(2)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Escolha até 3 Jogos com Combo */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold text-xs">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-white font-['Rajdhani',sans-serif]">
                    Escolha de 1 a 3 Jogos Iniciais ({selectedGames.length}/3 selecionados)
                  </h3>
                </div>
                <span className="text-[11px] text-slate-400">Clique para alternar</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {GAMES_DATA.slice(0, 6).map((game) => {
                  const isSelected = selectedGames.some(g => g.id === game.id);
                  return (
                    <button
                      key={game.id}
                      type="button"
                      onClick={() => toggleGame(game)}
                      className={`p-2.5 rounded-xl text-left border transition-all relative overflow-hidden ${
                        isSelected
                          ? 'bg-emerald-950/40 border-emerald-500 text-white shadow'
                          : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="relative h-20 w-full rounded-lg overflow-hidden mb-2 bg-slate-950">
                        <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
                        {isSelected && (
                          <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <span className="text-xs font-bold text-white block line-clamp-1">{game.title}</span>
                      <span className="text-[11px] text-emerald-400 font-bold block mt-0.5">
                        R$ {game.price.toFixed(2)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Sticky Summary Column (Right 4 cols) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="p-6 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <h4 className="font-bold text-white text-base font-['Rajdhani',sans-serif]">
                  RESUMO DO SEU SETUP
                </h4>
                {isCompleteCombo && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <Percent className="w-3 h-3" /> Combo 8% OFF
                  </span>
                )}
              </div>

              {/* Items Breakdown */}
              <div className="py-4 space-y-3 text-xs border-b border-slate-800">
                {/* Console */}
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <span className="text-white font-bold block">{selectedConsole.name}</span>
                    <span className="text-[11px] text-slate-400">{selectedConsole.specs.storage}</span>
                  </div>
                  <span className="font-mono text-slate-200 font-semibold">
                    R$ {selectedConsole.price.toFixed(2)}
                  </span>
                </div>

                {/* Extra Controller */}
                {selectedExtraController && (
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="text-white font-bold block">{selectedExtraController.name}</span>
                      <span className="text-[11px] text-slate-400">Controle Extra</span>
                    </div>
                    <span className="font-mono text-slate-200 font-semibold">
                      R$ {selectedExtraController.price.toFixed(2)}
                    </span>
                  </div>
                )}

                {/* Audio */}
                {selectedAudioOrImmersion && (
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="text-white font-bold block">{selectedAudioOrImmersion.name}</span>
                      <span className="text-[11px] text-slate-400">Áudio / VR</span>
                    </div>
                    <span className="font-mono text-slate-200 font-semibold">
                      R$ {selectedAudioOrImmersion.price.toFixed(2)}
                    </span>
                  </div>
                )}

                {/* Games */}
                {selectedGames.map(game => (
                  <div key={game.id} className="flex justify-between items-start gap-2">
                    <div>
                      <span className="text-white font-bold block truncate max-w-[180px]">{game.title}</span>
                      <span className="text-[11px] text-slate-400">Jogo Digital/Físico</span>
                    </div>
                    <span className="font-mono text-slate-200 font-semibold">
                      R$ {game.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total & Discounts */}
              <div className="py-4 space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal bruto:</span>
                  <span className="line-through font-mono">R$ {subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Desconto de Combo Gamer:</span>
                  <span className="font-mono">- R$ {discountAmount.toFixed(2)}</span>
                </div>

                <div className="pt-3 flex justify-between items-baseline">
                  <span className="text-sm font-bold text-white">Total do Pacote:</span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-white font-['Rajdhani',sans-serif]">
                      R$ {finalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    <span className="text-[11px] text-blue-400 block font-medium">
                      ou 10x de R$ {installmentsValue} sem juros
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  id="btn-add-setup-to-cart"
                  onClick={handleAddAllToCart}
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 transition-all active:scale-[0.98]"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Adicionar Todo o Setup ao Carrinho
                </button>

                {setupAddedMessage && (
                  <div className="mt-2.5 p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs text-center font-semibold animate-in fade-in">
                    Setup adicionado com sucesso ao seu carrinho!
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Garantia Oficial PlayStation Brasil de 1 Ano
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
