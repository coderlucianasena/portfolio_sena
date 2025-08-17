import { useState } from 'react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-800' },
        { name: 'Next.js', level: 85, color: 'from-purple-500 to-pink-500' },
        { name: 'Tailwind CSS', level: 92, color: 'from-teal-400 to-blue-500' },
        { name: 'Vue.js', level: 80, color: 'from-green-400 to-green-600' },
        { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-orange-500' }
      ]
    },
    backend: {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, color: 'from-green-500 to-green-700' },
        { name: 'Express.js', level: 88, color: 'from-orange-500 to-red-500' },
        { name: 'Python', level: 85, color: 'from-blue-500 to-yellow-500' },
        { name: 'PostgreSQL', level: 82, color: 'from-blue-600 to-blue-800' },
        { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-800' },
        { name: 'GraphQL', level: 75, color: 'from-pink-500 to-purple-600' }
      ]
    },
    tools: {
      title: 'Ferramentas',
      skills: [
        { name: 'Git', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'Docker', level: 80, color: 'from-blue-500 to-blue-700' },
        { name: 'AWS', level: 75, color: 'from-orange-400 to-yellow-500' },
        { name: 'Figma', level: 85, color: 'from-purple-500 to-pink-500' },
        { name: 'Jest', level: 82, color: 'from-red-500 to-orange-500' },
        { name: 'Webpack', level: 78, color: 'from-blue-600 to-cyan-600' }
      ]
    }
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Minhas <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Habilidades</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas e eficientes
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white dark:bg-gray-900 rounded-full p-1 shadow-lg">
              {Object.entries(skillCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === key
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `slideIn 1s ease-out ${index * 100}ms both`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Sempre Aprendendo
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                A tecnologia evolui rapidamente, e eu evoluo junto. Atualmente estou estudando 
                Web3, Machine Learning e aprofundando conhecimentos em arquitetura de microsserviços.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Web3', 'Machine Learning', 'Microsserviços', 'Kubernetes', 'Rust'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  )
}

export default Skills

