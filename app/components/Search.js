"use client";
import React, { use, useState } from "react";

function Search({ setName, setRecipes }) {
  const [categories, setCategories] = useState("");
  const [search, setSearch] = useState("");

  const searchRecipes = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      if (!res.ok) {
        throw new Error("error");
      }
      const result = await res.json();
      setRecipes(result?.meals);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center mt-20 mb-4">
        <select
          value={categories}
          onChange={(e) => {
            setCategories(e.target.value);
            setName(e.target.value);
          }}
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-1 rounded-lg
      text-sm focus:outline-none"
        >
          <option value="Chicken">Chicken</option>
          <option value="Beef">Beef</option>
          <option value="Lamb">Lamb</option>
          <option value="Pork">Pork</option>
          <option value="Dessert">Dessert</option>
          <option value="Miscellaneous">Miscellaneous</option>
          <option value="Seafood">Seafood</option>
          <option value="Side">Side</option>
          <option value="Starter">Starter</option>
          <option value="Vegan">Vegan</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Goat">Goat</option>
        </select>
        <h1 className="text-xl font-semibold text-center mx-4 text-gray-500">
          OR
        </h1>
        <input
          value={search || ""}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none "
          type="text"
          placeholder="Search for a recipe"
        />
        <button
          onClick={searchRecipes}
          className="bg-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
    </>
  );
}

export default Search;
