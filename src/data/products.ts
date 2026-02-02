// Product Images
import mopProfissional60 from "@/assets/products/mop-profissional-60.jpg";
import baldeEspremedor from "@/assets/products/balde-espremedor.jpg";
import carroFuncional from "@/assets/products/carro-funcional.jpg";
import placaSinalizadora from "@/assets/products/placa-sinalizadora.jpg";
import refilMicrofibra from "@/assets/products/refil-microfibra.jpg";
import paAutomatica from "@/assets/products/pa-automatica.jpg";
import rodoVidros from "@/assets/products/rodo-vidros.jpg";
import mopPo80 from "@/assets/products/mop-po-80.jpg";

export interface Product {
  id: string;
  sku: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  category: string;
  subcategory: string;
  line: "profissional" | "domestica";
  applications: string[];
  specs: {
    material: string;
    dimensions: string;
    weight: string;
    colors: string[];
  };
  featured?: boolean;
  new?: boolean;
  relatedProducts: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  subcategories: { id: string; name: string; slug: string }[];
}

export const categories: Category[] = [
  {
    id: "mops",
    name: "Mops e Esfregões",
    slug: "mops",
    description: "Linha completa de mops para limpeza úmida e seca",
    icon: "Droplets",
    subcategories: [
      { id: "mop-umido", name: "Mop Úmido", slug: "mop-umido" },
      { id: "mop-seco", name: "Mop Pó", slug: "mop-seco" },
      { id: "mop-flat", name: "Mop Flat", slug: "mop-flat" },
    ],
  },
  {
    id: "baldes",
    name: "Baldes e Espremendores",
    slug: "baldes",
    description: "Baldes profissionais com sistema de espremedor",
    icon: "Container",
    subcategories: [
      { id: "balde-simples", name: "Balde Simples", slug: "balde-simples" },
      { id: "balde-duplo", name: "Balde Duplo", slug: "balde-duplo" },
    ],
  },
  {
    id: "carros",
    name: "Carros Funcionais",
    slug: "carros-funcionais",
    description: "Carros multiuso para transporte de materiais",
    icon: "Truck",
    subcategories: [
      { id: "carro-limpeza", name: "Carro de Limpeza", slug: "carro-limpeza" },
      { id: "carro-coleta", name: "Carro de Coleta", slug: "carro-coleta" },
    ],
  },
  {
    id: "acessorios",
    name: "Acessórios",
    slug: "acessorios",
    description: "Complementos e acessórios para limpeza",
    icon: "Wrench",
    subcategories: [
      { id: "refis", name: "Refis", slug: "refis" },
      { id: "cabos", name: "Cabos", slug: "cabos" },
      { id: "sinalizacao", name: "Sinalização", slug: "sinalizacao" },
      { id: "pas-vassouras", name: "Pás e Vassouras", slug: "pas-vassouras" },
    ],
  },
  {
    id: "vidros",
    name: "Limpeza de Vidros",
    slug: "vidros",
    description: "Equipamentos para limpeza de vidros e superfícies",
    icon: "Maximize",
    subcategories: [
      { id: "rodos", name: "Rodos", slug: "rodos" },
      { id: "aplicadores", name: "Aplicadores", slug: "aplicadores" },
    ],
  },
];

