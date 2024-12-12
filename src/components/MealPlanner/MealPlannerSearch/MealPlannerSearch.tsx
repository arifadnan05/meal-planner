"use client";
import { Box, TextInput } from '@mantine/core';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search } from '@/components/models/SearchResult';

// Define props type

const MealPlannerSearch: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [recipes, setRecipes] = useState<Search[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const API_KEY = '037f6d097fd14144a702121fc5d8a85b';

    // Fetch recipes when searchQuery changes
    useEffect(() => {
        if (searchQuery) {
            const fetchRecipes = async () => {
                setLoading(true);
                setError('');

                try {
                    const response = await axios.get(
                        'https://api.spoonacular.com/recipes/complexSearch',
                        {
                            params: {
                                apiKey: API_KEY,
                                query: searchQuery,
                                number: 10,
                                diet: 'vegan',
                                addRecipeInformation: true,
                            },
                        }
                    );
                    setRecipes(response.data.results);
                } catch (err) {
                    setError('Error fetching recipes!');
                    console.log(err)
                } finally {
                    setLoading(false);
                }
            };
            fetchRecipes();
        } else {
            setRecipes([]);
        }
    }, [searchQuery]);


    return (
        <div className="flex items-center justify-center p-4">
            <Box className="p-8 rounded-xl w-full">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Search Recipe
                </h2>

                <div className="flex flex-col md:flex-row gap-4">
                    <TextInput
                        placeholder="Type to search..."
                        size="lg"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full border-gray-300 rounded-lg focus:border-[#16B97A] focus:ring-[#16B97A]"
                    />

                </div>

                {loading && <p>Loading...</p>}
                {error && <p className="text-red-600">{error}</p>}


                <div className='w-full '>
                    {recipes.length > 0 && (
                        <div className="mt-4">
                            {recipes.map((recipe) => (

                                <div key={recipe.id} className="text-gray-800">
                                    <Link href={`recipe/${recipe.id}`}>
                                        <h1 className='p-2 border mt-4'>{recipe.title}</h1>
                                    </Link>
                                </div>

                            ))}
                        </div>
                    )}
                </div>


            </Box>
        </div>
    );
};

export default MealPlannerSearch;

