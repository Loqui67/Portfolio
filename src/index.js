import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { messages as enMessages } from "./locales/en/messages";
import { messages as frMessages } from "./locales/fr/messages";
import { ThemeProvider } from "@mui/material";
import SkillsPreview from "./Components/Skills/SkillsPreview";
import Layout from "./Components/Layout/Layout";
import CustomTimeline from "./Components/Timeline/CustomTimeline";
import "./styles/index.css";
import { en, fr } from "make-plural/plurals";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactMe from "./Components/Contact/ContactMe";
import AboutMe from "./Components/About/AboutMe";
import Home from "./Components/Home/Home";
import theme from "./styles/theme";
import WtfAmIDoing from "./Components/WtfAmIDoing/WtfAmIDoing";

i18n.load({
  en: enMessages,
  fr: frMessages,
});

i18n.loadLocaleData({
  en: { plurals: en },
  fr: { plurals: fr },
});

i18n.activate(localStorage.getItem("language") || "en");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          language="fr"
        >
          <BrowserRouter>
            <Routes>
              <Route path="shannen" element={<WtfAmIDoing />} />
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="timeline" element={<CustomTimeline />} />
                <Route path="skills" element={<SkillsPreview />} />

                <Route path="contact" element={<ContactMe />} />
                <Route path="about" element={<AboutMe />} />

                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </GoogleReCaptchaProvider>
      </ThemeProvider>
    </I18nProvider>
  </React.StrictMode>
);
