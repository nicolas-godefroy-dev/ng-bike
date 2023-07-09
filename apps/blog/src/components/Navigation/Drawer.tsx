import { Nullable } from '@ng-bike/utils';
import Link from 'next/link';
import React from 'react';

export type DrawerLink = {
  title: Nullable<string>;
  href: Nullable<string>;
};

export type DrawerSection = {
  title: string;
  links: DrawerLink[];
};

export type DrawerProps = {
  sections: DrawerSection[];
  drawerId: string;
};

export const Drawer = ({ sections, drawerId }: DrawerProps) => (
  <div className="z-40 drawer-side">
    <label htmlFor={drawerId} className="drawer-overlay" aria-label="close menu" />
    <aside className="h-full px-0 max-w-100 bg-base-100">
      <header className="flex items-center px-4 pt-3">
        <Link href="/" className="text-xl normal-case btn btn-ghost hover:bg-transparent">
          Bike
        </Link>
      </header>
      {sections.map(({ title, links }) => (
        <ul key={title} className="px-4 menu menu-md">
          <li></li>
          <li className="menu-title">{title}</li>
          {links.map((l) => (
            <li key={l.title}>
              <Link href={l.href ?? '#'}>{l.title}</Link>
            </li>
          ))}
        </ul>
      ))}
    </aside>
  </div>
);
