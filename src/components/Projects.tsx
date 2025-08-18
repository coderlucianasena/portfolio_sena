import { useState } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Projeto 1',
      description: 'Descrição do projeto 1. ',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      category: 'frontend',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Projeto 2',
      description: 'Descrição do projeto 2. ',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      category: 'backend',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Projeto 3',
      description: 'Descrição do projeto 3. ',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      category: 'fullstack',
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Projeto 4',
      description: 'Descrição do projeto 4. ',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Tailwind'],
      category: 'frontend',
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Projeto 5',
      description: 'Descrição do projeto 5. ',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      category: 'frontend',
      github: '#',
      live: '#',
      featured: false
    },

  ]

  const categories = [
    { key: 'all', label: 'Todos' },
    { key: 'fullstack', label: 'Fullstack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="projects-section py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Meus <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projetos</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes e impactantes
            </p>
          </div>

          {/* Filter Tabs - Mobile-First */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="inline-flex flex-col sm:flex-row bg-gray-100 dark:bg-gray-800 rounded-2xl sm:rounded-full p-1 w-full sm:w-auto">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setFilter(category.key)}
                  className={`px-4 sm:px-6 py-3 rounded-xl sm:rounded-full font-medium transition-all duration-300 text-sm sm:text-base w-full sm:w-auto ${
                    filter === category.key
                      ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid - Mobile-First */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image Placeholder */}
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-2">{project.title.charAt(0)}</div>
                      <div className="text-sm opacity-80">Projeto</div>
                    </div>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Destaque
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Projeto
                      </a>
                    </Button>
                  </div>


                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Gostou do que viu? Vamos trabalhar juntos!
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full"
            >
              Ver Todos os Projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

