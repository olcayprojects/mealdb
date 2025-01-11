import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ recipe }) {
  return (
    <Link href={`/recipes/${recipe?.idMeal}`}>
      <div className="border-2 border-gray-300 hover:border-black">
        <Image
          src={recipe?.strMealThumb}
          width={350}
          height={350}
          alt="meal image"
          priority={true} 

          
        />
        <h1 className="bg-white py-4 text-gray-500 font-semibold text-xl text-center">
          {recipe?.strMeal.substring(0, 36)}
        </h1>
      </div>
    </Link>
  );
}

export default Card;
