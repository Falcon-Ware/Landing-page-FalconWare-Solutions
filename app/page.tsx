"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code, Cog, Link, Globe, Zap, Target, Shield, Phone, Facebook, Instagram, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/img/logo.png";


// --- TIPOS ---
// Define a estrutura de um objeto de projeto
interface ProjectType {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  link: string;
  tagColors: {
    bg: string;
    text: string;
  };
}

// --- DADOS DOS PROJETOS ---
// Adicione ou remova projetos aqui
const projects: ProjectType[] = [
  // {
  //   title: 'Sistema de Gestão Escolar',
  //   description: 'Uma plataforma completa para gerenciamento de alunos, notas, frequência e comunicação com os pais.',
  //   images: [
  //     'https://placehold.co/600x400/16a34a/ffffff?text=Escolar+1',
  //     'https://placehold.co/600x400/16a34a/ffffff?text=Escolar+2',
  //     'https://placehold.co/600x400/16a34a/ffffff?text=Escolar+3',
  //   ],
  //   tags: ['React', 'Node.js', 'PostgreSQL'],
  //   link: '#',
  //   tagColors: {
  //     bg: 'bg-blue-100',
  //     text: 'text-blue-800',
  //   }
  // },
  {
    title: 'Control Stock360',
    description: 'Controle total e em tempo real do seu estoque!.',
    images: [
      'Dashboard de Estoque.png',
      'Lista de Produtos.png',
      `fucionario.png`,
      `Entrada de Estoque.png`,
      `Relatório de Movimentações.png`,
      `Relatórios e Analytics.png`
    ],
    tags: [],
    link: 'https://control-stock360.falconware.com.br/',
    tagColors: {
      bg: 'bg-gray-100',
      text: 'text-gray-800',
    }
  },
  {
    title: 'Bingo proPrêmio',
    description: 'Sistema de Bingo Profissional para gerenciar seus jogos com eficiência e elegância.',
    images: [
      'gera-cartela.png',
      'Sorteio-Profissional.png',
      'personalização.png',
      'ganhador.png',
    ],
    tags: [],
    link: 'https://bingo-propremio.falconware.com.br/',
    tagColors: {
      bg: 'bg-purple-100',
      text: 'text-purple-800',
    }
  }
];


// --- COMPONENTES ---

// Componente da Logo do Falcão
function FalconLogo({ className = "w-10 h-10" }: { className?: string }) {

  return (
    <div className={`${className} relative`}>
      <div className="w-full h-full bg-gradient-to-br from-[#16a34a] to-[#2563eb] rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
        <img src={logo.src}
          alt="Logo da empresa"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  )
}

// Props para o ImageModal
interface ImageModalProps {
  images: string[];
  startIndex: number;
  onClose: () => void;
}

