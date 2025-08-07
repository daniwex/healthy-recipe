'use client'
import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function RecipeContainer({ recipes, onClick }) {
  return (
    <>
      {recipes.map((el) => (
        <div key={el.id} className="bg-white p-1 rounded-lg h-[550px] md:h-[650px] relative">
          <div className="md:h-[400px] h-[350px]">
            <img className="w-full rounded-lg h-full" src={el.image.large} />
          </div>
          <div className="p-2 flex flex-col gap-y-4">
            <h3>{el.title}</h3>
            <p>{el.overview}</p>
            <div className="flex gap-2">
               <span className="flex">
                <img src="/assets/images/icon-servings.svg" alt="" />
                <span className="text-sm">Serving: {el.servings}</span>
              </span>
              <span className="flex">
                <img src="/assets/images/icon-prep-time.svg" alt="" />
                <span className="text-sm">Prep: {el.prepMinutes} mins</span>
              </span>
              <span className="flex">
                <img src="/assets/images/icon-cook-time.svg" alt="" />
                <span className="text-sm">Cook: {el.cookMinutes} mins</span>
              </span>
            </div>
          </div>
          <div className="absolute w-full bottom-1 pr-2">
            <Link className="block py-[10px] text-center bg-green-c-500 text-white text-sm rounded-md w-full" href={`/recipes/${el.id}`}>
              View Recipe
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
