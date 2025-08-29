
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  isLoading: boolean
  onComplete?: () => void
}

const Loader: React.FC<LoaderProps> = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            setTimeout(() => onComplete?.(), 500)
            return 100
          }
          return prev + Math.random() * 15 + 5
        })
      }, 200)

      return () => clearInterval(interval)
    }
  }, [isLoading, onComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-orange-50 via-cream to-peach-50"
        >
          {/* Particules flottantes en arrière-plan */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-orange-300/20 rounded-full"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0
                }}
                animate={{ 
                  y: [null, -100],
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Container principal du loader */}
          <div className="relative flex flex-col items-center">
            {/* Logo apy avec effet liquide */}
            <div className="relative mb-8">
              {/* Blob liquide animé */}
              <motion.div
                className="absolute inset-0 -m-4"
                initial={{ scale: 0.8 }}
                animate={{ 
                  scale: [0.8, 1.1, 0.9, 1.05, 0.95, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg width="120" height="120" viewBox="0 0 120 120" className="absolute inset-0">
                  <motion.path
                    d="M60,10 C85,10 110,35 110,60 C110,85 85,110 60,110 C35,110 10,85 10,60 C10,35 35,10 60,10 Z"
                    fill="url(#liquidGradient)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 0.8, 1],
                      opacity: [0, 0.3, 0.2, 0.3],
                      d: [
                        "M60,10 C85,10 110,35 110,60 C110,85 85,110 60,110 C35,110 10,85 10,60 C10,35 35,10 60,10 Z",
                        "M60,5 C90,15 115,40 105,65 C95,90 70,105 45,95 C20,85 5,60 15,35 C25,10 50,5 60,5 Z",
                        "M60,8 C88,12 112,38 108,66 C104,94 78,118 50,114 C22,110 -2,84 2,56 C6,28 32,4 60,8 Z",
                        "M60,10 C85,10 110,35 110,60 C110,85 85,110 60,110 C35,110 10,85 10,60 C10,35 35,10 60,10 Z"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <defs>
                    <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FB923C" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#F97316" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#EA580C" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Logo apy principal */}
              <motion.div
                className="relative z-10 w-16 h-16 flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 1.2, 
                  ease: "easeOut",
                  type: "spring",
                  damping: 15
                }}
              >
                <motion.span 
                  className="text-4xl text-raspberry"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    textShadow: [
                      "0 0 0px rgba(251, 146, 60, 0)",
                      "0 0 20px rgba(251, 146, 60, 0.5)",
                      "0 0 0px rgba(251, 146, 60, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  apy
                </motion.span>
              </motion.div>

              {/* Gouttes qui tombent */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-3 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"
                    style={{ left: `${(i - 1) * 8}px` }}
                    initial={{ y: -10, opacity: 0, scaleY: 0 }}
                    animate={{ 
                      y: [0, 20, 40],
                      opacity: [0, 1, 0],
                      scaleY: [0, 1, 0.3]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeIn"
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Barre de progression liquide */}
            <div className="w-64 h-2 bg-orange-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full relative"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Effet de brillance sur la barre */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>

            {/* Texte de chargement */}
            <motion.p 
              className="mt-6 text-orange-600 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Préparation de votre expérience apy...
              </motion.span>
            </motion.p>

            {/* Pourcentage */}
            <motion.div
              className="mt-2 text-sm text-orange-500 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {Math.round(progress)}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
