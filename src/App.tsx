import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App: React.FC = () => {
  return (
    <div className='pb-12'>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
