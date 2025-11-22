import React from 'react';
import { Instagram, Facebook, Phone, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-bold text-white">Sabores<span className="text-brand-500">.</span></h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Confeitaria artesanal dedicada a criar memórias doces e inesquecíveis. Ingredientes premium, amor em cada detalhe.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-brand-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-500 transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-600 shrink-0" />
                <span>Rua das Acácias, 123 - Jardins<br />São Paulo, SP</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-600 shrink-0" />
                <span>(11) 99999-8888</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-600 shrink-0" />
                <span>encomendas@sabores.com.br</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">Horário de Funcionamento</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Terça a Sexta</span>
                <span className="text-white">10h - 19h</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span className="text-white">09h - 18h</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="text-white">09h - 13h</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Confeitaria Sabores. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;