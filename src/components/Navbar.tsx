import { t } from "i18next";
import { useState } from "react";
import i18n from "src/i18n";
import Button from "../components/Button";
import SideBar from "../components/Sidebar";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState(0);
  const scroll = (div_id: string) => {
    const element = document.getElementById(div_id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const changeLanguage = () => {
    if (i18n.language === "ar") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ar");
    }
  };

  const titles = [
    t("Features"),
    t("The app"),
    t("Partners"),
    t("Store"),
    t("FAQ"),
  ];

  return (
    <div>
      <div className="container flex justify-between mx-auto lg:ml-[45px] lg:mr-auto w-[1215px] lg:w-[900px] rounded-2xl  items-center sm:justify-start sm:bg-white sm:hidden font-DMSansRegular h-[87px] px-5 sticky top-6 z-20 shadow-lg bg-backgroundAppBar backdrop-blur-[10.5px] shrink-0">
        <div className="h-[47px] w-[101.829px]">
          <Link to="/">
            <img src="/assets/images/fanz.png" alt="Fanz Logo" />
          </Link>
        </div>
        <div className="flex gap-7 md:gap-4 text-base md:text-[12px]">
          {titles.map((item, index) => {
            return (
              <div key={index} className="flex">
                <button
                  onClick={() => {
                    setActive(index);
                    scroll(item);
                  }}
                >
                  <p
                    className={`
                      ${
                        index === active
                          ? "text-yellow font-extrabold"
                          : "text-lavenderColor"
                      }`}
                  >
                    {t(item)}
                  </p>
                </button>
              </div>
            );
          })}
          <div className="px-3.5 md:pl-5 pt-1" onClick={changeLanguage}>
            <img
              src="/assets/images/logo-translation.svg"
              alt="Translation Logo"
            />
          </div>
        </div>
        <div>
          <Button
            text={t("Download the App Now")}
            textColor={" text-darkBackground "}
            color={" bg-mangoColor "}
            width={" w-[180px] "}
            height={"h-[40px]"}
            onClick={() => {
              window.scrollTo({
                top: 4600,
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>
      <div className="hidden sm:inline">
        <SideBar />
      </div>
    </div>
  );
}
