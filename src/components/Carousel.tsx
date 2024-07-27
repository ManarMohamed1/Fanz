import React from "react";
import Slider from "./Slider";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { t } from "i18next";
import i18n from "src/i18n";

const modulus = (a: number, b: number) => {
  return ((a % b) + b) % b;
};

export default class Carousel extends React.Component<
  any,
  any
> {
  state = {
    index: 0,
    goToSlide: null,
    prevPropsGoToSlide: 0,
    newSlide: false,
    active: 0,
  };

  modBySlidesLength = (index: number) => {
    return modulus(index, this.props.slides.length);
  };

  moveSlide = (direction: number) => {
    this.setState({
      index: this.modBySlidesLength(this.state.index + direction),
      goToSlide: null,
    });
  };

  goToSlide = (slideIndex: any) => {
    this.setState({
      index: slideIndex,
      goToSlide: null,
      active: slideIndex,
    });
  };

  clampOffsetRadius(offsetRadius: number) {
    const { slides } = this.props;
    const upperBound = Math.floor((slides.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  }

  getPresentableSlides() {
    const { slides } = this.props;
    const { index } = this.state;
    let { offsetRadius } = this.props;
    offsetRadius = this.clampOffsetRadius(offsetRadius);
    const presentableSlides = [];

    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      presentableSlides.push(slides[this.modBySlidesLength(index + i)]);
    }

    return presentableSlides;
  }

  
  
  render() {
    const { animationConfig, offsetRadius, showNavigation } = this.props;

    let navigationButtons = null;
    if (showNavigation) {
      navigationButtons = (
        <>
          {/* for mobile */}
          <div className="sm:flex">
            <button onClick={() => this.moveSlide(1)}>
              <div
                className={`sm:h-14 sm:w-14 2xl:hidden xl:hidden lg:hidden md:hidden
              ${
                i18n.language === "en"
                  ? "sm:-translate-x-5"
                  : "sm:-translate-x-52"
              }
              `}
              >
                <FaArrowLeft color="gray" className="text-2xl" />
              </div>
            </button>
            <button onClick={() => this.moveSlide(-1)}>
              <div
                className={`sm:h-14 sm:w-14 2xl:hidden xl:hidden lg:hidden md:hidden
              ${
                i18n.language === "en"
                  ? "sm:translate-x-36"
                  : "sm:translate-x-16"
              }
              `}
              >
                <FaArrowRight color="gray" className="text-2xl" />
              </div>
            </button>
          </div>
          {/* for desktop */}

          <div className="flex justify-center gap-1">
            {this.getPresentableSlides().map((slide, presentableIndex) => (
              <div
                key={presentableIndex}
                className={`transform -translate-y-10 sm:hidden
                ${
                  i18n.language === "en"
                    ? "translate-x-0"
                    : "-translate-x-[270px]"
                }
                `}
              >
                <div
                  className={`${
                    presentableIndex === this.state.active
                      ? " text-lavenderColor pt-64 sm:hidden"
                      : " text-lavenderColor pt-64 sm:hidden"
                  }`}
                >
                  <button
                    className= {`border px-5 h-3 rounded-lg ${presentableIndex === this.state.active? 'bg-mangoColor': ''}`}
                    onClick={() => this.goToSlide(presentableIndex)}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }
    if (this.state.index === 0) {
      return (
        <div>
          <div
            className={`relative grid-row-1
          ${
            i18n.language === "en"
              ? "translate-x-32 lg:pt-28 md:pt-48 md:translate-x-14 sm:translate-x-10 sm:translate-y-[580px]"
              : "-translate-x-[650px] lg:pt-28 lg:-translate-x-[450px] md:pt-48 md:-translate-x-96 sm:translate-x-10 sm:translate-y-[640px]"
          }
          `}
          >

            {/* vertical div */}
            <div
              className={`xl:grid lg:grid xl:grid-row-1 lg:grid-row-1 md:w-[435px] pt-16
            ${i18n.language === "en" ? "xl:pt-10" : ""}
            `}
            >
              <img
                className="pb-5 xl:pt-10 sm:hidden lg:mx-auto xl:mx-auto"
                src="/assets/icons/trophy-2.png"
                alt=""
              />

              {/* title */}
              <p
                className={`font-title1 font-bold text-center text-[40px] lg:text-4xl md:text-xl text-lavenderColor sm:text-lavenderColor sm:text-base
              ${
                i18n.language === "en"
                  ? "w-[550px] sm:-mt-52 sm:-ml-2 sm:w-[275px] sm:h-[100px]"
                  : "w-[550px] sm:-mt-72 sm:mr-28 sm:w-[200px] sm:h-[50px]"
              }
              `}
              >
                {t("containers.ScreenshotsContainer.profileScreenTitle")}
              </p>{" "}
              <br />
              {/* discreption */}
              <p
                className={`font-subTitle1 text-lavenderColor w-[550px] font-light text-xl text-center lg:text-lg md:text-sm sm:text-xs sm:text-center sm:w-[280px]
              ${
                i18n.language === "en"
                  ? "sm:-mt-48 sm:-ml-6"
                  : "sm:mr-10 sm:w-[300px] sm:h-[50px] sm:font-MadaExtraLight sm:text-lightBlack sm:opacity-80"
              }
              `}
              >
                {t("containers.ScreenshotsContainer.profileScreenDescreption")}
              </p>
            </div>
            <div
              className={`transform  
                        ${
                          i18n.language === "en"
                            ? "translate-x-[70px] translate-y-[-200px] sm:translate-x-0 sm:-translate-y-[450px]"
                            : "translate-x-[205px] translate-y-[-200px] lg:translate-x-[0px] xl:translate-x-[0px] sm:translate-x-[-72px] sm:translate-y-[-475px]"
                        }    
                        `}
            >
              {navigationButtons}
            </div>
            <div
              className={`transform 
              ${
                i18n.language === "en"
                  ? "-translate-x-[300px] -translate-y-[510px] 2xl:-translate-y-[400px] xl:translate-x-[-400px] xl:translate-y-[-500px] lg:translate-x-[-600px] lg:translate-y-[-440px] md:translate-x-[-800px] md:translate-y-[-355px] sm:-translate-x-3 sm:-translate-y-[630px]"
                  : "-translate-x-[780px] -translate-y-[420px] 2xl:-translate-y-[325px] xl:translate-x-[-850px] xl:translate-y-[-450px] lg:translate-x-[-1000px] lg:translate-y-[-390px] md:translate-x-[-1110px] md:translate-y-[-360px] sm:-translate-x-[2265px] sm:translate-y-[-680px]"
              }`}
            >
              {this.getPresentableSlides().map((slide, presentableIndex) => (
                <Slider
                  key={presentableIndex}
                  content={slide.content}
                  moveSlide={this.moveSlide}
                  offsetRadius={this.clampOffsetRadius(offsetRadius)}
                  index={presentableIndex}
                  animationConfig={animationConfig}
                  delta={""}
                  down={""}
                  up={""}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (this.state.index === 1) {
      return (
        <div>
          <div
            className={`relative grid-row-1
          ${
            i18n.language === "en"
              ? "translate-x-32 xl:pt-10 lg:pt-28 md:pt-48 md:translate-x-14 sm:translate-x-10 sm:translate-y-[580px]"
              : "-translate-x-[650px] lg:pt-28 lg:-translate-x-[450px] md:pt-48 md:-translate-x-96 sm:translate-x-10 sm:translate-y-[680px]"
          }
          `}
          >
            <div
              className={`grid grid-row-1
            ${i18n.language === "en" ? "pt-16 xl:pt-10" : "pt-16"}
            `}
            >
              <img
                className="pb-5 sm:hidden"
                src="/assets/icons/megaphone.png"
                alt=""
              />
              <p
                className={`font-title1 font-bold text-[40px] lg:text-4xl md:text-xl text-lavenderColor sm:text-lavenderColor sm:text-base
              ${
                i18n.language === "en"
                  ? "w-[550px] sm:-mt-52 sm:-ml-10 sm:text-center sm:w-[275px] sm:h-[100px]"
                  : "w-[550px] sm:-mt-80 sm:mr-36 sm:w-[200px] sm:h-[50px]"
              }
              `}
              >
                {t("containers.ScreenshotsContainer.scheduleScreenTitle")}
              </p>{" "}
              <br />
              <p
                className={`font-subTitle1 text-lavenderColor w-[550px] font-light pt-0 text-xl lg:text-lg md:text-sm sm:text-xs sm:text-center
              ${
                i18n.language === "en"
                  ? "sm:-mt-48 sm:-ml-9 sm:w-[300px] sm:h-[50px]"
                  : "sm:-mt-72 sm:mr-10 sm:w-[300px] sm:h-[50px] sm:font-MadaExtraLight sm:text-lavenderColor sm:opacity-80"
              }
              `}
              >
                {t("containers.ScreenshotsContainer.scheduleScreenDescreption")}
              </p>
            </div>
            <div
              className={`transform 
                        ${
                          i18n.language === "en"
                            ? "translate-x-[70px] translate-y-[-200px] sm:translate-x-0 sm:-translate-y-[450px]"
                            : "translate-x-[205px] translate-y-[-200px] lg:translate-x-[0px] xl:translate-x-[0px] sm:translate-x-[-72px] sm:translate-y-[-515px]"
                        }  
                        `}
            >
              {navigationButtons}
            </div>
            <div
              className={`transform
                        ${
                          i18n.language === "en"
                            ? "-translate-x-[300px] -translate-y-[476px] 2xl:-translate-y-[400px] xl:translate-x-[-400px] xl:translate-y-[-466px] lg:translate-x-[-600px] lg:translate-y-[-385px] md:translate-x-[-800px] md:translate-y-[-355px] sm:-translate-x-3 sm:-translate-y-[630px]"
                            : "-translate-x-[780px] -translate-y-[420px] 2xl:-translate-y-[380px] xl:translate-x-[-850px] xl:translate-y-[-410px] lg:translate-x-[-1000px] lg:translate-y-[-365px] md:translate-x-[-1110px] md:translate-y-[-358px] sm:-translate-x-[2265px] sm:translate-y-[-720px]"
                        }`}
            >
              {this.getPresentableSlides().map((slide, presentableIndex) => (
                <Slider
                  key={presentableIndex}
                  content={slide.content}
                  moveSlide={this.moveSlide}
                  offsetRadius={this.clampOffsetRadius(offsetRadius)}
                  index={presentableIndex}
                  animationConfig={animationConfig}
                  delta={""}
                  down={""}
                  up={""}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (this.state.index === 2) {
      return (
        <div>
          <div
            className={`relative grid-row-1
          ${
            i18n.language === "en"
              ? "translate-x-32 xl:pt-10 lg:pt-28 md:pt-48 md:translate-x-14 sm:translate-x-10 sm:translate-y-[580px]"
              : "-translate-x-[650px] lg:pt-28 lg:-translate-x-[450px] md:pt-40 md:-translate-x-96 sm:translate-x-10 sm:translate-y-[600px]"
          }
          `}
          >
            <div
              className={`grid grid-row-1
            ${i18n.language === "en" ? "pt-16 xl:pt-10" : "pt-16"}
            `}
            >
              <img
                className="pb-5 sm:hidden"
                src="/assets/icons/binoculars.png"
                alt=""
              />
              <p
                className={`font-title1 font-bold text-[40px] lg:text-4xl md:text-xl text-lavenderColor sm:text-lavenderColor sm:text-base
               ${
                 i18n.language === "en"
                   ? "w-[550px] sm:-mt-52 sm:-ml-10 sm:text-center sm:w-[275px] sm:h-[100px]"
                   : "w-[550px] sm:-mt-60 sm:mr-32 sm:w-[200px] sm:h-[50px]"
               }
              `}
              >
                {t("containers.ScreenshotsContainer.homeScreenTitle")}
              </p>{" "}
              <br />
              <p
                className={`font-subTitle1 text-lavenderColor w-[550px] font-light pt-0 text-xl lg:text-lg md:text-sm sm:text-xs sm:text-center sm:w-80
              ${
                i18n.language === "en"
                  ? "sm:-mt-48 sm:-ml-9 sm:w-[300px] sm:h-[50px]"
                  : "sm:-mt-52 sm:mr-10 sm:w-[300px] sm:h-[50px] sm:font-MadaExtraLight sm:text-lavenderColor sm:opacity-80"
              }
              `}
              >
                {t("containers.ScreenshotsContainer.homeScreenDescreption")}
              </p>
            </div>
            <div
              className={`transform
                        ${
                          i18n.language === "en"
                            ? "translate-x-[70px] translate-y-[-200px] sm:translate-x-0 sm:-translate-y-[450px]"
                            : "translate-x-[205px] translate-y-[-200px]  lg:translate-x-[0px] xl:translate-x-[0px] sm:translate-x-[-72px] sm:translate-y-[-435px]"
                        }  
                        `}
            >
              {navigationButtons}
            </div>
            <div
              className={`transform 
                        ${
                          i18n.language === "en"
                            ? "-translate-x-[300px] -translate-y-[476px] 2xl:-translate-y-[435px] xl:translate-x-[-400px] xl:translate-y-[-466px] lg:translate-x-[-600px] lg:translate-y-[-400px] md:translate-x-[-800px] md:translate-y-[-355px] sm:-translate-x-3 sm:-translate-y-[630px]"
                            : "-translate-x-[780px] -translate-y-[420px] 2xl:-translate-y-[435px] xl:translate-x-[-850px] xl:translate-y-[-410px] lg:translate-x-[-1000px] lg:translate-y-[-415px] md:translate-x-[-1110px] md:translate-y-[-325px] sm:-translate-x-[2265px] sm:translate-y-[-640px]"
                        }`}
            >
              {this.getPresentableSlides().map((slide, presentableIndex) => (
                <Slider
                  key={presentableIndex}
                  content={slide.content}
                  moveSlide={this.moveSlide}
                  offsetRadius={this.clampOffsetRadius(offsetRadius)}
                  index={presentableIndex}
                  animationConfig={animationConfig}
                  delta={""}
                  down={""}
                  up={""}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}



