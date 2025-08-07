'use client'
import Link from "next/link";
import "../globals.css";
import { usePathname } from "next/navigation";

export default function Nav() {
    const currentRoute = usePathname()
    
  return (
    <nav className="flex justify-between relative underline-c items-center w-full px-5 md:px-10">
      <Link className="md:w-1/3" href="/">
        <img className="md:w-[300px] w-[160px]" src="/assets/images/logo.svg"  alt="" />
      </Link>

      <ul className="md:flex gap-x-5 justify-center hidden md:w-1/3">
        <Link className={`${currentRoute == "/" ? 'active' : ''}`} href="/">Home</Link>
        <Link className={`${currentRoute == "/about" ? 'active' : ''}`} href="/about">About</Link>
        <Link className={`${currentRoute == "/recipes" ? 'active' : ''}`} href="/recipes">Recipes</Link>
      </ul>

       <div className="hidden md:flex w-1/3 justify-end">
            <Link className="p-2 bg-green-c-500 text-white text-sm rounded-md"  href="/recipes">
              Browse recipes
            </Link>
        </div> 
        <div className="flex md:hidden">
            <img src="/assets/images/icon-hamburger-menu.svg" />
        </div>
    </nav>
  );
}
