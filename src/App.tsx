import './App.css'
import Cursor from './components/Cursor'
import GradientBackground from './components/GradientBackground'
import Nav from './components/Nav'
import Particles from './components/Particles'
import ScrollProgress from './components/ScrollProgress'
import SideEmail from './components/SideEmail'
import Hero from './sections/Hero'
import About from './sections/About'
import Stack from './sections/Stack'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <GradientBackground />
      <Cursor />
      <Nav />
      <Particles />
      <ScrollProgress />
      <SideEmail />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
