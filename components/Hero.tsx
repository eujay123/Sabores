import React from 'react';
import { ChevronRight } from 'lucide-react';
import { AppView } from '../types';

interface HeroProps {
    onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="relative bg-stone-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-60"
          src="https://picsum.photos/id/292/1920/1080"
          alt="Confeitaria Sabores"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="md:w-2/3 lg:w-1/2">
          <span className="text-brand-300 font-bold tracking-wider uppercase text-sm mb-4 block">
            Desde 1995
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Arte em forma de <br />
            <span className="text-brand-400 italic">doçura.</span>
          </h1>
          <p className="mt-6 text-xl text-stone-300 max-w-lg font-light leading-relaxed">
            Descubra sabores inesquecíveis, ingredientes selecionados e o toque artesanal que transforma cada doce em uma celebração.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button 
                onClick={onCtaClick}
                className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg shadow-brand-500/30"
            >
              Ver Menu Completo
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300">
              Nossa História
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;