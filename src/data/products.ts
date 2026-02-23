// Imagens Existentes
import mopProfissional60 from "@/assets/products/mop-profissional-60.jpg";
import baldeEspremedor from "@/assets/products/balde-espremedor.jpg";
import carroFuncional from "@/assets/products/carro-funcional.jpg";
import placaSinalizadora from "@/assets/products/placa-sinalização-piso.png";
import oxySpray from "@/assets/products/OXY-SPRAY.jpg";
import desinfetanteSpray from "@/assets/products/OXY-SPRAY.jpg";

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
import refilMopAcrilico from "@/assets/products/refil-mop-acrilico.png";
import refilMopBio from "@/assets/products/refil-mop-bio.jpg";
import refilMopBlinck from "@/assets/products/refil-mop-blinck.png";
import refilMopCabeleira from "@/assets/products/refil-mop-cabeleira.jpg";
import refilMopMicrofibraFlat from "@/assets/products/refil-mop-microfibra.png";
import rodoAluminio from "@/assets/products/rodo-aluminio.jpg";
import suporteCabeleira from "@/assets/products/suporte-cabeleireira.jpeg";
import suporteMopPlano from "@/assets/products/suporte-mob-plano.jpg";
import suporteMop from "@/assets/products/suporte-mop.png";
import suporteMopParede from "@/assets/products/suporte-mop-parede.jpg";
import sacolaLavagem from "@/assets/products/sacola-lavagem.jpg";
import mopDescartavel from "@/assets/products/mop-descartavel.png";
import refilMopPlano from "@/assets/products/refil-mop-plano.png";
import sabrina from "@/assets/products/SABRINA-FOAM.jpg";
import foamtec from "@/assets/products/Foamtec30.jpg";
import fogger7micron from "@/assets/products/fogger7micron.jpg";
import foamtecbateria from "@/assets/products/foamtecbateria.jpg";

export interface Product {
  id: string;
  sku: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  category: string;
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
}

export const categories: Category[] = [
  {
    id: "mops",
    name: "Mops e Suportes",
    slug: "mops",
    description: "Linha completa de mops para limpeza úmida e seca",
    icon: "Droplets",
  },
  {
    id: "baldes",
    name: "Baldes e Espremendores",
    slug: "baldes",
    description: "Baldes profissionais com sistema de espremedor",
    icon: "Container",
  },
  {
    id: "carros",
    name: "Carros Funcionais e Lavanderia",
    slug: "carros",
    description: "Carros multiuso para transporte de materiais",
    icon: "Truck",
  },
  {
    id: "equipamentos",
    name: "Máquinas e Equipamentos",
    slug: "equipamentos",
    description: "Equipamentos e máquinas para limpeza completa de ambientes",
    icon: "Wrench",
  },
  {
    id: "vidros",
    name: "Limpeza de Vidros",
    slug: "vidros",
    description: "Equipamentos para limpeza de vidros e superfícies",
    icon: "Maximize",
  },
  {
    id: "acessorios",
    name: "Acessórios",
    slug: "acessorios",
    description: "Complementos e acessórios para limpeza",
    icon: "Wrench",
  },
];

