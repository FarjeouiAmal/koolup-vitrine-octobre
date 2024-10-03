/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        'rgba52-23-72-1': 'rgba(52, 23, 72, 1)',
      },
      fontFamily: {
        'Mastery-Kingdom': ['Mastery Kingdom', 'sans-serif'],
        // Ajoutez d'autres polices personnalisées ici si nécessaire
      },
    }
    
  },
  plugins: [],
};
