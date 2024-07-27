import { useTranslation } from "react-i18next";

const Download = () => {
  const { t } = useTranslation();

  return (
    <div id={t("The app")} className="md:mt-[-345px]">
      <div className="relative flex items-center justify-center sm:hidden h-[500px] mb-80 md:mb-3 content-center md:mt-[450px] xl:mx-2">
        <div className="mt-20 sm:mb-0  absolute top-0  md:w-[650px]">
          <img
            className="xl:w-[990px] lg:w-[900px]"
            src="/assets/images/cover.svg"
            alt=""
          />
          <div className="mr-24 2xl:ltr:ml-36  md:mr-8">
            <img
              className="w-[1000px] xl:w-[800px] xl:ml-20 lg:w-[700px] lg:ml-20 md:w-[569px] md:ml-10 md:mt-2 absolute top-0 mt-6 ml-30 animate-jump-in animate-duration-1000 animate-delay-700 animate-ease-linear"
              src="/assets/images/coins.png"
              alt="coins"
            />

            <img
              className="absolute xl:w-[500px] xl:left-24 lg:w-[440px] lg:ml-[70px] md:w-[350px] md:left-2 md:mt-[50px] top-0 left-40 mt-24 lg:mt-14 ml-36"
              src="/assets/images/phone.svg"
              alt="phone"
            />
          </div>
          <div className="">
            <div className="mt-[226px] mb-0 ml-[170px] absolute top-80 xl:top-[200px] xl:left-10 lg:top-[123px] lg:left-16 md:top-14 md:left-0 left-40 bottom-80 text-3xl bg-white h-[2px] w-[621px] lg:w-[450px] lg:rtl:w-[406px] rtl:md:w-[309px] md:w-[350px]"></div>
            <div className="flex flex-row justify-between rtl:mr-80  rtl:gap-[616px] xl:rtl:gap-[610px] rtl:xl:mr-40  lg:rtl:gap-[404px] rtl:lg:mr-64 rtl:md:gap-[310px] rtl:md:mr-40  space-x-[610px] xl:top-[200px] xl:ml-[200px] xl:space-x-[615px] lg:top-[123px] lg:ml-[230px] lg:space-x-[440px] md:top-14 md:ml-40 md:space-x-[350px] mt-[223px] ml-[330px] absolute top-80">
              <div className="bg-white h-2 w-2 origin-center rotate-45"></div>
              <div className="bg-white h-2 w-2 origin-center rotate-45"></div>
            </div>
            <div className="mt-60 xl:mt-[120px] xl:ml-40 rtl:xl:ml-28 rtl:md:ml-4 lg:mt-10 lg:ml-[116px] md:mt-[-20px] md:ml-10 md:text-xl mb-0 ml-[268px] absolute top-80 ltr:left-40 rtl:left-60 bottom-80 text-3xl lg:text-2xl font-title1 text-white animate-fade-up animate-once animate-duration-1000 animate-delay-700 animate-ease-out animate-alternate animate-fill-both">
              {t("components.DownloadComponent.downloadOur")}
            </div>
            <div className="xl:mt-[140px] xl:ml-40 rtl:xl:ml-20 lg:mt-[70px] lg:ml-[120px] rtl:lg:ml-20 md:mt-[-15px] md:ml-[45px] rtl:md:ml-10 flex flex-row space-x-8 mt-72 mb-0 ml-72 rtl:ml-60 absolute top-80 pt-6 left-40 bottom-80 rtl:gap-8 animate-fade-up animate-once animate-duration-1000 animate-delay-700 animate-ease-out animate-alternate animate-fill-both">
              <div>
                <a
                  href="https://apps.apple.com/sa/app/fanz-%D8%AA%D9%88%D9%82%D8%B9%D8%A7%D8%AA-%D9%85%D8%A8%D8%A7%D8%B1%D9%8A%D8%A7%D8%AA-%D9%88%D8%AC%D9%88%D8%A7%D8%A6%D8%B2/id6444231720?l=ar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/assets/images/appstore.svg"
                    className="lg:h-[45px] md:h-[30px]"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.fanzapp&hl=en_US"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/assets/images/playstore.svg"
                    className="lg:h-[45px] md:h-[30px]"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*//mobile*/}
      <div className="xl:hidden md:hidden lg:hidden 2xl:hidden items-center justify-center flex pt-[56px]">
        <div className="relative">
          <img className=" " src="/assets/images/cover-mobile.svg" alt="" />
          <img
            className="absolute top-6 mt-0 left-4 animate-jump-in animate-duration-1000 animate-delay-700 animate-ease-linear"
            src="/assets/images/mobile-coins.svg"
            alt=""
          />
          <img
            className="absolute top-20 mt-6 left-6"
            src="/assets/images/phone-mobile.svg"
            alt=""
          />
          <div className="ml-1.5 absolute top-16 mt-[221px] left-10 bg-white h-[1px] w-[249px]"></div>
          <div className="flex flex-row justify-between space-x-[246px] rtl:gap-60 mt-[203px] ml-[45px] rtl:mr-[38px] absolute top-20">
            <div className="bg-white h-[5px] w-[5px] origin-center rotate-45"></div>
            <div className="bg-white h-[5px] w-[5px] origin-center rotate-45"></div>
          </div>
          <div className="absolute top-20 mt-56 left-16 text-white text-lg animate-fade-up animate-once animate-duration-1000 animate-delay-700 animate-ease-out animate-alternate animate-fill-both"></div>

          <div className="flex flex-col space-y-2 mt-60 mb-0 ml-20 absolute top-20 pt-6 left-0 animate-fade-up animate-once animate-duration-1000 animate-delay-700 animate-ease-out animate-alternate animate-fill-both">
            <div>
              <a
                href="https://apps.apple.com/sa/app/fanz-%D8%AA%D9%88%D9%82%D8%B9%D8%A7%D8%AA-%D9%85%D8%A8%D8%A7%D8%B1%D9%8A%D8%A7%D8%AA-%D9%88%D8%AC%D9%88%D8%A7%D8%A6%D8%B2/id6444231720?l=ar"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/assets/images/appstore.svg" className="" alt="" />
              </a>
            </div>
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.fanzapp&hl=en_US"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/assets/images/playstore.svg" className="" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download
