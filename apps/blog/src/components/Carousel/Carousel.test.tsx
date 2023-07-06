import { render, screen } from '@testing-library/react';
import React from 'react';

import { Carousel } from './Carousel';

describe('<Carousel />', () => {
  it('renders the correct number of images', () => {
    expect.hasAssertions();
    const images = ['image1.png', 'image2.png', 'image3.png'];

    render(<Carousel images={images} />);

    const carouselItems = screen.getAllByRole('img');
    expect(carouselItems).toHaveLength(images.length);
  });
});
