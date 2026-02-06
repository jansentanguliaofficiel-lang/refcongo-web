import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-black py-16 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
                <div className="col-span-2">
                    <div className="text-2xl font-bold text-brand-gold mb-6">RefCongo</div>
                    <p className="text-slate-500 max-w-sm">
                        Siège social : 12ème avenue bis N°10, Commune de la Tshopo,
                        Quartier Lubumbashi, Kisangani, R.D.C.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">Navigation</h4>
                    <ul className="space-y-4 text-slate-500 text-sm">
                        <li><a href="/" className="hover:text-brand-gold">Accueil</a></li>
                        <li><a href="/adhesion" className="hover:text-brand-gold">Adhésion</a></li>
                        <li><a href="/manifeste" className="hover:text-brand-gold">Manifeste</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">Contact</h4>
                    <ul className="space-y-4 text-slate-500 text-sm">
                        <li>Email : contact@refcongo.org</li>
                        <li>Kisangani, R.D.C.</li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-slate-600 text-xs">
                © {new Date().getFullYear()} Refondeur du Congo (RefCongo). Tous droits réservés. ASBL en cours de constitution.
            </div>
        </footer>
    );
}