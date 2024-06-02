import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Toaster } from "../client/components/ui/sonner";
import { ThemeProvider } from "../client/components/theme-provider";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <App />
      <Toaster richColors closeButton />
    </ThemeProvider>
  </React.StrictMode>
);
