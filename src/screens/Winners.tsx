// @ts-nocheck
import queryString from "query-string";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "src/i18n";

type WinnersType = {
  total_points: number;
  user: {
    bag_coins: number | null;
    correct_expectations: number;
    has_subscription: number;
    id: number;
    level: number;
    name: string;
    photo: string;
    rank: number;
    subscription_icon: string;
    total_expectations: number;
  };
}[];

const Winners = () => {
  const { t } = useTranslation();
  const [topWinners, setTopWinners] = useState<WinnersType>([]);
  const [restofWinners, setRestofWinners] = useState<WinnersType>([]);

  const getWinners = async () => {
    const uri = "https://lb.fanzapp.io/api/v4/leader-boards";
    const settings = {
      method: "POST",
      headers: {
        lang: "en",
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        "device-id": "df06af3552829a2e",
        timezone: "Africa/Cairo",
        type: "all_time",
      },
      body: queryString.stringify({
        type: "all_time",
      }),
    };
    try {
      const fetchResponse = await fetch(uri, settings);
      const data = await fetchResponse.json();
      console.log("dataaa", data);

      setTopWinners(data?.items?.top_leaders);
      setRestofWinners(data?.items?.lists.slice(0, 3));
    } catch (e) {
      return e;
    }
  };
  // curl -X POST --data $'type=all_time'
  useEffect(() => {
    getWinners();
  }, []);

  console.log(restofWinners);

  return (
    <div
      className={`container text-center mx-auto translate-x-0 translate-y-20 xl:-mt-44 lg:-mt-52 h-[1200px] md:w-[700px] sm:w-[370px] sm:h-[1030px]
    ${
      i18n.language === "en"
        ? "md:-mt-[560px] md:mb-[430px] sm:-mt-28"
        : "md:-mt-20 md:h-[1100px] sm:-mt-16"
    }`}
    >
      <div className="flex flex-col">
        <div>
          <img
            className={`sm:rotate-90 absolute sm:top-0 sm:w-[138px] 2xl:hidden xl:hidden lg:hidden md:hidden
           ${
             i18n.language === "en"
               ? "sm:-translate-x-16"
               : "sm:-translate-x-72"
           }
          `}
            src="/assets/images/pattern-w.svg"
            alt=""
          />
          <div
            className={`text-lavenderColor text-5xl sm:text-2xl 2xl:text-6xl font-subTitle pt-0 sm:w-[300px]
          ${
            i18n.language === "en"
              ? "md:mt-[450px] sm:pt-20 sm:ml-10"
              : "sm:mr-10 sm:pt-20"
          }
          `}
          >
            {t("containers.WinnersContainer.title")}
          </div>
          <img
            className={`w-[162px] sm:absolute sm:w-[99.912px] sm:h-[92.615px] h-[162px]
          ${
            i18n.language === "en"
              ? "translate-x-[1030px] translate-y-[60px] lg:translate-x-[800px] md:translate-x-[500px] md:translate-y-0 sm:translate-x-[260px] sm:translate-y-[-40px]"
              : "-translate-x-60 translate-y-5 md:-translate-x-10 md:translate-y-4 sm:translate-x-0 sm:-translate-y-5"
          }`}
            src="/assets/images/sticker-winner2.png"
            alt=""
          />
          <img
            className={`w-[155px] h-[155px] translate-y-[200px] sm:hidden md:hidden
          ${
            i18n.language === "en"
              ? "translate-x-5 lg:translate-x-0"
              : "-translate-x-[1100px] lg:-translate-x-[750px]"
          }`}
            src="/assets/images/pattern-8.svg"
            alt=""
          />

          <div
            className={`w-[642px] h-[572px] sm:w-[299px] translate-x-0 sm:h-[271px] pt-[377px] sm:mt-[120px] md:pt-[700px] justify-center items-end inline-flex mt-[-250px]
          ${i18n.language === "en" ? "sm:translate-x-0 md:translate-x-2" : ""}
          `}
          >
            {/* For third winner */}
            <div
              className={`w-[206px] h-[332px] sm:w-28 sm:h-[220px] bg-backgroundAppBar rounded-t-xl flex-shrink-0
             ${
               i18n.language === "en"
                 ? "translate-x-[436px] sm:translate-x-[240px]"
                 : "lg:w-44"
             }
            `}
            >
              <img
                className={`translate-y-[-100px] object-contain w-28 h-28 border-4 border-Lavender rounded-full 
              ${
                i18n.language === "en"
                  ? "ml-12 sm:ml-1 "
                  : "mr-12 sm:mr-0 lg:translate-x-4 md:translate-x-4"
              }
              `}
                src={
                  (topWinners?.length > 0 && topWinners[2].user.photo) ||
                  "/assets/images/avatar-2.svg"
                }
                alt=""
              />

              <div className="flex flex-col justify-start items-center gap-10 sm:gap-1">
                <div className="w-[100px] h-7 text-center -mt-20 text-lavenderColor text-xl sm:text-lg font-Inter font-medium leading-normal">
                  {topWinners?.length > 0 &&
                    topWinners[2].user.name.split(" ")[0]}
                </div>
                <div className="w-[76px] h-[34px] text-center text-lavenderColor text-2xl sm:text-xl font-Inter font-bold">
                  {topWinners?.length > 0 && topWinners[2].total_points}
                </div>
                <div className="w-[84px] h-[19px] text-center text-gray text-sm sm:text-xs font-Inter font-light">
                  {topWinners?.length > 0 && topWinners[2].user.id}
                </div>
              </div>

              <img
                className={`w-[50px] h-[80px] translate-y-[30px] sm:translate-y-5
              ${
                i18n.language === "en"
                  ? "translate-x-[80px] sm:translate-x-10"
                  : "-translate-x-20 sm:-translate-x-7 lg:-translate-x-14"
              }
              `}
                src="/assets/images/number-3.svg"
                alt=""
              />
            </div>

            {/* For first winner */}
            <div
              className={`w-[230px] h-[440px] sm:w-32 sm:h-[320px] bg-Lavender rounded-t-[30px] flex-shrink-0
            ${i18n.language === "en" ? "" : "lg:w-44"}
            `}
            >
              <img
                className={`translate-y-[-100px] object-contain w-28 h-28 border-4 border-Lavender rounded-full 
              ${
                i18n.language === "en"
                  ? "ml-[3.5rem] sm:ml-0"
                  : "mr-[3.5rem] sm:mr-[10px] lg:translate-x-5 md:translate-x-6"
              }
              `}
                src={
                  (topWinners.length > 0 && topWinners[0].user.photo) ||
                  "/assets/images/avatar-1.svg"
                }
                alt=""
              />
              <img
                className={`translate-y-[-280px] sm:translate-y-[-277px]
              ${
                i18n.language === "en"
                  ? "ml-20 sm:ml-8"
                  : "mr-20 sm:mr-8 lg:translate-x-5 md:translate-x-6"
              }
              `}
                src="/assets/images/crown.svg"
                alt=""
              />

              <div className="flex flex-col justify-start items-center gap-10 sm:gap-1">
                <div className="w-[100px] h-7 text-center mt-[-120px] text-lavenderColor text-xl sm:text-lg font-Inter font-medium leading-normal">
                  {topWinners?.length > 0 &&
                    topWinners[0].user.name.split(" ")[0]}
                </div>
                <div className="w-[76px] h-[34px] text-center text-lavenderColor text-2xl sm:text-xl font-Inter font-bold">
                  {topWinners?.length > 0 && topWinners[0].total_points}
                </div>
                <div className="w-[84px] h-[19px] text-center text-gray text-sm sm:text-xs font-Inter font-light">
                  {topWinners?.length > 0 && topWinners[0].user.id}
                </div>
              </div>

              <img
                className={`w-[50px] h-[100px] sm:translate-y-5 translate-y-[100px]
              ${
                i18n.language === "en"
                  ? "translate-x-[100px] sm:translate-x-12"
                  : "-translate-x-[90px] sm:-translate-x-9 lg:-translate-x-14 md:-translate-x-20"
              }
              `}
                src="/assets/images/number-1.svg"
                alt=""
              />
            </div>

            {/* For second winner */}
            <div
              className={`w-[206px] h-[353px] sm:w-28 sm:h-[220px] bg-backgroundAppBar rounded-t-xl flex-shrink-0
            ${
              i18n.language === "en"
                ? "translate-x-[-436px] sm:translate-x-[-240px]"
                : "sm:translate-x-0 lg:w-44"
            }
            `}
            >
              <img
                className={`translate-y-[-100px] object-contain w-28 h-28 border-4 border-Lavender rounded-full 
              ${
                i18n.language === "en"
                  ? "ml-12 sm:ml-0"
                  : "mr-12 sm:mr-0 lg:translate-x-1 md:translate-x-1"
              }
              `}
                src={
                  (topWinners.length > 0 && topWinners[1].user.photo) ||
                  "/assets/images/avatar-3.svg"
                }
                alt=""
              />

              <div className="flex flex-col justify-start items-center gap-10 sm:gap-1">
                <div className="w-[100px] h-7 text-center -mt-20 text-lavenderColor text-xl sm:text-lg font-Inter font-medium leading-normal">
                  {topWinners.length > 0 &&
                    topWinners[1].user.name.split(" ")[0]}
                </div>
                <div className="w-[76px] h-[34px] text-center text-lavenderColor text-2xl sm:text-xl font-Inter font-bold">
                  {topWinners.length > 0 && topWinners[0].total_points}
                </div>
                <div className="w-[84px] h-[19px] text-center text-gray text-sm sm:text-xs font-Inter font-light">
                  {topWinners.length > 0 && topWinners[0].user.id}
                </div>
              </div>

              <img
                className={`w-[50px] h-[100px] sm:-translate-y-1 translate-y-[30px]
               ${
                 i18n.language === "en"
                   ? "translate-x-20 sm:translate-x-10"
                   : "-translate-x-[70px] sm:-translate-x-7 lg:-translate-x-14"
               }
              `}
                src="/assets/images/number-2.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="sm:w-[300px] sm:ml-2">
          <div
            className={`w-[648px] h-10 sm:w-[345px] mt-10 bg-yellow rounded-lg justify-center items-center gap-2 inline-flex translate-x-0 sm:translate-x-0 md:translate-x-2
          ${
            i18n.language === "en"
              ? "md:w-[640px] sm:mt-5 sm:ml-0 sm:mr-5"
              : "md:w-[640px] md:mr-3 sm:mt-5 sm:mr-3"
          }
          `}
          >
            <div className=" text-lavenderColor font-title1 text-base sm:text-xs font-normal">
              {t("containers.WinnersContainer.phrasePart1")}
            </div>
            <div className="w-[19px] h-[19px] relative">
              <img src="/assets/icons/star-icon.svg" alt="" />
            </div>
            <div className="text-lavenderColor font-title1 text-base sm:text-xs font-normal">
              {t("containers.WinnersContainer.phrasePart2")}{" "}
            </div>
          </div>

          {/* Rank list */}
          <div
            className={`container w-[906px] h-[320px] sm:h-[270px] pt-8 sm:pt-0 pb-8 flex-col items-center inline-flex overflow-hidden translate-x-0
            ${
              i18n.language === "en"
                ? "md:pl-96 md:ml-0 md:w-[650px] md:h-[300px] sm:ml-0 sm:w-[352px]"
                : " -translate-x-[110px] xl:translate-x-20 xl:mr-40 lg:translate-x-28 lg:mr-[150px] md:w-[650px] md:translate-x-5 sm:w-[352px] sm:translate-x-0"
            }`}
          >
            <div
              className={`justify-start items-end gap-[170px] inline-flex sm:hidden md:hidden
            ${
              i18n.language === "en"
                ? ""
                : "translate-x-5 gap-[180px] xl:gap-[180px]"
            }`}
            >
              <div className="text-lightGray text-lg font-title1 break-words">
                {t("containers.WinnersContainer.rank")}
              </div>
              <div className="text-lightGray text-lg font-title1 break-words">
                {t("containers.WinnersContainer.username")}
              </div>
              <div className="text-lightGray text-lg font-title1 break-words">
                {t("containers.WinnersContainer.level")}
              </div>
              <div className="text-lightGray text-lg font-title1 break-words">
                {t("containers.WinnersContainer.points")}
              </div>
            </div>

            <div className="sm:w-[360px] overflow-auto pl-16 sm:pl-0 md:pl-20 md:pr-52 pr-16 sm:rtl:pr-2 pt-4 pb-4 flex-col justify-start items-start gap-10 sm:gap-3 md:gap-7 flex">
              {restofWinners?.map((winner, index) => {
                console.log("Winner", winner);

                return (
                  <div
                    className={`w-[842px] h-[65px] sm:w-[360px] sm:left-1 md:w-[800px] relative rounded-2xl
              ${i18n.language === "en" ? "" : "md:-translate-x-16"}
              `}
                  >
                    <div className="w-[842px] h-[65px] sm:w-[340px] md:w-[600px] sm:left-2 top-0 absolute shadow-inner bg-backgroundAppBar rounded-2xl"></div>
                    <div
                      className={`left-[50.50px] top-[21px] absolute justify-start items-end gap-[165px] md:gap-[104px] inline-flex
                ${
                  i18n.language === "en"
                    ? "sm:left-5 sm:gap-[30px]"
                    : "right-5 gap-[155px] xl:gap-[150px] lg:gap-[150px] lg:top-4 lg:right-8 lg:left-0 md:-translate-x-0 md:gap-[79px] sm:right-0 sm:gap-3 sm:-translate-x-6"
                }`}
                    >
                      <div className="justify-center items-center gap-4 sm:gap-3 flex">
                        <div className="w-[25px] h-[25px] relative">
                          <img src="/assets/icons/trophy.svg" alt="" />
                        </div>
                        <div className="font-title1 text-lg sm:text-sm md:text-base break-words">
                          {index + 4}
                        </div>
                      </div>
                      <div className="font-title1 text-lg sm:text-sm md:text-base break-words">
                        {winner.user.name.substring(0, 11)}
                      </div>
                      <div className="font-title1 text-lg rtl:pr-3 sm:text-sm md:text-base break-words">
                        {winner.user.level}
                      </div>
                      <div className="justify-center items-center gap-2 rtl:gap-3 flex">
                        <div className="font-title1 text-lg ltr:-ml-2 rtl:pr-5 sm:text-sm md:text-base break-words">
                          {winner.total_points}
                        </div>
                        <div className="relative rtl:sm:mr-1">
                          <img src="/assets/icons/star-icon.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winners;
