import { Nullable } from '@ng-bike/utils';
import { ImageFieldImage } from '@prismicio/client';
import { PrismicImage } from '@prismicio/react';
import React from 'react';

type FeaturedImageProps = {
  image?: Nullable<ImageFieldImage>;
};

export const FeaturedImage: React.FC<FeaturedImageProps> = ({ image }) => (
  <PrismicImage field={image} />
);
