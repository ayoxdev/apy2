
import React, { useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {Mail, Check, AlertCircle, Send} from 'lucide-react'

const Newsletter = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !consent) {
      setStatus('error')
      setMessage('Veuillez remplir tous les champs et accepter les conditions.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setMessage('Veuillez entrer une adresse email valide.')
      return
    }

    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setMessage('Merci ! Vous êtes maintenant abonné(e) à notre newsletter.')
      setEmail('')
      setConsent(false)
    }, 2000)
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-raspberry/10 via-mango/5 to-kiwi/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-raspberry/10 text-raspberry px-4 py-2 rounded-full text-sm  mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Mail size={16} />
            Newsletter
          </motion.div>
          
          <h2 className="text-5xl  text-raspberry mb-6">
            Restez connecté
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soyez les premiers informés de nos nouveautés, événements et 
            initiatives pour un monde plus durable. Promis, on ne spam pas ! 🌱
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email input */}
            <div className="relative">
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-raspberry focus:outline-none transition-colors"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <motion.div
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                animate={email ? { scale: 1.2, color: '#E53E3E' } : { scale: 1 }}
              >
                <Mail size={20} />
              </motion.div>
            </div>

            {/* Consent checkbox */}
            <motion.div 
              className="flex items-start gap-3"
              whileHover={{ x: 2 }}
            >
              <motion.input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 w-5 h-5 text-raspberry border-2 border-gray-300 rounded focus:ring-raspberry focus:ring-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
              <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                J'accepte de recevoir la newsletter d'apy et confirme avoir lu la{' '}
                <a href="PolitiqueConfidentialite" className="text-raspberry  hover:underline">
                  politique de confidentialité
                </a>. 
                Vous pouvez vous désabonner à tout moment.
              </label>
            </motion.div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-4 rounded-2xl  text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                status === 'loading'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : status === 'success'
                  ? 'bg-kiwi text-white'
                  : 'bg-raspberry text-white hover:bg-raspberry/90 shadow-lg hover:shadow-xl'
              }`}
              whileHover={status !== 'loading' ? { scale: 1.02, y: -2 } : {}}
              whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
            >
              {status === 'loading' && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Send size={20} />
                </motion.div>
              )}
              {status === 'success' && <Check size={20} />}
              {status !== 'loading' && status !== 'success' && <Send size={20} />}
              
              {status === 'loading' && "Inscription en cours..."}
              {status === 'success' && "Inscrit avec succès !"}
              {status !== 'loading' && status !== 'success' && "S'abonner à la newsletter"}
            </motion.button>

            {/* Status message */}
            <AnimatePresence>
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`flex items-center gap-2 p-4 rounded-xl ${
                    status === 'success' 
                      ? 'bg-kiwi/10 text-kiwi border border-kiwi/20' 
                      : 'bg-red-50 text-red-600 border border-red-200'
                  }`}
                >
                  {status === 'success' ? <Check size={20} /> : <AlertCircle size={20} />}
                  {message}
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {/* Newsletter preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 pt-8 border-t border-gray-100"
          >
            <h3 className="text-lg  text-gray-800 mb-4 text-center">
              Ce que vous recevrez :
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              {[
                { emoji: "🆕", title: "Nouveautés", desc: "Nos dernières saveurs et produits" },
                { emoji: "🎉", title: "Événements", desc: "Dégustations et rencontres" },
                { emoji: "🌱", title: "Impact", desc: "Nos actions pour l'environnement" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="text-2xl mb-2">{item.emoji}</div>
                  <h4 className=" text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            Rejoignez plus de <span className=" text-raspberry">500 passionnés</span> qui 
            suivent déjà l'aventure apy ! 📧
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter
