
"use client";
import { Box, TextInput } from '@mantine/core';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Search } from '@/components/models/SearchResult';

const MealPlannerSearch: React.FC = ({ sendDataToParent }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [recipes, setRecipes] = useState<Search[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState<Search | null>(null);
    const [error, setError] = useState('');

    const API_KEY = 'aedde2b446084d9c912dc2e1216bf46e';

    useEffect(() => {
        sendDataToParent(selectedRecipe);
    }, [selectedRecipe]);

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
                                number: 50,
                                diet: 'vegan',
                                addRecipeInformation: true,
                            },
                        }
                    );
                    setRecipes(response.data.results);
                } catch (err) {
                    setError('Error fetching recipes!');
                    console.error(err);
                } finally {
                    setLoading(false);
                }
            };
            fetchRecipes();
        } else {
            setRecipes([]);
        }
    }, [searchQuery]);

    const handleRecipeClick = (recipe: Search) => {
        setSelectedRecipe(recipe);
        setRecipes([]);
    };

    return (
        <div className="flex items-center justify-center">
            <Box className="mb-8 rounded-xl w-full max-w-4xl">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Search Recipe
                </h2>

                <div className="flex flex-col md:flex-row gap-4">
                    <TextInput
                        placeholder="Type to search..."
                        size="lg"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full border-gray-300 rounded-lg focus:border-[#16B97A] focus:ring-[#16B97A] px-4 py-2"
                    />
                </div>

                {loading && <p className="text-center text-gray-600 mt-4">Loading...</p>}
                {error && <p className="text-center text-red-600 mt-4">{error}</p>}

                {recipes.length > 0 ? (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recipes.map((recipe) => (
                            <div
                                key={recipe.id}
                                onClick={() => handleRecipeClick(recipe)}
                                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                            >
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <img
                                        src={recipe.image}
                                        alt={recipe.title}
                                        className="w-full sm:w-32 h-32 object-cover rounded-lg mb-4 sm:mb-0"
                                    />
                                    <h3 className="text-lg font-semibold text-gray-800 hover:text-[#16B97A] truncate">
                                        {recipe.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    !loading && !error && <p>No Recipe Found</p>
                )}
            </Box>
        </div>
    );
};

export default MealPlannerSearch;
