import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { GlobalsProvider } from "./api/GlobalsContext";
import EntryPage from "./pages/EntryPage";
import HomePage from "./pages/HomePage";
import IncomePage from "./pages/IncomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalsProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/entry/:id" element={<EntryPage />} />
          <Route path="*" element={<App />} />
        </Routes>
      </GlobalsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
