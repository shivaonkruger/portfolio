import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Publications from './components/Publications'
import Achievements from './components/Achievements'
import CurrentlyInto from './components/CurrentlyInto'
import Contact from './components/Contact'
export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Achievements />
        <CurrentlyInto />
      </main>
      <Contact />
    </div>
  )
}
