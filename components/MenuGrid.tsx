import React, { useState } from 'react';
import { FEATURED_PRODUCTS } from '../constants';
import { Product, CartItem } from '../types';
import { Plus, Loader2, Wand2 } from 'lucide-react';
import { generateProductImage } from '../services/geminiService';

interface MenuGridProps {
  onAddToCart: (product: Product) => void;
}

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'bolos', label: 'Bolos' },
  { id: 'doces', label: 'Doces Finos' },
  { id: 'salgados', label: 'Salgados' },
  { id: 'bebidas', label: 'Bebidas' },
];

const MenuGrid: React.FC<MenuGridProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  // Store generated images locally so we don't regenerate them
  const [generatedImages, setGeneratedImages] = useState<Record<number, string>>({});
  const [generatingId, setGeneratingId] = useState<number | null>(null);

  const filteredProducts = activeCategory === 'all' 
    ? FEATURED_PRODUCTS 
    : FEATURED_PRODUCTS.filter(p => p.category === activeCategory);

  const handleGenerateImage = async (product: Product) => {
    if (generatedImages[product.id]) return; // Already generated
    
    setGeneratingId(product.id);
    try {
      const base64Image = await generateProductImage(product.name, product.description);
      if (base64Image) {
        setGeneratedImages(prev => ({
          ...prev,
          [product.id]: base64Image
        }));
      }
    } catch (error) {
      console.error("Failed to generate image", error);
    } finally {
      setGeneratingId(null);
    }
  };

  return (
    <section className="py-16 bg-brand-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-stone-900 sm:text-4xl">Nosso Menu Completo</h2>
          <p className="mt-4 text-stone-500">Selecione uma categoria para explorar nossas delícias artesanais.</p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 sticky top-20 z-30 bg-brand-50/95 p-4 rounded-2xl backdrop-blur-md shadow-sm">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-brand-900 text-white shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-stone-100 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden bg-stone-200">
                {/* Image Logic: Show generated if exists, else show placeholder */}
                <img
                  src={generatedImages[product.id] || product.imagePlaceholder}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${generatingId === product.id ? 'opacity-50' : 'opacity-100'}`}
                />
                
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-brand-900 font-bold text-sm shadow-sm">
                  RM {product.price.toFixed(2)}
                </div>

                {/* AI Generate Button (If not generated yet) */}
                {!generatedImages[product.id] && (
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            handleGenerateImage(product);
                        }}
                        disabled={generatingId === product.id}
                        className="absolute bottom-4 right-4 bg-stone-900/80 hover:bg-brand-600 text-white p-2 rounded-full backdrop-blur-md transition-colors shadow-lg"
                        title="Gerar imagem real com IA"
                    >
                        {generatingId === product.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                    </button>
                )}
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-serif font-bold text-stone-900 leading-tight group-hover:text-brand-600 transition-colors">
                        {product.name}
                        </h3>
                    </div>
                    <p className="text-stone-500 text-xs leading-relaxed mb-4 line-clamp-3">
                    {product.description}
                    </p>
                </div>
                <button 
                    onClick={() => onAddToCart(product)}
                    className="w-full mt-2 py-2 bg-white border border-brand-200 text-brand-700 rounded-lg font-bold text-sm hover:bg-brand-500 hover:text-white hover:border-transparent transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  Adicionar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuGrid;
