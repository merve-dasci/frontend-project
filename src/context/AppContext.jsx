import { createContext, useReducer, useEffect } from 'react'
import { ACTION_TYPES } from './actionTypes'


const initialState = {
  language: 'tr',
  darkMode: false,
  loading: false,
  error: null,
  apiData: null
}


const appReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LANGUAGE:
      return { ...state, language: action.payload }
    case ACTION_TYPES.TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode }
    case ACTION_TYPES.SET_LOADING:
      return { ...state, loading: action.payload }
    case ACTION_TYPES.SET_ERROR:
      return { ...state, error: action.payload }
    case ACTION_TYPES.SET_API_DATA:
      return { ...state, apiData: action.payload }
    default:
      return state
  }
}


const AppContext = createContext()


export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language')
    const savedTheme = localStorage.getItem('portfolio-theme')
    
    if (savedLanguage) {
      dispatch({ type: ACTION_TYPES.SET_LANGUAGE, payload: savedLanguage })
    }
    
    if (savedTheme === 'dark') {
      dispatch({ type: ACTION_TYPES.TOGGLE_DARK_MODE })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('portfolio-language', state.language)
  }, [state.language])

  useEffect(() => {
    localStorage.setItem('portfolio-theme', state.darkMode ? 'dark' : 'light')
    
    
    if (state.darkMode) {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
    }
  }, [state.darkMode])

  
  const actions = {
    setLanguage: (language) => {
      dispatch({ type: ACTION_TYPES.SET_LANGUAGE, payload: language })
    },
    
    toggleDarkMode: () => {
      dispatch({ type: ACTION_TYPES.TOGGLE_DARK_MODE })
    },
    
    setLoading: (loading) => {
      dispatch({ type: ACTION_TYPES.SET_LOADING, payload: loading })
    },
    
    setError: (error) => {
      dispatch({ type: ACTION_TYPES.SET_ERROR, payload: error })
    },
    
    setApiData: (data) => {
      dispatch({ type: ACTION_TYPES.SET_API_DATA, payload: data })
    }
  }

  const value = {
    ...state,
    ...actions
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext