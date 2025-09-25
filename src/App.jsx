import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import { useApp } from './hooks/useApp'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const { darkMode } = useApp()
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
