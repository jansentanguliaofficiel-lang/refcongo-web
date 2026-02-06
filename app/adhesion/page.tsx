import React from 'react';
import { Check } from 'lucide-react'; // Si lucide-react est installé

const tiers = [
    {
        name: "Membre Associé",
        price: "500",
        description: "Pour les partenaires stratégiques et institutions académiques.",
        features: [
            "Accès à l’annuaire des membres",
            "Invitations aux Summits annuels",
            "Visibilité institutionnelle",
            "Offre de services aux membres"
        ],
        highlight: false
    },
    {
        name: "Membre Actif",
        price: "1,200",
        description: "Le cœur de la communauté. Pour les PME et experts en ingénierie.",
        features: [
            "Tous les avantages Associé",
            "Accès plateforme collaborative",
            "Ateliers Mastermind mensuels",
            "Ressources R&D exclusives",
            "Commercialisation collective"
        ],
        highlight: true
    },
    {
        name: "Membre Premium",
        price: "3,000",
        description: "L’élite décisionnelle. Pour les leaders et startups à fort impact.",
        features: [
            "Tous les avantages Actif",
            "Programmes d’accélération",
            "Accès au Conseil d’Administration",
            "Mentorat personnalisé de haut niveau",
            "Mises en relation proactives"
        ],
        highlight: false
    }
];

export default function Adhesion() {
    return (
        <main className="pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Structure d'adhésion <span className="text-brand-gold">RefCongo</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Conformément à l'Article 4 de nos statuts, nous proposons trois niveaux d'engagement pour maximiser la cocréation.
                    </p>
                </header>

                <div className="grid md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-2xl border transition-all duration-300 ${
                                tier.highlight
                                    ? 'border-brand-gold bg-brand-gold/5 scale-105 shadow-[0_0_30px_rgba(197,160,89,0.1)]'
                                    : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                            }`}
                        >
                            <h2 className={`text-2xl font-bold mb-2 ${tier.highlight ? 'text-brand-gold' : 'text-white'}`}>
                                {tier.name}
                            </h2>
                            <div className="flex items-baseline mb-4">
                                <span className="text-4xl font-bold">{tier.price} $</span>
                                <span className="text-slate-500 ml-2">/ an</span>
                            </div>
                            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                                {tier.description}
                            </p>

                            <ul className="space-y-4 mb-10">
                                {tier.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start text-sm text-slate-300">
                                        <Check className="text-brand-gold mr-3 mt-0.5 flex-shrink-0" size={16} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                                tier.highlight
                                    ? 'bg-brand-gold text-brand-dark hover:bg-yellow-600'
                                    : 'border border-white/20 hover:bg-white/10 text-white'
                            }`}>
                                Postuler maintenant
                            </button>
                        </div>
                    ))}
                </div>

                <footer className="mt-20 text-center p-8 border border-white/5 rounded-xl bg-white/[0.01]">
                    <p className="text-slate-500 text-sm">
                        Note : Toute candidature est soumise à l'examen du Conseil d'Administration.
                        Les 15 premiers membres fondateurs bénéficient d'une réduction de 30% la première année.
                    </p>
                </footer>
            </div>
        </main>
    );
}