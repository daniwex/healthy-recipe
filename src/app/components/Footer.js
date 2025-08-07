"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const router = usePathname();
  
    return (
      <footer className="section">
           {!router.includes("/recipes") ? 
        <div className="md:mx-20 rounded-lg overflow-hidden bg-neutral-300x h-[350px] flex flex-col items-center justify-center relative gap-y-5 px-5 md:px-0">
          <img className="fork" src="/assets/images/pattern-fork.svg" />
          <img className="knife" src="/assets/images/pattern-knife.svg" />
          <h2>Ready to cook smarter?</h2>
          <p>
            Hit the button, pick a recipe, and get dinner on the table
            <span>fast</span>
          </p>
          <Link
            className="py-3 px-5 bg-green-c-500 text-white text-sm rounded-md"
            href="/recipes"
          >
            Browse recipes
          </Link>
        </div>
           : <></>}
        <div className="md:px-20 px-5 py-10 flex md:justify-between md:flex-row flex-col-reverse items-center gap-y-5">
          <p>Made with ❤️ and 🏂</p>
          <div className="flex gap-x-4">
            <a href="" target="_blank">
              <img src="/assets/images/icon-instagram.svg" />
            </a>
            <a href="" target="_blank">
              <img src="/assets/images/icon-bluesky.svg" />
            </a>
            <a href="" target="_blank">
              <img src="/assets/images/icon-tiktok.svg" />
            </a>
          </div>
        </div>
      </footer>
    );
}