// Componente do Modal de Imagem (Lightbox)
function ImageModal({ images, startIndex, onClose }: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const nextImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      // Criamos um evento sintético para passar para as funções
      const syntheticEvent = {} as React.MouseEvent<HTMLButtonElement>;
      if (e.key === 'ArrowRight') nextImage(syntheticEvent);
      if (e.key === 'ArrowLeft') prevImage(syntheticEvent);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [images.length, onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-[110]"
        onClick={onClose}
      >
        <X size={32} />
      </button>

      <div className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
        <button
          onClick={prevImage}
          className="absolute left-0 -translate-x-12 text-white/80 hover:text-white transition-colors p-2 z-[110] bg-black/20 rounded-full"
        >
          <ChevronLeft size={40} />
        </button>

        <img
          src={images[currentIndex]}
          alt={`Visualização do projeto ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />

        <button
          onClick={nextImage}
          className="absolute right-0 translate-x-12 text-white/80 hover:text-white transition-colors p-2 z-[110] bg-black/20 rounded-full"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}

// Props para o ProjectCard
interface ProjectCardProps {
  project: ProjectType;
  onImageClick: (images: string[], startIndex: number) => void;
}

// Componente do Card de Projeto com Carrossel
function ProjectCard({ project, onImageClick }: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    if (!isHovered && project.images.length > 1) {
      timeoutRef.current = setTimeout(
        () =>
          setCurrentIndex((prevIndex) =>
            prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
          ),
        4000 // muda a cada 4 segundos
      );
    }
    return () => {
      resetTimeout();
    };
  }, [currentIndex, isHovered, project.images.length]);


  const nextImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
  };

  return (
    <Card
      className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-48">
        {/* Imagem do Carrossel */}
        <img
          src={project.images[currentIndex]}
          alt={`Imagem ${currentIndex + 1} do ${project.title}`}
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => onImageClick(project.images, currentIndex)}
        />

        {/* Botões do Carrossel */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
            >
              <ChevronRight size={24} />
            </button>
            {/* Indicadores de Paginação */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {project.images.map((_, index: number) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600 mb-4">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className={`${project.tagColors.bg} ${project.tagColors.text} text-xs font-medium px-2.5 py-0.5 rounded-full`}>{tag}</span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a href={project.link} className="w-full">
          <Button variant="outline" className="w-full border-[#16a34a] text-[#16a34a] hover:bg-[#16a34a]/10">
            Ver Detalhes <Globe className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}

// Tipos para o estado do modal
interface ModalState {
  isOpen: boolean;
  images: string[];
  startIndex: number;
}

export default function LandingPage() {
  const [modalState, setModalState] = useState<ModalState>({ isOpen: false, images: [], startIndex: 0 });

  const openModal = (images: string[], startIndex: number) => {
    setModalState({ isOpen: true, images, startIndex });
    document.body.style.overflow = 'hidden'; // Impede o scroll do fundo
  };

  const closeModal = () => {
    setModalState({ isOpen: false, images: [], startIndex: 0 });
    document.body.style.overflow = 'auto'; // Restaura o scroll
  };

  return (
    <>
      {modalState.isOpen && (
        <ImageModal
          images={modalState.images}
          startIndex={modalState.startIndex}
          onClose={closeModal}
        />
      )}

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <FalconLogo />
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-[#16a34a] to-[#2563eb] bg-clip-text text-transparent">
                    FalconWare
                  </h1>
                  <p className="text-sm text-[#16a34a]">Solutions</p>
                </div>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#servicos" className="text-gray-600 hover:text-[#16a34a] transition-colors">
                  Serviços
                </a>
                <a href="#projetos" className="text-gray-600 hover:text-[#16a34a] transition-colors">
                  Projetos
                </a>
                <a href="#diferenciais" className="text-gray-600 hover:text-[#16a34a] transition-colors">
                  Diferenciais
                </a>
                <a href="#contato" className="text-gray-600 hover:text-[#16a34a] transition-colors">
                  Contato
                </a>
              </nav>
              <a
                href="https://wa.me/5586981171582?text=Olá%2C%20quero%20saber%20mais%20sobre%20o%20sistema."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-[#16a34a] to-[#2563eb] hover:from-[#16a34a]/90 hover:to-[#2563eb]/90 text-white">
                  Fale Conosco
                </Button>
              </a>

            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#16a34a]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#2563eb]/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-8">
                <FalconLogo className="w-20 h-20 m-3 ml-1" />
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-[#16a34a] to-[#2563eb] bg-clip-text text-transparent">
                  FalconWare Solutions
                </h1>
              </div>

              <p className="text-xl lg:text-2xl text-[#16a34a] mb-8 max-w-3xl mx-auto font-medium">
                Resolvemos o seu problema com tecnologia 💻
              </p>
              <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
                Somos uma empresa especializada em criar soluções tecnológicas sob medida.
                Se você tem um problema, uma ideia ou um processo que precisa ser automatizado,
                nós desenvolvemos o sistema ideal para você.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5586981171582?text=Olá%2C%20quero%20começar%20um%20projeto%20com%20a%20Falconware."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-gradient-to-r from-[#16a34a] to-[#2563eb] hover:from-[#16a34a]/90 hover:to-[#2563eb]/90 text-white text-lg px-8 py-3 shadow-lg">
                    Começar Projeto
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>

                <a
                  href="https://wa.me/5586981171582?text=Olá%2C%20quero%20conhecer%20as%20soluções%20da%20Falconware."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="border-[#16a34a] text-[#16a34a] hover:bg-[#16a34a]/5 text-lg px-8 py-3">
                    Conhecer Soluções
                  </Button>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Diferencial */}
        <section className="py-16 bg-gradient-to-r from-[#16a34a] to-[#2563eb] relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Soluções que se adaptam ao seu negócio.
              </h2>
              <p className="text-xl text-white/90 font-medium">
                Oferecemos soluções personalizadas.
              </p>
              <p className="text-lg text-white/80 mt-4">
                Trabalhamos lado a lado com você para entender exatamente o que seu negócio precisa —
                e entregamos tecnologia que funciona, resolve e transforma.
              </p>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#16a34a] to-[#2563eb] bg-clip-text text-transparent mb-4">
                O que fazemos
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#16a34a] to-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">🔧 Sistemas Sob Demanda</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    Você nos diz o que precisa — nós desenvolvemos. Sistemas web ou desktop,
                    totalmente personalizados.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#16a34a] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Cog className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">⚙️ Automação de Processos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    Analisamos e otimizamos tarefas manuais ou repetitivas com soluções automatizadas
                    que economizam tempo e dinheiro.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#16a34a] to-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Link className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">🔗 Integrações e Conectividade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    Fazemos sistemas diferentes se comunicarem com eficiência: ERPs, CRMs, APIs e muito mais.
                  </CardDescription>
                </CardContent>
              </Card>


            </div>
          </div>
        </section>

        <section id="projetos" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#16a34a] to-[#2563eb] bg-clip-text text-transparent mb-4">
                Projetos em Destaque
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Confira alguns dos trabalhos que desenvolvemos para transformar ideias em realidade para nossos clientes.
              </p>
            </div>
            <div className=" md:grid-cols-2 lg:grid-cols-3 gap-8 flex">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  onImageClick={openModal}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section id="diferenciais" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#16a34a] to-[#2563eb] bg-clip-text text-transparent mb-4">
                Nosso diferencial
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#16a34a] to-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    ✔️ Soluções personalizadas de verdade
                  </h3>
                  <p className="text-gray-600">
                    Cada cliente tem sua realidade. Entregamos tecnologia feita sob medida,
                    do zero, para resolver o seu problema.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2563eb] to-[#16a34a] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    🚀 Foco em resultado
                  </h3>
                  <p className="text-gray-600">
                    Mais do que software bonito: criamos sistemas que entregam valor real
                    e resultados práticos.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#16a34a] to-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    🤝 Atendimento humano e próximo
                  </h3>
                  <p className="text-gray-600">
                    Acompanhamos cada etapa do projeto de perto, com comunicação clara
                    e foco total no cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#16a34a] to-[#2563eb] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 drop-shadow-lg">
                Tem uma ideia ou um problema para resolver?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Fale com a gente! A FalconWare Solutions está pronta para transformar sua necessidade
                em uma solução tecnológica funcional, eficiente e moderna.
              </p>
              <a
                href="https://wa.me/5586981171582?text=Olá%2C%20quero%20iniciar%20uma%20conversa%20sobre%20o%20sistema."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-[#16a34a] hover:bg-gray-50 text-lg px-8 py-3 shadow-xl font-semibold"
                >
                  Iniciar Conversa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contato" className="py-12 bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <FalconLogo className="w-12 h-12" />
                <div>
                  <h3 className="font-bold bg-gradient-to-r from-[#16a34a] to-[#2563eb] bg-clip-text text-transparent text-lg">
                    FalconWare Solutions
                  </h3>
                  <p className="text-[#16a34a] text-sm">Tecnologia que voa alto</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                {/* WhatsApp */}
                <div className="flex items-center space-x-2 text-gray-300 hover:text-[#16a34a] transition-colors">
                  <Phone className="h-4 w-4" />
                  <a
                    href="https://wa.me/5586981171582?text=Olá%2C%20quero%20saber%20mais%20sobre%20o%20sistema."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    WhatsApp: (86) 98117-1582
                  </a>
                </div>

                {/* Instagram */}
                <div className="flex items-center space-x-2 text-gray-300 hover:text-[#e1306c] transition-colors">
                  <Instagram className="h-4 w-4" />
                  <a
                    href="https://www.instagram.com/falcon_ware?igsh=bmVlczhrNG00MGRk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    @falcon_ware
                  </a>
                </div>

                {/* Facebook */}
                <div className="flex items-center space-x-2 text-gray-300 hover:text-[#1877f2] transition-colors">
                  <Facebook className="h-4 w-4" />
                  <a
                    href="https://www.facebook.com/share/175Z8eGh8S/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    /FalconWare
                  </a>
                </div>
              </div>

            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2025 FalconWare Solutions. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}