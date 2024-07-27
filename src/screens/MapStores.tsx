import { useState } from "react";
import { t } from "i18next";import AvatarTitles from "src/components/AvatarTitles";

function MapStores() {
  const cards = [
    {
      userName: "Alwaleed Alkahtani",
      avatar: "/assets/images/avatar-card.png",
      title: t("mapStores.content1")
    },
    {
      userName: "Mostafa Ibrahim",
      avatar: "/assets/images/avatar-card2.png",
      title: t("mapStores.content2"),
    },
    {
      userName: "Mahmoud Saad",
      avatar: "/assets/images/avatar-card5.jpeg",
      title: t("mapStores.content3"),
    },
    {
      userName: "MOHAMED DEGÄÄ",
      avatar: "/assets/images/avatar-card4.png",
      title: t("mapStores.content4"),
    },
    {
      userName: "Ahmed Shaheen",
      avatar: "/assets/images/avatar-card3.jpeg",
      title: t("mapStores.content5"),
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const prveSlide = () => {
    const isFirstSlide = activeSlide === 0;
    const newIndex = isFirstSlide ? cards.length - 1 : activeSlide - 1;
    setActiveSlide(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = activeSlide === cards.length - 1;
    const newIndex = isLastSlide ? 0 : activeSlide + 1;
    setActiveSlide(newIndex);
  };

  return (
    <>
      <div dir="ltr" className="bg-darkBackground" >
        <div className="flex justify-between items-center pt-[70px] sm:pt-[50px]">
          <div className="w-[305px] sm:w-[240px] h-[21px]"></div>
          <div className="flex text-lavenderColor text-5xl sm:text-2xl 2xl:text-6xl font-subTitle w-[690px]">
            {t("containers.MapStoresContainer.title")}
          </div>
          <div className="w-[115px] h-[115px] pt-[40px] sm:hidden transition-transform duration-100 ease-in">
            <img
              src="/assets/images/sticker-right-MapStoresContainer.png"
              alt=""
            />
          </div>
        </div>
        <div className="bg-darkBackground">
          <div className="flex absolute items-center flex-col pt-5 2xl:ml-[600px] sm:pt-[20px] pl-[200px] xl:pl-[70px] lg:p-[50px] md:p-[60px] sm:p-[35px] bg-darkBackground">
            <img
              className="w-[1345px] xl:w-[1245px] lg:w-[1200px] sm:w-[1200px]"
              src="/assets/images/map-MapStoresContainer.png"
              alt=""
            />
          </div>
          <div className="flex absolute container items-center justify-center">
            <AvatarTitles
              className={
                "absolute group/item mt-[930px] w-40 h-40 ml-[150px] xl:ml-[50px] lg:mr-[600px] 2xl:ml-[900px] lg:mt-[100px] md:mt-[240px] md:ml-[150px] sm:mt-[50px] sm:mr-[60px] animate-fade sm1:mt-[170px]"
              }
              avatarImage={"/assets/images/avatar-in-map2.png"}
              avatarTitle={"containers.MapStoresContainer.titleUser"}
              avatarUser={"Alwaleed Alkahtani"}
            />
            <AvatarTitles
              className={
                "absolute group/item mt-[540px] w-40 h-40 ml-[400px] lg:mb-[120px] lg:ml-[350px] md:mr-[420px] md:mt-[580px] sm:mt-[160px] sm:mr-[490px] animate-fade"
              }
              avatarImage={"/assets/images/avatar-in-map2.png"}
              avatarTitle={"containers.MapStoresContainer.titleUser2"}
              avatarUser={"Mostafa Ibrahim"}
            />
            <AvatarTitles
              className={
                "absolute group/item mr-[700px] w-40 h-40 mt-[580px] animate-fade mb-[90px] lg:mb-[200px] md:mb-[300px] md:mr-[500px] sm:mt-[150px] sm:mr-[290px] sm1:mt-[170px]"
              }
              avatarImage={"/assets/images/avatar-in-Map1.png"}
              avatarTitle={"containers.MapStoresContainer.titleUser3"}
              avatarUser={"Mahmoud Saad"}
            />
            <AvatarTitles
              className={
                "absolute group/item mt-[580px] w-40 h-40 ml-[20px] lg:ml-[30px] 2xl:ml-[1500px] lg:mt-[130px] md:mr-[50px] md:mt-[300px] animate-fade sm:mt-[90px] sm:mr-[20px] sm1:ml-20 sm1:mt-[110px]"
              }
              avatarImage={"/assets/images/avatar-in-map3.png"}
              avatarTitle={"containers.MapStoresContainer.titleUser4"}
              avatarUser={"MOHAMED DEGÄÄ"}
            />
            <AvatarTitles
              className={
                "absolute group/item mt-[400px] w-40 h-40 ml-[800px] 2xl:ml-[2000px] lg:ml-[670px] lg:mt-[300px] md:mr-[400px] md:mb-[200px] animate-jump-in animate-ease-linear sm:mt-10 sm:mr-[880px]"
              }
              avatarImage={"/assets/images/avatar-in-map4.png"}
              avatarTitle={"containers.MapStoresContainer.titleUser5"}
              avatarUser={"Ahmed Shaheen"}
            />
          </div>
        </div>
        <div className="mt-[440px] absolute md:w-[115px] sm:hidden md:mt-[300px] sm:mt-[90px] sm:w-[80px] ">
          <img
            className="w-[200px]"
            src="/assets/images/Sticker-Map-Left.png"
            alt=""
          />
        </div>
      </div>
      {/* mobile */}
      <div className="flex relative justify-center items-center sm1:pt-20 mt-[220px] 2xl:hidden xl:hidden lg:hidden md:hidden flex-col">
        <div className="grid bg-backgroundAppBar shadow-lg w-[332px] h-[159.5px] rounded-[10px] border-b-2 border-borderColor">
          <div className="flex items-center px-6 gap-3">
            <img
              className="w-[47px] h-[47px]"
              src={`${cards[activeSlide].avatar}`}
              alt=""
            />
            <h1 className="text-sm text-lavenderColor font-IBMPlexBold">
              {`${cards[activeSlide].userName}`}
            </h1>
          </div>
          <h1 className="w-[339px] h-[91px] text-lavenderColor leading-9 text-xs px-6 font-IBMPlexSansRegular">{`${cards[activeSlide].title}`}</h1>
        </div>

        <div dir="ltr" className="flex pt-[16px] justify-center items-center">
          {cards.length !== 0 ? (
            <div className="flex items-center justify-center gap-28">
              <div className="">
                <button onClick={prveSlide} className="w-[30px] h-[9.127px]">
                  {""}
                  <img src="/assets/images/arrow-left.png" alt="" />
                </button>
              </div>
              <div>
                {cards.map((_, index) => (
                  <button
                    key={index}
                    className={`w-[6px] h-[6px] rounded-full mx-1 ${
                      index !== activeSlide
                        ? "bg-blue-gray-700 h-[6px] w-[6px] rounded-full  "
                        : "bg-sliderColor"
                    }`}
                    onClick={() => setActiveSlide(index)}
                  >
                    {""}
                  </button>
                ))}
              </div>

              <div className="flex">
                <button
                  onClick={nextSlide}
                  className={`w-[30px] h-[9.127px] ${activeSlide}`}
                >
                  {""}
                  <img src="/assets/images/arrow-right.png" alt="" />
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default MapStores;
