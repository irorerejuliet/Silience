"use client";
import { useState } from "react";
import {  ChevronUp, ChevronDown, Minus, Plus } from "lucide-react";

export type FAQ = {
  id: number;
  question: string;
  answer: string;
};

type FAQsProps = {
  faqs: FAQ[];
};

const QuestionAndAnswer = ({ faqs }: FAQsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className=" bg-white text-black">
      <p>Frequently asked question</p>
      {faqs.map((faq, index) => (
        <div
          key={faq.id}
          className="border-b border-black/10 py-3 w-full  text-black"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-start justify-between"
          >
            <span className="text-[13px] font-semibold leading-7">
              {faq.question}
            </span>

            <span className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
              {index === 0 ? (
                openIndex === index ? (
                  <ChevronUp size={21} />
                ) : (
                  <ChevronDown size={21} />
                )
              ) : openIndex === index ? (
                <Minus size={18} />
              ) : (
                <Plus size={18} />
              )}
            </span>
          </button>

          {openIndex === index && (
            <p className=" text-[13px] font-semibold leading-[1.6] text-black/70">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </section>
  );
};

export default QuestionAndAnswer;
