import { useTranslation } from "react-i18next";
import i18n from "src/i18n";

const HeroBanner = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <div dir="ltr" className="bg-background flex container h-dvh">
        <div className="flex-1">
          <div className="justify-center items-center flex-col">
            <h1 className={`text-lavenderColor text-[64px] font-subTitle`}>
              {t("containers.HeroSectionContainer.title")}
              <br />
            </h1>
            <p
              className={`text-textblack text-[32px] lg:text-[20px] xl:text-[25px] font-title1 leading-9 text-left`}
            >
              {t("containers.HeroSectionContainer.subtitle")}
            </p>
            <div className="">
              <img src="/assets/icons/hero-section-scroll-icon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-mangoColor rounded-full"></div>
          <div className="">
            <img
              className="lg:w-[400px]"
              src="/assets/images/hero-section-iPhone-logo.png"
              alt=""
            />
          </div>
          <div className="">
            <img
              className=""
              src="/assets/images/hero-section-background.png"
              alt=""
            />
          </div>
        </div>
      </div> */}

      <div dir="ltr" className="bg-darkBackground">
        <div className="flex container mx-auto lg:justify-between md:hidden sm:hidden">
          <div className="flex w-[46px] h-[1000px] xl:w-[65px] lg:w-[22px]">
            <div className="w-[641px] h-[641px] right-[65px] top-[158px] 2xl:right-[675px] lg:w-[544px] lg:h-[544px] absolute bg-mangoColor rounded-full animate-ping animate-once animate-ease-linear animate-reverse animate-fill-forwards"></div>
            <div className="xl:pl-[900px] absolute 2xl:pl-[1167px] lg:pl-[690px] top-[158px] animate-fade-left animate-once animate-ease-linear animate-alternate animate-fill-forwards animate-duration-[120ms]">
              <img
                className="lg:w-[400px]"
                src="/assets/images/hero-section-iPhone-logo.png"
                alt=""
              />
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
            ${i18n.language === "ar" ? "xl:ml-auto xl:pr-[170px]" : ""}
            text-lavenderColor text-[64px] font-subTitle leading-[90.60px] animate-fade-up animate-once animate-duration-500 animate-delay-[222ms] animate-ease-out animate-alternate animate-fill-both`}
              >
                {t("containers.HeroSectionContainer.title")}
                <br />
              </div>
              <div
                className={`${
                  i18n.language === "ar" ? "xl:ml-auto xl:pr-[170px]" : ""
                } text-textblack text-[32px] lg:text-[20px] xl:text-[25px] font-title1 leading-9 text-left animate-fade-up animate-once animate-duration-500 animate-delay-[222ms] animate-ease-out animate-alternate animate-fill-both`}
              >
                {t("containers.HeroSectionContainer.subtitle")}
              </div>
            </div>
            <div className="flex pr-[250px] pt-[40px] lg:pr-[800px] animate-fade-up animate-once animate-duration-500 animate-delay-[222ms] animate-ease-out animate-alternate animate-fill-both">
              <img src="/assets/icons/hero-section-scroll-icon.png" alt="" />
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="flex-col 2xl:hidden xl:hidden lg:hidden md:justify-center items-start">
          {/* absolute */}
          <div className="w-[501px] h-[501px] md:top-[148px] absolute sm:right-[165px] sm:w-[300px] sm:h-[300px] sm:top-[93px] md:right-0 md:mr-[130px] bg-mangoColor rounded-full animate-ping animate-once animate-ease-linear animate-reverse animate-fill-forwards"></div>
          <div className="md:absolute sm:h-[380px] animate-fade-left animate-once animate-ease-linear animate-alternate animate-fill-forwards animate-duration-[120ms]">
            <img
              className="sm:absolute  "
              src="/assets/images/hero-section-background.png"
              alt=""
            />
          </div>
          {/* absolute */}
          <div className="sm:top-[105px] sm:right-[170px] absolute md:pl-[300px] md:right-[60px] md:mr-[100px] md:top-[158px] animate-fade-left animate-once animate-ease-linear animate-alternate animate-fill-forwards animate-duration-[120ms]">
            <img
              className="md:h-[460px] sm:h-[260px]"
              src="/assets/images/hero-section-iPhone-logo.png"
              alt=""
            />
          </div>
          <div className="flex flex-col md:h-[130vh] md:items-center sm:items-center justify-end md:pl-[30px] md:mb-5 sm:pl-5 ">
            <div className="text-lavenderColor md:text-[64px] sm:text-[25px] font-subTitle ms:leading-[19.60px] animate-fade-up animate-once animate-duration-500 animate-delay-[222ms] animate-ease-out animate-alternate animate-fill-both">
              {t("containers.HeroSectionContainer.title")}
            </div>
            <div className="text-textblack text-[32px] sm:text-[15px] font-title1 leading-9 text-left animate-fade-up animate-once animate-duration-500 animate-delay-[222ms] animate-ease-out animate-alternate animate-fill-both">
              {t("containers.HeroSectionContainer.subtitle")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
