import { useTranslation } from "react-i18next";

const FanzFantasy = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto h-[700px] translate-x-0 2xl:translate-x-[145px] -translate-y-10 mt-0 mb-40 sm:mb-0 sm:mt-0">
        <div className="flex justify-center items-center text-relative transform translate-y-12 lg:translate-y-5  sm:grid sm:grid-rows-2 grid-row-reverse">
          <div className="sm:order-2 lg:text-start lg:ps-[100px] xl:ps-[150px] sm:text-center ">
            <img
              className={`2xl:hidden xl:hidden lg:hidden md:hidden sm:absolute sm:bottom-[300px]`}
              src="/assets/images/pattern-8.svg"
              alt=""
            />
            <img
              className={`transform sm:hidden`}
              src="/assets/images/pattern-spiral.svg"
              alt=""
            />
            <h1
              className={`text-lavenderColor text-5xl lg:text-3xl md:text-3xl font-subTitle sm:text-xl`}
            >
              {t("containers.CompleteTeamContainer.title")}
            </h1>

            <span
              className={`text-3xl lg:text-xl md:text-xl font-title1 sm:font-subTitle sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-lavenderColor2 to-grayColor`}
            >
              {t("containers.CompleteTeamContainer.paragraph")}
              <br />
            </span>

            <span
              className={`text-3xl lg:text-xl md:text-xl font-title1 sm:hidden text-transparent bg-clip-text bg-gradient-to-r from-lavenderColor2 to-grayColor`}
            >
              {t("containers.CompleteTeamContainer.paragraph2")}
              <br />
            </span>

            <span
              className={`font-title1 sm:font-subTitle sm:text-lg 2xl:hidden xl:hidden lg:hidden md:hidden text-transparent bg-clip-text bg-gradient-to-r from-lavenderColor2 to-grayColor`}
            >
              {t("containers.CompleteTeamContainer.paragraph2sm")}
              <br />
            </span>

            <span
              className={`text-3xl lg:text-xl md:text-xl font-title1 sm:hidden  text-transparent bg-clip-text bg-gradient-to-r from-lavenderColor2 to-grayColor`}
            >
              {t("containers.CompleteTeamContainer.paragraph3")}
              <br />
            </span>

            <span
              className={`font-title1 sm:font-subTitle sm:text-lg 2xl:hidden xl:hidden lg:hidden md:hidden text-transparent bg-clip-text bg-gradient-to-r from-lavenderColor2 to-grayColor`}
            >
              {t("containers.CompleteTeamContainer.paragraph3sm")}
              <br />
            </span>

            <span
              className={`text-mangoColor text-4xl lg:text-3xl md:text-2xl font-subTitle sm:text-xl text-mangoColor`}
            >
              {t("containers.CompleteTeamContainer.paragraphYellow")}
            </span>
          </div>
          <div className="sm:order-1 mx-auto">
          <img
              className={`sm:hidden`}
              src="/assets/images/pattern-w2.svg"
              alt=""
            />
            <img
              className="w-fit mt-[65px]"
              src="/assets/images/mohammed-salah.png"
              alt=""
            />
            <img
            className={`sm:absolute sm:-top-[50px] sm:-right-[85px]`}
            src="/assets/images/pattern-w.svg"
            alt=""
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default FanzFantasy;
