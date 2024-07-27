import { useTranslation } from "react-i18next";
import Counter from "src/components/Counter";
import i18n from "src/i18n";

const CounterContainer = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto max-w-full max-h-[450px] sm:h-[180px] sm:mt-32 bg-backgroundAppBar border border-black drop-shadow-xl">
      <div className="flex justify-center items-center gap-36 lg:gap-16 md:gap-[7rem] sm:gap-10">
        <div
          className={`absolute
        ${
          i18n.language === "en"
            ? "bottom-10 left-0 md:bottom-5 sm:bottom-0 sm:left-5"
            : "bottom-5 right-0 md:bottom-0 sm:bottom-0 sm:right-5"
        }
        `}
        >
          <img
            src="/assets/images/pattern-mango.svg"
            alt=""
            className="w-[190px] lg:w-[150px] md:w-[100px] sm:h-[65.5px] sm:w-[81.6px] sm:rotate-[-15deg]"
          />
        </div>

        <div>
          <img
            src="/assets/icons/install.svg"
            alt=""
            className={`h-[70px] md:h-12 mt-20 mb-5 sm:w-[30px] sm:h-[30px] sm:pt-1 sm:mt-12 
          ${
            i18n.language === "en"
              ? "ml-20 lg:ml-[6.5 rem] md:ml-10 sm:mb-0 sm:ml-4"
              : "mr-24 lg:mr-14 md:mr-10 sm:mb-0 sm:mr-4"
          }
          `}
          />
          <Counter
            number={t("containers.CountContainer.installNum")}
            title={t("containers.CountContainer.install")}
          />
        </div>

        <div
          className={`absolute
        ${
          i18n.language === "en"
            ? "top-0 left-[610px] xl:left-[500px] lg:top-10 lg:left-[400px] md:top-10 md:left-72 sm:top-10 sm:left-32"
            : "top-0 right-[550px] xl:top-2 xl:right-[450px] lg:top-10 lg:right-96 md:top-10 md:right-60 sm:top-9 sm:right-36"
        }
        `}
        >
          <img
            src="/assets/images/pattern-lavender.svg"
            alt=""
            className="w-[190px] lg:w-[150px] md:w-[100px] sm:h-[49.6px] sm:w-[65.5px] sm:-rotate-[30deg]"
          />
        </div>

        <div>
          <img
            src="/assets/icons/light.svg"
            alt=""
            className={`h-[70px] md:h-12 mt-20 mb-5 sm:w-[30px] sm:h-[30px] sm:pt-1 sm:mt-12 sm:mb-0
          ${
            i18n.language === "en"
              ? "ml-20 lg:ml-[6.5 rem] md:ml-10 sm:ml-4"
              : "mr-24 lg:mr-14 md:mr-10 sm:mr-4"
          }
          `}
          />
          <Counter
            number={t("containers.CountContainer.predictionsNum")}
            title={t("containers.CountContainer.predictions")}
          />
        </div>

        <div>
          <img
            src="/assets/icons/world.svg"
            alt=""
            className={`h-[70px] md:h-12 mt-20 mb-5 sm:w-[30px] sm:h-[30px] sm:pt-1 sm:mt-12 sm:mb-0
          ${
            i18n.language === "en"
              ? "ml-6 lg:ml-[6.5 rem] md:ml-2 sm:ml-0"
              : "mr-8 lg:mr-4 md:mr-3 sm:mr-0"
          }
          `}
          />
          <Counter
            number={t("containers.CountContainer.countriesNum")}
            title={t("containers.CountContainer.countries")}
          />
        </div>
      </div>
    </div>
  );
}

export default CounterContainer
