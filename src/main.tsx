import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { loadConfig } from "./config.ts"; // <-- ADD THIS FILE FIRST

async function init() {
  try {
    await loadConfig(); // <-- waits for /config.json
    console.log("Config loaded");
  } catch (e) {
    console.error("Failed to load config.json, using fallback", e);
  }

  // Dynamic import so App only loads AFTER config
  const { default: App } = await import("./App.tsx");

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

init();
