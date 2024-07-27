import { useTranslation } from "react-i18next";
import i18n from "src/i18n";

const Partners = () =>{
  const { t } = useTranslation();

  return (
    <>
      <div id={t("Partners")} className="mx-auto justify-center items-center flex">
        <div className="relative bg-backgroundAppBar rounded-2xl h-[529px] w-[1280px] xl:h-[529px] xl:w-[990px] lg:h-[529px] lg:w-[990px] lg:-ml-2.5 ml-10 md:h-[329px] md:w-[690px] md:ml-[-30px] sm:hidden">
          <div
            className={`absolute xl:w-[1000px] lg:w-[980px]  ${
              i18n.language === "en" ? "left-7 md:w-[690px]" : ""
            }`}
          >
            <div className="flex flex-row">
              <img
                className="ml-80 xl:ml-24 lg:ml-20 md:ml-40 rtl:mr-20 rtl:xl:mr-24 rtl:lg:mr-20 rtl:md:mr-16 mt-[-60px] md:h-[100px] md:w-[100px] md:mt-1"
                src="/assets/images/coin-1.svg"
                alt=""
              />
              <img
                className="ml-[340px] xl:ml-60 lg:ml-60 md:ml-52 rtl:mr-[340px] rtl:xl:mr-60 rtl:lg:mr-60 rtl:md:mr-52 -md:mt-4 md:h-52 md:w-52"
                src="/assets/images/purple-1.svg"
                alt=""
              />
            </div>

            <h1 className="text-4xl font-title1 text-white md:text-2xl md:mt-[-100px] mt-[-100px] ml-[484px] xl:ml-72 lg:ml-72 md:ml-60 rtl:xl:mr-[25rem] rtl:md:mr-60 lg:text-center lg:ml-16">
              {t("components.PartnersComponent.title")}
            </h1>

            <p
              className={`font-title1 text-white text-xl w-[630.344px] h-[38.72px] md:w-[500px] md:mt-3 md:text-base text-center text-opacity-70 mt-8 ${
                i18n.language === "en"
                  ? "ml-80 xl:ml-40 lg:ml-[150px] md:ml-20"
                  : "mr-80 xl:mr-[11rem] lg:mr-[150px] md:mr-20"
              }`}
            >
              {t("components.PartnersComponent.content")}
            </p>

            <div className="flex flex-row justify-between -mt-20 relative">
              <img
                className="ml-4 -xl:ml-5 -lg:ml-2 -md:ml-10 rtl:mr-4 rtl:-xl:mr-5 rtl:-lg:mr-2 rtl:-md:mr-10 mt-10 lg:h-36 lg:w-36 md:h-[130px] md:w-[130px] md:mt-11"
                src="/assets/images/purple-2.svg"
                alt=""
              />
              <img
                className="ml-80 lg:ml-20 md:mr-[118px] md:h-[150px] md:w-[100px] md:mt-8 rtl:ml-20 rtl:xl:ml-6 rtl:lg:ml-2 rtl:md:ml-5"
                src="/assets/images/coin-2.svg"
                alt=""
              />
            </div>

            <div className="flex justify-center md:w-[600px] items-center mt-[-30px] xl:w-[800px] xl:ml-20 lg:w-[800px] -md:mt-5 space-x-28 md:space-x-16 lg:ml-20  md:ml-4 rtl:space-x-2  rtl:md:space-x-10 rtl:lg:mr-20 rtl:gap-10 rtl:md:gap-4 rtl:md:mr-10 rtl:xl:mr-20">
              <div className="border border-white border-opacity-50 h-40 w-[270px] -mt-14 relative rounded-md md:h-[90px]">
                <img
                  className="mt-10 xl:mt-[0px] lg:mt-[0rem] xl:h-[158px] xl:w-[232px] lg:h-[158px] lg:w-[232px] 2xl:h-[157px] 2xl:mt-0 2xl:ml-[3.5rem] md:h-[88px] md:w-[155px] rtl:md:w-[160px] md:mt-0 ml-24 xl:ml-0 lg:ml-[2.5rem] ltr:lg:ml-0 md:ml-0"
                  src="/assets/images/company-logo-3.png"
                  alt=""
                />
              </div>
              <div className="border border-white border-opacity-50 h-40 w-[270px] mt-[-60px] rounded-md md:h-[90px]">
                <img
                  className="ml-10 rtl:mr-0 mt-10 rtl:lg:m-6 xl:mt-0 xl:ml-0 lg:ml-px  xl:h-[158px] xl:w-[235px] md:ml-1 2xl:mt-0 2xl:ml-0 rtl:md:mr-4 md:h-[150px] md:w-[150px] md:mt-[-30px]"
                  src="/assets/images/company-logo-2.png"
                  alt=""
                />
              </div>
              <div className="border border-white border-opacity-50 h-40 w-[270px] mt-[-60px] relative rounded-md md:h-[90px]">
                <img
                  className="ml-20 xl:ml-0 mt-12 rtl:xl:mt-[2rem] lg:ml-0 2xl:ml-0 2xl:mt-[2rem] md:ml-0 md:mt-0 md:h-[88px] md:w-[156px] rtl:md:w-[160px] rtl:md:mr-0"
                  src="/assets/images/company-logo-1.png"
                  alt=""
                />
              </div>
            </div>
            <img
              className="ml-10 xl:ml-10 lg:ml-2 lg:mt-[-29px] rtl:lg:mt-[-70px] mt-[-38px] md:w-28 md:mt-[-18px] md:ml-1"
              src="/assets/images/coin-3.svg"
              alt=""
            />
          </div>
        </div>
        {/*mobile */}
      </div>

      <div className="xl:hidden md:hidden lg:hidden 2xl:hidden flex flex-col items-center justify-center sm:mt-20">
        <h1 className="xl:hidden md:hidden lg:hidden 2xl:hidden text-lavenderColor font-subTitle text-2xl">
          {t("components.PartnersComponent.title")}
        </h1>
        <p className="xl:hidden md:hidden lg:hidden 2xl:hidden mt-6 h-10 w-80 text-center text-textblack font-title1 text-sm">
          {t("components.PartnersComponent.content")}
        </p>

        <div
          id="Partner"
          className="relative bg-backgroundAppBar rounded-2xl h-[799px] w-[332px] mt-8"
        >
          <div className="flex flex-col absolute">
            <img
              className="h-[126px] w-[126px]"
              src="/assets/images/coin-1-mobile.svg"
              alt=""
            />
            <img
              className="h-[242px] w-[201px] mt-[-130px] ml-[130px] rtl:mr-[180px]"
              src="/assets/images/perpule-mobile-1.svg"
              alt=""
            />
            <img
              className="mt-[-50px] ml-[180px]"
              src="/assets/images/coin-2-mobile.svg"
              alt=""
            />
          </div>

          <div>
            <div className="flex flex-col justify-center space-y-20 items-center mt-20 w-[270px] h-[608px] ml-8 rtl:mr-8">
              <div className="border border-white h-40 w-[270px] relative rounded-md">
                <img
                  className="ml-24 mt-10 rtl:mr-[3.5rem] sm:h-[157px] sm:mt-0 sm:ml-[3.5rem]"
                  src="/assets/images/company-logo-3.png"
                  alt=""
                />
              </div>
              <div className="border border-white h-40 w-[270px] mt-[-60px] relative rounded-md">
                <img
                  className="ml-10 mt-10 rtl:mr-0 sm:ml-[.5rem] sm:mt-[1.5rem]"
                  src="/assets/images/company-logo-2.png"
                  alt=""
                />
              </div>
              <div className="border border-white h-40 w-[270px] mt-[-60px] relative rounded-md">
                <img
                  className="ml-20 mt-14 rtl:mr-0 sm:h-[157px] sm:mt-0 sm:ml-[0rem]" 
                  src="/assets/images/company-logo-1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col absolute">
              <img
                className="mt-[-120px] h-[150.23px] w-[130.09px] rtl:mr-48"
                src="/assets/images/perpule-mobile-2.svg"
                alt=""
              />
              <img
                className="h-[100px] w-[244px] mt-[-19px] ml-8"
                src="/assets/images/coin-3-mobile.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners
