import { useApp } from '../../hooks/useApp'
import content from '../../data/content.json'

const Footer = () => {
  const { language } = useApp()
  
  return (
    <footer className="py-16 px-8 bg-gray-50 dark:bg-gray-900 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {content.footer.actionText.title[language]}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          👋 {content.contact.email}
        </p>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="#"
            className="text-pink-500 hover:text-pink-600 font-medium transition-colors"
          >
            Personal Blog
          </a>
          <a 
            href="#"
            className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
          >
            Github
          </a>
          <a 
            href="#"
            className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer