import React from 'react';

export default function Manifeste() {
    return (
        <main className="pt-32 pb-20 px-6 min-h-screen bg-brand-dark">
            <div className="max-w-4xl mx-auto">
                {/* En-tête de style éditorial */}
                <header className="border-b border-brand-gold/20 pb-12 mb-16">
                    <div className="text-brand-gold font-mono text-sm mb-4 tracking-[0.3em] uppercase">
                        Document de Vision Officiel
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Refonder par l'Excellence <br />
                        <span className="text-brand-gold font-serif italic">Technologique</span>.
                    </h1>
                    <p className="text-slate-400 text-lg italic">
                        "Le futur de la R.D.C. ne se négociera pas, il se construira par l'ingénierie et l'innovation."
                    </p>
                </header>

                {/* Corps du manifeste */}
                <div className="space-y-12 text-slate-300 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">L'Observation</h2>
                        <p>
                            Les entreprises de la Province de la Tshopo et plus largement de la R.D.C. opèrent trop souvent dans un isolement qui bride leur croissance. Le manque de synergie, l'accès limité aux compétences de pointe et le déficit de visibilité transforment nos talents locaux en acteurs invisibles sur l'échiquier mondial.
                        </p>
                    </section>

                    <section className="bg-white/[0.03] p-8 border-l-4 border-brand-gold rounded-r-xl">
                        <h2 className="text-2xl font-bold text-white mb-4">Notre Mission</h2>
                        <p>
                            Fédérer les experts les plus pointus pour accélérer l'innovation. RefCongo n'est pas une simple association, c'est un <strong>accélérateur de souveraineté numérique</strong>. Nous croyons qu'en connectant les leaders de Kisangani, nous créons un pôle d'excellence capable d'irradier sur tout le territoire national.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Les Piliers de la Refondation</h2>
                        <div className="grid md:grid-cols-2 gap-8 mt-6">
                            <div className="border border-white/5 p-6 rounded-lg">
                                <h3 className="text-brand-gold font-bold mb-2">Excellence Sélective</h3>
                                <p className="text-sm">Nous ne visons pas le nombre, mais l'impact. Chaque membre est un maillon fort d'une chaîne de compétences rares.</p>
                            </div>
                            <div className="border border-white/5 p-6 rounded-lg">
                                <h3 className="text-brand-gold font-bold mb-2">Cocréation Souveraine</h3>
                                <p className="text-sm">Développer des solutions locales aux problèmes locaux, sans attendre les transferts de technologie extérieurs.</p>
                            </div>
                        </div>
                    </section>

                    <section className="text-center pt-16">
                        <p className="text-2xl text-white font-serif mb-8">
                            "Ensemble, Refondons le Congo à la préférence d’un bon citoyen."
                        </p>
                        <div className="h-px w-24 bg-brand-gold mx-auto mb-8"></div>
                        <p className="text-sm uppercase tracking-widest text-slate-500">
                            Kisangani, Tshopo, R.D.C.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}