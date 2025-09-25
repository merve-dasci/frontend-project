import content from '../../data/content.json'

const Footer = () => {
  
  return (
    <footer className="py-16 px-8 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-12">
        
          <div>
            <p className="text-2xl text-gray-900 dark:text-white font-semibold">
              Let's <span 
                className="font-medium"
                style={{
                  textDecoration: 'underline',
                  textDecorationColor: 'rgba(56, 189, 248, 0.7)',
                  textDecorationThickness: '6px',
                  textUnderlineOffset: '6px'
                }}
              >work together</span> on your next product.
            </p>
          </div>
          
       
          <div className="flex flex-col space-y-1">
            <a 
              href={content.contact.github.url}
              className="text-blue-600 hover:text-blue-700 text-base font-medium no-underline"
              target="_blank"
            >
              Github
            </a>
            <a 
              href="#"
              className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 text-base font-medium no-underline"
            >
              Personal Blog
            </a>
            <a 
              href={content.contact.linkedin.url}
              className="text-sky-400 hover:text-sky-500 text-base font-medium no-underline"
              target="_blank"
            >
              Linkedin
            </a>
            <a 
              href={`mailto:${content.contact.email}`}
              className="text-red-800 hover:text-red-900 text-base font-medium no-underline"
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