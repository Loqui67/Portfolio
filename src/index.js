import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { messages as enMessages } from "./locales/en/messages";
import { messages as frMessages } from "./locales/fr/messages";
import { ThemeProvider, createTheme } from "@mui/material";
import SkillsPreview from "./Components/Skills/SkillsPreview";
import Layout from "./Components/Layout/Layout";
import CustomTimeline from "./Components/Timeline/CustomTimeline";
import ParticlesBackground from "./Components/Layout/ParticlesBackground";
import "./styles/index.css";
import TimelineDetails from "./Components/Timeline/TimelineDetails";
import { en, fr } from "make-plural/plurals";
import ContactMe from "./Components/Contact/ContactMe";
import AboutMe from "./Components/About/AboutMe";
import Home from "./Components/Home/Home";

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
      main: "#9370DB",
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
    <I18nProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ParticlesBackground />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="timeline" element={<CustomTimeline />}>
                <Route path=":elementId" element={<TimelineDetails />} />
              </Route>
              <Route path="skills" element={<SkillsPreview />} />

              <Route path="contact" element={<ContactMe />} />
              <Route path="about" element={<AboutMe />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </I18nProvider>
  </React.StrictMode>
);
