
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf } from 'lucide-react'

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const title = "apy, partout tout le temps !"

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-mango/20 via-cream to-kiwi/20">
      {/* Floating fruits background */}
      {/*<div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 rounded-full opacity-20"
            style={{
              background: i % 3 === 0 ? '#E53E3E' : i % 3 === 1 ? '#F6AD55' : '#68D391',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>*/}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl text-raspberry mb-6 leading-tight break-words"
            >
              {title.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className={char === ' ' ? "inline-block w-2" : "inline-block"}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              apy, c'est <span className="text-raspberry">LA</span> boisson sans alcool qui transforme les fruits invendus en saveurs authentiques.
              <span className=" text-transparent text-stroke text-stroke-raspberry"> Fruité, fun & responsable.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#saveurs"
                className="group bg-raspberry text-white px-8 py-4 rounded-full  text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Découvrir les saveurs
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="#mission"
                className="group bg-transparent border-2 border-raspberry text-raspberry px-8 py-4 rounded-full  text-lg hover:bg-raspberry hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Leaf size={20} />
                  Notre mission
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* Can mockup 
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-96">
              {/* Main can 
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-raspberry to-raspberry/80 rounded-t-3xl rounded-b-lg shadow-2xl"
                animate={{
                  y: [-5, 5, -5],
                  rotateY: [-2, 2, -2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Can label 
                <div className="absolute inset-4 bg-white/95 rounded-2xl p-6 flex flex-col justify-center items-center">
                  <h3 className="text-3xl  text-raspberry mb-2">apy</h3>
                  <p className="text-sm text-gray-600 mb-4 text-center">Fraise & Kiwi</p>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-kiwi/20 text-kiwi text-xs px-2 py-1 rounded-full ">Sans alcool</span>
                    <span className="bg-mango/20 text-orange-700 text-xs px-2 py-1 rounded-full ">Fruits sauvés</span>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-raspberry to-kiwi rounded-full opacity-80"></div>
                </div>
              </motion.div>

              {/* Second can (background) 
              <motion.div
                className="absolute -right-8 top-8 w-64 h-80 bg-gradient-to-b from-mango to-mango/80 rounded-t-3xl rounded-b-lg shadow-xl opacity-60"
                animate={{
                  y: [5, -5, 5],
                  rotateY: [2, -2, 2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <div className="absolute inset-4 bg-white/95 rounded-2xl p-4 flex flex-col justify-center items-center">
                  <h3 className="text-2xl  text-mango mb-2">apy</h3>
                  <p className="text-xs text-gray-600 mb-3 text-center">Mangue & Citron</p>
                  <div className="w-12 h-12 bg-gradient-to-br from-mango to-yellow-400 rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>*/}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-raspberry rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-raspberry rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
