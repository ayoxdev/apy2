
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Flavors from './components/Flavors'
import Mission from './components/Mission'
import Process from './components/Process'
import Team from './components/Team'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 200) // 3 secondes minimum

    return () => clearTimeout(timer)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      <Loader isLoading={isLoading} onComplete={handleLoadingComplete} />
      
      <motion.div 
        className="min-h-screen bg-cream overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>
    </>
  )
}

export default App
