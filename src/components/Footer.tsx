import { Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#projects', label: 'Projetos' },
    { href: '#experience', label: 'Experiência' },
    { href: '#contact', label: 'Contato' }
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Luciana Sena
              </div>
              <p className="text-gray-400 leading-relaxed">
                Desenvolvedora Fullstack apaixonada por criar soluções digitais inovadoras 
                que fazem a diferença na vida das pessoas.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <span>Feito com</span>
                <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
                <span>e muito café ☕</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Links Rápidos</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contato</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📧 coder.lucianasena@gmail.com</p>
                <p>📱 +55 (91) 98123-7058</p>
                <p>📍 Belém, PA - Brasil</p>
              </div>
              
              {/* Status */}
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-400">Disponível para projetos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} Luciana Sena. Todos os direitos reservados.
            </div>

            {/* Back to Top */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-gray-700 text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Voltar ao Topo
            </Button>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></div>
    </footer>
  )
}

export default Footer

