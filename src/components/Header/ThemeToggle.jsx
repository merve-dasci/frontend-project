const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="theme-toggle-container">
      <button
        onClick={toggleDarkMode}
        className="theme-switch"
        data-testid="theme-toggle"
        data-cy="theme-toggle"
        aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        type="button"
      >
      </button>
      <span className="theme-label">
        {darkMode ? 'DARK MODE' : 'LIGHT MODE'}
      </span>
    </div>
  )
}

export default ThemeToggle