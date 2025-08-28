
import React from 'react'
import { motion, useInView } from 'framer-motion'
import {ArrowRight, Star, Droplets} from 'lucide-react'

const Flavors = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const flavors = [
    {
      name: "Fraise & Kiwi",
      description: "Acidulé, frais, pétillant",
      details: "L'alliance parfaite entre la douceur de la fraise et l'acidité du kiwi. Une explosion de fraîcheur qui réveille tous vos sens.",
      color: "from-raspberry to-kiwi",
      bgColor: "from-raspberry/10 to-kiwi/10",
      badges: ["Sans alcool", "Fruits sauvés", "Local"],
      taste: ["Acidulé", "Rafraîchissant", "Pétillant"]
    },
    {
      name: "Mangue & Citron",
      description: "Solaire, vif, désaltérant",
      details: "La chaleur tropicale de la mangue rencontre la vivacité du citron. Un cocktail de vitamines qui vous transporte sous les tropiques.",
      color: "from-mango to-yellow-400",
      bgColor: "from-mango/10 to-yellow-100",
      badges: ["Sans alcool", "Fruits sauvés", "Local"],
      taste: ["Tropical", "Énergisant", "Vitaminé"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl  text-raspberry mb-6 text-transparent text-stroke-2 text-stroke-raspberry">
            Nos saveurs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Deux créations uniques, nées de fruits locaux sauvés du gaspillage. 
            Chaque gorgée raconte une histoire de saveur et de responsabilité.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.name}
              variants={cardVariants}
              className="group relative"
            >
              <motion.div
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${flavor.bgColor} border border-white shadow-lg hover:shadow-2xl transition-all duration-500`}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000
                }}
              >
                {/* Product mockup */}
                <div className="relative mb-6">
                  <motion.div
                    className={`w-32 h-40 mx-auto bg-gradient-to-b ${flavor.color} rounded-t-2xl rounded-b-lg shadow-xl relative overflow-hidden`}
                    whileHover={{ y: -10, rotateZ: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div className="absolute inset-2 bg-white/95 rounded-xl p-3 flex flex-col items-center justify-center">
                      <h4 className="text-lg  text-gray-800 mb-1">apy</h4>
                      <p className="text-xs text-gray-600 text-center leading-tight">{flavor.name}</p>
                      <div className={`w-8 h-8 bg-gradient-to-br ${flavor.color} rounded-full mt-2`}></div>
                    </div>
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                      initial={{ x: -100 }}
                      whileHover={{ x: 200 }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-3xl  text-gray-800 mb-2">
                    {flavor.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    {flavor.description}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {flavor.details}
                  </p>

                  {/* Taste notes */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {flavor.taste.map((note, noteIndex) => (
                      <motion.span
                        key={note}
                        className="flex items-center gap-1 bg-white/80 text-gray-700 text-sm px-3 py-1 rounded-full font-medium"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + noteIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Star size={12} className="text-mango" />
                        {note}
                      </motion.span>
                    ))}
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {flavor.badges.map((badge, badgeIndex) => (
                      <motion.span
                        key={badge}
                        className={`text-xs px-3 py-1 rounded-full ${
                          badge === 'Sans alcool' ? 'bg-kiwi/20 text-kiwi' :
                          badge === 'Fruits sauvés' ? 'bg-mango/20 text-orange-700' :
                          'bg-raspberry/20 text-raspberry'
                        }`}
                        whileHover={{ 
                          scale: 1.1,
                          y: -2
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400,
                          delay: badgeIndex * 0.1
                        }}
                      >
                        {badge === 'Fruits sauvés' && <Droplets size={10} className="inline mr-1" />}
                        {badge}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    className="group/btn bg-raspberry text-white px-6 py-3 rounded-full  hover:bg-raspberry/90 transition-all duration-300 flex items-center gap-2 mx-auto"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Voir plus
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Flavors
