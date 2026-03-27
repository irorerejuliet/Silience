"use client";
import { useState } from "react";
import { questionAndAnswerData } from "./constant/questionAndAnswerData";

export type faq = {
  id: number;
  question: string;
  answer: string;
};

type FAQsProps = {
  faqs: faq[];
  title: string;
  subTitle: string;
};

const QuestionAndAnswer = ({faqs, title, subTitle }: FAQsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className=" px-4 sm:px-6 py-20 sm:py-28 lg:py-[140px] bg-white text-black">
     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
         

          {/* RIGHT */}
          <div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-black/10 py-5 sm:py-6 "
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-start justify-between gap-4 text-left"
                >
                  <span className="text-[16px] sm:text-[18px] font-medium  text-xl font-gtamerica leading-7">
                    {faq.question}
                  </span>

                  <span className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full  text-lg sm:text-xl">
                    {openIndex === index ? "–" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.6] text-black/70 max-w-[640px] ">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
     
    </section>
  );
};

export default QuestionAndAnswer;
