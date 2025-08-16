"use client";
import Link from "next/link";
import "../globals.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const currentRoute = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className=" px-5 md:px-10 relative">
      <div className="flex justify-between  underline-c items-center w-full">
        <Link className="md:w-1/3" href="/">
          <img
            className="md:w-[300px] w-[160px]"
            src="/assets/images/logo.svg"
            alt=""
          />
        </Link>

        <ul className="md:flex gap-x-5 justify-center hidden md:w-1/3">
          <Link className={`${currentRoute == "/" ? "active" : ""}`} href="/">
            Home
          </Link>
          <Link
            className={`${currentRoute == "/about" ? "active" : ""}`}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`${currentRoute == "/recipes" ? "active" : ""}`}
            href="/recipes"
          >
            Recipes
          </Link>
        </ul>

        <div className="hidden md:flex w-1/3 justify-end">
          <Link
            className="p-2 bg-green-c-500 text-white text-sm rounded-md"
            href="/recipes"
          >
            Browse recipes
          </Link>
        </div>
        <div className="md:hidden">
          <img
            src="/assets/images/icon-hamburger-menu.svg"
            alt=""
            onClick={() => setOpenMenu(() => !openMenu)}
          />
          {openMenu ? (
            <div className="absolute left-0 top-10 px-5 w-full z-10">
              <div className="bg-white p-3">
                <ul className="md:hidden gap-5 justify-center flex flex-col  md:w-1/3">
                  <Link onClick={() => setOpenMenu(false)} href="/">
                    Home
                  </Link>
                  <Link onClick={() => setOpenMenu(false)} href="/about">
                    About
                  </Link>
                  <Link onClick={() => setOpenMenu(false)} href="/recipes">
                    Recipes
                  </Link>
                  <Link
                    className="p-2 w-full text-center bg-green-c-500 text-white text-sm rounded-md"
                    href="/recipes"
                    onClick={() => setOpenMenu(false)}
                  >
                    Browse recipes
                  </Link>
                </ul>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
}
