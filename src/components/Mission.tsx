
import React from 'react'
import { motion, useInView } from 'framer-motion'
import {Recycle, Heart, Leaf, TrendingUp} from 'lucide-react'

const Mission = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    {
      icon: Recycle,
      number: "2,500kg",
      label: "Fruits sauvés",
      color: "text-kiwi"
    },
    {
      icon: Heart,
      number: "15+",
      label: "Producteurs locaux",
      color: "text-raspberry"
    },
    {
      icon: Leaf,
      number: "100%",
      label: "Sans alcool",
      color: "text-kiwi"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Impact positif",
      color: "text-mango"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-kiwi/10 via-cream to-mango/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-raspberry/10 text-raspberry px-4 py-2 rounded-full text-sm  mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Recycle size={16} />
              Notre mission
            </motion.div>

            <h2 className="text-5xl text-gray-800 mb-6 leading-tight">
              Transformer le gaspillage en 
              <span className="text-transparent text-stroke-2 text-stroke-raspberry"> délice</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nous sauvons des fruits locaux invendus pour créer une boisson sans alcool, 
              savoureuse et responsable. Chaque canette d'apy, c'est un geste pour la planète 
              et un plaisir pour vos papilles.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "🍓 Fruits locaux récupérés chez nos producteurs partenaires",
                "🌱 Transformation respectueuse sans additifs artificiels", 
                "♻️ Réduction du gaspillage alimentaire de 95%",
                "💚 Impact positif sur l'économie locale"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <div className="w-2 h-2 bg-raspberry rounded-full"></div>
                  {item}
                </motion.div>
              ))}
            </div>

            <motion.button
              className="bg-raspberry text-white px-8 py-4 rounded-full  text-lg hover:bg-raspberry/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Découvrir notre impact
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-lg mb-4 ${stat.color}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon size={28} />
                </motion.div>
                
                <motion.h3
                  className="text-3xl  text-gray-800 mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.number}
                </motion.h3>
                
                <p className="text-gray-600 ">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Impact visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 bg-white rounded-3xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl  text-gray-800 mb-4">
              L'impact d'apy en chiffres
            </h3>
            <p className="text-gray-600">
              Ensemble, créons un avenir plus durable, une gorgée à la fois
            </p>
          </div>

          <div className="flex justify-center items-center space-x-8">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-4xl mb-2">🍎</div>
              <div className="text-2xl  text-raspberry">2.5T</div>
              <div className="text-sm text-gray-600">Fruits sauvés</div>
            </motion.div>

            <motion.div
              className="flex items-center"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-3xl">➡️</div>
            </motion.div>

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-4xl mb-2">🥤</div>
              <div className="text-2xl  text-mango">10K+</div>
              <div className="text-sm text-gray-600">Canettes produites</div>
            </motion.div>

            <motion.div
              className="flex items-center"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <div className="text-3xl">➡️</div>
            </motion.div>

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-4xl mb-2">🌍</div>
              <div className="text-2xl  text-kiwi">95%</div>
              <div className="text-sm text-gray-600">Moins de gaspillage</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Mission
