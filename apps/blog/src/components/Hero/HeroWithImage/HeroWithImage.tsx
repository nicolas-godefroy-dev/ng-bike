import { Nullable } from '@ng-bike/utils';
import { ImageField } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import Link from 'next/link';
import React from 'react';

export type HeroWithImageProps = {
  image?: ImageField<never>;
  title?: Nullable<string>;
  subtitle?: Nullable<string>;
  ctaText?: Nullable<string>;
  ctaHref?: Nullable<string>;
};

export const HeroWithImage: React.FC<HeroWithImageProps> = ({
  image,
  title,
  subtitle,
  ctaText,
  ctaHref,
}) => (
  <div className="flex flex-col-reverse justify-between w-full max-w-screen-xl px-5 mx-auto lg:items-center lg:flex-row">
    <div className="max-w-md mt-8 mr-8 lg:mt-0">
      <h1 className="text-5xl font-semibold leading-[1.15]">{title}</h1>
      <p className="mt-8 leading-relaxed">{subtitle}</p>
      <Link href={ctaHref ?? '#'} className="mt-8 btn btn-primary">
        {ctaText}
      </Link>
    </div>
    <PrismicNextImage
      field={image}
      alt=""
      className="object-cover object-center w-full h-[193px] lg:h-[592px] lg:w-[492px]"
      width={492 * 2}
      height={592 * 2}
    />
  </div>
);
