import { useTranslation } from "react-i18next";

type Iimages = {
  image: string;
};

const OurStore = () => {
  const images: Iimages[] = [
    {
      image: "./assets/images/niceone1.png",
    },
    {
      image: "./assets/images/noon1.png",
    },
    {
      image: "./assets/images/pubg1.png",
    },
    {
      image: "./assets/images/stc1.png",
    },
    {
      image: "./assets/images/careem1.png",
    },
  ];

  const { t } = useTranslation();

  return (
    <div
      id={t("Store")}
      className="flex justify-center items-center flex-col bg-darkBackground"
    >
      <div className="text-lavenderColor text-5xl sm:text-2xl 2xl:text-6xl font-subTitle pt-[101px]">
        {/* our store */}
        {t("containers.EnterLandingContainer.title")}
      </div>
      {/* <div className="text-[24px] text-lavenderColor sm:text-[15px] sm:w-[350px] w-[560px] text-center pt-[40px] leading-[50px] sm:pt-2 font-title">
        {t("containers.EnterLandingContainer.subtitle")}
      </div> */}
      <div className="w-[1300px] xl:w-[1280px] lg:w-[1000px] md:w-[700px] sm:w-auto pt-[60px] sm:pt-[25px]">
        <ul className="flex overflow-scroll scrollbar-none">
          {images.map((item, index) => {
            return (
              <li className={"shrink-0 px-1 "} key={index}>
                <img
                  className="sm:w-[110px] sm:h-[154px] md:w-[300px] w-[288px] h-[390px] rounded-[16px]"
                  src={item.image}
                  alt={item.image}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default OurStore;
