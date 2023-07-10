import { Nullable } from '@ng-bike/utils';
import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

export type HeroProps = {
  title?: Nullable<string>;
  subtitle?: Nullable<string>;
  ctaText?: Nullable<string>;
  ctaHref?: Nullable<string>;
  align?: 'left' | 'center';
};

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaHref,
  align = 'center',
}) => (
  <div className="relative flex flex-col hero bg-base-200">
    <div
      className={classNames(
        'w-full max-w-screen-xl px-5 py-24 mx-auto relative flex flex-col',
        align === 'left' ? 'text-left items-start' : 'text-center items-center',
      )}>
      <div className="max-w-md">
        <h1 className="text-5xl font-semibold leading-[1.15]">{title}</h1>
        <p className="mt-8 leading-relaxed">{subtitle}</p>
        <Link href={ctaHref ?? '#'} className="mt-6 btn btn-primary">
          {ctaText}
        </Link>
      </div>
    </div>
  </div>
);
