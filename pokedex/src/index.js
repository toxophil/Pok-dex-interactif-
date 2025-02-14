import React from "react";
import ReactDOM from "react-dom/client"; // ⚠️ Import correct pour React 18+
import App from "./App";
import "./index.css"; // Vérifie que ce fichier existe bien dans `src/`

// Sélectionne l'élément avec l'ID "root"
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rend l'application
root.render(<App />);
