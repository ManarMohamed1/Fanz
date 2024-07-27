import { t } from "i18next";
import Questions from "src/components/Questions";

const FAQs = () => {
  return (
    <div
      id={t("FAQ")}
      className="pt-24 sm:pt-[43px] px-96 xl:px-80 lg:px-60 md:px-20 sm:px-7 fixd md:mr-10"
    >
      <h1 className="flex text-center mb-6 sm:w-[342px] text-faqColor font-ArabicRegular text-4xl sm:text-[24px] md:text-4xl font-medium sm:font-medium">
        {" "}
        {t("containers.QuestionContainers.title")}
      </h1>
      <Questions />
    </div>
  );
};

export default FAQs;
