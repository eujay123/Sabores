import React from 'react';
import { X, Trash2, MessageCircle, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveItem: (id: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cart, onRemoveItem }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;

    let message = "*Olá! Gostaria de fazer um orçamento/encomenda na Sabores:*\n\n";
    cart.forEach(item => {
      message += `- ${item.quantity}x ${item.name} (RM ${item.price.toFixed(2)})\n`;
    });
    message += `\n*Total Estimado: RM ${total.toFixed(2)}*`;
    message += "\n\nPor favor, confirmem a disponibilidade.";

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511999998888?text=${encodedMessage}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="absolute inset-y-0 right-0 max-w-md w-full flex pointer-events-none">
        <div className="w-full bg-white shadow-2xl pointer-events-auto flex flex-col h-full transform transition-transform duration-300 ease-in-out">
          
          {/* Header */}
          <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-brand-50">
            <h2 className="text-lg font-serif font-bold text-stone-900 flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2 text-brand-600" />
              Sua Cesta
            </h2>
            <button onClick={onClose} className="text-stone-500 hover:text-stone-900">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-stone-400 text-center">
                <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
                <p>Sua cesta está vazia.</p>
                <button onClick={onClose} className="mt-4 text-brand-600 font-bold hover:underline">
                  Voltar ao Menu
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-stone-100 flex-shrink-0">
                     <img src={item.imagePlaceholder} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-stone-900 text-sm line-clamp-1">{item.name}</h4>
                    <p className="text-stone-500 text-xs mb-2">{item.category}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-brand-600">RM {item.price.toFixed(2)}</span>
                      <div className="flex items-center gap-3">
                         <span className="text-sm text-stone-600">Qtd: {item.quantity}</span>
                         <button 
                            onClick={() => onRemoveItem(item.id)}
                            className="text-stone-400 hover:text-red-500"
                         >
                            <Trash2 className="w-4 h-4" />
                         </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-stone-100 bg-white">
              <div className="flex justify-between items-center mb-4">
                <span className="text-stone-600">Total Estimado</span>
                <span className="text-2xl font-serif font-bold text-stone-900">RM {total.toFixed(2)}</span>
              </div>
              <button 
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold shadow-lg transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar via WhatsApp
              </button>
              <p className="text-xs text-center text-stone-400 mt-3">
                O pagamento e a entrega serão combinados diretamente com a loja.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
