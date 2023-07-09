import Link from 'next/link';
import React from 'react';

export type NavbarProps = {
  drawerId: string;
};

export const Navbar = ({ drawerId }: NavbarProps) => (
  <>
    <div className="fixed top-0 z-30 flex justify-center w-full h-16 transition-all duration-100 shadow-sm bg-base-100 bg-opacity-90 backdrop-blur text-base-content">
      <nav className="w-full max-w-screen-xl px-4 mx-auto bg-transparent navbar">
        <div className="navbar-start">
          <label
            htmlFor={drawerId}
            aria-label="open menu"
            className="btn btn-square btn-ghost hover:bg-transparent">
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
          </label>
          <Link href="/" className="text-xl normal-case btn btn-ghost hover:bg-transparent">
            Bike
          </Link>
        </div>
        <div className="navbar-end">
          <span className="btn btn-primary">Sign up</span>
        </div>
      </nav>
    </div>
    {/* Navbar placeholder */}
    <div className="w-full h-16 bg-base-100" />
  </>
);
