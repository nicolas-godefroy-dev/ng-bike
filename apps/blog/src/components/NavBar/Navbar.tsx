import { Nullable } from '@ng-bike/utils';
import Link from 'next/link';
import React from 'react';

export type NavbarLink = {
  title: Nullable<string>;
  href: Nullable<string>;
};

export type NavbarProps = {
  links: NavbarLink[];
};

export const Navbar = ({ links }: NavbarProps) => (
  <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {links.map((l) => (
            <li key={l.title}>
              <Link href={l.href ?? '#'}>{l.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Link className="text-xl normal-case btn btn-ghost" href="/">
        FakeCompany
      </Link>
    </div>
    <div className="hidden navbar-center lg:flex">
      <ul className="px-1 menu menu-horizontal">
        {links.map((l) => (
          <li key={l.title}>
            <Link href={l.href ?? '#'}>{l.title}</Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="navbar-end">
      <span className="btn btn-primary">Sign up</span>
    </div>
  </div>
);
