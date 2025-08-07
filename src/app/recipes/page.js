"use client";
import React, { useState } from "react";
import data from "../../../db/data.json";
import "../globals.css";
import RecipeContainer from "../components/Recipe";

export default function pages() {
  const [recipe, setRecipe] = useState(data);

  function filterRecipe(e, fallback) {
    const search = e.target.value;
    if (search == "") {
      setRecipe(data);
    } else {
      fallback();
    }
  }

  return (
    <div>
      <div className="px-5 md:px-0 md:text-center md:flex justify-center">
        <div className="md:w-2/3 flex flex-col gap-y-5">
          <h2>Explore our simple, healthy recipes</h2>
          <div className="flex justify-center">
            <p className="md:w-3/5">
              Discover eight quick, whole-food dishes that fit real-life
              schedules and taste amazing. Use the search bar to find a recipe
              by name or ingredient, or simply scroll the list and let something
              delicious catch your eye.
            </p>
          </div>
        </div>
      </div>

      <div className="section md:px-10 px-5 underline-c relative pb-[100px]">
        <div className="md:flex justify-between items-center">
          <div className="flex flex-col md:flex-row gap-y-3 gap-x-5">
            <select
              className="block text-center w-full border rounded-lg"
              name="Max Prep Time"
              onChange={(e) =>
                filterRecipe(
                  e,
                  setRecipe(
                    data.filter(
                      (el) => el.prepMinutes == parseInt(e.target.value)
                    )
                  )
                )
              }
            >
              <option value="">Max Prep Time</option>
              <option value="0">0 minutes</option>
              <option value="5">5 minutes</option>
              <option value="10">10 minutes</option>
              <option value="">clear</option>
            </select>
            <select
              className="border text-center w-full rounded-lg"
              name="Max Cook Time"
              onChange={(e) =>
                filterRecipe(
                  e,
                  setRecipe(
                    data.filter(
                      (el) => el.cookMinutes == parseInt(e.target.value)
                    )
                  )
                )
              }
            >
              <option value="">Max Cook Time</option>
              <option value="0">0 minutes</option>
              <option value="5">5 minutes</option>
              <option value="10">10 minutes</option>
              <option value="">clear</option>
            </select>
          </div>

          <div className="pt-3 md:pt-0">
            <input
              onChange={(e) =>
                filterRecipe(
                  e,
                  setRecipe(
                    data.filter((el) =>
                      el.title.toLowerCase().includes(e.target.value)
                    )
                  )
                )
              }
              className="p-2 w-full border rounded-lg md:w-[300px]"
              type="search"
              placeholder="Search by name or ingredient..."
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-7 pt-10">
          <RecipeContainer recipes={recipe} />
        </div>
      </div>
    </div>
  );
}
