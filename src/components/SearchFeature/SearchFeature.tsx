// "use client"
// import { Box, Button, TextInput } from '@mantine/core';
// import axios from 'axios';
// import React, { useState } from 'react';

// // Define the type for the props
// interface SearchFeatureProps {
//     closeSearch: () => void;
// }



// const SearchFeature: React.FC<SearchFeatureProps> = ({ closeSearch }) => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [recipes, setRecipes] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const API_KEY = '72aedcfe879440a39fcecb96af850443';

//     const handleSearch = async () => {
//         if (!searchQuery) return;
//         setLoading(true);
//         setError('');

//         try {
//             const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
//                 params: {
//                     apiKey: API_KEY,
//                     query: searchQuery,
//                     number: 10,
//                     diet: 'vegan',
//                     addRecipeInformation: true,
//                 },
//             });
//             setRecipes(response.data.results);
//         } catch (err) {
//             setError('Error fetching recipes!');
//             console.log(err)

//         } finally {
//             setLoading(false);
//         }
//     };


//     console.log(recipes)

//     return (
//         <div className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
//             <Box className="bg-white p-8 rounded-xl w-full max-w-xl shadow-2xl relative">
//                 <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
//                     Search Anything
//                 </h2>

//                 <div className="flex flex-col md:flex-row gap-4">
//                     <TextInput
//                         placeholder="Type to search..."
//                         size="lg"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         className="w-full border-gray-300 rounded-lg focus:border-[#16B97A] focus:ring-[#16B97A]"
//                     />
//                     <Button onClick={handleSearch}
//                         className="bg-[#16B97A] hover:bg-[#139f68] text-white px-8 py-3 rounded-lg font-semibold transition-all"
//                     >
//                         Search
//                     </Button>
//                 </div>
//                 <Button
//                     className="absolute top-4 bg-slate-800  right-4 text-white hover:text-red-600 text-lg font-semibold"
//                     onClick={closeSearch}
//                 >
//                     ✕
//                 </Button>
//             </Box>
//         </div>
//     );
// };

// export default SearchFeature;

"use client";
import { Box, Button, TextInput } from '@mantine/core';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from '../models/SearchResult';
import Link from 'next/link';

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

                {/* Show search results live */}
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

