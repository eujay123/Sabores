import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Sparkles } from 'lucide-react';
import { AppView } from '../types';

interface HeaderProps {
  currentView: AppView;
  onChangeView: (view: AppView) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onChangeView, cartCount, onOpenCart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', value: AppView.HOME },
    { label: 'Menu Completo', value: AppView.MENU },
    { label: 'Consultoria AI', value: AppView.AI_CONSULTANT, icon: <Sparkles className="w-4 h-4 mr-1 text-brand-gold" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => onChangeView(AppView.HOME)}
          >
            <h1 className="font-serif text-3xl font-bold text-brand-900 tracking-tighter group-hover:scale-105 transition-transform">
              Sabores<span className="text-brand-500">.</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onChangeView(item.value)}
                className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                  currentView === item.value 
                    ? 'text-brand-600' 
                    : 'text-stone-500 hover:text-brand-800'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
            <button 
                onClick={onOpenCart}
                className="bg-brand-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-brand-800 transition-colors shadow-md flex items-center relative"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Cesta
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                    {cartCount}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={onOpenCart}
                className="relative text-stone-600"
            >
                <ShoppingBag className="w-6 h-6" />
                {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-brand-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-500 hover:text-brand-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-lg z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  onChangeView(item.value);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center w-full px-3 py-4 text-base font-medium rounded-md ${
                  currentView === item.value
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-stone-600 hover:text-brand-900 hover:bg-stone-50'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
