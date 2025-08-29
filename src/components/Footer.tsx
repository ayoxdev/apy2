
import React from 'react'
import { motion } from 'framer-motion'
import {Heart, Mail, MapPin, Phone} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-4xl  text-raspberry">apy</h3>
              <span className="text-sm text-gray-400">Fruité, fun & sans alcool</span>
            </motion.div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Nous transformons les fruits locaux invendus en boissons délicieuses 
              et responsables. Chaque gorgée contribue à un avenir plus durable.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Heart size={16} className="text-raspberry" />
              Fabriqué avec amour en Belgique
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg  mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <motion.a
                href="mailto:hello@apy.be"
                className="flex items-center gap-2 hover:text-raspberry transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail size={16} />
                hello@apy.be
              </motion.a>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                <Phone size={16} />
                +32 2 123 45 67
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                <MapPin size={16} />
                Nivelles, Belgique
              </motion.div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg  mb-4">Liens utiles</h4>
            <div className="space-y-3 text-sm">
              {[
                'À propos',
                'Nos saveurs',
                'Points de vente',
                'Presse',
                'Carrières'
              ].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="block text-gray-300 hover:text-raspberry transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} apy — Fruité, fun & sans alcool. Tous droits réservés.
            </div>
            
            <div className="flex gap-6 text-sm">
              {[
                'Mentions légales',
                'Politique de confidentialité',
                'Conditions générales',
                'RGPD'
              ].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-raspberry transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
