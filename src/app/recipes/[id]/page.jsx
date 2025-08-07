"use client";
import React, { useEffect, useState } from "react";
import data from "../../../../db/data.json";
import "../../globals.css";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import RecipeContainer from "@/app/components/Recipe";
import { takeRandom } from "@/app/utils/util";

export default function page() {
  const id = useParams();
  const [recipe, setRecipe] = useState(data.filter((el) => el.id == id.id));
  const [moreRecipe, setMoreRecipe] = useState(
    takeRandom(data, 3, parseInt(id.id))
  );
  if (recipe.length > 0) {
    const r = recipe[0];
    return (
      <div className="px-5 md:px-10">
        <div className="pb-5">
          <Link className="text-neutral-500" href="/recipes">
            Recipes
          </Link>{" "}
          / {r.title}
        </div>
        <div className="md:flex gap-x-7 relative underline-c pb-[100px]">
          <div>
            <img className="rounded-lg" src={r.image.large} alt="" />
          </div>
          <div className="pt-3 flex flex-col gap-y-5">
            <h1>{r.title}</h1>
            <p>{r.overview}</p>
            <div className="flex gap-6">
              <span className="flex">
                <img src="/assets/images/icon-servings.svg" alt="" /> Serving:{" "}
                {r.servings}
              </span>
              <span className="flex">
                <img src="/assets/images/icon-prep-time.svg" alt="" />
                Prep: {r.prepMinutes} mins
              </span>
              <span className="flex">
                <img src="/assets/images/icon-cook-time.svg" alt="" />
                Cook: {r.cookMinutes} mins
              </span>
            </div>
            <div>
              <span>Ingredients:</span>
              {r.ingredients.map((el) => (
                <div key={el} className="flex items-center gap-x-3 pt-2">
                  <img
                    className=""
                    src="/assets/images/icon-bullet-point.svg"
                    alt=""
                  />
                  {el}
                </div>
              ))}
            </div>
            <div>
              <span>Instructions:</span>
              {r.instructions.map((el) => (
                <div key={el} className="flex items-center gap-x-3 pt-2">
                  <img
                    className=""
                    src="/assets/images/icon-bullet-point.svg"
                    alt=""
                  />
                  {el}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-10">
          <h3>More recipes</h3>
          <div className="grid md:grid-cols-3 gap-7 relative underline-c pb-[100px] pt-10">
            <RecipeContainer recipes={moreRecipe} />
          </div>
        </div>
      </div>
    );
  }
}
