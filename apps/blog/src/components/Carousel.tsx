import { Nullable } from '@ng-bike/utils';
import Image from 'next/image';
import React from 'react';

type CarouselProps = {
  images: Nullable<string>[];
};

export const Carousel: React.FC<CarouselProps> = ({ images }) => (
  <div className="max-w-md p-4 space-x-4 carousel carousel-center bg-neutral rounded-box">
    {images.map((src) => (
      <div className="carousel-item" key={src}>
        <Image src={src ?? ''} alt="" className="rounded-box" unoptimized />
      </div>
    ))}
  </div>
);
