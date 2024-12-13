"use client";
import { Box, Button, TextInput } from '@mantine/core';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from '../models/SearchResult';
import Link from 'next/link';
import Image from 'next/image';

// Define props type
interface SearchFeatureProps {
    closeSearch: () => void;
}

const SearchFeature: React.FC<SearchFeatureProps> = ({ closeSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [recipes, setRecipes] = useState<Search[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY || "default-api-key";

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
    }, [searchQuery, API_KEY]);

    // Handle button click to navigate
    const handleSearch = () => {
        if (searchQuery) {
            router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
            closeSearch();
        }
    };

   
    return (
        <div className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
            <Box className="bg-white p-8 rounded-xl w-full max-w-xl shadow-2xl relative">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Search Anything
                </h2>

                <div className="flex flex-col md:flex-row gap-4">
                    <TextInput
                        placeholder="Type to search..."
                        size="lg"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full border-gray-300 rounded-lg focus:border-[#16B97A] focus:ring-[#16B97A]"
                    />
                    <Button
                        onClick={handleSearch}
                        className="bg-[#16B97A] hover:bg-[#139f68] text-white px-8 py-3 rounded-lg font-semibold transition-all"
                    >
                        Search
                    </Button>
                </div>

                {loading && <p>Loading...</p>}
                {error && <p className="text-red-600">{error}</p>}

                {recipes.length > 0 && (
                    <div className="mt-4 h-52 overflow-auto">
                        {recipes.map((recipe) => (

                            <div key={recipe.id} className="text-gray-800 my-3">
                                <Link href={`recipe/${recipe.id}`}>
                                    <div className="flex flex-col sm:flex-row items-center gap-4">
                                        <Image
                                            width={1000}
                                            height={500}
                                            src={recipe.image}
                                            alt={recipe.title}
                                            className="w-full sm:w-32 h-32 object-cover rounded-lg mb-4 sm:mb-0"
                                        />
                                        <h3 className="text-lg font-semibold text-gray-800 hover:text-[#16B97A] truncate">
                                            {recipe.title}
                                        </h3>
                                    </div>
                                </Link>
                            </div>

                        ))}
                    </div>
                )}

                <Button
                    className="absolute top-4 bg-slate-800  right-4 text-white hover:text-red-600 text-lg font-semibold"
                    onClick={closeSearch}
                >
                    ✕
                </Button>
            </Box>
        </div>
    );
};

export default SearchFeature;

