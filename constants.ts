import { Product } from "./types";

export const FEATURED_PRODUCTS: Product[] = [
  // --- BOLOS (10 items) ---
  {
    id: 1,
    name: "Red Velvet Imperial",
    description: "Massa aveludada vermelha intensa com recheio generoso de cream cheese e frutas vermelhas frescas no topo.",
    price: 180.00,
    category: "bolos",
    imagePlaceholder: "https://picsum.photos/id/431/600/600"
  },
  {
    id: 2,
    name: "Cheesecake de Frutas Vermelhas",
    description: "Base crocante de biscoito amanteigado, creme suave de queijo philadelphia e coulis rústico de frutas silvestres.",
    price: 22.00, // Slice price
    category: "bolos",
    imagePlaceholder: "https://picsum.photos/id/1080/600/600"
  },
  {
    id: 3,
    name: "Bolo de Pistache e Limão",
    description: "Bolo chiffon leve de pistache com coalhada de limão siciliano e buttercream de merengue suíço.",
    price: 195.00,
    category: "bolos",
    imagePlaceholder: "https://picsum.photos/seed/pistache/600/600"
  },
  {
    id: 4,
    name: "Torta Mousse de Chocolate Belga",
    description: "Três camadas de mousse de chocolate (branco, ao leite e amargo) sobre base de brownie denso.",
    price: 25.00,
    category: "bolos",
    imagePlaceholder: "https://picsum.photos/seed/choco/600/600"
  },
  {
    id: 5,
    name: "Naked Cake de Frutas Tropicais",
    description: "Bolo rústico com massa de baunilha, recheio de doce de leite e decorado com manga, kiwi e morangos.",
    price: 160.00,
    category: "bolos",
    imagePlaceholder: "https://picsum.photos/seed/naked/600/600"
  },
  {
    id: 6,
    name: "Bolo de Cenoura Premium",
    description: "A receita clássica aprimorada com especiarias e uma cobertura espessa de ganache de chocolate 70%.",
    price: 18.00,
    category: "bolos",
    imagePlaceholder: "https://picsum.photos/seed/cenoura/600/600"
  },
  {
    id: 7,
    name: "Tiramisu Clássico",
    description: "Biscoitos champagne embebidos em café expresso forte, creme de mascarpone e cacau em pó polvilhado.",
    price: 28.00,
    category: "bolos",
    imagePlaceholder: "https://picsum.photos/seed/tiramisu/600/600"
  },
  {
    id: 8,
    name: "Bolo Floresta Negra Contemporâneo",
    description: "Massa de chocolate escuro, chantilly fresco, cerejas amarena e raspas de chocolate.",
    price: 175.00,
    category: "bolos",
    imagePlaceholder: "https://picsum.photos/seed/floresta/600/600"
  },
  {
    id: 9,
    name: "Bolo de Nozes com Baba de Moça",
    description: "Massa fofa de nozes chilenas com o tradicional recheio brasileiro de coco e ovos (baba de moça).",
    price: 190.00,
    category: "bolos",
    imagePlaceholder: "https://picsum.photos/seed/nozes/600/600"
  },
  {
    id: 10,
    name: "Opera Cake",
    description: "Clássico francês com camadas de pão de ló de amêndoa, ganache de chocolate e creme de manteiga de café.",
    price: 30.00,
    category: "bolos",
    imagePlaceholder: "https://picsum.photos/seed/opera/600/600"
  },

  // --- DOCES (10 items) ---
  {
    id: 11,
    name: "Éclair de Pistache",
    description: "Massa choux leve recheada com creme de pistache siciliano e cobertura fondant verde suave.",
    price: 18.00,
    category: "doces",
    imagePlaceholder: "https://picsum.photos/id/425/600/600"
  },
  {
    id: 12,
    name: "Macarons Sortidos (Cx. 6)",
    description: "Caixa com 6 unidades. Sabores: Chocolate, Baunilha, Framboesa, Limão, Café e Pistache.",
    price: 35.00,
    category: "doces",
    imagePlaceholder: "https://picsum.photos/id/429/600/600"
  },
  {
    id: 13,
    name: "Brigadeiro Gourmet Belga",
    description: "O doce brasileiro elevado com chocolate belga Callebaut e granulado crocante (unidade).",
    price: 5.00,
    category: "doces",
    imagePlaceholder: "https://picsum.photos/seed/brigadeiro/600/600"
  },
  {
    id: 14,
    name: "Tartelette de Limão",
    description: "Mini torta de massa sablé, curd de limão azedinho e merengue tostado.",
    price: 12.00,
    category: "doces",
    imagePlaceholder: "https://picsum.photos/seed/tartelette/600/600"
  },
  {
    id: 15,
    name: "Cannoli Siciliano",
    description: "Massa frita crocante recheada na hora com creme de ricota doce, frutas cristalizadas e chocolate.",
    price: 14.00,
    category: "doces",
    imagePlaceholder: "https://picsum.photos/seed/cannoli/600/600"
  },
  {
    id: 16,
    name: "Camafeu de Nozes",
    description: "Doce fino de nozes banhado em fondant branco, decorado com um pedaço de noz dourada.",
    price: 7.00,
    category: "doces",
    imagePlaceholder: "https://picsum.photos/seed/camafeu/600/600"
  },
  {
    id: 17,
    name: "Mil Folhas de Baunilha",
    description: "Camadas de massa folhada caramelizada intercaladas com creme de confeiteiro de fava de baunilha.",
    price: 20.00,
    category: "doces",
    imagePlaceholder: "https://picsum.photos/seed/milfolhas/600/600"
  },
  {
    id: 18,
    name: "Trufa de Maracujá",
    description: "Chocolate meio amargo recheado com ganache cremosa de maracujá fresco.",
    price: 6.00,
    category: "doces",
    imagePlaceholder: "https://picsum.photos/seed/trufa/600/600"
  },
  {
    id: 19,
    name: "Pavlova de Frutas",
    description: "Merengue crocante por fora e macio por dentro, coberto com chantilly e frutas da estação.",
    price: 22.00,
    category: "doces",
    imagePlaceholder: "https://picsum.photos/seed/pavlova/600/600"
  },
  {
    id: 20,
    name: "Pastel de Nata",
    description: "Tradicional doce português com massa folhada estaladiça e creme de ovos levemente tostado.",
    price: 8.00,
    category: "doces",
    imagePlaceholder: "https://picsum.photos/seed/pastelnata/600/600"
  },

  // --- SALGADOS (10 items) ---
  {
    id: 21,
    name: "Croissant Amanteigado",
    description: "Folhado tradicional francês, feito com manteiga de primeira qualidade, dourado e crocante.",
    price: 12.00,
    category: "salgados",
    imagePlaceholder: "https://picsum.photos/id/493/600/600"
  },
  {
    id: 22,
    name: "Empada de Camarão",
    description: "Massa podre que derrete na boca, com recheio cremoso de camarão e azeitonas.",
    price: 10.00,
    category: "salgados",
    imagePlaceholder: "https://picsum.photos/seed/empada/600/600"
  },
  {
    id: 23,
    name: "Quiche Lorraine",
    description: "Torta aberta salgada com base de creme de leite, ovos, bacon defumado e queijo gruyère.",
    price: 18.00,
    category: "salgados",
    imagePlaceholder: "https://picsum.photos/seed/quiche/600/600"
  },
  {
    id: 24,
    name: "Chamuça Tradicional (3un)",
    description: "Herança moçambicana. Massa fina e crocante recheada com carne moída temperada com especiarias.",
    price: 15.00,
    category: "salgados",
    imagePlaceholder: "https://picsum.photos/seed/chamuca/600/600"
  },
  {
    id: 25,
    name: "Pão de Queijo (Porção)",
    description: "6 unidades de pão de queijo mineiro autêntico, feito com queijo da serra da canastra curado.",
    price: 16.00,
    category: "salgados",
    imagePlaceholder: "https://picsum.photos/seed/paoqueijo/600/600"
  },
  {
    id: 26,
    name: "Coxinha de Frango com Catupiry",
    description: "O salgado mais amado do Brasil. Massa de batata, recheio de frango desfiado e requeijão cremoso.",
    price: 9.00,
    category: "salgados",
    imagePlaceholder: "https://picsum.photos/seed/coxinha/600/600"
  },
  {
    id: 27,
    name: "Folhado de Queijo e Presunto",
    description: "Massa folhada leve recheada com presunto royale e queijo mussarela derretido.",
    price: 11.00,
    category: "salgados",
    imagePlaceholder: "https://picsum.photos/seed/folhado/600/600"
  },
  {
    id: 28,
    name: "Sanduíche de Ciabatta",
    description: "Pão ciabatta fermentação natural, pesto de manjericão, tomate seco, rúcula e mussarela de búfala.",
    price: 24.00,
    category: "salgados",
    imagePlaceholder: "https://picsum.photos/seed/ciabatta/600/600"
  },
  {
    id: 29,
    name: "Rissol de Camarão",
    description: "Massa cozida empanada e frita, com recheio cremoso de camarão. Formato meia-lua.",
    price: 8.50,
    category: "salgados",
    imagePlaceholder: "https://picsum.photos/seed/rissol/600/600"
  },
  {
    id: 30,
    name: "Focaccia de Alecrim",
    description: "Fatia generosa de pão italiano baixo, regado com azeite extra virgem, sal grosso e alecrim fresco.",
    price: 10.00,
    category: "salgados",
    imagePlaceholder: "https://picsum.photos/seed/focaccia/600/600"
  },

  // --- BEBIDAS (10 items) ---
  {
    id: 31,
    name: "Cappuccino Italiano",
    description: "Expresso, leite vaporizado e espuma de leite cremosa com cacau em pó.",
    price: 14.00,
    category: "bebidas",
    imagePlaceholder: "https://picsum.photos/id/766/600/600"
  },
  {
    id: 32,
    name: "Espresso Duplo",
    description: "Café forte e encorpado, extração perfeita de grãos 100% arábica.",
    price: 10.00,
    category: "bebidas",
    imagePlaceholder: "https://picsum.photos/seed/espresso/600/600"
  },
  {
    id: 33,
    name: "Latte Macchiato",
    description: "Leite vaporizado manchado com uma dose de café expresso, servido em copo alto.",
    price: 15.00,
    category: "bebidas",
    imagePlaceholder: "https://picsum.photos/seed/latte/600/600"
  },
  {
    id: 34,
    name: "Chá Gelado de Pêssego",
    description: "Chá preto infusionado a frio com pedaços de pêssego fresco e hortelã.",
    price: 12.00,
    category: "bebidas",
    imagePlaceholder: "https://picsum.photos/seed/icetea/600/600"
  },
  {
    id: 35,
    name: "Chocolate Quente Cremoso",
    description: "Feito com chocolate belga derretido e creme de leite, muito denso e saboroso.",
    price: 18.00,
    category: "bebidas",
    imagePlaceholder: "https://picsum.photos/seed/hotcocoa/600/600"
  },
  {
    id: 36,
    name: "Suco Detox Verde",
    description: "Couve, limão, gengibre, maçã e água de coco. Refrescante e saudável.",
    price: 16.00,
    category: "bebidas",
    imagePlaceholder: "https://picsum.photos/seed/detox/600/600"
  },
  {
    id: 37,
    name: "Soda Italiana de Framboesa",
    description: "Água com gás, xarope artesanal de framboesa e gelo.",
    price: 14.00,
    category: "bebidas",
    imagePlaceholder: "https://picsum.photos/seed/soda/600/600"
  },
  {
    id: 38,
    name: "Café Mocha",
    description: "A combinação perfeita de café expresso, calda de chocolate e leite vaporizado.",
    price: 16.00,
    category: "bebidas",
    imagePlaceholder: "https://picsum.photos/seed/mocha/600/600"
  },
  {
    id: 39,
    name: "Milkshake de Morango Real",
    description: "Batido com sorvete de baunilha e geleia caseira de morangos pedaçudos.",
    price: 22.00,
    category: "bebidas",
    imagePlaceholder: "https://picsum.photos/seed/milkshake/600/600"
  },
  {
    id: 40,
    name: "Água Mineral Premium (500ml)",
    description: "Com ou sem gás. Garrafa de vidro.",
    price: 8.00,
    category: "bebidas",
    imagePlaceholder: "https://picsum.photos/seed/water/600/600"
  }
];
