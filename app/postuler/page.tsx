"use client"; // Nécessaire pour gérer l'état du formulaire

import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Postuler() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Ici, nous ajouterons plus tard la logique d'envoi (API Route)
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <main className="pt-40 pb-20 px-6 min-h-screen flex items-center justify-center">
                <div className="max-w-md w-full bg-white/[0.02] border border-brand-gold/30 p-10 rounded-2xl text-center">
                    <CheckCircle className="text-brand-gold mx-auto mb-6" size={64} />
                    <h2 className="text-2xl font-bold mb-4 text-white">Candidature Reçue</h2>
                    <p className="text-slate-400 mb-8">
                        Votre dossier a été transmis au Secrétariat de RefCongo. Un membre du Conseil d'Administration vous contactera après examen de votre profil.
                    </p>
                    <a href="/" className="text-brand-gold font-bold hover:underline">Retour à l'accueil</a>
                </div>
            </main>
        );
    }

    return (
        <main className="pt-32 pb-20 px-6 min-h-screen bg-brand-dark">
            <div className="max-w-3xl mx-auto">
                <header className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Formulaire d'Adhésion <span className="text-brand-gold">RefCongo</span>
                    </h1>
                    <p className="text-slate-400">
                        Veuillez remplir ce formulaire avec précision. Les informations fournies seront traitées avec la plus grande confidentialité par le Conseil d'Administration.
                    </p>
                </header>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* SECTION 1 : IDENTITÉ */}
                    <div className="bg-white/[0.02] p-8 rounded-xl border border-white/5 space-y-6">
                        <h3 className="text-brand-gold font-bold uppercase tracking-wider text-xs">I. Informations Personnelles</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-slate-300">Nom complet</label>
                                <input required type="text" className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 focus:border-brand-gold outline-none transition-all" placeholder="Ex: Jansen Batuku" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-slate-300">Email Professionnel</label>
                                <input required type="email" className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 focus:border-brand-gold outline-none transition-all" placeholder="votre@email.com" />
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2 : ENTREPRISE / EXPERTISE */}
                    <div className="bg-white/[0.02] p-8 rounded-xl border border-white/5 space-y-6">
                        <h3 className="text-brand-gold font-bold uppercase tracking-wider text-xs">II. Structure & Expertise</h3>
                        <div className="space-y-2">
                            <label className="text-sm text-slate-300">Dénomination de l'Entreprise / Organisation</label>
                            <input required type="text" className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 focus:border-brand-gold outline-none transition-all" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-slate-300">Secteur d'activité</label>
                                <select className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 focus:border-brand-gold outline-none transition-all appearance-none">
                                    <option>Développement Logiciel</option>
                                    <option>Génie Civil / Ingénierie</option>
                                    <option>Télécoms & Réseaux</option>
                                    <option>Énergie & Mines</option>
                                    <option>Autre expertise technique</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-slate-300">Niveau d'Adhésion souhaité</label>
                                <select className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 focus:border-brand-gold outline-none transition-all appearance-none">
                                    <option>Membre Actif (1 200 $ / an)</option>
                                    <option>Membre Premium (3 000 $ / an)</option>
                                    <option>Membre Associé (Partenariat)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 3 : MOTIVATION */}
                    <div className="bg-white/[0.02] p-8 rounded-xl border border-white/5 space-y-6">
                        <h3 className="text-brand-gold font-bold uppercase tracking-wider text-xs">III. Vision & Impact</h3>
                        <div className="space-y-2">
                            <label className="text-sm text-slate-300">Pourquoi souhaitez-vous rejoindre RefCongo ?</label>
                            <textarea required rows={4} className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 focus:border-brand-gold outline-none transition-all" placeholder="Décrivez votre motivation et ce que vous apportez à la communauté..."></textarea>
                        </div>
                    </div>

                    {/* VALIDATION & ENVOI */}
                    <div className="flex flex-col items-center space-y-4">
                        <p className="text-xs text-slate-500 text-center max-w-md">
                            En cliquant sur "Soumettre", vous certifiez l'exactitude des informations fournies et acceptez d'être soumis à l'évaluation du Conseil d'Administration.
                        </p>
                        <button type="submit" className="bg-brand-gold text-brand-dark px-12 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 transition-all flex items-center gap-3">
                            Soumettre la Candidature <Send size={20} />
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}