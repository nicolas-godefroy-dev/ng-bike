import { Nullable } from '@ng-bike/utils';
import React from 'react';

export type FaqItemProps = {
  id: string;
  question?: Nullable<string>;
  answer?: Nullable<string>;
};

export const FaqItem: React.FC<FaqItemProps> = ({ id, question, answer }) => (
  <li aria-labelledby={id} data-testid={id} className="collapse collapse-plus bg-base-200">
    <input type="radio" name={id} />
    <div className="text-xl font-medium collapse-title">{question}</div>
    <div className="collapse-content">
      <p>{answer}</p>
    </div>
  </li>
);
