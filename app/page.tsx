import React from 'react';

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen">
            {/* SECTION HERO */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="inline-block border border-brand-gold/30 bg-brand-gold/10 text-brand-gold px-4 py-1 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
                        Pôle d'Innovation - Kisangani
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                        L'excellence technologique pour <span className="text-brand-gold">refonder</span> le Congo.
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
                        RefCongo est le cercle privé des leaders de l’innovation et de l’ingénierie.
                        Rejoignez une communauté sélective dédiée à bâtir l’avenir technologique de la R.D.C.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-brand-gold text-brand-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-all">
                            Devenir Membre Fondateur
                        </button>
                        <button className="border border-white/20 hover:bg-white/5 px-8 py-4 rounded-lg font-bold text-lg transition-all">
                            Lire le Manifeste
                        </button>
                    </div>
                </div>
            </section>

            {/* SECTION CHIFFRES */}
            <section className="py-20 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    <div>
                        <div className="text-4xl font-bold text-brand-gold mb-2">15</div>
                        <div className="text-sm text-slate-500 uppercase tracking-widest">Places Fondateurs</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-white mb-2">30%</div>
                        <div className="text-sm text-slate-500 uppercase tracking-widest">Offre Lancement</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-white mb-2">100%</div>
                        <div className="text-sm text-slate-500 uppercase tracking-widest">Sélectif</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-white mb-2">Tech</div>
                        <div className="text-sm text-slate-500 uppercase tracking-widest">Focus Expertise</div>
                    </div>
                </div>
            </section>
        </main>
    );
}