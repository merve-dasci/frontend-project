import { useApp } from '../../hooks/useApp'
import content from '../../data/content.json'
import { toast } from 'react-toastify'

const Skills = () => {
  const { language } = useApp()

  const handleSkillClick = (skillName) => {
    
    toast.success(`${skillName} linki açılıyor...`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    })
  }

  return (
    <section className="py-8 px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{content.skills.title[language]}</h2>
        
        <div className="flex justify-center items-center flex-wrap gap-1">
          {content.skills.items.map((skill, index) => (
            <div key={index} className="flex flex-col items-center space-y-1">
             
              <a 
                href={skill.link}
                target="_blank"
                onClick={() => handleSkillClick(skill.name)}
                className="w-20 h-20 bg-gray-800 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                title={`Visit ${skill.name} website`}
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'block'
                  }}
                />
               
                <span 
                  className="text-white font-bold text-lg hidden"
                  style={{display: 'none'}}
                >
                  {skill.name.substring(0, 2).toUpperCase()}
                </span>
              </a>
              
             
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills