"use client"
import React, { useEffect, useState } from 'react';
import { Recipes } from '../models/Recipes';
import { RecipesServices } from '../services/RecipesServices';
import { Button } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';

const Card: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await RecipesServices.getAllRecipes();
        // console.log('Fetched Data:', data.data.recipes);
        setRecipes(data.data.recipes);
      } catch (error) {
        setErrorMessage('Failed to fetch recipes.');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (errorMessage) return <p>{errorMessage}</p>;
  if (!Array.isArray(recipes)) return <p>Unexpected data format</p>;

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-2xl font-semibold my-16'>Featured Recipe List</h1>
      <div className="grid grid-cols-4 gap-4">
        {recipes.map((recipe) => (<div key={recipe.id}>
          {/* Recipe Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Recipe Image */}
            <Image
              src={recipe.image}
              alt={recipe.image}
              width={1000}
              height={500}
              className="w-full h-56 object-cover group-hover:opacity-80 transform transition-all duration-300 hover:scale-105 hover:rotate-2"
            />

            {/* Recipe Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 truncate">{recipe.title}</h3>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-600 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  <span>Ready In: {recipe.readyInMinutes} Minutes</span>
                </span>

              </div>
              <div className="flex space-x-2 mt-2">
                <span className="px-2 uppercase py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  {recipe.diets[0]}
                </span>

              </div>
            </div>
            <div className='mt-10 mb-5 flex justify-center'>
              <Link href={`recipe/${recipe.id}`}>
                <Button>View Details</Button>
              </Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );

};

export default Card;
