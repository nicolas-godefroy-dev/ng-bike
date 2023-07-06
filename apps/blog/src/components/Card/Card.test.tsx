import { render, screen } from '@testing-library/react';
import React from 'react';

import { Card } from './Card';

describe('<Card />', () => {
  it('should render title', () => {
    expect.hasAssertions();
    const title = 'Test title';

    render(<Card title={title} />);
    const titleElement = screen.getByText(title);

    expect(titleElement).toBeInTheDocument();
  });

  it('should render ctaHref as href of Link', () => {
    expect.hasAssertions();
    const props = {
      ctaText: 'Test CTA Text',
      ctaHref: '/path/to/cta',
    };

    render(<Card {...props} />);
    const ctaElement = screen.getByText(props.ctaText);
    expect(ctaElement).toHaveAttribute('href', props.ctaHref);
  });
});
