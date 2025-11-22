export interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // Changed to number for calculations
  category: 'bolos' | 'doces' | 'salgados' | 'bebidas';
  imagePlaceholder: string; // Static placeholder
}

export interface CartItem extends Product {
  quantity: number;
}

export interface RecommendationResponse {
  cakeSuggestion: string;
  flavorProfile: string;
  suggestedSweets: string[];
  reasoning: string;
}

export enum AppView {
  HOME = 'HOME',
  MENU = 'MENU',
  AI_CONSULTANT = 'AI_CONSULTANT',
}
