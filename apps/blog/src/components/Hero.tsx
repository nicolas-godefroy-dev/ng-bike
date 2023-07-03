import { Nullable } from "@ng-bike/utils"
import Link from "next/link";
import React from 'react';

type HeroProps = {
  title: Nullable<string>;
  subtitle: Nullable<string>;
  ctaText: Nullable<string>;
  ctaHref: Nullable<string>;
};

export const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaHref }) => (
  <header className="min-h-screen hero bg-base-200">
    <div className="text-center hero-content">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-6">{subtitle}</p>
        <Link href={ctaHref ?? "#"} className="btn btn-primary">{ctaText}</Link>
      </div>
    </div>
  </header>
);