export const products: Product[] = [
  {
    id: "1",
    sku: "MOP-PRO-60",
    name: "Mop Pó Profissional 60cm",
    shortDescription: "Mop de alta performance para grandes áreas",
    description: "Mop profissional com armação em aço galvanizado e refil em acrílico tratado para maior captura de partículas. Ideal para hospitais, shoppings e grandes superfícies.",
    image: mopProfissional60,
    category: "mops",
    subcategory: "mop-seco",
    line: "profissional",
    applications: ["piso-frio", "madeira", "porcelanato"],
    specs: {
      material: "Aço galvanizado e acrílico",
      dimensions: "60 x 15 x 140 cm",
      weight: "1.2 kg",
      colors: ["Azul", "Cinza"],
    },
    featured: true,
    relatedProducts: ["2", "5"],
  },
  {
    id: "2",
    sku: "MOP-PO-80",
    name: "Mop Pó 80cm Premium",
    shortDescription: "Mop extra largo para áreas industriais",
    description: "Mop pó premium com largura de 80cm, ideal para galpões, indústrias e áreas de grande circulação. Cabo telescópico em alumínio.",
    image: mopPo80,
    category: "mops",
    subcategory: "mop-seco",
    line: "profissional",
    applications: ["industrial", "galpao", "piso-frio"],
    specs: {
      material: "Alumínio e microfibra",
      dimensions: "80 x 15 x 160 cm",
      weight: "1.5 kg",
      colors: ["Cinza"],
    },
    featured: true,
    relatedProducts: ["1", "5"],
  },
  {
    id: "3",
    sku: "BLD-ESP-30",
    name: "Balde Espremedor Doblo 30L",
    shortDescription: "Sistema duplo para água limpa e suja",
    description: "Balde com sistema de espremedor por prensa, separação de água limpa e suja, rodízios de alta resistência e capacidade de 30 litros.",
    image: baldeEspremedor,
    category: "baldes",
    subcategory: "balde-duplo",
    line: "profissional",
    applications: ["hospitalar", "comercial", "industrial"],
    specs: {
      material: "Polipropileno de alta densidade",
      dimensions: "55 x 40 x 90 cm",
      weight: "4.5 kg",
      colors: ["Amarelo", "Azul"],
    },
    featured: true,
    new: true,
    relatedProducts: ["1", "5"],
  },
  {
    id: "4",
    sku: "CRF-AME-01",
    name: "Carro Funcional América",
    shortDescription: "Carro multiuso completo para limpeza",
    description: "Carro funcional completo com compartimentos para produtos, suporte para saco de lixo de 120L, porta-acessórios e rodízios de 10cm.",
    image: carroFuncional,
    category: "carros",
    subcategory: "carro-limpeza",
    line: "profissional",
    applications: ["hospitalar", "hotelaria", "comercial"],
    specs: {
      material: "Polipropileno e aço inox",
      dimensions: "110 x 55 x 100 cm",
      weight: "12 kg",
      colors: ["Azul/Cinza", "Preto/Cinza"],
    },
    featured: true,
    relatedProducts: ["3", "6"],
  },
  {
    id: "5",
    sku: "REF-MCF-40",
    name: "Refil Microfibra 40cm",
    shortDescription: "Refil de alta absorção e durabilidade",
    description: "Refil em microfibra premium com sistema de fixação velcro. Alta absorção, não risca superfícies e suporta até 300 lavagens.",
    image: refilMicrofibra,
    category: "acessorios",
    subcategory: "refis",
    line: "profissional",
    applications: ["piso-frio", "madeira", "porcelanato", "vidros"],
    specs: {
      material: "Microfibra 80% poliéster 20% poliamida",
      dimensions: "40 x 14 cm",
      weight: "0.15 kg",
      colors: ["Azul", "Verde", "Vermelho"],
    },
    relatedProducts: ["1", "2"],
  },
  {
    id: "6",
    sku: "PLC-SIN-01",
    name: "Placa Sinalizadora Piso Molhado",
    shortDescription: "Sinalização de segurança bilingue",
    description: "Placa sinalizadora dobrável com aviso 'Cuidado Piso Molhado' em português e inglês. Material resistente a impactos.",
    image: placaSinalizadora,
    category: "acessorios",
    subcategory: "sinalizacao",
    line: "profissional",
    applications: ["hospitalar", "comercial", "industrial", "hotelaria"],
    specs: {
      material: "Polipropileno",
      dimensions: "30 x 30 x 62 cm",
      weight: "0.8 kg",
      colors: ["Amarelo"],
    },
    relatedProducts: ["3", "4"],
  },
  {
    id: "7",
    sku: "PA-AUT-01",
    name: "Pá Automática com Vassoura",
    shortDescription: "Sistema prático de coleta sem abaixar",
    description: "Conjunto de pá com abertura automática por pedal e vassoura ergonômica. Permite recolher sujeira sem precisar se abaixar.",
    image: paAutomatica,
    category: "acessorios",
    subcategory: "pas-vassouras",
    line: "domestica",
    applications: ["residencial", "comercial"],
    specs: {
      material: "ABS e cabo em madeira",
      dimensions: "25 x 90 cm (pá) / 120 cm (vassoura)",
      weight: "0.6 kg",
      colors: ["Branco/Laranja", "Cinza"],
    },
    new: true,
    relatedProducts: ["6"],
  },
  {
    id: "8",
    sku: "ROD-VID-45",
    name: "Rodo Limpa Vidros Profissional 45cm",
    shortDescription: "Rodo com lâmina de borracha premium",
    description: "Rodo profissional para vidros com lâmina de borracha natural e cabo telescópico de até 3 metros. Ideal para fachadas e grandes superfícies.",
    image: rodoVidros,
    category: "vidros",
    subcategory: "rodos",
    line: "profissional",
    applications: ["vidros", "fachadas", "vitrines"],
    specs: {
      material: "Alumínio e borracha natural",
      dimensions: "45 x 5 cm + cabo 3m",
      weight: "0.4 kg",
      colors: ["Preto/Prata"],
    },
    relatedProducts: ["5"],
  },
];

export const segments = [
  {
    id: "hospitalar",
    name: "Hospitalar",
    slug: "hospitalar",
    description: "Soluções para hospitais, clínicas e laboratórios com foco em higienização e controle de infecções.",
    icon: "Hospital",
    recommendedProducts: ["1", "3", "4", "6"],
  },
  {
    id: "industrial",
    name: "Industrial",
    slug: "industrial",
    description: "Equipamentos robustos para fábricas, galpões e áreas de grande circulação.",
    icon: "Factory",
    recommendedProducts: ["2", "3", "4"],
  },
  {
    id: "corporativo",
    name: "Corporativo",
    slug: "corporativo",
    description: "Soluções discretas e eficientes para escritórios, coworkings e prédios comerciais.",
    icon: "Building",
    recommendedProducts: ["1", "5", "7"],
  },
  {
    id: "hotelaria",
    name: "Hotelaria",
    slug: "hotelaria",
    description: "Equipamentos silenciosos e elegantes para hotéis, pousadas e resorts.",
    icon: "BedDouble",
    recommendedProducts: ["1", "4", "5", "6"],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategorySlug = (slug: string): Product[] => {
  return products.filter((p) => p.category === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter((p) => p.new);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.sku.toLowerCase().includes(lowerQuery) ||
      p.shortDescription.toLowerCase().includes(lowerQuery)
  );
};
