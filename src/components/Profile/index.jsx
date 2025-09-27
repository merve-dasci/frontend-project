import { useApp } from '../../hooks/useApp'
import content from '../../data/content.json'
import './Profile.css'

const Profile = () => {
  const { language } = useApp()
  
  return (
    <section className="profile-section" data-cy="profile-section">
      <div className="profile-container">
        <h2 className="profile-title dark:text-white" data-cy="profile-title">{content.profile.title[language]}</h2>
        
        <div className="profile-grid">
          
         
          <div>
            <div className="basic-info-card">
              <h3 className="basic-info-title">Basic Information</h3>
              
              <dl>
                {Object.entries(content.profile.info).map(([key, info]) => (
                  <div key={key} className="info-item">
                    <dt className="info-label">{info.label[language]}</dt>
                    <dd className="info-value">
                      {typeof info.value === 'object' ? info.value[language] : info.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          
         
          <div>
            <div className="about-section">
              <h3 className="about-title">{content.profile.aboutMe.title[language]}</h3>
              
              {content.profile.aboutMe.content[language].map((paragraph, index) => (
                <p key={index} className="about-content">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile