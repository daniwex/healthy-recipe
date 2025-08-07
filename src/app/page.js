import Nav from "./nav/layout";
import "./globals.css";
import Button from "./components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="w-100 md:text-center px-5 md:px-0">
        <h1 className="text-green-c-500">Healthy means, zero fuss</h1>
        <div className="text-green-c-500 mb-8 pt-5 md:pt-10 flex md:justify-center w-full">
          <p className="md:w-4/12">
            Discover eight quick, whole food recipes that you can cook tonight{" "}
            <span>no processed junk, no guesswork</span>
          </p>
        </div>
        <Link
          className="py-3 px-5 bg-green-c-500 text-white text-sm rounded-md"
          href="/recipes"
        >
          Start exploring
        </Link>
      </div>

      <div className="section">
        <div className="w-full md:flex md:justify-center justify-start relative">
          <img
            className="absolute my-img w-[4000px] md:h-[1000px]"
            src="/assets/images/pattern-squiggle-1.svg"
          />
          <img
            className="mx-5 md:mx-0 border-w rounded-xl h-[150px] md:h-[600px]"
            src="/assets/images/image-home-hero-large.webp"
          />
        </div>
      </div>

      <div className="section px-5 md:px-0">
        <div className="w-full md:text-center">
          <h2>What you'll get</h2>
        </div>

        <div className="flex relative pb-20 underline-c flex-col gap-y-10 md:gap-y-0 md:flex-row pt-10 w-full md:justify-evenly md:pt-20 md:gap-x-10">
          <div className="flex flex-col gap-y-4">
            <div className="py-2 px-3 rounded-lg border bg-white w-1/6">
              <img src="/assets/images/icon-whole-food-recipes.svg" />
            </div>
            <h3>Whole-food recipes</h3>
            <span>Each dish uses everyday, unprocesses ingredients</span>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="py-2 px-3 rounded-lg border bg-white w-1/6">
              <img src="/assets/images/icon-minimum-fuss.svg" />
            </div>
            <h3>Minimum fuss</h3>
            <span>Each dish uses everyday, unprocesses ingredients</span>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="py-2 px-3 rounded-lg border bg-white w-1/6">
              <img src="/assets/images/icon-search-in-seconds.svg" />
            </div>
            <h3>Search in seconds</h3>
            <span>Each dish uses everyday, unprocesses ingredients</span>
          </div>
        </div>
      </div>

      <div className="section px-5 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
          <div className="pb-5 md:flex md:flex-col md:px-20">
            <div className="md:w-4/5">
              <h2 className="pb-5">Built for real life</h2>
              <p>
                Cooking shouldn't be complicated. These recipes come in under{" "}
                <span>30 minutes</span>
                of active time, fit busy schedules, and taste good enough to
                repeat. Wheather you're new to the kitchen or just need fresh
                ideas, we've got you covered
              </p>
            </div>
          </div>
          <div>
            <img
              className="rounded-lg"
              src="/assets/images/image-home-real-life-small.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
