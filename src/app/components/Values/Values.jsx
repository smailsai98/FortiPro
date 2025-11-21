import { motion } from 'framer-motion';
import { useState } from 'react';

export default function WhoCanUse() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const users = [
    {
      title: "Patients Hospitalisés",
      description: "Soutien nutritionnel complet pour les patients en milieu hospitalier nécessitant un apport calorique et protéique optimal durant leur séjour."
    },
    {
      title: "Personnes Âgées",
      description: "Aide à prévenir la dénutrition et la perte musculaire chez les seniors, favorisant le maintien de l'autonomie et de la vitalité."
    },
    {
      title: "Patients en Convalescence",
      description: "Accélère la récupération après une chirurgie, une maladie ou un traitement médical en fournissant les nutriments essentiels à la guérison."
    },
    {
      title: "Patients Oncologiques",
      description: "Accompagne les patients atteints de cancer durant leurs traitements, aidant à maintenir le poids et les forces face aux effets secondaires."
    },
    {
      title: "Personnes Dénutries",
      description: "Solution efficace pour les personnes souffrant de malnutrition ou d'un apport alimentaire insuffisant, quelle qu'en soit la cause."
    },
    {
      title: "Troubles de la Déglutition",
      description: "Alternative nutritionnelle liquide et facile à avaler pour les personnes ayant des difficultés à manger des aliments solides."
    }
  ];

  return (
    <div className="flex flex-col w-full justify-center bg-purple-900 p-6 md:p-16 lg:p-24">
      {/* Container for entire content */}
      <div className="flex flex-col lg:flex-row w-full gap-8">
        {/* Left Section - Users */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start" style={{marginTop:"5%"}}>
          <motion.span
            className="text-purple-300 font-semibold text-sm md:text-base tracking-wider uppercase mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            FortiPro - Nutrition Médicale
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white self-start mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            À qui s'adresse FortiPro ?
          </motion.h2>
          
          <motion.p
            className="text-purple-100 text-sm md:text-base mb-6 max-w-md"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Une nutrition complète adaptée à chaque besoin, sur prescription médicale ou conseil d'un professionnel de santé.
          </motion.p>
          
          <div className="space-y-4 w-full">
            {users.map((user, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl px-6 py-6 md:px-8 md:py-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h6 className="font-semibold text-lg md:text-xl mb-2 text-purple-900">{user.title}</h6>
                <p className="text-gray-700 text-xs md:text-sm">{user.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Right Section - Images */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-16">
          {/* Image grid */}
          <div className="grid grid-cols-12 gap-3">
            {/* Main large image - Elderly care */}
            <motion.div 
              className="col-span-12 relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover="hover"
            >
              <motion.img  
                src="https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Soins aux personnes âgées" 
                className="w-full h-full object-cover aspect-video" 
                variants={{ hover: { scale: 1.05 } }} 
                transition={{ duration: 0.3 }} 
              /> 
              <motion.div  
                className="absolute inset-0 bg-purple-700 opacity-10" 
                variants={{ hover: { opacity: 0 } }} 
              /> 
            </motion.div> 
            
            {/* Two smaller images */}
            <motion.div  
              className="col-span-6 overflow-hidden rounded-2xl mt-3"  
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.3 }} 
              whileHover="hover" 
            > 
              <motion.img  
                src="https://images.pexels.com/photos/7446990/pexels-photo-7446990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Patient hospitalisé" 
                className="w-full h-full object-cover aspect-square" 
                variants={{ hover: { scale: 1.05 } }} 
                transition={{ duration: 0.3 }} 
              /> 
            </motion.div> 
            
            <motion.div  
              className="col-span-6 overflow-hidden rounded-2xl mt-3" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.4 }} 
              whileHover="hover" 
            > 
              <motion.img  
                src="https://images.pexels.com/photos/7551618/pexels-photo-7551618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Accompagnement médical" 
                className="w-full h-full object-cover aspect-square"
                variants={{ hover: { scale: 1.05 } }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            {/* Bottom large image */}
            <motion.div 
              className="col-span-12 relative overflow-hidden rounded-2xl mt-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover="hover"
            >
              <motion.img  
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Récupération et convalescence" 
                className="w-full object-cover aspect-video" 
                variants={{ hover: { scale: 1.05 } }} 
                transition={{ duration: 0.3 }} 
              /> 
              <motion.div  
                className="absolute inset-0 bg-purple-700 opacity-20" 
                variants={{ hover: { opacity: 0 } }} 
              /> 
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}