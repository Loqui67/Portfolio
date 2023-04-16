import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { messages as enMessages } from "./locales/en/messages";
import { messages as frMessages } from "./locales/fr/messages";
import { ThemeProvider, createTheme } from "@mui/material";
import CvPreview from "./Components/CvPreview";
import Layout from "./Components/Layout";
import CustomTimeline from "./Components/CustomTimeline";
import ParticlesBackground from "./Components/ParticlesBackground";
import "./styles/index.css";
import TimelineDetails from "./Components/TimelineDetails";
import { en, fr } from "make-plural/plurals";
import { AppProvider } from "./AppContext";

i18n.load({
  en: enMessages,
  fr: frMessages,
});

i18n.loadLocaleData({
  en: { plurals: en },
  fr: { plurals: fr },
});

i18n.activate(localStorage.getItem("language") || "en");

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#99df",
    },
    navBarBackground: {
      main: "#99df",
    },
    white: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "Fjalla One",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ParticlesBackground />
    <I18nProvider i18n={i18n}>
      <AppProvider locale={i18n._locale}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="home" element={<WelcomePage />} />
                <Route path="timeline" element={<CustomTimeline />}>
                  <Route path=":elementId" element={<TimelineDetails />} />
                </Route>
                <Route path="cv" element={<CvPreview />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
      </AppProvider>
    </I18nProvider>
  </React.StrictMode>
);
