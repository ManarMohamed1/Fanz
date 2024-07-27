import { useState } from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Questions = () => {
  const { t } = useTranslation();
  let [open, setOpen] = useState(0);
  const [isOpen, setIsOpen] = useState<any>([]);
  const handleOpen = (value: any, i: any) => {
    let UpdatedOpen = [];
    if (isOpen.includes(value)) {
      isOpen.pop(value);
      UpdatedOpen = [...isOpen];
      setIsOpen(UpdatedOpen);
    } else {
      if (open === 5) {
        open = value;
        setOpen(open);
        isOpen.push(open);
        UpdatedOpen = [...isOpen];
        setIsOpen(UpdatedOpen);
      } else {
        UpdatedOpen = [...isOpen];
        UpdatedOpen.push(value);
        setIsOpen(UpdatedOpen);
      }
    }
  };

  const content = [
    {
      title: "component.QuestionComponent.question",
      content: "component.QuestionComponent.answer",
    },
    {
      title: "component.QuestionComponent.question2",
      content: "component.QuestionComponent.answer2",
    },
    {
      title: "component.QuestionComponent.question3",
      content: "component.QuestionComponent.answer3",
    },
    {
      title: "component.QuestionComponent.question4",
      content: "component.QuestionComponent.answer4",
    },
    {
      title: "component.QuestionComponent.question5",
      content: "component.QuestionComponent.answer5",
    },
  ];

  function Icon(id: any, open: any) {
    return (
      <>
        {isOpen.includes(id) ? (
          <AiOutlineMinus color="#402C5B" />
        ) : (
          <AiOutlinePlus color="#402C5B" />
        )}
      </>
    );
  }

  return (
    <>
      {content.map((item, index) => {
        return (
          <div key={index}>
            <Accordion
              open={isOpen.includes(index)}
              icon={isOpen.includes(index) ? (
                <AiOutlineMinus color="#402C5B" />
              ) : (
                <Icon id={1} open={open} />
              )}
              className={"mb-2 rounded-lg p-[0.15rem] bg-gradient-to-r from-[#e8d2f4] via-[#ebe8f045] to-[#ac74ed]"} 
              placeholder={undefined} 
              onPointerEnterCapture={undefined} 
              onPointerLeaveCapture={undefined}
              >
              <div className="bg-backgroundAppBar rounded-md px-4">
                <div className="h-fill w-full">
                  <AccordionHeader
                    onClick={() => {
                      handleOpen(index, index);
                    } }
                    className={`border-b-0 text-base font-normal font-title1 hover:text-darkpurpleColor text-darkpurpleColor ${open === 1}`} 
                    placeholder={undefined} 
                    onPointerEnterCapture={undefined} 
                    onPointerLeaveCapture={undefined}
                    >
                    {t(item.title)}
                  </AccordionHeader>
                  <AccordionBody className="pt-0 text-base font-normal font-title1 text-darkpurpleColor pb-8">
                    {t(item.content)}
                  </AccordionBody>
                </div>
              </div>
            </Accordion>
          </div>
        );
      })}
    </>
  );
}

export default Questions
