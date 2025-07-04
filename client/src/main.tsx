import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Fast render without blocking
createRoot(document.getElementById("root")!).render(<App />);