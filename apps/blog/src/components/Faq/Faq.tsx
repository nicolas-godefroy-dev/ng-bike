import { Nullable } from '@ng-bike/utils';
import React from 'react';

import { FaqItem, FaqItemProps } from './FaqItem';

export type FaqItem = Omit<FaqItemProps, 'id'>;

export type FaqProps = {
  title?: Nullable<string>;
  faqs?: FaqItem[];
};

export const Faq: React.FC<FaqProps> = ({ title, faqs }) => (
  <section className="w-full max-w-screen-xl px-5 mx-auto py-9">
    <h2 className="text-5xl font-semibold leading-[1.15] mb-9">{title}</h2>
    <ul className="flex flex-col w-full gap-2 p-0 m-0">
      {faqs?.map(({ question, answer }, index) => (
        <FaqItem
          key={`question-${index}`}
          id={`question-${index}`}
          question={question}
          answer={answer}
        />
      ))}
    </ul>
  </section>
);
