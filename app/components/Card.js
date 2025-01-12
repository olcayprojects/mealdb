import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ recipe }) {
  // console.log(recipe);
  return (
    <Link href={``}>
      {recipe.strInstructions ? (
        <div className="align-middle border-2 border-gray-300 hover:border-black">
          <h1 className="text-center font-bold uppercase">{recipe.strMeal}</h1>
          <div className="flex h-screen">
            <Image
              src={recipe?.strMealThumb}
              width={350}
              height={350}
              alt="meal image"
              priority={true}
              className="w-full"
            />
            <div className="arama">
              <div className="px-4 border m-2 w-full">
                <h3 className="uppercase font-semibold">Ingredients:</h3>
                <ul className="mx-2 list-decimal hover:list-inside">
                  {Object.keys(recipe)
                    .filter(
                      (key) => key.startsWith("strIngredient") && recipe[key]
                    )
                    .map((key, index) => (
                      <li className="" key={index}>
                        {recipe[`strIngredient${index + 1}`]} :
                        {recipe[`strMeasure${index + 1}`]}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="m-2 border">
                <h3 className="text-center font-semibold uppercase">
                  Instructions:
                </h3>
                <pre className="text-wrap mx-2">{recipe.strInstructions}</pre>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="align-middle border-2 border-gray-300 hover:border-black">
          <h1 className="text-center font-bold uppercase">
            {recipe.strMeal.substring(0, 36)}
          </h1>
          <div className="flex">
            <Image
              src={recipe?.strMealThumb}
              width={350}
              height={350}
              alt="meal image"
              priority={true}
              className=""
            />
          </div>
        </div>
      )}
    </Link>
  );
}

export default Card;
