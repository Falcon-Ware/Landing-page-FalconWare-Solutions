import { ArrowRight, CheckCircle, Code, Cog, Link, MessageCircle, Mail, Globe, Zap, Target, Shield, Phone, Facebook, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image';
import logo from '@/img/logo.png'; // ajuste o caminho se necessário

// Componente da Logo do Falcão
function FalconLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <div className="w-full h-full bg-gradient-to-br from-[#16a34a] to-[#2563eb] rounded-xl flex items-center justify-center shadow-lg">

        <div className={`${className} relative`}>
          <div className="w-full h-full bg-gradient-to-br from-[#16a34a] to-[#2563eb] rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
            <Image
              src={logo}
              alt="Logo da empresa"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </div>

  )
}

export default function LandingPage() {
  return (
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
  )
}
