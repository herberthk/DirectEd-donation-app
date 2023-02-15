import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer, Header } from "../components";
import i18next from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Container from "@mui/material/Container";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ar", "fr", "ja"],
    fallbackLng: "en",
    debug: false,
    // Options for language detector
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    react: { useSuspense: false },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

const DonationApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* Application header */}
      <Header />
      <Container
        style={{ marginBottom: "1rem", marginTop: "5rem", minHeight: "79vh" }}
      >
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
};

export default DonationApp;
