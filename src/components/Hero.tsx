import { useState, useEffect } from 'react'
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = [
    'Desenvolvedora Frontend',
    'Apaixonada por React',
    'Entusiasta de Python',
    'Criadora de Soluções'
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1))
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1))
        
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto pt-32">


          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Olá, sou </span>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Luciana Sena
            </span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-12">
            <span>{currentText}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transformo ideias em experiências digitais incríveis. Especializada em desenvolvimento 
            web moderno com foco em performance, usabilidade e design elegante.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Entre em Contato
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="#" 
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

