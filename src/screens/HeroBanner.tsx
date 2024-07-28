import { useTranslation } from "react-i18next";
import i18n from "src/i18n";

const HeroBanner = () => {
  const { t } = useTranslation();

  return (
    <>
      <div dir="ltr" className="bg-darkBackground">
        <div className="flex container mx-auto lg:justify-between md:hidden sm:hidden">
          <div className="flex w-[46px] h-[1000px] xl:h-[830px] lg:h-[700px] xl:w-[65px] lg:w-[22px] relative">
            <div className="xl:pl-[690px] absolute 2xl:pl-[970px] lg:pl-[485px] top-[158px] lg:top-[75px] xl:top-[45px] animate-fade-left animate-once animate-ease-linear animate-alternate animate-fill-forwards animate-duration-[120ms]">
              <div className="flex w-[641px] h-[641px] xl:w-[570px] xl:h-[570px] lg:w-[400px] lg:h-[400px] mr-8 bg-mangoColor justify-center flex-start rounded-full animate-ping animate-once animate-ease-linear animate-reverse animate-fill-forwards">
                <img
                  className="lg:w-[400px] object-contain translate-x-20"
                  src="/assets/images/hero-section-iPhone-logo.png"
                  alt=""
                />
              </div>
              {/* <div className="w-[641px] h-[641px] bg-mangoColor rounded-full animate-ping animate-once animate-ease-linear animate-reverse animate-fill-forwards"></div> */}
            </div>
            <div className="2xl:pl-[690px] 2xl:pt-[23px] xl:pl-[390px] absolute animate-fade-left animate-once animate-ease-linear animate-alternate animate-fill-forwards animate-duration-[120ms]">
              <img
                className=""
                src="/assets/images/hero-section-background.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="flex flex-col w-[690px] lg:w-[1000px]">
              <div
                className={`
            ${i18n.language === "ar" ? "xl:ml-auto xl:pr-[170px] lg:ml-auto" : ""}
            text-lavenderColor text-[64px] font-subTitle leading-[90.60px] animate-fade-right animate-once animate-duration-700 animate-delay-400 animate-ease-in`}
              >
                {t("containers.HeroSectionContainer.title")}
                <br />
              </div>
              <div
                className={`${
                  i18n.language === "ar" ? "xl:ml-auto xl:pr-[170px] lg:ml-auto" : ""
                } text-textblack text-[32px] lg:text-[20px] xl:text-[25px] font-title1 leading-9 text-left animate-fade-right animate-once animate-duration-700 animate-delay-600 animate-ease-in`}
              >
                {t("containers.HeroSectionContainer.subtitle")}
              </div>
            </div>
            <div className="flex pr-[250px] pt-[40px] lg:pr-[800px] animate-fade-right animate-once animate-duration-700 animate-delay-400 animate-ease-in">
              <img src="/assets/icons/hero-section-scroll-icon.png" alt="" />
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="flex-col 2xl:hidden xl:hidden lg:hidden md:justify-center items-start">
          {/* absolute */}
          <div className="w-[501px] h-[501px] md:top-[90px] relative sm:-right-[60px] sm:w-[300px] sm:h-[300px] sm:top-[20px] md:right-0 md:mr-[0px] md:left-[150px] bg-mangoColor rounded-full animate-ping animate-once animate-ease-linear animate-reverse animate-fill-forwards">
            <div className="md:absolute sm:h-[380px] animate-fade-left animate-once animate-ease-linear animate-alternate animate-fill-forwards animate-duration-[120ms]">
              <img
                className="sm:absolute  "
                src="/assets/images/hero-section-background.png"
                alt=""
              />
            </div>
            {/* absolute */}
            <div className="sm:top-[0px] sm:right-[0px] absolute md:pl-[0px] md:right-[0px] md:mr-[0px] md:top-[0px] animate-fade-left animate-once animate-ease-linear animate-alternate animate-fill-forwards animate-duration-[120ms]">
              <img
                className="md:h-[460px] sm:h-[260px]"
                src="/assets/images/hero-section-iPhone-logo.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col md:h-[35vh] md:items-center sm:items-center justify-end md:pl-[30px] md:mb-[7rem] sm:pl-5 sm:pt-[50px]">
            <div className="text-lavenderColor md:text-[64px] sm:text-[25px] font-subTitle ms:leading-[19.60px] animate-fade-right animate-once animate-duration-700 animate-delay-200 animate-ease-in">
              {t("containers.HeroSectionContainer.title")}
            </div>
            <div className="text-textblack text-[32px] sm:text-[15px] font-title1 leading-9 text-left animate-fade-right animate-once animate-duration-700 animate-delay-300 animate-ease-in">
              {t("containers.HeroSectionContainer.subtitle")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
