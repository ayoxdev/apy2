import React from 'react'
import { motion } from 'framer-motion'
import { Truck, Zap, Package } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      icon: Truck,
      title: "Collecte des invendus",
      description: "Récupération des fruits locaux non vendus chez nos producteurs partenaires en Belgique",
      details: "Chaque semaine, nous parcourons la région pour sauver des tonnes de fruits parfaitement comestibles mais écartés des circuits traditionnels.",
      color: "text-raspberry",
      bgColor: "bg-raspberry/10"
    },
    {
      icon: Zap,
      title: "Transformation sans alcool",
      description: "Processus de fermentation contrôlée et filtration pour créer nos boissons uniques",
      details: "Notre atelier belge transforme ces fruits avec respect, sans additifs artificiels, pour préserver toutes les saveurs naturelles.",
      color: "text-mango",
      bgColor: "bg-mango/10"
    },
    {
      icon: Package,
      title: "Mise en canette",
      description: "Conditionnement local et livraison dans un rayon de 50km pour minimiser l'empreinte carbone",
      details: "Nos canettes sont produites localement avec des matériaux recyclables, prêtes à être dégustées par nos clients responsables.",
      color: "text-kiwi",
      bgColor: "bg-kiwi/10"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-transparent text-stroke-2 text-stroke-raspberry mb-4 sm:mb-6">
            Le processus
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            De la collecte à votre verre : découvrez comment nous transformons
            le gaspillage en délice, étape par étape.
          </p>
        </motion.div>

        <div className="relative">
          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3, duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } gap-8 md:gap-0`}
                >
                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${index % 2 === 0
                        ? 'text-left md:text-right md:pr-8'
                        : 'text-left md:pl-8'
                      }`}
                  >
                    <motion.div
                      className={`inline-flex items-center gap-2 ${step.bgColor} ${step.color} px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm mb-3 sm:mb-4`}
                    >
                      <Icon size={14} className="sm:w-4 sm:h-4" />
                      Étape {index + 1}
                    </motion.div>

                    <h3 className="text-2xl sm:text-3xl text-gray-800 mb-3 sm:mb-4">
                      {step.title}
                    </h3>

                    <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  {/* Center icon (hidden on mobile) */}
                  <div className="hidden md:flex relative z-10 items-center justify-center my-6 md:my-0">
                    <motion.div
                      className={`w-16 h-16 sm:w-20 sm:h-20 ${step.bgColor} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}
                      animate={{ scale: 1, rotate: 0 }}
                    >
                      <Icon size={24} className={`${step.color} sm:w-8 sm:h-8`} />
                    </motion.div>
                  </div>

                  {/* Illustration */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div
                      className={`w-full h-48 sm:h-64 ${step.bgColor} rounded-2xl flex items-center justify-center relative overflow-hidden`}
                    >
                      {/* Animated background pattern */}
                      <div className="absolute inset-0">
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-3 h-3 sm:w-4 sm:h-4 ${step.color.replace(
                              'text-',
                              'bg-'
                            )}/20 rounded-full`}
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              y: [-10, 10, -10],
                              x: [-5, 5, -5],
                              opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                              duration: 3 + i * 0.5,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                          />
                        ))}
                      </div>

                      {/* Main illustration */}
                      <div className="relative z-10">
                        <Icon size={60} className={`${step.color} opacity-60 sm:w-20 sm:h-20`} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-raspberry/10 via-mango/10 to-kiwi/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
        >
          <h3 className="text-2xl sm:text-3xl text-gray-800 mb-3 sm:mb-4">
            Du déchet au délice en 72h
          </h3>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Notre processus optimisé garantit fraîcheur et qualité,
            tout en maintenant notre engagement environnemental.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
