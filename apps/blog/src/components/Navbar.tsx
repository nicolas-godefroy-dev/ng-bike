import Link from "next/link";
import React from 'react';

import { createClient } from "@/libs/prismic";

export const Navbar = async () => {
  const client = createClient();

  const [blogPosts, pages] = await Promise.all([
    client.getAllByType("blog_post"),
    client.getAllByType("page")
  ])

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {
              pages.map((page) => (
                <li key={page.id}><Link href={`/${page.uid}`}>{page.data.title}</Link></li>
              ))
            }
            <li>
              <a>Blog</a>
              <ul className="p-2">
                {
                  blogPosts.map((post) => (
                    <li key={post.id}><Link href={`/blog/${post.uid}`}>{post.data.title}</Link></li>
                  ))
                }
              </ul>
            </li>
          </ul>
        </div>
        <Link className="text-xl normal-case btn btn-ghost" href="/">FakeCompany</Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          {
            pages.map((page) => (
              <li key={page.id}><Link href={`/${page.uid}`}>{page.data.title}</Link></li>
            ))
          }
          <li tabIndex={0}>
            <details>
              <summary>Blog</summary>
              <ul className="p-2">
                {
                  blogPosts.map((post) => (
                    <li key={post.id}><Link href={`/blog/${post.uid}`}>{post.data.title}</Link></li>
                  ))
                }
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Sign up</a>
      </div>
    </div>
  )
};

