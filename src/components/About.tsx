import React from 'react';

const About = () => {
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
                {/* Container que se adapta 100% à imagem - ZERO cortes */}
                <div className="w-full max-w-md mx-auto">
                  <div className="relative rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 p-1">
                    {/* Container sem restrições - imagem define o tamanho */}
                    <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
                      <img
                        src="/About.png"
                        alt="Luciana Sena - Desenvolvedora"
                        className="w-full h-auto object-contain object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Background decoration - Mobile-First Responsive */}
              <div className="absolute top-6 sm:top-8 md:top-10 lg:top-12 left-6 sm:left-8 md:left-10 lg:left-12 w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 2xl:h-72 rounded-2xl bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-600 dark:to-pink-800 -z-10"></div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Desenvolvedora Frontend Apaixonada por Tecnologia
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
                Atualmente, estou estudando Python e bancos de dados modernos. Rumo ao Fullstack!
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
            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Clean Code
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Escrevo código limpo, legível e bem documentado
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Performance
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Otimizo aplicações para máxima velocidade e eficiência
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                UX/UI
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Crio interfaces intuitivas e experiências memoráveis
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Dedicação
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Comprometida com a excelência em cada projeto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About