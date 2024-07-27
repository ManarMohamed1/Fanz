import { config } from "react-spring";
import Carousel from "../components/Carousel";
import { useState } from "react";


const Screenshots = () => {

  let slides: any = [
    {
      key: 1,
      content: <img className="w-[100%] rounded-3xl" src="/assets/images/carousel1.jpeg" alt="" />,
    },
    {
      key: 2,
      content: <img className="w-[100%] rounded-3xl" src="/assets/images/carousel2.jpeg" alt="" />,
    },
    {
      key: 3,
      content: <img className="w-[100%] rounded-3xl" src="/assets/images/carousel3.jpeg" alt="" />,
    },
  ];

  const [state] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  });

  return (
    <div className="container mx-auto pt-16 sm:bg-darkBackground max-w-[1320px] xl:max-w-[1250px] lg:max-w-[1025px] md:max-w-[750px] sm:pt-[480px] sm:w-[310px] sm:mt-10">
      <div className='relative border sm:border-none sm:shadow-none shadow-2xl lg:mx-10 drop-shadow-sm sm:drop-shadow-none border-x-deep-purple-50 sm:h-0
       border-y-deep-purple-50 shadow-deep-purple-50 bg-darkBackground  rounded-3xl sm:rounded-none'>
        <img src='/assets/images/background.svg' alt='' />
      </div>
      <div className='relative '>
        <div className="absolute top-[-550px] w-0">
        <Carousel
          slides={slides}
          offsetRadius={state.offsetRadius}
          showNavigation={state.showNavigation}
          animationConfig={state.config}
        />
        </div>
      </div>

    </div>
  )
}

export default Screenshots
