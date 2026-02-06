import React from 'react';
import { MapPin, Mail, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
    return (
        <main className="pt-32 pb-20 px-6 min-h-screen bg-brand-dark">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez le <span className="text-brand-gold">Secrétariat</span></h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Une question sur l'adhésion ou un projet de partenariat ? Notre équipe est à votre disposition pour vous accompagner dans votre démarche de refondation.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* INFORMATIONS DE CONTACT */}
                    <div className="space-y-12">
                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded-lg text-brand-gold flex-shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl mb-2">Siège Social</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    12ème avenue bis N°10, Commune de la Tshopo,<br />
                                    Quartier Lubumbashi, Kisangani,<br />
                                    République Démocratique du Congo.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded-lg text-brand-gold flex-shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl mb-2">Communication Digitale</h3>
                                <p className="text-slate-400">contact@refcongo.org</p>
                                <p className="text-brand-gold text-sm mt-1 italic">Réponse sous 48h ouvrées.</p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded-lg text-brand-gold flex-shrink-0">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl mb-2">Horaires d'Accueil</h3>
                                <p className="text-slate-400">Lundi — Vendredi : 08h30 - 16h30</p>
                                <p className="text-slate-400">Samedi : Sur rendez-vous uniquement</p>
                            </div>
                        </div>
                    </div>

                    {/* FORMULAIRE DE CONTACT RAPIDE */}
                    <div className="bg-white/[0.02] border border-white/10 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <MessageSquare className="text-brand-gold" size={20} />
                            Message Rapide
                        </h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Prénom" className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 focus:border-brand-gold outline-none text-sm" />
                                <input type="text" placeholder="Nom" className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 focus:border-brand-gold outline-none text-sm" />
                            </div>
                            <input type="email" placeholder="Email" className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 focus:border-brand-gold outline-none text-sm" />
                            <textarea rows={4} placeholder="Votre message..." className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 focus:border-brand-gold outline-none text-sm"></textarea>
                            <button className="w-full bg-brand-gold text-brand-dark font-bold py-3 rounded-lg hover:bg-yellow-600 transition-all">
                                Envoyer le message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}