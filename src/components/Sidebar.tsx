import { useState } from "react";
import { t } from "i18next";
import i18n from "src/i18n";
import { IoEarthOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

const SideBar = () => {
  const [isopen, setisOpen] = useState(false);

  const toggleSidebar = () => {
    setisOpen(!isopen);
  };

  const titles = [
    t("Features"),
    t("The app"),
    t("Partners"),
    t("Store"),
    t("FAQ"),
  ];
  // const { t } = useTranslation()
  const changeLanguage = () => {
    if (i18n.language === "ar") {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    } else {
      i18n.changeLanguage("ar");
      localStorage.setItem("language", "ar");
    }
  };

  const scrollMobile = (div_id: string) => {
    const element = document.getElementById(div_id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-between top-4 sticky z-20">
      <div className="flex mx-auto justify-between px-4 top-4 bg-backgroundAppBar backdrop-blur-[10.5px] shadow-lg rounded-lg sm:h-[44px] sm:w-[345px]">
        <button
          className={`lg:hidden w-[35px] drop-shadow-lg text-4xl duration-300 ${
            isopen ? "sm:hidden" : ""
          }`}
          onClick={toggleSidebar}
        >
          {" "}
          <HiMenu color="#75549A" className="w-[25px] h-[25px]" />
        </button>
        <div className="top-[60px] lg:hidden text-base sm:flex sm:fixed z-20">
          <div className="">
            <div
              className={` ${
                isopen ? "w-[210px] px-2" : "w-0"
              } lg:w-72 bg-Lavender z-10 duration-100 rounded-xl`}
            >
              <button
                className={`'text-white' : 'text-black'}  lg:hidden h-10 rounded-full drop-shadow-lg flex justify-center items-center text-4xl duration-300`}
                onClick={toggleSidebar}
              >
                <div
                  className={`h-15 w-[44px] flex rounded-md p-2 items-center gap-x-4 mt-8 ml-[150px] rtl:mr-[150px]
            ${!isopen && "invisible"} `}
                >
                  <img src="/assets/images/false.png" alt="" />
                </div>
              </button>
              <div className="font-DMSansRegular">
                <ul className="cursor-pointer mt-[70px]">
                  {titles.map((Menu, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        scrollMobile(Menu);
                      }}
                      className={`flex rounded-md p-0 hover:text-Mango text-white text-lg items-start justify-start mt-8 ml-4 
            ${!isopen && "invisible"}`}
                    >
                      <span className="flex">{Menu}</span>
                    </li>
                  ))}
                  <div
                    className={`h-[70px] w-[6rem] flex rounded-md p-2 items-center mt-20 ml-[13px] mb-2 
            ${!isopen && "invisible"} `}
                  >
                    <button className="border border-solid border-white rounded-xl px-3.5 py-1" onClick={changeLanguage}>

                    <IoEarthOutline color="white" className="inline-block" /> 
                    <span className="text-white p-1">{i18n.language === "ar" ? 'En' : 'Ar'}</span>
                    </button>
                    {/* <img
                      className=""
                      onClick={changeLanguage}
                      src="/assets/images/frame-earth.png"
                      alt="Translation Logo"
                    /> */}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-self-auto items-center ">
          <div className="h-[19px] w-[41px]  ">
            <img src="/assets/images/fanz.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
