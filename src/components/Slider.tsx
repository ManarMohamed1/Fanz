import { Spring } from "react-spring/renderprops";

const Slider = (props: any) => {
  const offsetFromMiddle = props.index - props.offsetRadius;
  const totalPresentables = 2 * props.offsetRadius + 1;
  const distanceFactor =
    1 - Math.abs(offsetFromMiddle / (props.offsetRadius + 1));

  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (props.offsetRadius + 1));

  let translateY = -24;

  if (props.offsetRadius !== 0) {
    if (props.index === 0) {
      translateY = 30;
    } else if (props.index === totalPresentables - 1) {
      translateY = -70;
    }
  }

  if (offsetFromMiddle === 0 && props.down) {
    translateY += props.delta[1] / (props.offsetRadius + 1);
    if (translateY > -40) {
      props.moveSlide(-1);
    }
    if (translateY < -100) {
      props.moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  return (
    <Spring
      to={{
        transform: `translateX(550%) translateY(${translateY}%) scale(${distanceFactor})`,
        top: 0,
        opacity: distanceFactor * distanceFactor,
      }}
      config={props.animationConfig}
    >
      {(style: any) => {
        return (
          <div
            className="absolute h-0 w-64 -ml-40 
                flex transform translate-x-40 -translate-y-10
                sm:w-[200px] sm:h-0 sm:inset-x-[-1043px] sm:ml-1"
            style={{
              ...style,
              zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2),
            }}
          >
            <div
              className="lg:w-[200px] lg:-translate-x-16 md:w-[150px] md:-translate-x-0
                     transform -translate-x-28 -translate-y-40
                    sm:w-[120px] sm:translate-x-[-2%] sm:translate-y-[30%]"
              onClick={() => props.moveSlide(offsetFromMiddle)}
            >
              {props.content}
            </div>
          </div>
        );
      }}
    </Spring>
  );
};

export default Slider;
