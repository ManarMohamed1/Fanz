import { useTranslation } from "react-i18next";

type Iimages = {
  image: string;
};

const OurApp = () => {
  const images: Iimages[] = [
    {
      image: "./assets/images/1.png",
    },
    {
      image: "./assets/images/2.png",
    },
    {
      image: "./assets/images/3.png",
    },
    {
      image: "./assets/images/4.png",
    },
    {
      image: "./assets/images/5.png",
    },
    {
      image: "./assets/images/6.png",
    },
    {
      image: "./assets/images/7.png",
    },
    {
      image: "./assets/images/8.png",
    },
  ];

  const { t } = useTranslation();

  //Follow your favourite teams & leagues, predict matches results and win rewards

  return (
    <div
      id="ourApp"
      className="mt-[700px] 2xl:mt-[750px] md:mt-[450px] sm:mt-[80px] flex justify-center items-center flex-col bg-darkBackground"
    >
      <div className="text-lavenderColor text-5xl sm:text-2xl 2xl:text-6xl font-subTitle">
        {t("containers.appScreenshots.title")}
      </div>
      <div className="text-lavenderColor text-2xl md:w-[370px] sm:w-[320px] sm:leading-4 2xl:text-2xl sm:text-[12px] font-title1 w-[850px] md:text-[18px] text-center">
        {t(
          "Follow your favourite teams & leagues, predict matches results and win rewards"
        )}
      </div>
      <div className="w-[1300px] xl:w-[1280px] lg:w-[1000px] md:w-[700px] sm:w-auto pt-[60px] sm:pt-[25px]">
        <ul className="flex overflow-scroll scrollbar-none">
          {images.map((item, index) => {
            return (
              <li className={"shrink-0 px-1 "} key={index}>
                <img
                  className="sm:w-[250px] sm:h-[421px] md:w-[300px] w-[340px] h-[550px] rounded-[16px]"
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

export default OurApp;
