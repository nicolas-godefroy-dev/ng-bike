import { render, screen } from '@testing-library/react';
import React from 'react';

import { HeroWithImage } from './HeroWithImage';

describe('<HeroWithImage />', () => {
  it('should render title', () => {
    expect.hasAssertions();
    render(<HeroWithImage title="Test title" />);

    const titleElement = screen.getByText('Test title');
    expect(titleElement).toBeInTheDocument();
  });

  it('should render ctaHref as href of Link', () => {
    expect.hasAssertions();
    render(<HeroWithImage ctaHref="/test-url" ctaText="Test CTA" />);

    const ctaElement = screen.getByText('Test CTA');
    expect(ctaElement).toHaveAttribute('href', '/test-url');
  });
});
