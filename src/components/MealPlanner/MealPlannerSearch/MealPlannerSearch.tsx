"use client";
import { Box, TextInput } from "@mantine/core";
import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Search } from "@/components/models/SearchResult";

interface MealPlannerSearchProps {
    sendDataToParent: (recipe: Search | null) => void;
}

const MealPlannerSearch: React.FC<MealPlannerSearchProps> = ({ sendDataToParent }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [recipes, setRecipes] = useState<Search[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState<Search | null>(null);
    const [error, setError] = useState("");

    const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

    useEffect(() => {
        if (!API_KEY) {
            console.error("Spoonacular API key is missing!");
        }
    }, [API_KEY]);

    // Memoize sendDataToParent to avoid unnecessary re-renders
    const memoizedSendData = useCallback(() => {
        sendDataToParent(selectedRecipe);
    }, [selectedRecipe, sendDataToParent]);

    useEffect(() => {
        memoizedSendData();
    }, [selectedRecipe, memoizedSendData]);

    useEffect(() => {
        const fetchRecipes = async () => {
            if (!searchQuery) {
                setRecipes([]);
                return;
            }

            setLoading(true);
            setError("");

            try {
                const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch", {
                    params: {
                        apiKey: API_KEY,
                        query: searchQuery,
                        number: 50,
                        diet: "vegan",
                        addRecipeInformation: true,
                    },
                });
                setRecipes(response.data.results || []);
            } catch (err) {
                const errorMessage =
                    err.response?.data?.message || "An unexpected error occurred while fetching recipes.";
                setError(errorMessage);
                console.error("Error fetching recipes:", err);
            } finally {
                setLoading(false);
            }
        };

        const delayDebounceFn = setTimeout(() => {
            fetchRecipes();
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery, API_KEY]);

    const handleRecipeClick = (recipe: Search) => {
        setSelectedRecipe(recipe);
    };

    return (
        <div className="flex items-center justify-center">
            <Box className="mb-8 rounded-xl w-full max-w-4xl">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Search Recipe</h2>
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
                                className="bg-white p-4 cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                            >
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <Image
                                        width={150}
                                        height={150}
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
                    !loading &&
                    !error &&
                    searchQuery && (
                        <p className="text-center text-gray-600 mt-4">
                            No recipes found for {searchQuery}
                        </p>
                    )
                )}
            </Box>
        </div>
    );
};

export default MealPlannerSearch;
