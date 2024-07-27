import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const [modelOpen, setmodelOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  console.log('modelOpen', modelOpen);
  

  return (
    <div
      id={t("Features")}
      className="flex items-center justify-center pt-[108px] flex-col bg-darkBackground"
    >
      <div className="text-lavenderColor text-5xl sm:text-2xl 2xl:text-6xl font-subTitle md:text-[40px] pb-[37px] sm:pb-[10px]">
        {t("containers.FeaturesContainer.title")}
      </div>
      <div className="text-lavenderColor text-2xl 2xl:text-2xl sm:text-[12px] font-title1 text-center md:w-[370px] sm:w-[320px] sm:leading-4 w-[850px] md:text-[18px]">
        {t("containers.FeaturesContainer.subtitle")}
      </div>
      <div className="flex pt-[51px] items-end">
        <button className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group">
          <img
            className="2xl:w-[976px] 2xl:h-[604px] lg:w-[790px] lg:h-[504px] md:w-[591px] md:h-[397px] sm:w-[291px] rounded-3xl shadow-2xl"
            src="/assets/images/features-image-video.png"
            width={768}
            height={432}
            alt="Modal video thumbnail"
          />
          <div className="absolute rounded-full opacity-50 bg-mangoColor  animate-jump animate-infinite animate-duration-[1300ms] animate animate-delay-100 animate-ease-linear animate-normal animate-fill-backwards 2xl:w-[220px] 2xl:h-[220px] xl:w-[159px] xl:h-[159px] w-[180px] h-[180px] md:w-[180px] md:h-[180px] sm:w-[67px] sm:h-[67px]" />
          <img
            className="absolute 2xl:w-[230px] 2xl:h-[230px] lg:w-[180px] lg:h-[180px] md:w-[180px] md:h-[180px] sm:w-[70px] sm:h-[70px]"
            src="/assets/images/features-play-video-logo.png"
            alt=""
            onClick={() => {
              setmodelOpen(true);
            }}
          />
          <img
            className="absolute pt-[280px] left-[-200px] 2xl:pt-[390px] lg:left-[-150px] md:left-[-150px] sm:left-[-55px] sm:pt-[80px] sm:w-[140px] animate-jump animate-once animate-duration-[800ms] animate-delay-500 animate-ease-in-out animate-alternate animate-fill-both"
            src="/assets/images/features-logo.png"
            alt=""
          />
        </button>
        <Transition show={modelOpen} as={Fragment}>
          <Dialog onClose={() => setmodelOpen(false)}>
            <Transition.Child
              className="fixed inset-0 z-[99999] bg-black opacity-90 transition-opacity"
              enter="transition ease-out duration-200"
            />
            {/* modal video */}
            <Transition.Child
              className="fixed inset-0 z-[99999] flex p-6"
              enter="transition ease-out duration-300"
              enterFrom="opacity-0 scale-75"
              enterTo="opacity-100 scale-100"
              leave="transition ease-out duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-75"
            >
              <div className="max-w-5xl mx-auto h-full flex items-center">
                <Dialog.Panel className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                  <video
                    src="/assets/video/features-video.mp4"
                    width="1920"
                    height="1080"
                    loop
                    controls
                    autoPlay
                  ></video>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition>
      </div>
      <div className="xl:pt-[100px] xl:pr-[830px] 2xl:pt-[100px] sm:pt-[100px] 2xl:pr-[990px] lg:pr-[700px] lg:pt-[100px] md:pt-[120px] md:pr-[460px]"></div>
    </div>
  );
}

export default Features;
