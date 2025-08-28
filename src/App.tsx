
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Flavors from './components/Flavors'
import Mission from './components/Mission'
import Process from './components/Process'
import Team from './components/Team'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Navbar />
      <main>
        <section id="accueil">
          <Hero />
        </section>
        <section id="saveurs">
          <Flavors />
        </section>
        <section id="mission">
          <Mission />
        </section>
        <section id="processus">
          <Process />
        </section>
        <section id="equipe">
          <Team />
        </section>
        <section id="newsletter">
          <Newsletter />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
