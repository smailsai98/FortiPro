'use client'
import { useState } from "react";
import { Poppins } from "next/font/google";
import { Dumbbell, Leaf, Zap, Shield, FlaskConical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Values from "./components/Values/Values";
import ImageLogo from "./components/Image/ImageLogo";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

const Badge = ({ text, icon: Icon = Dumbbell, color = "bg-purple-50" }) => (
  <span className={`flex items-center w-fit px-3 py-1 text-sm font-semibold rounded-full ${color}`}>
    <Icon className='w-4 mr-2 text-purple-600' />
    <p className="text-purple-800 font-bold">{text}</p>
  </span>
);

export default function Home() {
  const products = [
    {
      title: "FortiPro Classic",
      comingSoon: false,
      description: "Notre formule originale, riche en protéines de haute qualité pour soutenir votre quotidien actif.",
      cards: [
        {title: "22 de protéines", content: "Chaque portion vous apporte 22g de protéines complètes pour la récupération musculaire."},
        {title: "Faible en sucre", content: "Seulement 2g de sucre par portion, idéal pour une alimentation équilibrée."},
        {title: "Digestion facile", content: "Formulé pour une absorption optimale sans inconfort digestif."}
      ]
    },
    {
      title: "FortiPro Energy",
      comingSoon: true,
      description: "Boostez votre énergie avec notre formule enrichie en vitamines B et caféine naturelle.",
      cards: [
        {title: "Caféine naturelle", content: "80mg de caféine issue du thé vert pour un boost d'énergie durable."},
        {title: "Vitamines B", content: "Complexe de vitamines B pour réduire la fatigue."},
        {title: "Sans crash", content: "Énergie progressive sans pic ni chute brutale."}
      ]
    },
    {
      title: "FortiPro Recovery",
      comingSoon: true,
      description: "Optimisez votre récupération après l'effort avec notre formule enrichie en BCAA.",
      cards: [
        {title: "BCAA 2:1:1", content: "Ratio optimal d'acides aminés pour la récupération musculaire."},
        {title: "Électrolytes", content: "Réhydratation efficace après l'entraînement."},
        {title: "Anti-inflammatoire", content: "Curcuma et gingembre pour réduire les courbatures."}
      ]
    }
  ];
  
  const [activeProduct, setActiveProduct] = useState(0);
  const partnerships = ["Devenir Distributeur", "Professionnels de Santé"];
  const [activePartnership, setActivePartnership] = useState(0);

  const PartnerCard = ({ title, badge, features }) => (
    <div className="flex flex-col bg-white rounded-xl w-full py-6 px-4 sm:px-6 shadow-xl">
      <Badge text={badge} icon={Leaf} color="bg-purple-50" />
      <h2 className="mt-4 text-xl sm:text-2xl font-bold text-gray-800">{title}</h2>
      {features.map((feature, i) => (
        <div className="mt-5 md:mt-6" key={i}>
          <p className={`text-base font-medium text-gray-800 ${poppins.className}`}>{feature.title}</p>
          <p className={`text-gray-600 mt-1.5 text-sm ${poppins.className}`}>{feature.desc}</p>
        </div>
      ))}
      <div className="mt-6">
        <button className={`${poppins.className} text-white rounded-full text-sm font-bold bg-purple-700 py-2.5 px-5 hover:bg-purple-600 transition-colors`}>
          En savoir plus
        </button>
      </div>
    </div>
  );

  const ShowPartnerCard = () => {
    const partnerData = [
      {
        title: "Devenir Distributeur",
        badge: "Opportunité",
        features: [
          { title: "Marges attractives", desc: "Profitez de marges compétitives sur toute la gamme FortiPro." },
          { title: "Support marketing", desc: "Accédez à nos ressources marketing et formations produits." },
          { title: "Livraison directe", desc: "Bénéficiez de notre réseau logistique pour vos clients." }
        ]
      },
      {
        title: "Professionnels de Santé",
        badge: "Nutrition",
        features: [
          { title: "Documentation scientifique", desc: "Accédez aux études cliniques et fiches techniques." },
          { title: "Recommandation patients", desc: "Programme de recommandation pour vos patients." },
          { title: "Formation continue", desc: "Webinaires nutrition et nouveautés produits." }
        ]
      }
    ];

    if (activePartnership === 1) {
      return (
        <div className="w-full sm:w-1/2 mx-auto flex justify-center">
          <PartnerCard {...partnerData[1]} />
        </div>
      );
    }

    return (
      <div className="w-full max-w-sm mx-auto">
        <PartnerCard {...partnerData[activePartnership]} />
      </div>
    );
  };

  return (
    <div className={`flex flex-col ${poppins.className}`}>
      {/* Hero Section */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center pt-8 md:pt-12">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
              La nutrition protéinée
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-700 mt-2">
              simple et efficace
            </h1>
            <p className="mt-4 text-gray-600 text-sm md:text-base max-w-md">
              Ajoutez de l&#39;eau, secouez, savourez. FortiPro vous apporte tous les nutriments essentiels en quelques secondes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link href="/Ride">
                <button className="text-white rounded-full text-sm font-semibold bg-purple-700 py-3 px-6 hover:bg-purple-600 transition-colors">
                  Commander maintenant
                </button>
              </Link>
              <button className="text-purple-700 rounded-full text-sm font-semibold border-2 border-purple-700 py-3 px-6 hover:bg-purple-50 transition-colors">
                Découvrir la gamme
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <Image width={800} height={400} src="/assets/phone.png" alt="FortiPro Bottle" className="w-full max-w-[459px] sm:max-w-[320px] md:max-w-[450px] h-auto rounded-xl shadow-xl" />
          </div>
        </div>
      </div>

      {/* Benefits Bar */}
      <div className="w-full bg-purple-700 mt-12 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-white text-sm">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>Prêt en 10 secondes</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Qualité certifiée</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5" />
              <span>Ingrédients naturels</span>
            </div>
            <div className="flex items-center gap-2">
              <FlaskConical className="w-5 h-5" />
              <span>Testé en laboratoire</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="w-full bg-purple-50 py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
              Tous vos <span className="text-purple-700">nutriments</span> dans une <span className="text-purple-800">bouteille</span>
            </h2>
          </div>

          {/* Product Tabs */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex flex-wrap items-center justify-center gap-2">
              {products.map((product, i) => {
                const isComingSoon = product.comingSoon;
                return (
                  <button
                    key={i}
                    disabled={isComingSoon}
                    className={`relative px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all whitespace-nowrap
                      ${isComingSoon 
                        ? "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed" 
                        : activeProduct === i 
                          ? "bg-purple-700 text-white" 
                          : "bg-white text-purple-700 border border-purple-300 hover:bg-purple-100"
                      }`}
                    onClick={() => !isComingSoon && setActiveProduct(i)}
                  >
                    {product.title}
                    {isComingSoon && (
                      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                        Bientôt
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mt-10 md:mt-12 gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-800">
                {products[activeProduct].title}
              </h3>
              <p className="font-semibold mt-3 text-sm md:text-base text-center lg:text-left max-w-md text-gray-600">
                {products[activeProduct].description}
              </p>
              <div className="flex flex-col mt-6 w-full max-w-md space-y-3">
                {products[activeProduct].cards.map((card, i) => (
                  <div className="bg-white p-4 md:p-5 rounded-xl shadow-md" key={i}>
                    <p className="text-sm md:text-base font-bold text-gray-800">{card.title}</p>
                    <p className="text-gray-500 mt-1.5 text-sm">{card.content}</p>
                  </div>
                ))}
              </div>
              <Link href="/Ride">
                <button className="mt-6 px-5 py-2.5 border bg-purple-700 text-white rounded-full text-sm font-semibold hover:bg-purple-600 transition-all">
                  Commander ce produit
                </button>
              </Link>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <Image width={350} height={350} src="/assets/aaaaaa.png" alt="FortiPro Product" className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[600px] h-auto" />
            </div>
          </div>
        </div>
      </div>

      <Values />

      {/* Partnerships Section */}
      <div className="w-full bg-purple-50 py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
              Devenez <span className="text-purple-700">partenaire</span>
            </p>
          </div>
          <p className="text-center text-gray-600 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Rejoignez le réseau FortiPro et participez à la révolution de la nutrition sportive.
          </p>
      
        </div>
      </div>

      <ImageLogo />

      {/* CTA Section */}
      <div className="bg-gray-900 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Prêt à transformer votre nutrition ?
          </h2>
          <p className="text-gray-300 font-medium text-sm md:text-base mt-3 max-w-lg">
            Commandez votre premier pack FortiPro et découvrez la différence d&#39;une nutrition optimisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link href="/Ride">
              <button className="text-white rounded-full text-sm md:text-base font-bold bg-purple-700 py-2.5 px-6 hover:bg-purple-600 transition-colors">
                Commander maintenant
              </button>
            </Link>
            <button className="text-white rounded-full text-sm md:text-base font-bold border-2 border-white py-2.5 px-6 hover:bg-white hover:text-gray-900 transition-colors">
              Voir les avis clients
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}