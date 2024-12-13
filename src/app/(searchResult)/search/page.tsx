"use client";
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Search } from '@/components/models/SearchResult';
import Link from 'next/link';
import { Button } from '@mantine/core';
import Image from 'next/image';


const SearchResultsPage = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');

    const [recipes, setRecipes] = useState<Search[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const [sortOptions, setSortOptions] = useState<string[]>([]);

    const API_KEY = '037f6d097fd14144a702121fc5d8a85b';

    // Fetch Recipes
    const fetchRecipes = async () => {
        setLoading(true);
        setError('');

        try {
            const response = await axios.get(
                'https://api.spoonacular.com/recipes/complexSearch',
                {
                    params: {
                        apiKey: API_KEY,
                        query,
                        number: 9,
                        offset: (page - 1) * 9,
                        sort: sortOptions.join(','),
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

    useEffect(() => {
        if (query) fetchRecipes();
    }, [query, page, sortOptions]);

    // Handle Sorting Option Changes
    const handleSortChange = (option: string) => {
        setSortOptions((prev) =>
            prev.includes(option)
                ? prev.filter((opt) => opt !== option)
                : [...prev, option]
        );
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Search Results for {query}
            </h1>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-600">{error}</p>}

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Sort by:</h2>
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        value="salt and pepper"
                        onChange={() => handleSortChange('popularity')}
                    />
                    <span className='capitalize'>salt and pepper</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        value="healthiness"
                        onChange={() => handleSortChange('healthiness')}
                    />
                    <span>Healthiness</span>
                </label>
            </div>

            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <div key={recipe.id}>
                            {/* Recipe Card */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                {/* Recipe Image */}
                                <Image
                                    width={1000}
                                    height={500}
                                    src={recipe.image}
                                    alt={recipe.title}
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
                    ))
                ) : (
                    <p>No recipes found.</p>
                )}
            </ul>

            {/* Pagination */}

            <div className="mt-8 flex items-center justify-center space-x-4">
                <button
                    className={`px-4 py-2 bg-gray-800 text-white rounded-md ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={page === 1}
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                >
                    Previous
                </button>

                <div className="flex space-x-2">
                    {Array.from({ length: 5 }, (_, idx) => {
                        const pageNumber = idx + page - 2;

                        return pageNumber > 0 ? (
                            <button
                                key={idx}
                                className={`px-4 py-2 rounded-md ${pageNumber === page
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-300 text-gray-800'
                                    }`}
                                onClick={() => setPage(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        ) : null;
                    })}
                </div>

                {/* Next Button */}
                <button
                    className="px-4 py-2 bg-gray-800 text-white rounded-md"
                    onClick={() => setPage((prev) => prev + 1)}
                >
                    Next
                </button>
            </div>

        </div>
    );
};

export default SearchResultsPage;
