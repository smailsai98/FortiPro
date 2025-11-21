import { Building2, TrendingUp, PackageCheck, HeadsetIcon } from 'lucide-react';
import { Poppins } from 'next/font/google';
import React from 'react';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

function ImageLogo() {
  return (
    <div className="w-full py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Image Section */}
          <div className="w-full lg:w-2/5 relative overflow-hidden rounded-2xl shadow-xl h-[400px] sm:h-[500px] lg:h-auto lg:min-h-[550px]">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
              alt="Gym with FortiPro products"
              className="w-full h-full object-cover absolute inset-0"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent" />
            
            {/* Logo overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className={`text-white text-2xl sm:text-3xl font-bold ${poppins.className}`}>
                FortiPro
              </p>
              <p className={`text-purple-200 text-sm mt-1 ${poppins.className}`}>
                Nutrition professionnelle
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-3/5 bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col">
            <Badge text="B2B | GROSSISTES | DISTRIBUTION" />

            <div className="mt-6 md:mt-8">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white ${poppins.className}`}>
                FortiPro pour les professionnels
              </h2>
              <p className={`text-gray-400 mt-3 text-sm md:text-base ${poppins.className}`}>
                Proposez FortiPro à vos clients et augmentez vos revenus avec notre programme partenaire.
              </p>
            </div>

            <div className="mt-6 md:mt-8 space-y-5 md:space-y-6">
              <Feature 
                icon={TrendingUp}
                title="Marges attractives"
                description=" Plus vous commandez, plus vous économisez."
              />
              <Feature 
                icon={PackageCheck}
                title="Stock et livraison"
                description="Livraison rapide en 48h. Minimum de commande flexible adapté à votre activité."
              />
              <Feature 
                icon={HeadsetIcon}
                title="Support dédié"
                description="Un account manager dédié et des supports marketing personnalisés pour votre enseigne."
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className={`${poppins.className} text-white rounded-full text-sm font-bold bg-purple-700 py-2.5 px-6 hover:bg-purple-600 transition-colors`}>
                Devenir revendeur
              </button>
                <a 
                  href="https://drive.google.com/file/d/1b9vMmlG3LboblQuZjFp2GtBUf0AyIy5x/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button className={`${poppins.className} text-white rounded-full text-sm font-bold border border-gray-500 py-2.5 px-6 hover:bg-gray-700 transition-colors`}>
                    Télécharger la fiche Technique
                  </button>
                </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Feature = ({ icon: Icon, title, description }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-700/20 flex items-center justify-center">
      <Icon className="w-5 h-5 text-purple-500" />
    </div>
    <div>
      <p className={`text-base md:text-lg text-white font-semibold ${poppins.className}`}>
        {title}
      </p>
      <p className={`text-gray-400 mt-1 text-sm ${poppins.className}`}>
        {description}
      </p>
    </div>
  </div>
);

const Badge = ({ text }) => (
  <span className={`inline-flex items-center w-fit px-4 py-2 text-xs font-bold text-purple-400 bg-green-900/30 rounded-full ${poppins.className}`}>
    <Building2 className="w-4 h-4 mr-2" />
    {text}
  </span>
);

export default ImageLogo;