export const products: Product[] = [
  // --- PRODUTOS ORIGINAIS (IDs 1-8) ---
  {
    id: "3",
    sku: "BLD-ESP-30",
    name: "Balde Espremedor",
    shortDescription: "Sistema duplo para água limpa e suja",
    description: "Balde com sistema de espremedor por prensa, separação de água limpa e suja, rodízios de alta resistência e capacidade de 30 litros.",
    image: baldeEspremedor,
    category: "baldes",
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
    id: "6",
    sku: "PLC-SIN-01",
    name: "Placa Sinalizadora Piso Molhado",
    shortDescription: "Sinalização de segurança bilingue",
    description: "Placa sinalizadora dobrável com aviso 'Cuidado Piso Molhado' em português e inglês. Material resistente a impactos.",
    image: placaSinalizadora,
    category: "acessorios",
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
    id: "9",
    sku: "CAR-LAV-01",
    name: "Carro de Lavanderia",
    shortDescription: "Coleta de roupa suja com alta capacidade",
    description: "Carro pantográfico para lavanderia com bolsa resistente. Estrutura dobrável que facilita o armazenamento e transporte de roupas e tecidos.",
    image: carroLavanderia,
    category: "carros",
    line: "profissional",
    applications: ["hotelaria", "hospitalar", "lavanderias"],
    specs: {
      material: "Estrutura tubular e bolsa em vinil",
      dimensions: "90 x 60 x 85 cm",
      weight: "8 kg",
      colors: ["Azul", "Bege"],
    },
    relatedProducts: ["10"],
  },
  {
    id: "10",
    sku: "BOL-LAV-REF",
    name: "Bolsa para Carro de Lavanderia reforçado",
    shortDescription: "Refil de bolsa para carro de coleta",
    description: "Bolsa de reposição para carro de lavanderia, fabricada em material impermeável e resistente a rasgos.",
    image: bolsaCarroLavanderia,
    category: "carros",
    line: "profissional",
    applications: ["hotelaria", "hospitalar"],
    specs: {
      material: "Nylon 600",
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
    category: "carros",
    line: "profissional",
    applications: ["comercial", "shopping"],
    specs: {
      material: "Nylon 600 e ilhóses de latão ( Não enferruja )",
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
    line: "profissional",
    applications: ["geral"],
    specs: {
      material: "Alumínio",
      dimensions: "1,40m x 22mm",
      weight: "0.35 kg",
      colors: ["Prata/Azul", "Prata/Vermelho"],
    },
    relatedProducts: [],
  },
  {
    id: "13",
    sku: "LIM-VID-KIT",
    name: "Limpeza de vidro",
    shortDescription: "Lavador e secador em uma única ferramenta",
    description: "Equipamento combinado com luva de microfibra para lavar e lâmina de borracha para secar vidros. Economia de tempo na operação.",
    image: limpezaVidro,
    category: "vidros",
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
    name: "Refil Mop pó acrílico, ou algodão",
    shortDescription: "Refil eletrostático para retenção de pó",
    description: "Refil composto por fios 100% acrílicos ou algodão que geram estática natural, atraindo o pó sem espalhar. Ideal para limpeza a seco.",
    image: refilMopAcrilico,
    category: "mops",
    line: "profissional",
    applications: ["piso-frio", "madeira"],
    specs: {
      material: "Fio acrílico",
      dimensions: "40cm / 60cm / 120cm",
      weight: "Variável",
      colors: ["Azul"],
    },
    relatedProducts: ["1", "18"],
  },
  {
    id: "15",
    sku: "REF-MOP-CAB",
    name: "Refil Mop Cabeleira",
    shortDescription: "Refil ponta dobrada para lavagem pesada",
    description: "Refil de algodão/sintético com ponta dobrada (loop) para maior durabilidade e absorção. Evita desfiar.",
    image: refilMopCabeleira,
    category: "mops",
    line: "profissional",
    applications: ["pisos-rusticos", "cozinhas", "banheiros"],
    specs: {
      material: "Algodão e poliéster",
      dimensions: "350g / 400g",
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
    category: "mops",
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
    name: "Suporte para Mop Pó",
    shortDescription: "Suporte metálico dobrável",
    description: "Armação em aço galvanizado dobrável para refis de mop pó. Resistente à oxidação.",
    image: suporteMop,
    category: "mops",
    line: "profissional",
    applications: ["suporte"],
    specs: {
      material: "Aço galvanizado",
      dimensions: "40cm / 60cm / 120cm",
      weight: "0.4 kg",
      colors: ["Prata"],
    },
    relatedProducts: ["14", "1", "12"],
  },
  {
    id: "19",
    sku: "SUP-MOP-FLAT",
    name: "Suporte Mop Plano",
    shortDescription: "Base para mops de microfibra com velcro",
    description: "Base plana com sistema de fixação por velcro ou presilha para mops de microfibra. Articulação 360 graus.",
    image: suporteMopPlano,
    category: "mops",
    line: "profissional",
    applications: ["limpeza-umida", "desinfeccao"],
    specs: {
      material: "Alumínio e plástico",
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
    category: "mops",
    line: "profissional",
    applications: ["porcelanato", "ceramica"],
    specs: {
      material: "Microfibra",
      dimensions: "49cm",
      weight: "0.1 kg",
      colors: ["Azul/Vermelho"],
    },
    relatedProducts: ["19"],
  },
  {
    id: "21",
    sku: "ORG-PAR-01",
    name: "Suporte mop de Parede",
    shortDescription: "Suporte para cabos e acessórios",
    description: "Sistema de organização para fixar na parede. Prende cabos, rodos e mops, mantendo o ambiente organizado.",
    image: suporteMopParede,
    category: "mops",
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
    shortDescription: "Saco para lavagem",
    description: "Sacola resistente para lavagem de mops e outros itens têxteis.",
    image: sacolaLavagem,
    category: "acessorios",
    line: "profissional",
    applications: ["lavanderia"],
    specs: {
      material: "Poliéster",
      dimensions: "60 cm X 80 cm",
      weight: "0.2 kg",
      colors: ["Branca"],
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
    category: "mops",
    line: "profissional",
    applications: ["piso-frio", "madeira"],
    specs: {
      material: "Misto algodão poliéster ou 100% poliéster microfibra",
      dimensions: "31cm / 45cm",
      weight: "Variável",
      colors: ["Natural"],
    },
    relatedProducts: ["18", "12"],
  },
  {
    id: "25",
    sku: "REF-MOP-BLCK",
    name: "Refil Mop Blick",
    shortDescription: "Refil misto de alta resistência",
    description: "Refil com composição mista para maior resistência à abrasão e lavagens frequentes.",
    image: refilMopBlinck,
    category: "mops",
    line: "profissional",
    applications: ["industrial", "comercial"],
    specs: {
      material: "Poliéster microfibra",
      dimensions: "40cm / 60cm",
      weight: "Variável",
      colors: ["Azul/Branco"],
    },
    relatedProducts: [],
  },
  {
    id: "26",
    sku: "REF-MOP-PLANO",
    name: "Refil Mop Plano wetsystem",
    shortDescription: "Refil plano de alta absorção",
    description: "Refil plano com alta absorção e durabilidade, ideal para limpeza úmida de grandes áreas.",
    image: refilMopPlano,
    category: "mops",
    line: "profissional",
    applications: ["piso-frio", "porcelanato"],
    specs: {
      material: "Poliéster microfibra",
      dimensions: "40cm",
      weight: "0.2 kg",
      colors: ["Branco"],
    },
    relatedProducts: ["12"],
  },
  {
    id: "27",
    sku: "REF-MOP-BLCK",
    name: "Sabrina-Foam",
    shortDescription: "A Sabrina-Foam é uma máquina de extração de espuma densa com compressor interno.",
    description: "A Sabrina-Foam é uma máquina de extração de espuma densa com compressor interno. A máquina pulveriza uma espuma especial e espessa na superfície para ser limpa, que após alguns segundos é sugada, recuperando a sujeira. O sistema especial de sucção de alto vácuo permite remover a máxima quantidade de sujeira do carpete e dos tecidos estofados e alcançar um tempo de secagem muito curto.",
    image: sabrina,
    category: "equipamentos",
    line: "profissional",
    applications: ["hospitalar", "saúde", "industrial", "comercial"],
    specs: {
      material: "14 litros",
      dimensions: "40cm / 60cm",
      weight: "Variável",
      colors: ["Azul/Branco"],
    },
    relatedProducts: ["28", "29", "30"],
  },
  {
    id: "28",
    sku: "REF-MOP-BLCK",
    name: "Foamtec30",
    shortDescription: "Foamtec30 é o modelo de porte médio entre as máquinas que operam com o sistema Foamtec, patenteado pela Santoemma.",
    description: "Foamtec30 é o modelo de porte médio entre as máquinas que operam com o sistema Foamtec, patenteado pela Santoemma. Ele permite limpar e higienizar completamente os vasos sanitários pulverizando uma espuma compacta, enxaguando e aspirando.",
    image: foamtec,
    category: "equipamentos",
    line: "profissional",
    applications: ["hospitalar", "saúde", "industrial", "comercial"],
    specs: {
      material: "30 litros",
      dimensions: "40cm / 60cm",
      weight: "Variável",
      colors: ["Azul/Branco"],
    },
    relatedProducts: ["27","29", "30"],
  },
  {
    id: "29",
    sku: "REF-MOP-BLCK",
    name: "Foamtec30 Bateria",
    shortDescription: "Powertec30-Battery é uma máquina inovadora, patenteada pela Santoemma, com energia a bateria.",
    description: "Powertec30-Battery é uma máquina inovadora, patenteada pela Santoemma, com energia a bateria. Ele permite limpar e higienizar banheiros públicos, borrifando uma espuma fluida, enxaguando e aspirando. A fonte de alimentação da bateria torna a máquina extremamente prática e fácil de usar em qualquer lugar, eliminando o incômodo do cabo. É ideal para hospitais, escolas, universidades, fábricas e qualquer lugar onde trabalhar sem cabo de energia seja uma grande vantagem.",
    image: foamtecbateria,
    category: "equipamentos",
    line: "profissional",
    applications: ["hospitalar", "saúde", "industrial", "comercial"],
    specs: {
      material: "30 litros",
      dimensions: "40cm / 60cm",
      weight: "Variável",
      colors: ["Azul/Branco"],
    },
    relatedProducts: ["27", "28","30"],
  },
  {
    id: "30",
    sku: "REF-MOP-BLCK",
    name: "Fogger@7micron",
    shortDescription: "Fogger@7micron é uma máquina especialmente projetada para nebulizar um produto sanitizante na forma de névoa seca com partículas de diâmetro de apenas 7 micrômetros.",
    description: "Fogger@7micron é uma máquina especialmente projetada para nebulizar um produto sanitizante na forma de névoa seca com partículas de diâmetro de apenas 7 micrômetros. A névoa seca é dispensada por tempo suficiente para preencher completamente os cômodos e depois deixada agir por alguns minutos para exercer sua ação sanitizante. Esse tipo de neblina permite secca@7micron chegar a qualquer ponto, sem molhar as superfícies. A máquina pode ser deixada dentro do ambiente para ser tratada. Alternativamente, é possível deixar a máquina fora do ambiente, colocando apenas o tanque do produto dentro. Nesse caso, a conexão entre a máquina e o tanque é feita por meio de uma mangueira de 10 metros de comprimento, fornecida de padrão. Com uma arma específica, também é possível pulverizar névoa seca higienizante diretamente em superfícies de extensão limitada.",
    image: fogger7micron,
    category: "equipamentos",
    line: "profissional",
    applications: ["hospitalar", "saúde", "industrial", "comercial"],
    specs: {
      material: "30 litros",
      dimensions: "40cm / 60cm",
      weight: "Variável",
      colors: ["Azul/Branco"],
    },
    relatedProducts: ["27", "28", "29"],
  },
  {
    id: "31",
    sku: "OXY-SPRAY-01",
    name: "OXY-SPRAY",
    shortDescription: "Produto especial de desinfetamento à base de peróxido de hidrogênio, tanque de 5 litros.",
    description: "Produto especial de desinfetamento à base de peróxido de hidrogênio, tanque de 5 litros. O OXY-SPRAY pode ser pulverizado em superfícies ou em ambientes.",
    image: oxySpray,
    category: "equipamentos",
    line: "profissional",
    applications: ["hospitalar", "saúde", "industrial", "comercial"],
    specs: {
      material: "5 litros",
      dimensions: "40cm / 60cm",
      weight: "Variável",
      colors: ["Branco"],
    },
    relatedProducts: ["32"],
  },
  {
    id: "32",
    sku: "DESINFETANTE-SPRAY-01",
    name: "DESINFETANTE SPRAY",
    shortDescription: "Produto desinfetante especial à base de ácool e clorete de benzalcônio, em embalagem de 5 litros.",
    description: "Produto desinfetante especial à base de ácool e clorete de benzalcônio, em embalagem de 5 litros. O SANI-SPRAY pode ser pulverizado em superfícies ou em ambientes internos.",
    image: desinfetanteSpray,
    category: "equipamentos",
    line: "profissional",
    applications: ["hospitalar", "saúde", "industrial", "comercial"],
    specs: {
      material: "5 litros",
      dimensions: "40cm / 60cm",
      weight: "Variável",
      colors: ["Branco"],
    },
    relatedProducts: ["31"],
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