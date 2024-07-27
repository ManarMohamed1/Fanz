import AnimatedNumbers from "react-animated-numbers";
import "../App.css";
import i18n from "src/i18n";

type CounterProps = {
  number: any;
  title: string;
};
const Counter = (props: CounterProps) => {
  return (
    <div className="grid grid-rows-3 justify-center items-center">
      <div
        className={
          "Number text-mangoColor text-8xl lg:text-7xl md:text-5xl tracking-widest text-center font-bold sm:text-2xl sm:text-white"
        }
      >
        <AnimatedNumbers
          includeComma={false}
          locale={i18n.language === "en"? "en-US" : "ar-EG"}
          // fontStyle={{ direction: i18n.language === "en"? "ltr": "rtl" }}
          animateToNumber={props.number}
        />
      </div>
      <p
        className="font-title text-lavenderColor text-4xl md:text-2xl text-center
            sm:text-lg sm:-ml-3"
      >
        {props.title}
      </p>
    </div>
  );
};

export default Counter;
