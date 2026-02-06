import "./globals.css";
import Navbar from "@/components/Navbar"; // L'alias @ pointe vers la racine
import Footer from "@/components/Footer"

export const metadata = {
    title: {
        default: "RefCongo | Refondation du Congo par l'Excellence",
        template: "%s | RefCongo"
    },
    description: "Cercle d'élite technologique et d'ingénierie à Kisangani. Rejoignez les 15 membres fondateurs pour bâtir l'avenir de la Tshopo.",
    openGraph: {
        title: 'RefCongo',
        description: 'Bâtir la souveraineté technologique de la R.D.C.',
        url: 'https://refcongo.org',
        siteName: 'RefCongo',
        locale: 'fr_CD',
        type: 'website',
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
        <body className="bg-[#0A192F] text-white antialiased">
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}