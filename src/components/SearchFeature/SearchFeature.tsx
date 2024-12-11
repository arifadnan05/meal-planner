import { Box, Button, TextInput } from '@mantine/core';
import React from 'react';

// Define the type for the props
interface SearchFeatureProps {
    closeSearch: () => void;
}

const SearchFeature: React.FC<SearchFeatureProps> = ({ closeSearch }) => {
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
                        className="w-full border-gray-300 rounded-lg focus:border-[#16B97A] focus:ring-[#16B97A]"
                    />
                    <Button
                        className="bg-[#16B97A] hover:bg-[#139f68] text-white px-8 py-3 rounded-lg font-semibold transition-all"
                    >
                        Search
                    </Button>
                </div>
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

