import { useApp } from '../../hooks/useApp'
import content from '../../data/content.json'
import './Hero.css'

const Hero = () => {
  const { language } = useApp()
  
  return (
    <section 
      className="hero-section flex items-center justify-center"
      role="main"
      aria-labelledby="hero-heading"
    >
      <div className="hero-container">
        
        
        <div className="hero-text-content">
          <h3 className="hero-greeting">{content.hero.greeting[language]}</h3>
          
          <h1 id="hero-heading" className="hero-title">
            {language === 'en' ? (
              <>I'm <span className="hero-highlight">Merve</span>. I'm a full-stack<br/>developer. I can craft solid and<br/>scalable frontend products.</>
            ) : (
              <>Ben <span className="hero-highlight">Merve</span>. Bir full-stack<br/>developer'ım. Sağlam ve ölçeklenebilir<br/>frontend ürünleri geliştirebilirim.</>
            )}<br/>
            {content.hero.actionText[language]}
          </h1>
          
          <div className="hero-contact">
            <div className="hero-github-link">
              <a 
                href={content.contact.linkedin.url} 
                target="_blank"
                aria-label="LinkedIn profile"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a 
                href={content.contact.github.url} 
                target="_blank"
                aria-label="GitHub profile"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            
            <p>Currently <strong>Freelancing</strong> for UX, UI & Web Design Project</p>
            <p>Invite me to join your team → <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a></p>
          </div>
        </div>
        
        
        <div className="hero-image-container">
          <div className="hero-image-frame">
            <div className="hero-image-inner">
              <img 
                src={content.hero.profileImage.src} 
                alt={content.hero.profileImage.alt}
                className="hero-image"
                loading="eager"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Hero