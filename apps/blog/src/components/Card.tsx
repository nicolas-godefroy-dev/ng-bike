import { Nullable } from '@ng-bike/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type CardProps = {
  imageSrc: Nullable<string>;
  title: Nullable<string>;
  subtitle: Nullable<string>;
  ctaText: Nullable<string>;
  ctaHref: Nullable<string>;
};

export const Card: React.FC<CardProps> = ({ imageSrc, title, subtitle, ctaText, ctaHref }) => (
  <div className="shadow-xl card w-96 bg-base-100">
    <figure>
      <Image src={imageSrc ?? '#'} alt="" unoptimized />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{subtitle}</p>
      <div className="justify-end card-actions">
        <Link href={ctaHref ?? ''} className="btn btn-primary">
          {ctaText}
        </Link>
      </div>
    </div>
  </div>
);
