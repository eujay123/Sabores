import React, { useState } from 'react';
import { Sparkles, Loader2, Cake, Gift, CheckCircle } from 'lucide-react';
import { getCakeRecommendation } from '../services/geminiService';
import { RecommendationResponse } from '../types';

const AIConsultant: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    occasion: '',
    preferences: '',
    guests: 10
  });
  const [recommendation, setRecommendation] = useState<RecommendationResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await getCakeRecommendation(formData.occasion, formData.preferences, formData.guests);
      setRecommendation(result);
      setStep(2);
    } catch (error) {
      alert("Desculpe, tivemos um problema ao consultar nosso chef virtual. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setRecommendation(null);
    setFormData({ occasion: '', preferences: '', guests: 10 });
  };

  return (
    <div className="min-h-screen bg-brand-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* Left Panel - Visual & Context */}
        <div className="w-full md:w-5/12 bg-stone-900 p-8 flex flex-col justify-between relative overflow-hidden text-white">
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-6 text-brand-400">
               <Sparkles className="w-6 h-6" />
               <span className="font-bold tracking-widest uppercase text-sm">Sabores AI</span>
            </div>
            <h2 className="text-4xl font-serif font-bold mb-4 leading-tight">
              Planejador de <br/>
              <span className="text-brand-400">Sonhos.</span>
            </h2>
            <p className="text-stone-300 font-light text-lg">
              Descreva seu evento e deixe nossa Inteligência Artificial criar o menu de confeitaria perfeito para você.
            </p>
          </div>
          
          <div className="relative z-10 mt-12">
            <div className="flex items-start space-x-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center shrink-0">1</div>
                <p className="text-sm text-stone-300">Conte-nos sobre a ocasião e seus gostos.</p>
            </div>
            <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center shrink-0">2</div>
                <p className="text-sm text-stone-300">Receba uma sugestão exclusiva de bolo e doces.</p>
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-900 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-600 rounded-full opacity-20 blur-3xl"></div>
        </div>

        {/* Right Panel - Form & Result */}
        <div className="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto max-h-[90vh]">
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-stone-700">Qual é a ocasião?</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Aniversário de 15 anos, Casamento Civil, Chá de Bebê..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                  value={formData.occasion}
                  onChange={(e) => setFormData({...formData, occasion: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-stone-700">Preferências de sabor ou tema?</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Ex: Gostamos de chocolate amargo, nada muito doce. O tema é Floresta Encantada."
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-none"
                  value={formData.preferences}
                  onChange={(e) => setFormData({...formData, preferences: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-stone-700">Número de Convidados</label>
                <input
                  type="number"
                  min="1"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-900 hover:bg-brand-800 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Consultando Chef IA...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Gerar Recomendação
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="animate-fade-in">
              <div className="mb-6 flex justify-between items-start">
                  <h3 className="text-2xl font-serif font-bold text-brand-900">Sua Recomendação Exclusiva</h3>
                  <button onClick={handleReset} className="text-sm text-stone-500 underline hover:text-brand-600">Nova Consulta</button>
              </div>

              {recommendation && (
                <div className="space-y-6">
                  {/* Cake Suggestion */}
                  <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100">
                    <div className="flex items-center mb-3">
                        <Cake className="w-6 h-6 text-brand-600 mr-2" />
                        <h4 className="font-bold text-lg text-stone-800">Bolo Sugerido</h4>
                    </div>
                    <p className="text-xl font-serif text-brand-800 mb-2">{recommendation.cakeSuggestion}</p>
                    <p className="text-stone-600 text-sm italic">{recommendation.flavorProfile}</p>
                  </div>

                  {/* Sweets */}
                  <div>
                    <div className="flex items-center mb-3">
                        <Gift className="w-5 h-5 text-stone-600 mr-2" />
                        <h4 className="font-bold text-stone-800">Acompanhamentos Perfeitos</h4>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {recommendation.suggestedSweets.map((sweet, idx) => (
                            <li key={idx} className="flex items-center bg-white p-3 rounded-lg border border-stone-100 shadow-sm">
                                <CheckCircle className="w-4 h-4 text-brand-400 mr-2 shrink-0" />
                                <span className="text-stone-700 text-sm">{sweet}</span>
                            </li>
                        ))}
                    </ul>
                  </div>

                  {/* Reasoning */}
                  <div className="border-t border-stone-100 pt-4">
                     <p className="text-stone-500 text-sm leading-relaxed">
                        <span className="font-bold text-stone-700">Por que escolhemos isso: </span>
                        {recommendation.reasoning}
                     </p>
                  </div>

                  <button className="w-full bg-brand-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-brand-700 transition-colors">
                    Solicitar Orçamento Deste Menu
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;