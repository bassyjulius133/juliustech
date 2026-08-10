import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import EnrollmentProvider from "./context/EnrollmentContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EnrollmentProvider>
      <App />
    </EnrollmentProvider>
  </StrictMode>
);
