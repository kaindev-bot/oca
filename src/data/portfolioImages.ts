/**
 * CONFIGURAÇÃO DE IMAGENS DO PORTFÓLIO
 * =====================================
 * 
 * Para adicionar novas fotos:
 * 
 * 1. Coloque suas imagens na pasta correspondente:
 *    - src/assets/portfolio/cozinhas/
 *    - src/assets/portfolio/closets/
 *    - src/assets/portfolio/quartos/
 *    - src/assets/portfolio/paineis/
 * 
 * 2. Importe a imagem abaixo e adicione ao array da categoria
 * 
 * Exemplo:
 *    import novaFoto from "@/assets/portfolio/cozinhas/nova-foto.jpg";
 *    
 *    Depois adicione ao array 'cozinhas':
 *    { src: novaFoto, alt: "Descrição da foto" }
 */

// ============================================
// COZINHAS - Importe suas fotos aqui
// ============================================
import cozinha1 from "@/assets/portfolio/cozinhas/cozinha-01.jpg";
import cozinha2 from "@/assets/portfolio/cozinhas/cozinha-02.jpg";
import cozinha3 from "@/assets/portfolio/cozinhas/cozinha-03.jpg";

// ============================================
// CLOSETS - Importe suas fotos aqui
// ============================================
import closet1 from "@/assets/portfolio/closets/closet-01.jpg";
import closet2 from "@/assets/portfolio/closets/closet-02.jpg";
import closet3 from "@/assets/portfolio/closets/closet-03.jpg";

// ============================================
// QUARTOS - Importe suas fotos aqui
// ============================================
import quarto1 from "@/assets/portfolio/quartos/quarto-01.jpg";
import quarto2 from "@/assets/portfolio/quartos/quarto-02.jpg";
import quarto3 from "@/assets/portfolio/quartos/quarto-03.jpg";

// ============================================
// PAINÉIS - Importe suas fotos aqui
// ============================================
import painel1 from "@/assets/portfolio/paineis/painel-01.jpg";
import painel2 from "@/assets/portfolio/paineis/painel-02.jpg";
import painel3 from "@/assets/portfolio/paineis/painel-03.jpg";

// ============================================
// CONFIGURAÇÃO DAS GALERIAS
// ============================================

export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  coverImage: string;
  gallery: PortfolioImage[];
}

// Adicione suas fotos aos arrays abaixo
export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Cozinha Contemporânea",
    category: "Cozinhas",
    coverImage: cozinha1,
    gallery: [
      { src: cozinha1, alt: "Cozinha contemporânea - Vista geral" },
      { src: cozinha2, alt: "Cozinha contemporânea - Detalhes" },
      { src: cozinha3, alt: "Cozinha contemporânea - Acabamentos" },
      // Adicione mais fotos aqui...
    ],
  },
  {
    id: 2,
    title: "Closet Master",
    category: "Closets",
    coverImage: closet1,
    gallery: [
      { src: closet1, alt: "Closet master - Vista geral" },
      { src: closet2, alt: "Closet master - Organização" },
      { src: closet3, alt: "Closet master - Detalhes" },
      // Adicione mais fotos aqui...
    ],
  },
  {
    id: 3,
    title: "Suíte Premium",
    category: "Quartos",
    coverImage: quarto1,
    gallery: [
      { src: quarto1, alt: "Suíte premium - Vista geral" },
      { src: quarto2, alt: "Suíte premium - Cabeceira" },
      { src: quarto3, alt: "Suíte premium - Detalhes" },
      // Adicione mais fotos aqui...
    ],
  },
  {
    id: 4,
    title: "Painel Geométrico",
    category: "Painéis",
    coverImage: painel1,
    gallery: [
      { src: painel1, alt: "Painel geométrico - Vista frontal" },
      { src: painel2, alt: "Painel geométrico - Detalhes" },
      { src: painel3, alt: "Painel geométrico - Iluminação" },
      // Adicione mais fotos aqui...
    ],
  },
];

// Categorias disponíveis
export const categories = ["Todos", "Cozinhas", "Closets", "Quartos", "Painéis"];
