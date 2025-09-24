import content from '../../data/content.json'

const Footer = () => {
  
  return (
    <footer className="py-16 px-8 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-8">
         
          <div>
            <p className="text-lg text-gray-900 dark:text-white">
              Let's <span className="underline font-medium">work together</span> on your next product.
            </p>
          </div>
          
         
          <div className="flex flex-col space-y-1 text-left">
            <a 
              href={content.contact.github.url}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
              target="_blank"
            >
              Github
            </a>
            <a 
              href="#"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
            >
              Personal Blog
            </a>
            <a 
              href={content.contact.linkedin.url}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
              target="_blank"
            >
              Linkedin
            </a>
            <a 
              href={`mailto:${content.contact.email}`}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer