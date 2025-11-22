import React from 'react';
import { MapPin, Calendar, Heart } from 'lucide-react';

const HistorySection: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image Grid */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/seed/bakery1/400/500" 
                alt="Nossa primeira cozinha" 
                className="rounded-2xl shadow-lg transform translate-y-8"
              />
              <img 
                src="https://picsum.photos/seed/bakery2/400/500" 
                alt="Vitrine atual" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-50 rounded-full opacity-50 blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex items-center space-x-2 text-brand-600 font-bold uppercase tracking-widest text-sm">
              <MapPin className="w-4 h-4" />
              <span>De Maputo para o Mundo</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
              Uma jornada de sabor que começou em <span className="text-brand-500 underline decoration-brand-200">2018</span>.
            </h2>
            
            <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
              <p>
                Tudo começou numa pequena cozinha em <strong>Maputo, Moçambique</strong>. Com apenas um forno doméstico e uma batedeira herdada da avó, fundamos a Sabores com um sonho simples: trazer a alta confeitaria francesa para o coração da África, misturando técnicas europeias com os ingredientes tropicais vibrantes da nossa terra.
              </p>
              <p>
                Em 2018, nossas primeiras fornadas de Pastéis de Nata e Bolos de Polana conquistaram a vizinhança. O cheiro de manteiga e baunilha tornou-se nossa assinatura. O que era um hobby apaixonado transformou-se numa missão de excelência.
              </p>
              <p>
                Hoje, expandimos horizontes, mas a essência permanece a mesma: cada doce é feito à mão, respeitando o tempo de fermentação, a qualidade da manteiga e, acima de tudo, o respeito pelo cliente que nos escolhe para celebrar seus momentos mais doces.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-100 mt-8">
               <div className="text-center">
                 <Calendar className="w-8 h-8 mx-auto text-brand-500 mb-2" />
                 <div className="font-bold text-2xl text-stone-900">2018</div>
                 <div className="text-xs text-stone-500 uppercase">Fundação</div>
               </div>
               <div className="text-center">
                 <MapPin className="w-8 h-8 mx-auto text-brand-500 mb-2" />
                 <div className="font-bold text-2xl text-stone-900">Maputo</div>
                 <div className="text-xs text-stone-500 uppercase">Origem</div>
               </div>
               <div className="text-center">
                 <Heart className="w-8 h-8 mx-auto text-brand-500 mb-2" />
                 <div className="font-bold text-2xl text-stone-900">10k+</div>
                 <div className="text-xs text-stone-500 uppercase">Clientes Felizes</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
