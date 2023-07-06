import { render, screen } from '@testing-library/react';
import React from 'react';

import { Footer } from './Footer';

describe('<Footer />', () => {
  it('renders the copyright notice', () => {
    expect.hasAssertions();
    render(<Footer />);

    const copyrightNotice = screen.getByText(/Copyright © 2023 - All right reserved/i);
    expect(copyrightNotice).toBeInTheDocument();
  });
});
