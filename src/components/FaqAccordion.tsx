"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-3xl border border-sky-300/15 bg-white/[0.04] shadow-2xl shadow-slate-950/20"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="text-base font-semibold text-white md:text-lg">
                {item.question}
              </span>
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-sky-400/10 text-xl text-sky-200">
                {isOpen ? "-" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div className="border-t border-sky-300/10 px-6 pb-6 pt-2 text-sm leading-7 text-slate-300 md:text-base">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
