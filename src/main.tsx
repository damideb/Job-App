import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ContextProvider } from "./Context/context.tsx";
import { ErrorProvider } from "./Context/errorContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ErrorProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ErrorProvider>
);
