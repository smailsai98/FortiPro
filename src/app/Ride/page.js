"use client";

import { useState } from 'react';
import { User, MapPin, Mail, Building, Phone, ShoppingCart, Heart, Truck, X, CheckCircle } from 'lucide-react';

const flavours = [
  { id: 'Biscuit', name: 'Biscuit', color: 'from-amber-400 to-brown-300' },
  { id: 'Chocolat', name: 'Chocolat', color: 'from-amber-700 to-amber-500' },
  { id: 'Fraise', name: 'Fraise', color: 'from-pink-500 to-red-400' },
  { id: 'Banane', name: 'Banane', color: 'from-yellow-500 to-yellow-400' },
  { id: 'Melange', name: 'Mélange', color: 'from-white-500 to-white' }
];

const wilayas = [
  "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar",
  "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger",
  "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma",
  "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh",
  "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued",
  "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent",
  "Ghardaïa", "Relizane"
];

export default function FortiProSales() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    adresse: '',
    wilaya: '',
    email: '',
    telephone: '',
    saveurs: {
      Biscuit: 0,
      Chocolat: 0,
      Fraise: 0,
      Banane: 0,
      Melange: 0
    }
  });

  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFlavourQuantityChange = (flavourId, change) => {
    setFormData(prev => ({
      ...prev,
      saveurs: {
        ...prev.saveurs,
        [flavourId]: Math.max(0, prev.saveurs[flavourId] + change)
      }
    }));
  };

  const getTotalCartons = () => {
    return Object.values(formData.saveurs).reduce((sum, qty) => sum + qty, 0);
  };

  const handleSubmit = () => {
    const totalCartons = getTotalCartons();

    if (!formData.nom || !formData.prenom || !formData.adresse || !formData.wilaya || !formData.telephone) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (totalCartons === 0) {
      alert('Veuillez sélectionner au moins un carton');
      return;
    }

    setShowModal(true);
  };

  const generateOrderId = () => {
    return 'FP' + Date.now().toString().slice(-8);
  };

  const sendEmail = async () => {
    setIsSending(true);
    
    const orderId = generateOrderId();
    
    // Build order items list
    const orderItems = flavours
      .filter(f => formData.saveurs[f.id] > 0)
      .map(f => `FortiPro ${f.name}: ${formData.saveurs[f.id]} carton${formData.saveurs[f.id] > 1 ? 's' : ''}`)
      .join('\n');

    // EmailJS template parameters
    const templateParams = {
      order_id: orderId,
      customer_name: `${formData.prenom} ${formData.nom}`,
      customer_email: formData.email || 'Non fourni',
      customer_phone: formData.telephone,
      customer_address: `${formData.adresse}, ${formData.wilaya}`,
      order_items: orderItems,
      total_cartons: getTotalCartons(),
      order_date: new Date().toLocaleDateString('fr-DZ', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    };

    try {
      // Replace these with your actual EmailJS credentials
      const SERVICE_ID = 'service_2zpnwqh';
      const TEMPLATE_ID = 'template_hr46ndl';
      const PUBLIC_KEY = '0SAtNKzxBwLv5Wwwl';

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: templateParams
        })
      });

      if (response.ok) {
        setShowModal(false);
        setShowConfirmation(true);

        // Reset form after 3 seconds
        setTimeout(() => {
          setShowConfirmation(false);
          setFormData({
            nom: '',
            prenom: '',
            adresse: '',
            wilaya: '',
            email: '',
            telephone: '',
            saveurs: {
              Biscuit: 0,
              Chocolat: 0,
              Fraise: 0,
              Banane: 0,
              Melange: 0
            }
          });
        }, 3000);
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('Email error:', error);
      alert('Erreur lors de l\'envoi de l\'email. Veuillez réessayer.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden px-4 sm:px-6 lg:px-12">
      {/* Animated Grid Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-6 w-28 h-28 border border-purple-400/20 rounded-full animate-spin-slow" />
        <div className="absolute top-40 right-6 w-20 h-20 border border-purple-300/20 rotate-45 animate-pulse" />
        <div className="absolute bottom-40 left-6 w-16 h-16 bg-purple-500/10 rounded-full animate-bounce" />
        <div className="absolute bottom-20 right-12 w-20 h-20 border border-purple-400/20 rotate-12 animate-pulse" />
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 mt-8 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Heart className="w-10 h-10 text-purple-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-ping" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">FortiPro</h1>
            <p className="text-purple-300 text-sm">Nutrition Médicale Algérienne</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center py-8 max-w-7xl mx-auto w-full space-y-12 lg:space-y-0 lg:space-x-8">
        {/* Left Column - Product Info & Form */}
        <div className="lg:flex-1 space-y-6 w-full">
          {/* Product Header */}
          <div className="space-y-3 px-2 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              FortiPro{' '}
              <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                Nutrition Complète
              </span>
            </h2>
            <p className="text-lg text-white/80 max-w-md">
              Une formule nutritionnelle complète et équilibrée, disponible en cinq délicieuses saveurs pour répondre à vos besoins quotidiens.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-3 px-2 sm:px-0">
            {['Haute teneur en protéines', 'Enrichi en vitamines', 'Facile à digérer'].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span className="text-sm text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Order Form */}
          <div className="space-y-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 px-2 sm:px-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-purple-400" />
              Passer une commande
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nom */}
              <div className="space-y-2">
                <label className="text-white font-medium text-sm">Nom *</label>
                <div className="relative group">
  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10 group-focus-within:text-purple-400 transition-colors" />                  <input
                    type="text"
                    name="nom"
                    placeholder="Votre nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:bg-white/10 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Prénom */}
              <div className="space-y-2">
                <label className="text-white font-medium text-sm">Prénom *</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10 group-focus-within:text-purple-400 transition-colors" />
                  <input
                    type="text"
                    name="prenom"
                    placeholder="Votre prénom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:bg-white/10 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Adresse */}
            <div className="space-y-2">
              <label className="text-white font-medium text-sm">Adresse *</label>
              <div className="relative group">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type="text"
                  name="adresse"
                  placeholder="Votre adresse complète"
                  value={formData.adresse}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:bg-white/10 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Wilaya */}
              <div className="space-y-2">
                <label className="text-white font-medium text-sm">Wilaya *</label>
                <div className="relative group">
                  <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10 group-focus-within:text-purple-400 transition-colors pointer-events-none" />
                  <select
                    name="wilaya"
                    value={formData.wilaya}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white focus:bg-white/10 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-slate-800">Sélectionnez votre wilaya</option>
                    {wilayas.map((wilaya, index) => (
                      <option key={index} value={wilaya} className="bg-slate-800">{wilaya}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Téléphone */}
              <div className="space-y-2">
                <label className="text-white font-medium text-sm">Téléphone *</label>
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10 group-focus-within:text-purple-400 transition-colors" />
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="0X XX XX XX XX"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:bg-white/10 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-white font-medium text-sm">Email *</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:bg-white/10 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
                />
              </div>
              <p className="text-sm text-purple-300">* Requis pour recevoir la confirmation de commande</p>
            </div>

            {/* Saveurs Selection */}
            <div className="space-y-3">
              <label className="text-white font-medium text-sm">Sélectionnez vos saveurs *</label>
              <div className="space-y-3">
                {flavours.map((flavour) => (
                  <div
                    key={flavour.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="flex items-center space-x-3 mb-3 sm:mb-0">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${flavour.color}`} />
                      <span className="text-white font-medium">{flavour.name}</span>
                    </div>
                    <div className="flex items-center space-x-3 justify-center">
                      <button
                        type="button"
                        onClick={() => handleFlavourQuantityChange(flavour.id, -1)}
                        className="w-10 h-10 bg-purple-600/20 border border-purple-400/50 rounded-lg text-white font-bold hover:bg-purple-600/40 transition-all active:scale-95"
                        aria-label={`Réduire la quantité de ${flavour.name}`}
                      >
                        -
                      </button>
                      <span className="text-xl font-bold text-white w-12 text-center tabular-nums">
                        {formData.saveurs[flavour.id]}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleFlavourQuantityChange(flavour.id, 1)}
                        className="w-10 h-10 bg-purple-600/20 border border-purple-400/50 rounded-lg text-white font-bold hover:bg-purple-600/40 transition-all active:scale-95"
                        aria-label={`Augmenter la quantité de ${flavour.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Display */}
              <div className="bg-purple-600/20 border border-purple-400/50 rounded-xl p-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Total de cartons:</span>
                  <span className="text-2xl font-bold text-purple-300">{getTotalCartons()}</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="relative w-full h-14 bg-gradient-to-r from-purple-600 to-purple-500 hover:shadow-2xl hover:shadow-purple-500/25 text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-400/50 overflow-hidden group mt-4"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Voir le résumé de la commande
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Right Column - Product Image */}
        <div className="lg:flex-1 relative w-full max-w-xl lg:max-w-full">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 group">
            <img
              src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="FortiPro Nutrition"
              className="w-full h-64 sm:h-80 lg:h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent" />

            {/* Image Overlay Content */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white font-medium">Livraison disponible partout en Algérie</span>
                  </div>
                  <Truck className="w-5 h-5 text-purple-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-br from-purple-500/20 to-purple-300/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-gradient-to-br from-purple-600/20 to-purple-400/20 rounded-full blur-2xl animate-pulse" />
        </div>
      </main>

      {/* Bottom Stats */}
      <footer className="relative z-10 p-6 max-w-7xl mx-auto px-2 sm:px-6">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2 group cursor-pointer">
              <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">300</div>
              <div className="text-sm text-purple-300">Kcal/bouteille</div>
            </div>
            <div className="space-y-2 group cursor-pointer">
              <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">20g</div>
              <div className="text-sm text-purple-300">Protéines</div>
            </div>
            <div className="space-y-2 group cursor-pointer">
              <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-sm text-purple-300">Vitamines</div>
            </div>
            <div className="space-y-2 group cursor-pointer">
              <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">200ml</div>
              <div className="text-sm text-purple-300">Format</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Order Summary Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-gradient-to-br from-slate-800 to-purple-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-purple-400/30 shadow-2xl animate-slideUp">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Résumé de la commande</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Fermer le résumé de la commande"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Customer Info */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-purple-300 mb-4">Informations client</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
                  <div>
                    <p className="text-sm text-white/60">Nom complet</p>
                    <p className="font-medium">{formData.prenom} {formData.nom}</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Téléphone</p>
                    <p className="font-medium">{formData.telephone}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-sm text-white/60">Adresse</p>
                    <p className="font-medium">{formData.adresse}, {formData.wilaya}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-sm text-white/60">Email</p>
                    <p className="font-medium">{formData.email}</p>
                  </div>
                </div>
              </div>

              {/* Order Details */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-purple-300 mb-4">Détails de la commande</h3>
                <div className="space-y-3">
                  {flavours.map((flavour) => {
                    const qty = formData.saveurs[flavour.id];
                    if (qty === 0) return null;
                    return (
                      <div key={flavour.id} className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${flavour.color}`} />
                          <span className="text-white font-medium">FortiPro {flavour.name}</span>
                        </div>
                        <span className="text-white font-bold">{qty} carton{qty > 1 ? 's' : ''}</span>
                      </div>
                    );
                  })}

                  <div className="border-t border-white/20 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-semibold text-white">Total</span>
                      <span className="text-2xl font-bold text-purple-300">{getTotalCartons()} carton{getTotalCartons() > 1 ? 's' : ''}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirmation Button */}
              <button
                onClick={sendEmail}
                disabled={isSending}
                className="w-full h-14 bg-gradient-to-r from-green-600 to-green-500 hover:shadow-2xl hover:shadow-green-500/25 text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Confirmer la commande
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Pop-up */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-3xl p-8 sm:p-12 max-w-md w-full border border-green-400/30 shadow-2xl animate-scaleIn text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                <CheckCircle className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Commande confirmée !</h2>
            <p className="text-white/90 text-lg mb-2">
              Un email de confirmation a été envoyé à votre adresse.
            </p>
            <p className="text-white/80 text-base">
              Nous vous contacterons bientôt pour finaliser votre commande.
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  );
}