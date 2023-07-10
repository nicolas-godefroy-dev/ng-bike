import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { Faq } from './Faq';

const defaultProps = {
  title: 'Frequently asked questions',
  faqs: [
    {
      question: 'question 1',
      answer: 'answer 1',
    },
    {
      question: 'question 2',
      answer: 'answer 2',
    },
    {
      question: 'question 3',
      answer: 'answer 3',
    },
  ],
};

describe('<Faq />', () => {
  it('should render title', () => {
    expect.hasAssertions();
    render(<Faq {...defaultProps} />);

    const titleElement = screen.getByText(defaultProps.title);
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the answers', () => {
    expect.hasAssertions();
    render(<Faq {...defaultProps} />);

    // Open the accordion
    const label = screen.getByTestId('question-0');
    fireEvent.click(label);

    const answer = screen.getByText('answer 1');
    expect(answer).toBeVisible();
  });
});
