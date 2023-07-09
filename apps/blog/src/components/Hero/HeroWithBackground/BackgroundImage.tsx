import { ImageField } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import React from 'react';

export type BackgroundImageProps = {
  image?: ImageField<never>;
};

export const BackgroundImage: React.FC<BackgroundImageProps> = ({ image }) => (
  <div className="absolute top-0 left-0 w-full h-full">
    <PrismicNextImage field={image} alt="" fill className="object-cover w-full h-full" />
    <div className="absolute top-0 left-0 w-full h-full bg-[#000] bg-opacity-40" />
  </div>
);
