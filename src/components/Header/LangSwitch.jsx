const LangSwitch = ({ language, toggleLanguage }) => {
  return (
    <button
      onClick={toggleLanguage}
      className="control-button lang-button"
      aria-label={`Switch to ${language === 'tr' ? 'English' : 'Turkish'}`}
      type="button"
    >
      {language === 'tr' ? 'SWITCH TO ENGLISH' : 'TÜRKÇE\'YE GEÇ'}
    </button>
  )
}

export default LangSwitch