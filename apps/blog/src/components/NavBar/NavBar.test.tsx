import { render, screen } from '@testing-library/react';
import React from 'react';

import { Navbar } from './Navbar';

describe('<Navbar />', () => {
  it('renders correctly with given links', () => {
    expect.hasAssertions();
    const links = [
      { title: 'Link 1', href: '/link1' },
      { title: 'Link 2', href: '/link2' },
    ];
    render(<Navbar links={links} />);

    links.forEach((link) => {
      expect(screen.getAllByText(link.title)[0]).toBeInTheDocument();
      expect(screen.getAllByText(link.title)[0]).toHaveAttribute('href', link.href);
    });
  });
});
