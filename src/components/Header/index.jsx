import { useApp } from '../../hooks/useApp'
import ThemeToggle from './ThemeToggle'
import LangSwitch from './LangSwitch'

const Header = () => {
  const { language, darkMode, setLanguage, toggleDarkMode } = useApp()

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr')
  }

  return (
    <header 
      className="header-controls"
      data-cy="header"
      role="banner"
      aria-label="Site header with theme and language controls"
    >
      <ThemeToggle 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <LangSwitch 
        language={language}
        toggleLanguage={toggleLanguage}
      />
    </header>
  )
}

export default Header