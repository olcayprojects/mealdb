"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState("Chicken");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchRecipes = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
        );
        if (!res.ok) {
          throw new Error("error");
        }
        const result = await res.json();
        setRecipes(result?.meals);
        console.log(recipes);

        const data = await response.json();
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchRecipes();
  }, [name]);

  return (
    <div>
      <Header />
      <Search setName={setName} setRecipes={setRecipes} />

      <div className="flex items-center justify-center p-10 ">
        {loading ? (
          <>
            <h1 className="text-center text-3xl">Loading...</h1>
          </>
        ) : (
          <>
            <div className="flex flex-wrap flex-col lg:flex-row items-center gap-2">
              {recipes.map((recipe) => (
                <Card key={recipe?.idMeal} recipe={recipe} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
