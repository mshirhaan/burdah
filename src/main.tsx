import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./slideInAnimation.css";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";
import { ReciterProvider } from "./contexts/ReciterContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <ReciterProvider>
          <App />
        </ReciterProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
