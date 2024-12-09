"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/axiosPublic/useAxiosPublic';

interface Recipe {
  id: number;
  title: string;
  image: string;
  summary: string;
}

const Card = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
    const axiosPublic = useAxiosPublic()
    
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="p-4 border rounded shadow-lg bg-white">
          <Image
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover rounded"
            width={500}
            height={300}
          />
          <h2 className="text-xl font-bold mt-4">{recipe.title}</h2>
          <p
            className="text-gray-600 mt-2"
            dangerouslySetInnerHTML={{ __html: recipe.summary }}
          ></p>
        </div>
      ))}
    </div>
  );
};

export default Card;