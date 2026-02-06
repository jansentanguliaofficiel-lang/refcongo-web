import Link from 'next/link';
import { Home, ChevronLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 bg-brand-dark">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-white/5 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 select-none">
                    404
                </h1>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-gold mb-4">
                        Direction Introuvable
                    </h2>
                    <p className="text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
                        Le chemin que vous tentez d'emprunter ne figure pas encore sur la carte de la Refondation.
                        Retournons vers la base pour continuer la construction.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-yellow-600 transition-all group"
                    >
                        <Home size={18} />
                        Retour à l'Accueil
                    </Link>
                </div>
            </div>
        </main>
    );
}