import { useApp } from '../../hooks/useApp'
import content from '../../data/content.json'

const Projects = () => {
  const { language } = useApp()

  return (
    <section className="py-16 px-8 bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center">{content.projects.title[language]}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.projects.items.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              
              <div className="w-full h-48 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
             
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description[language]}</p>
              
             
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
             
              <div className="flex space-x-3">
                <a 
                  href={project.links.github}
                  className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {project.buttons.demo[language]}
                </a>
                <a 
                  href={project.links.demo}
                  className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  {project.buttons.github[language]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects