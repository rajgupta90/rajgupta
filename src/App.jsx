import { useTheme } from '@/hooks/useTheme'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Training from '@/components/Training'
import Certificates from '@/components/Certificates'
import Achievements from '@/components/Achievements'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import CatCursor from '@/components/CatCursor'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen">
      <CatCursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Training />
        <Certificates />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App
