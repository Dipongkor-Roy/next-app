"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession();
  const links = [
    {
      slug: "/users",
      title: "Users",
    }
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links.map((link) => (
              <li key={link.slug}>
                <Link href={link.slug}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          Next App
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => (
            <li key={link.slug}>
              <Link href={link.slug}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {status === "authenticated" ? (
          session && session.user ? (
            <>
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-sm ">
                  {" "}
                  {session.user.name}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content  z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
                >
                  <li>
                    <Link href="/api/auth/signout">Sign Out</Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <span></span>
          )
        ) : (
          <><button className="btn btn-sm">
          <Link href="/api/auth/signin">LogIn</Link>
        </button></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
