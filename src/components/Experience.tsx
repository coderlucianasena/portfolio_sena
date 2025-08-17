import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Analista de TI Junior',
      company: 'Agropalma',
      location: 'Belém, Pará, Brasil',
      period: 'Fev 2025 - Presente',
      type: 'Tempo Integral',
      description: 'Atuo na área de infraestrutura com foco em servidores locais e suporte técnico especializado. Responsável por diagnóstico, resolução de problemas e manutenção de sistemas.',
      achievements: [
        'Monitoramento de infraestrutura com Zabbix para detecção proativa',
        'Implementação de soluções com Raspberry Pi para projetos específicos',
        'Configuração e manutenção de redes VPN para acesso remoto seguro',
        'Gerenciamento de tickets e fluxos através do Jira'
      ],
      technologies: ['VMware', 'Windows Server', 'Ubuntu', 'CentOS', 'TCP/IP', 'DNS', 'DHCP', 'Active Directory', 'Veeam', 'AWS EC2', 'PowerShell']
    },
    {
      id: 2,
      title: 'Desenvolvedora Frontend',
      company: 'Freelancer',
      location: 'Belém, Pará, Brasil',
      period: 'Jul 2023 - Presente',
      type: 'Freelance',
      description: 'Criação de interfaces responsivas e intuitivas usando HTML5, CSS3 (SASS) e JavaScript (ES6+). Trabalho com frameworks como React, React Native e Bootstrap.',
      achievements: [
        'Desenvolvi projetos diversificados incluindo sites institucionais e e-commerces',
        'Adotei metodologias ágeis (Scrum e Kanban) para entregas contínuas',
        'Colaboração estreita com clientes e equipes multidisciplinares',
        'Mantive-me atualizada com as últimas tendências do desenvolvimento frontend'
      ],
      technologies: ['React', 'React Native', 'HTML5', 'CSS3', 'SASS', 'JavaScript ES6+', 'Bootstrap', 'Git', 'Node.js', 'Figma']
    },
    {
      id: 3,
      title: 'Técnico de Suporte em TI',
      company: 'Freelancer',
      location: 'Marituba, Pará, Brasil',
      period: 'Jan 2021 - Presente',
      type: 'Freelance',
      description: 'Prestação de serviços de manutenção e suporte técnico a computadores e periféricos, incluindo formatação, instalação de software e configuração de redes.',
      achievements: [
        'Atendimento a clientes de diferentes níveis de conhecimento técnico',
        'Experiência com diferentes sistemas operacionais, softwares e hardwares',
        'Capacidade de trabalhar de forma independente e em equipe',
        'Solução de problemas técnicos e treinamento de usuários'
      ],
      technologies: ['Windows', 'Linux', 'Microsoft Office', 'Hardware', 'Redes', 'Manutenção']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Minha <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Experiência</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Minha jornada profissional no desenvolvimento web
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-600 to-pink-600"></div>

            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Principais Conquistas:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Tecnologias:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Formação Acadêmica
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Bacharelado em Engenharia de Software
                </h4>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                  Centro Universitário UNIFAVIP
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  2023 - 2026
                </p>

              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Desenvolvimento Backend
                </h4>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                  Softex em parceria com a UEPA
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  2025 - 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

