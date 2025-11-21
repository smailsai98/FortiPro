import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Poppins } from 'next/font/google'
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, HelpCircle } from 'lucide-react'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

function Footer() {
  return (
    <footer className={`bg-gray-900 text-white py-10 md:py-14 ${poppins.className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand & Contact */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="text-2xl font-bold text-white">Forti<span className="text-purple-400">Pro</span></span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              La nutrition protéinée simple et efficace pour tous.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="mailto:contact@fortipro.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                contact@fortipro.com
              </a>
              <a href="tel:+213555123456" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +213 560 70 12
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Cite Yaichi, Ouled Yaich, Blida
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base font-semibold mb-4">Nos Produits</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products/classic" className="text-gray-400 hover:text-white transition-colors">FortiPro Classic</Link></li>
              <li><Link href="/products/energy" className="text-gray-400 hover:text-white transition-colors">FortiPro Energy</Link></li>
              <li><Link href="/products/recovery" className="text-gray-400 hover:text-white transition-colors">FortiPro Recovery</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Tous les produits</Link></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-base font-semibold mb-4">Partenaires</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/partners/distributor" className="text-gray-400 hover:text-white transition-colors">Devenir Distributeur</Link></li>
              <li><Link href="/partners/gym" className="text-gray-400 hover:text-white transition-colors">Salles de Sport</Link></li>
              <li><Link href="/partners/health" className="text-gray-400 hover:text-white transition-colors">Professionnels de Santé</Link></li>
              <li><Link href="/b2b" className="text-gray-400 hover:text-white transition-colors">B2B / Grossistes</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog Nutrition</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2025 FortiPro. Tous droits réservés.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Confidentialité</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">CGV</Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookies</Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Help Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2.5 rounded-full flex items-center gap-2 font-medium shadow-lg transition-colors text-sm">
          <HelpCircle className="w-5 h-5" />
          Aide
        </button>
      </div>
    </footer>
  )
}

export default Footer