import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Tag, 
  Check, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, newQuantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = discountApplied ? rawSubtotal * 0.1 : 0;
  const finalTotal = rawSubtotal - discountAmount;
  const installments = (finalTotal / 10).toFixed(2);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'GAMER10') {
      setDiscountApplied(true);
    } else {
      alert('Cupom inválido! Tente utilizar "GAMER10" para 10% de desconto.');
    }
  };

  const handleCheckout = () => {
    setCheckoutSuccess(true);
  };

  const handleCloseCheckoutSuccess = () => {
    setCheckoutSuccess(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col justify-between text-slate-100">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-blue-400" />
              <h3 className="font-bold text-lg text-white font-['Rajdhani',sans-serif]">
                MEU SETUP & CARRINHO ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h3>
            </div>
            <button
              id="btn-close-cart"
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body: Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {checkoutSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h4 className="text-2xl font-black text-white font-['Rajdhani',sans-serif]">
                  PEDIDO CONFIRMADO COM SUCESSO!
                </h4>
                <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                  Parabéns! Sua simulação de compra para os consoles e jogos PlayStation foi processada. Prepare sua TV para a nova geração!
                </p>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs space-y-1">
                  <div className="flex justify-between text-slate-400">
                    <span>Protocolo:</span>
                    <span className="font-mono text-white font-bold">#PS-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Total Simulado:</span>
                    <span className="font-mono text-emerald-400 font-bold">R$ {finalTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Forma:</span>
                    <span className="text-slate-300">10x sem juros de R$ {installments}</span>
                  </div>
                </div>
                <button
                  onClick={handleCloseCheckoutSuccess}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30"
                >
                  Continuar Navegando
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-3 text-slate-400">
                <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
                <p className="text-sm font-semibold text-slate-300">Seu carrinho está vazio.</p>
                <p className="text-xs text-slate-500">
                  Adicione consoles PS5, PS4, jogos exclusivos ou acessórios para começar seu setup.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
                >
                  Explorar Catálogo
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.platformOrColor || ''}`}
                    className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 object-cover rounded-xl bg-slate-900 border border-slate-800 shrink-0"
                      />
                      <div>
                        <span className="text-xs font-bold text-white block line-clamp-1">{item.name}</span>
                        {item.platformOrColor && (
                          <span className="text-[10px] text-blue-400 block font-medium">
                            {item.platformOrColor}
                          </span>
                        )}
                        <span className="text-xs font-mono font-bold text-slate-200 mt-1 block">
                          R$ {(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-slate-500 hover:text-rose-400 p-1 transition-colors"
                        title="Remover"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center border border-slate-800 rounded-lg bg-slate-900">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-xs text-slate-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold font-mono text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-xs text-slate-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer: Totals, Coupon & Checkout */}
          {!checkoutSuccess && items.length > 0 && (
            <div className="p-6 border-t border-slate-800 bg-slate-950/80 space-y-4">
              
              {/* Coupon input */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Cupom (use GAMER10)"
                    className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 uppercase font-mono focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors"
                >
                  Aplicar
                </button>
              </form>

              {discountApplied && (
                <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Cupom GAMER10 Aplicado (-10%)
                  </span>
                  <span>- R$ {discountAmount.toFixed(2)}</span>
                </div>
              )}

              {/* Totals */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal:</span>
                  <span className="font-mono">R$ {rawSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Frete Brasil:</span>
                  <span className="text-emerald-400 font-bold">GRÁTIS</span>
                </div>
                <div className="pt-2 flex justify-between items-baseline border-t border-slate-800">
                  <span className="text-sm font-bold text-white">Total:</span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-white font-['Rajdhani',sans-serif]">
                      R$ {finalTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    <span className="text-[11px] text-blue-400 block">
                      ou 10x de R$ {installments} sem juros
                    </span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                id="btn-checkout-cart"
                onClick={handleCheckout}
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 transition-all active:scale-[0.98]"
              >
                <span>Finalizar Pedido Simulado</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Compra 100% Segura • Distribuição Oficial
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
