'use client';

import Image from 'next/image';

export default function Nutriflan() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-[#f5f0e8] via-[#edf4ea] to-[#d6ebd0] font-sans text-[#2b2b2b] pb-20">

            {/* ── HERO ── */}
            <section className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto min-h-[540px] px-6 lg:px-8 py-10 lg:py-20 gap-8 lg:gap-12 items-center lg:items-stretch">

                {/* LEFT — tall main image */}
                <div className="w-full max-w-[340px] lg:flex-none flex flex-col">
                    <div className="relative aspect-[3/4] lg:flex-1 rounded-[100px_100px_80px_80px] overflow-hidden bg-[#c9d9c4] shadow-xl">
                        <Image
                            src="/assets/flan.png"
                            alt="Pots de flan Nutriflan"
                            fill
                            className="object-cover object-[35%_center]"
                            priority
                        />
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex-1 flex flex-col gap-6 lg:justify-between text-center lg:text-left items-center lg:items-start">
                    {/* Sugar Free badge */}
                    <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#3a7d44] to-[#2a5c32] text-white rounded-full px-5 py-2 font-bold shadow-lg">
                        <span className="text-xl">🌿</span>
                        <div className="flex gap-1.5 text-base">
                            <span className="font-extrabold">Sans Sucre</span>
                            <span className="font-normal opacity-90"> · خال من السكر</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-base md:text-lg leading-relaxed text-gray-800 max-w-xl text-justify lg:text-left">
                        Découvrez <strong>Nutriflan</strong> de FNC Nutrition — un dessert flan
                        riche en protéines, sain et savoureux, riche en vitamines et édulcoré
                        naturellement à la stévia. Chaque portion de 50 g offre
                        <strong> 15,5 g de protéines</strong> et un spectre complet de 10 vitamines
                        essentielles, ce qui en fait le plaisir parfait et sans culpabilité pour
                        toute la famille.
                    </p>

                    {/* Bottom row: secondary image + headline + CTA */}
                    <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 items-center sm:items-end w-full">

                        <div className="relative w-[200px] aspect-[1/1.4] rounded-[70px_70px_50px_50px] overflow-hidden bg-[#c9d9c4] shadow-lg flex-none hidden sm:block">
                            <Image
                                src="/assets/flan.png"
                                alt="Flan Nutriflan servi"
                                fill
                                className="object-cover object-[75%_center]"
                            />
                        </div>

                        <div className="flex-1 flex flex-col gap-6 items-center lg:items-start lg:pb-2.5">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2a5c32] uppercase leading-[1.1] tracking-tight font-serif">
                                FLAN<br className="hidden lg:block" />
                                PROTÉINÉ<br className="hidden lg:block" />
                                SAIN &amp;<br className="hidden lg:block" />
                                SAVOUREUX
                            </h1>
                            <button className="px-10 py-4 bg-gradient-to-r from-[#3a7d44] to-[#2a5c32] text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 uppercase tracking-wider">
                                Découvrir
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── KEY HIGHLIGHTS (Glassmorphic) ── */}
            <section className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 max-w-6xl mx-auto px-6 mb-16 lg:mb-24">
                {[
                    { icon: '💪', value: '31G', label: 'Protéines / 100g' },
                    { icon: '🌿', value: 'Stévia', label: 'Édulcoré Naturellement' },
                    { icon: '🍽️', value: '10', label: 'Portions' },
                    { icon: '⚖️', value: '500g', label: 'Poids Net' },
                    { icon: '🧬', value: '10+', label: 'Vitamines' },
                ].map(({ icon, value, label }, i) => (
                    <div key={label} className={`relative flex flex-col items-center gap-2 p-6 rounded-3xl shadow-sm border border-white/60 bg-white/40 backdrop-blur-md transition-all hover:translate-y--1 hover:shadow-md ${i === 4 ? 'col-span-2 lg:col-span-1' : ''}`}>
                        <span className="text-3xl lg:text-4xl drop-shadow-sm">{icon}</span>
                        <span className="text-xl lg:text-2xl font-black text-[#2a5c32]">{value}</span>
                        <span className="text-xs lg:text-sm text-gray-600 text-center font-semibold leading-tight">{label}</span>
                    </div>
                ))}
            </section>

            {/* ── INGREDIENTS + DIRECTIONS (Glassmorphic) ── */}
            <section className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto px-6 mb-16 lg:mb-24">
                <div className="relative p-8 lg:p-10 rounded-3xl shadow-sm border border-white/60 bg-white/40 backdrop-blur-md">
                    <h2 className="text-xl lg:text-2xl font-black text-[#2a5c32] mb-4 uppercase tracking-wide font-serif">Ingrédients</h2>
                    <p className="text-base lg:text-lg text-gray-800 font-medium leading-relaxed">
                        Protéines de Lait, Stévia, Arôme Vanille, Mélange de Vitamines, Acésulfame K.
                    </p>
                </div>

                <div className="relative p-8 lg:p-10 rounded-3xl shadow-sm border border-white/60 bg-white/40 backdrop-blur-md">
                    <h2 className="text-xl lg:text-2xl font-black text-[#2a5c32] mb-4 uppercase tracking-wide font-serif">Mode d'emploi</h2>
                    <ol className="list-decimal list-inside space-y-3 text-base lg:text-lg text-gray-800 font-medium leading-relaxed">
                        <li className="pl-2">Ajouter 50 g (1 dose) à 300 ml d'eau.</li>
                        <li className="pl-2">Chauffer en remuant continuellement jusqu'à ébullition.</li>
                        <li className="pl-2">Retirer du feu et verser immédiatement dans des ramequins.</li>
                        <li className="pl-2">Laisser refroidir et figer avant consommation.</li>
                    </ol>
                </div>
            </section>

            {/* ── NUTRITION TABLE (Glassmorphic) ── */}
            <section className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl lg:text-4xl font-black text-[#2a5c32] mb-2 font-serif uppercase tracking-tight">Valeurs Nutritionnelles</h2>
                <p className="text-sm lg:text-base text-gray-500 font-bold mb-8 uppercase tracking-widest">Taille d'une portion : 50 g &nbsp;|&nbsp; Portions par contenant : 10</p>

                <div className="relative overflow-hidden rounded-3xl shadow-md border border-white/60 bg-white/40 backdrop-blur-md mb-12">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#3a7d44]/90 text-white backdrop-blur-sm">
                                    <th className="p-4 lg:p-6 text-sm lg:text-base font-black uppercase tracking-wider">Nutriment</th>
                                    <th className="p-4 lg:p-6 text-sm lg:text-base font-black uppercase tracking-wider text-center">Pour 100 g</th>
                                    <th className="p-4 lg:p-6 text-sm lg:text-base font-black uppercase tracking-wider text-center">Par portion (50 g)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/20">
                                {[
                                    ['Énergie', '296 kcal / 1238 kJ', '148 kcal / 619 kJ'],
                                    ['Protéines', '31 g', '15.5 g'],
                                    ['Glucides (dont lactose)', '43 g', '21.5 g'],
                                    ['Lipides', '< 0.1 g', '< 0.1 g'],
                                    ['dont acides gras saturés', '< 0.1 g', '< 0.1 g'],
                                    ['Sel', '< 0.1 g', '< 0.1 g'],
                                    ['Lécithine', '> 0.5 g', '> 0.25 g'],
                                ].map(([name, per100, perServing]) => (
                                    <tr key={name} className="hover:bg-white/30 transition-colors">
                                        <td className="p-4 lg:p-6 text-sm lg:text-base font-bold text-gray-800">{name}</td>
                                        <td className="p-4 lg:p-6 text-sm lg:text-base text-gray-700 text-center font-medium">{per100}</td>
                                        <td className="p-4 lg:p-6 text-sm lg:text-base text-[#2a5c32] text-center font-bold">{perServing}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Vitamins */}
                <h3 className="text-2xl lg:text-3xl font-black text-[#2a5c32] mb-6 font-serif uppercase tracking-tight">Vitamines &amp; Minéraux (pour 100 g)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                        ['Vitamine A', '737 μg'],
                        ['Vitamine D', '7.7 μg'],
                        ['Vitamine E', '10 mg'],
                        ['Vitamine B1 (Thiamine)', '80 μg'],
                        ['Vitamine B2 (Riboflavine)', '1.4 mg'],
                        ['Vitamine B3 (Niacinamide)', '16 mg'],
                        ['Vitamine B5 (Acide pantothénique)', '6 mg'],
                        ['Vitamine B6', '1.4 mg'],
                        ['Biotine (B8/B7)', '50 μg'],
                        ['Acide folique (B9)', '200 μg'],
                        ['Vitamine B12', '2.5 μg'],
                        ['Calcium', '97 mg'],
                    ].map(([name, val]) => (
                        <div key={name} className="relative flex justify-between items-center p-4 rounded-2xl shadow-sm border border-white/60 bg-white/40 backdrop-blur-sm transition-all hover:bg-white/60">
                            <span className="text-sm lg:text-base font-bold text-gray-800">{name}</span>
                            <span className="text-sm lg:text-base font-black text-[#2a5c32]">{val}</span>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}
