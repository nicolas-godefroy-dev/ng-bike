import { Nullable } from '@ng-bike/utils';
import { ImageField } from '@prismicio/client';
import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

import { BackgroundImage } from './BackgroundImage';

export type HeroWithBackgroundProps = {
  image?: ImageField<never>;
  title?: Nullable<string>;
  subtitle?: Nullable<string>;
  ctaText?: Nullable<string>;
  ctaHref?: Nullable<string>;
  align?: 'left' | 'center';
};

export const HeroWithBackground: React.FC<HeroWithBackgroundProps> = ({
  image,
  title,
  subtitle,
  ctaText,
  ctaHref,
  align = 'center',
}) => (
  <header className="relative flex flex-col hero bg-base-200">
    {image && <BackgroundImage image={image} />}
    <div
      className={classNames(
        'w-full max-w-screen-xl px-5 py-24 mx-auto relative flex flex-col',
        align === 'left' ? 'text-left items-start' : 'text-center items-center',
      )}>
      <div className="max-w-md text-white">
        <h1 className="text-5xl font-semibold leading-[1.15]">{title}</h1>
        <p className="mt-8 leading-relaxed">{subtitle}</p>
        <Link href={ctaHref ?? '#'} className="mt-6 btn btn-secondary">
          {ctaText}
        </Link>
      </div>
    </div>
  </header>
);
