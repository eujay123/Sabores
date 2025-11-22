import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';
import HistorySection from './components/HistorySection';
import CartDrawer from './components/CartDrawer';
import { AppView, Product, CartItem } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const renderContent = () => {
    switch (currentView) {
      case AppView.MENU:
        return (
          <div className="animate-in fade-in duration-500">
            <div className="bg-brand-900 text-white py-16 text-center relative overflow-hidden">
                 <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <h1 className="text-4xl font-serif font-bold relative z-10">Nosso Menu</h1>
                <p className="mt-2 text-brand-100 relative z-10">Doçura artesanal, ingredientes premium.</p>
            </div>
            <MenuGrid onAddToCart={addToCart} />
          </div>
        );
      case AppView.AI_CONSULTANT:
        return (
          <div className="animate-in fade-in duration-500">
            <AIConsultant />
          </div>
        );
      case AppView.HOME:
      default:
        return (
          <div className="animate-in fade-in duration-500">
            <Hero onCtaClick={() => setCurrentView(AppView.MENU)} />
            <HistorySection />
            <div className="py-8 bg-brand-50 text-center border-t border-stone-100">
                <h3 className="text-brand-800 uppercase tracking-widest text-xs font-bold mb-2">Nossos Favoritos</h3>
            </div>
            <MenuGrid onAddToCart={addToCart} />
            {/* Callout for AI Tool */}
            <section className="bg-stone-900 py-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-900/20 skew-x-12 transform translate-x-20"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Indeciso com a sua festa?</h2>
                    <p className="text-stone-300 text-lg mb-8">Nossa Inteligência Artificial cria a combinação perfeita de bolos e doces para o seu evento em segundos.</p>
                    <button 
                        onClick={() => setCurrentView(AppView.AI_CONSULTANT)}
                        className="bg-white text-brand-900 hover:bg-brand-50 px-8 py-4 rounded-full font-bold transition-colors shadow-xl hover:scale-105 transform duration-200"
                    >
                        Experimentar o Consultor Virtual
                    </button>
                </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream font-sans text-stone-800">
      <Header 
        currentView={currentView} 
        onChangeView={setCurrentView} 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onRemoveItem={removeFromCart}
      />

      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
