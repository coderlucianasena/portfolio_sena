import { Code, Coffee, Heart, Zap } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Clean Code",
      description: "Escrevo código limpo, legível e bem documentado"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description: "Otimizo aplicações para máxima velocidade e eficiência"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "UX/UI",
      description: "Crio interfaces intuitivas e experiências memoráveis"
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Dedicação",
      description: "Comprometida com a excelência em cada projeto"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Sobre <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Mim</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative z-10">
                <div className="w-full max-w-md mx-auto">
                  <div className="h-[600px] rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 p-1">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                      <img 
                        src="/About.png" 
                        alt="Luciana Sena - Desenvolvedora"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Background decoration */}
              <div className="absolute top-12 left-12 w-full h-[400px] rounded-2xl bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-600 dark:to-pink-800 -z-10"></div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Desenvolvedora Fullstack Apaixonada por Tecnologia
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Com mais de 2 anos de experiência em desenvolvimento web, estudo constantemente para criar 
                soluções digitais completas que combinam funcionalidade robusta com design elegante. 
                Minha jornada começou com curiosidade sobre como as coisas funcionam na web e evoluiu 
                para uma paixão por construir experiências que fazem a diferença.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Trabalho principalmente com React, Node.js e TypeScript. 
                Acredito que a melhor tecnologia é aquela que resolve problemas reais de forma simples 
                e eficiente. Estou sempre aprendendo e me adaptando às novas tendências do mercado.
                Atualmente, estou estudando Python e bancos de dados modernos.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10+</div>
                  <div className="text-gray-600 dark:text-gray-400">Projetos Concluídos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">2+</div>
                  <div className="text-gray-600 dark:text-gray-400">Anos de Experiência</div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

