import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { Navigation } from './Navigation';

describe('<Navigation />', () => {
  it('render the drawer correctly', () => {
    expect.hasAssertions();
    const sections = [
      { title: 'title1', links: [{ title: 'Link 1', href: '/link1' }] },
      { title: 'title2', links: [{ title: 'Link 2', href: '/link2' }] },
    ];
    render(<Navigation sections={sections} />);

    // Open the drawer
    const label = screen.getByLabelText('open menu');
    fireEvent.click(label);

    // Check the drawer' links are visible
    const link = screen.getByText('Link 1');
    expect(link).toBeVisible();
  });
});
