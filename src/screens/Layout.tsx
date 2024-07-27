import { ReactElement, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import HeroBanner from "./HeroBanner";
import CounterContainer from "./CounterContainer";
import Features from "./Features";
import OurStore from "./OurStore";
import MapStores from "./MapStores";
import Download from "./Download";
import Winners from "./Winners";
import FanzFantasy from "./FanzFantasy";
import Partners from "./Partners";
import FAQs from "./FAQs";
import Footer from "../components/Footer";
import OurApp from "./OurApp";
import Screenshots from "./ScreenShots";

function Layout() {
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("language") || "en");
  }, [i18n]);

  return (
    <div
      dir={i18n.language === "en" ? "ltr" : "rtl"}
      className="bg-darkBackground"
    >
      <Navbar />
      <HeroBanner />
      <CounterContainer />
      <Features />
      <Screenshots />
      <OurStore />
      <MapStores />
      <OurApp />
      <Download />
      <Winners />
      <FanzFantasy />
      <Partners />
      <FAQs />
      <Footer />
    </div>
  );
}
export default Layout;
