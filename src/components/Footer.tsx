import { t } from "i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const menu = [t("Features"), t("The app"), t("Partners"), t("Store"), t("FAQ")];
  const scroll = (div_id: string) => {
    const element = document.getElementById(div_id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div>
      <footer className="bg-darkBackground shadow-2xl pt-1 mt-16 w-full sm:w-full bottom-0">
        <div className="flex flex-row items-center justify-between sm:items-center sm:flex-col mt-8 sm:mt-0 sm:w-full sm:px-8 md:flex-row sm:space-x-0 sm:mr-6">
          <div className="flex flex-col px-32 lg:px-8 md:px-16 sm:px-10  sm:pl-20 ">
            <div className="flex mt-20 mb-0 md:mt-16 sm:mt-7 ">
              <img
                src="/assets/images/fanz.png"
                className="h-[88px] w-[185px] sm:h-[93.276px] sm:w-[194.502px]"
                alt="fanz footer logo"
              />
            </div>
            <div className="flex flex-row gap-[8px] justify-center">
              <a
                href="https://twitter.com/fanz_app?s=11"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/assets/images/twitter.svg" alt="twitter" />
              </a>
              <div>
                <a
                  href="https://www.facebook.com/people/fanZ-App/100088382296863/?mibextid=D4KYlr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/images/facebook.svg" alt="facebok" />
                </a>
              </div>
              <a
                href="https://www.instagram.com/fanzapp.io/?igshid=MzRlODBiNWFlZA%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/assets/images/instagram.svg" alt="instagram" />
              </a>
            </div>
          </div>
          <div  className="ml-3 sm:pl-1 mt-16 lg:mr-0 lg:ml-0">
            <ul className="flex flex-row md:text-xs mr-0 sm:items-center sm:justify-center sm:w-[300px] gap-3 sm:mr-0 self-start text-base sm:text-xs font-DMSansRegular text-Lavender mr-20 md:mr-5">
              <div>
                <Link to={`/privacy`} onClick={() => scrollToTop()}>
                  <span className="flex-4">{t('Privacy')}</span>
                </Link>
              </div>
              <div>
                <Link to={`/terms-and-conditions`} onClick={() => scrollToTop()}>
                  <span className="flex-4">{t('Terms')}</span>
                </Link>
              </div>
              <div>
                <Link to={`/terms-of-sale`} onClick={() => scrollToTop()}>
                  <span className="flex-4">{t('Terms of Sale')}</span>
                </Link>
              </div>
            </ul>
          </div>
          <div className=" ml-14 sm:pl-7 mt-16 space-x-4 mr-16">
            <ul className="flex flex-row md:text-xs mr-0 sm:items-center sm:justify-center sm:w-[300px] gap-3 sm:mr-0 self-start text-base sm:text-xs font-DMSansRegular text-Lavender mr-20 md:mr-5">
              {menu.map((Menu, index) => (
                <div key={index}>
                  <button
                    onClick={() => {
                      scroll(Menu);
                    }}
                  >
                    <span className="flex-4">{Menu}</span>
                  </button>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center sm:text-center py-4">
          <p className="text-sm sm:text-[10px] text-Lavender font-DMSansRegular sm:mt-2 mb-3">
            {t("containers.FooterContainer.title")}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
