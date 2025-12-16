import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import jar from "../../../../public/assets/jar.png"
export default function ProductCard() {
  const [isLiked, setIsLiked] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-200 flex items-center justify-center p-8">
      <div className="w-full max-w-sm">
        {/* Product Card */}
        <div className="bg-gradient-to-b from-blue-900/90 via-blue-600/80 to-sky-100/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl relative overflow-hidden">
          {/* Logo and Badge */}
          <div className="flex justify-between items-start mb-4">
            <div className="text-white/60 text-xs font-medium tracking-wider">
              FNC.COM
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-white text-xs font-bold">NEW</span>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative mb-6 transform hover:scale-105 transition-transform duration-300">
            <img 
              src="https://i.postimg.cc/Pq32dn13/jar.png"
              alt="FNC Mass Gainer"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* Brand Logo */}
          <div className="mb-4">
            <div className="text-white text-sm font-bold tracking-wide">
              ⚡ FNC
            </div>
          </div>

          {/* Product Title */}
          <div className="mb-8">
            <h2 className="text-white text-4xl font-black tracking-tight leading-none">
              GIVE<br />SPORT
            </h2>
          </div>

          {/* Gradient Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none rounded-3xl"></div>
        </div>

        {/* Price and Actions Bar */}
        <div className="mt-6 bg-white/95 backdrop-blur-xl rounded-full px-6 py-4 shadow-xl flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-800">$275.00</div>
            <div className="text-xs text-gray-400">Out of stock</div>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isLiked 
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/50' 
                  : 'bg-blue-100 text-blue-400 hover:bg-blue-200'
              }`}
            >
              <Heart 
                className="w-5 h-5" 
                fill={isLiked ? 'currentColor' : 'none'}
              />
            </button>
            
            <button
              onClick={() => setIsInCart(!isInCart)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isInCart 
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/50' 
                  : 'bg-blue-100 text-blue-400 hover:bg-blue-200'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progressive Blur Text Section */}
        <div className="mt-12 relative">
          <h3 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
            Progressive blur
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            Progressive blur is a key trend in modern UI design. It creates a smooth transition from sharp to blurred content, giving interfaces a modern, organic feel while also guiding user attention and improving readability.
          </p>
          
          {/* Blur overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}