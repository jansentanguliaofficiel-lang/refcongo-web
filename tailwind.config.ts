import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: "#0A192F",
                    gold: "#C5A059",
                    emerald: "#10B981",
                },
            },
        },
    },
    plugins: [],
};
export default config;