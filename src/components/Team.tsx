
import React from 'react'
import { motion, useInView } from 'framer-motion'
import {Linkedin, Mail} from 'lucide-react'

const Team = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const team = [
    {
      name: "Sophie",
      role: "Co-fondatrice & CEO",
      description: "Passionnée d'innovation durable",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      email: "sophie@apy.be"
    },
    {
      name: "Thomas",
      role: "Co-fondateur & CTO",
      description: "Expert en transformation alimentaire",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      email: "thomas@apy.be"
    },
    {
      name: "Emma",
      role: "Responsable Production",
      description: "Garante de la qualité apy",
      image: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      email: "emma@apy.be"
    },
    {
      name: "Lucas",
      role: "Responsable Partenariats",
      description: "Créateur de liens avec les producteurs",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      email: "lucas@apy.be"
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section ref={ref} className="py-20 bg-gradient-to-br from-mango/5 via-cream to-raspberry/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl  text-transparent text-stroke-2 text-stroke-raspberry mb-6">
            L'équipe
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rencontrez les artisans passionnés qui donnent vie à apy. 
            Une équipe unie par la même vision : transformer le gaspillage en délice.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="group relative"
            >
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 text-center relative overflow-hidden"
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-raspberry/5 via-mango/5 to-kiwi/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                {/* Photo */}
                <div className="relative mb-6">
                  <motion.div
                    className="relative mx-auto"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div className="w-24 h-24 mx-auto relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full shadow-lg"
                        loading="lazy"
                      />
                      {/* Colored ring on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-4 border-transparent"
                        whileHover={{
                          borderColor: index % 3 === 0 ? '#E53E3E' : index % 3 === 1 ? '#F6AD55' : '#68D391',
                          scale: 1.1
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl  text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  
                  <motion.div
                    initial={{ opacity: 1, height: 'auto' }}
                    whileHover={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-raspberry mb-2">
                      {member.role}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 mb-4 text-sm">
                      {member.description}
                    </p>
                    
                    {/* Social links */}
                    <div className="flex justify-center gap-3">
                      <motion.a
                        href={member.linkedin}
                        className="p-2 bg-raspberry/10 text-raspberry rounded-full hover:bg-raspberry hover:text-white transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin size={16} />
                      </motion.a>
                      <motion.a
                        href={`mailto:${member.email}`}
                        className="p-2 bg-mango/10 text-orange-700 rounded-full hover:bg-mango hover:text-white transition-colors"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Mail size={16} />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-raspberry/20 rounded-full"
                  animate={{
                    y: [-5, 5, -5],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-2 h-2 bg-mango/20 rounded-full"
                  animate={{
                    x: [-3, 3, -3],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-3xl  text-gray-800 mb-6">
              Nos valeurs communes
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { emoji: "🌱", title: "Durabilité", desc: "Respect de l'environnement dans chaque décision" },
                { emoji: "🤝", title: "Collaboration", desc: "Partenariats locaux et équitables" },
                { emoji: "💡", title: "Innovation", desc: "Solutions créatives pour un avenir meilleur" }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="text-4xl mb-3">{value.emoji}</div>
                  <h4 className="text-xl  text-gray-800 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
