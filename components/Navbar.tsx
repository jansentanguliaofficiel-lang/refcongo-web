"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Accueil", href: "/" },
        { name: "Adhésion", href: "/adhesion" },
        { name: "Manifeste", href: "/manifeste" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed w-full z-50 bg-brand-dark/90 backdrop-blur-lg border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-brand-gold tracking-tighter hover:opacity-80 transition-opacity">
                    RefCongo
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-brand-gold transition-colors uppercase tracking-widest text-[11px]">
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/postuler" className="bg-brand-gold text-brand-dark px-6 py-2 rounded-full font-bold hover:bg-yellow-600 transition-all shadow-lg shadow-brand-gold/10">
                        Postuler
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-brand-dark border-b border-white/10 p-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg text-slate-300 hover:text-brand-gold border-b border-white/5 pb-2"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/postuler"
                        onClick={() => setIsOpen(false)}
                        className="bg-brand-gold text-brand-dark px-6 py-4 rounded-lg font-bold text-center"
                    >
                        Postuler au Cercle
                    </Link>
                </div>
            )}
        </nav>
    );
}