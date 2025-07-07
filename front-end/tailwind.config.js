/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  plugins: [require("flowbite/plugin")],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js", flowbite.content()],
  darkMode: "class",
  theme: {
    colors: {
      preto: "#010409", //Header darkmode
      "preto-claro": "#0D1117", // Fundo darkmode
      "preto-azul": "#161B22", // Cards darkmode
      azul: "#2F81F7",
      "azul-escuro": "#1a2e47",
      "branco-claro": "#F6F8FA", // Header lightmode
      "branco-medio": "#E6EDF3", // Fundo lightmode
      "branco-escuro": "#D8DEE4", // Cards lightmode
      cinza: "#D9D9D9",
      "cinza-escuro": "#374151",
      "preto-trans": "rgba(1, 4, 9, 0.8)", // Fundo modal
      ...colors,
    },
    extend: {},
  },

  plugins: [require("@tailwindcss/forms"), flowbite.plugin()],
};
