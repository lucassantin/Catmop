// Imagens Existentes
import mopProfissional60 from "@/assets/products/mop-profissional-60.jpg";
import baldeEspremedor from "@/assets/products/balde-espremedor.jpg";
import carroFuncional from "@/assets/products/carro-funcional.jpg";
import placaSinalizadora from "@/assets/products/placa-sinalização-piso.jpg";
import refilMicrofibra from "@/assets/products/refil-microfibra.jpg";
import paAutomatica from "@/assets/products/pa-automatica.jpg";
import rodoVidros from "@/assets/products/rodo-vidros.jpg";
import mopPo80 from "@/assets/products/mop-po-80.jpg";

// Novas Imagens (Baseadas no Print)
import bolsaCarroFuncional from "@/assets/products/bolsa-carro-funcional.jpg";
import bolsaCarroLavanderia from "@/assets/products/bolsa-carro-lavanderia.jpg";
import cabosAluminio from "@/assets/products/cabos-aluminio.jpg";
import carroLavanderia from "@/assets/products/carro-lavanderia.jpg";
import limpezaVidro from "@/assets/products/limpeza-vidro.jpg";
import refilMopAcrilico from "@/assets/products/refil-mop-acrilico.jpg";
import refilMopBio from "@/assets/products/refil-mop-bio.jpg";
import refilMopBlinck from "@/assets/products/refil-mop-blinck.jpg";
import refilMopCabeleira from "@/assets/products/refil-mop-cabeleira.jpg";
import refilMopMicrofibraFlat from "@/assets/products/refil-mop-microfibra.jpg"; 
import rodoAluminio from "@/assets/products/rodo-aluminio.jpg";
import suporteCabeleira from "@/assets/products/suporte-cabeleireira.jpg";
import suporteMopPlano from "@/assets/products/suporte-mob-plano.jpg";
import suporteMop from "@/assets/products/suporte-mop.jpg";
import suporteMopParede from "@/assets/products/suporte-mop-parede.jpg";
import sacolaLavagem from "@/assets/products/sacola-lavagem.jpg";
import mopDescartavel from "@/assets/products/mop-descartavel.png";

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
    slug: "carros",
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
  // --- PRODUTOS ORIGINAIS (IDs 1-8) ---
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
    name: "Balde Espremedor",
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
    name: "Carro Funcional",
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

  // --- NOVOS PRODUTOS (Identificados na Imagem) ---

  {
    id: "9",
    sku: "CAR-LAV-01",
    name: "Carro de Lavanderia",
    shortDescription: "Coleta de roupa suja com alta capacidade",
    description: "Carro pantográfico para lavanderia com bolsa resistente. Estrutura dobrável que facilita o armazenamento e transporte de roupas e tecidos.",
    image: carroLavanderia,
    category: "carros",
    subcategory: "carro-coleta",
    line: "profissional",
    applications: ["hotelaria", "hospitalar", "lavanderias"],
    specs: {
      material: "Estrutura tubular e bolsa em vinil",
      dimensions: "90 x 60 x 85 cm",
      weight: "8 kg",
      colors: ["Azul", "Bege"],
    },
    relatedProducts: ["10", "22"],
  },
  {
    id: "10",
    sku: "BOL-LAV-REF",
    name: "Bolsa para Carro de Lavanderia reforçado",
    shortDescription: "Refil de bolsa para carro de coleta",
    description: "Bolsa de reposição para carro de lavanderia, fabricada em material impermeável e resistente a rasgos.",
    image: bolsaCarroLavanderia,
    category: "acessorios",
    subcategory: "refis",
    line: "profissional",
    applications: ["hotelaria", "hospitalar"],
    specs: {
      material: "Vinil reforçado",
      dimensions: "Compatível com carro padrão",
      weight: "0.5 kg",
      colors: ["Preto", "Azul", "Amarelo"],
    },
    relatedProducts: ["9"],
  },
  {
    id: "11",
    sku: "BOL-FUNC-01",
    name: "Bolsa para Carro Funcional",
    shortDescription: "Bolsa amarela em vinil para carro funcional",
    description: "Saco coletor de lixo para acoplar em carros funcionais de limpeza. Capacidade ideal para coleta de resíduos leves.",
    image: bolsaCarroFuncional,
    category: "acessorios",
    subcategory: "refis",
    line: "profissional",
    applications: ["comercial", "shopping"],
    specs: {
      material: "Vinil",
      dimensions: "Padrão universal",
      weight: "0.3 kg",
      colors: ["Amarelo"],
    },
    relatedProducts: ["4"],
  },
  {
    id: "12",
    sku: "CAB-ALU-140",
    name: "Cabo de Alumínio Anodizado",
    shortDescription: "Cabo leve e resistente para mops e rodos",
    description: "Cabo em alumínio anodizado com manopla ergonômica. Compatível com diversos suportes de mops e rodos.",
    image: cabosAluminio,
    category: "acessorios",
    subcategory: "cabos",
    line: "profissional",
    applications: ["geral"],
    specs: {
      material: "Alumínio",
      dimensions: "1,40m x 22mm",
      weight: "0.35 kg",
      colors: ["Prata/Azul", "Prata/Vermelho"],
    },
    relatedProducts: ["1", "2", "8"],
  },
  {
    id: "13",
    sku: "LIM-VID-KIT",
    name: "Limpeza de vidro",
    shortDescription: "Lavador e secador em uma única ferramenta",
    description: "Equipamento combinado com luva de microfibra para lavar e lâmina de borracha para secar vidros. Economia de tempo na operação.",
    image: limpezaVidro,
    category: "vidros",
    subcategory: "aplicadores",
    line: "profissional",
    applications: ["vidros", "espelhos", "janelas"],
    specs: {
      material: "Plástico injetado e microfibra",
      dimensions: "35 cm",
      weight: "0.4 kg",
      colors: ["Azul/Branco"],
    },
    relatedProducts: ["8", "12"],
  },
  {
    id: "14",
    sku: "REF-MOP-ACR",
    name: "Refil Mop Pó Acrílico",
    shortDescription: "Refil eletrostático para retenção de pó",
    description: "Refil composto por fios 100% acrílicos que geram estática natural, atraindo o pó sem espalhar. Ideal para limpeza a seco.",
    image: refilMopAcrilico,
    category: "acessorios",
    subcategory: "refis",
    line: "profissional",
    applications: ["piso-frio", "madeira"],
    specs: {
      material: "Fio acrílico",
      dimensions: "40cm / 60cm / 80cm",
      weight: "Variável",
      colors: ["Azul"],
    },
    relatedProducts: ["1", "18"],
  },
  {
    id: "15",
    sku: "REF-MOP-CAB",
    name: "Refil Mop (Cabeleira)",
    shortDescription: "Refil ponta dobrada para lavagem pesada",
    description: "Refil de algodão/sintético com ponta dobrada (loop) para maior durabilidade e absorção. Evita desfiar.",
    image: refilMopCabeleira,
    category: "acessorios",
    subcategory: "refis",
    line: "profissional",
    applications: ["pisos-rusticos", "cozinhas", "banheiros"],
    specs: {
      material: "Algodão e poliéster",
      dimensions: "320g / 360g",
      weight: "0.35 kg",
      colors: ["Branco", "Azul"],
    },
    relatedProducts: ["16", "3"],
  },
  {
    id: "16",
    sku: "SUP-MOP-CAB",
    name: "Suporte para Mop Cabeleira",
    shortDescription: "Garra fixadora para mop água",
    description: "Suporte tipo garra em polipropileno resistente para fixação de refis de mop água (cabeleira).",
    image: suporteCabeleira,
    category: "acessorios",
    subcategory: "pas-vassouras",
    line: "profissional",
    applications: ["fixacao-mop"],
    specs: {
      material: "Polipropileno",
      dimensions: "Universal",
      weight: "0.15 kg",
      colors: ["Azul", "Amarelo", "Vermelho", "Verde"],
    },
    relatedProducts: ["15", "12"],
  },
  {
    id: "17",
    sku: "ROD-ALU-45",
    name: "Rodo de Alumínio Duplo",
    shortDescription: "Rodo de chão reforçado com borracha dupla",
    description: "Rodo com estrutura em alumínio e borracha dupla em EVA para secagem eficiente de grandes áreas.",
    image: rodoAluminio,
    category: "acessorios",
    subcategory: "pas-vassouras",
    line: "profissional",
    applications: ["patio", "garagem", "industrial"],
    specs: {
      material: "Alumínio e EVA",
      dimensions: "45cm / 60cm",
      weight: "0.6 kg",
      colors: ["Alumínio"],
    },
    relatedProducts: ["12"],
  },
  {
    id: "18",
    sku: "SUP-MOP-PO",
    name: "Armação para Mop Pó",
    shortDescription: "Suporte metálico dobrável",
    description: "Armação em aço galvanizado dobrável para refis de mop pó. Resistente à oxidação.",
    image: suporteMop,
    category: "mops",
    subcategory: "mop-seco",
    line: "profissional",
    applications: ["suporte"],
    specs: {
      material: "Aço galvanizado",
      dimensions: "40cm / 60cm / 80cm",
      weight: "0.4 kg",
      colors: ["Prata"],
    },
    relatedProducts: ["14", "1", "12"],
  },
  {
    id: "19",
    sku: "SUP-MOP-FLAT",
    name: "Suporte Mop Plano (Flat)",
    shortDescription: "Base para mops de microfibra com velcro",
    description: "Base plana com sistema de fixação por velcro ou presilha para mops de microfibra. Articulação 360 graus.",
    image: suporteMopPlano,
    category: "mops",
    subcategory: "mop-flat",
    line: "profissional",
    applications: ["limpeza-umida", "desinfeccao"],
    specs: {
      material: "Polipropileno",
      dimensions: "40cm",
      weight: "0.3 kg",
      colors: ["Cinza/Azul"],
    },
    relatedProducts: ["5", "20", "12"],
  },
  {
    id: "20",
    sku: "REF-MOP-FLAT-MIC",
    name: "Refil Mop de microfibra",
    shortDescription: "Microfibra de alta performance para mop plano",
    description: "Refil com faixas abrasivas leves para remoção de sujeira aderida sem danificar o brilho do piso.",
    image: refilMopMicrofibraFlat,
    category: "acessorios",
    subcategory: "refis",
    line: "profissional",
    applications: ["porcelanato", "ceramica"],
    specs: {
      material: "Microfibra",
      dimensions: "40cm",
      weight: "0.1 kg",
      colors: ["Azul/Branco"],
    },
    relatedProducts: ["19"],
  },
  {
    id: "21",
    sku: "ORG-PAR-01",
    name: "Organizador mop de Parede",
    shortDescription: "Suporte para cabos e acessórios",
    description: "Sistema de organização para fixar na parede. Prende cabos, rodos e mops, mantendo o ambiente organizado.",
    image: suporteMopParede,
    category: "acessorios",
    subcategory: "acessorios", 
    line: "profissional",
    applications: ["dps", "area-servico"],
    specs: {
      material: "Plástico ABS e borracha",
      dimensions: "50 cm",
      weight: "0.4 kg",
      colors: ["Cinza/Verde"],
    },
    relatedProducts: ["12"],
  },
  {
    id: "22",
    sku: "SAC-LAV-01",
    name: "Sacola de Lavagem",
    shortDescription: "Saco para transporte de roupas",
    description: "Sacola resistente para separação e transporte de roupas em ambientes hospitalares ou hoteleiros.",
    image: sacolaLavagem,
    category: "acessorios",
    subcategory: "acessorios",
    line: "profissional",
    applications: ["lavanderia"],
    specs: {
      material: "Nylon/Poliéster",
      dimensions: "100L",
      weight: "0.2 kg",
      colors: ["Azul claro"],
    },
    relatedProducts: ["9"],
  },
  {
    id: "23",
    sku: "MOP-DESC-01",
    name: "Mop Descartável Eletrostático",
    shortDescription: "Folhas adesivas para mops",
    description: "Refil descartável eletrostático para captura rápida de pó e cabelos. Higiênico e prático.",
    image: mopDescartavel,
    category: "mops",
    subcategory: "mop-seco",
    line: "domestica",
    applications: ["clinicas", "residencial"],
    specs: {
      material: "Tecido não tecido (TNT)",
      dimensions: "Pacote c/ 20un",
      weight: "N/A",
      colors: ["Branco"],
    },
    relatedProducts: ["19"],
  },
  {
    id: "24",
    sku: "REF-MOP-BIO",
    name: "Refil Mop Bio",
    shortDescription: "Refil sustentável de algodão",
    description: "Refil para mop pó produzido com fios de algodão cru. Ideal para polimento e remoção de pó em pisos lisos.",
    image: refilMopBio,
    category: "acessorios",
    subcategory: "refis",
    line: "profissional",
    applications: ["piso-frio", "madeira"],
    specs: {
      material: "Algodão cru",
      dimensions: "60cm / 80cm",
      weight: "Variável",
      colors: ["Natural"],
    },
    relatedProducts: ["18", "12"],
  },
  {
    id: "25",
    sku: "REF-MOP-BLCK",
    name: "Refil Mop Blinck",
    shortDescription: "Refil misto de alta resistência",
    description: "Refil com composição mista para maior resistência à abrasão e lavagens frequentes.",
    image: refilMopBlinck,
    category: "acessorios",
    subcategory: "refis",
    line: "profissional",
    applications: ["industrial", "comercial"],
    specs: {
      material: "Misto (Algodão/Sintético)",
      dimensions: "40cm / 60cm",
      weight: "Variável",
      colors: ["Azul/Branco"],
    },
    relatedProducts: ["18"],
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