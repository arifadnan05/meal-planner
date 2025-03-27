"use client"

import SearchResult from "@/components/SearchResult/SearchResult";
import { Suspense } from "react";

const SearchResultsPage = () => {


    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchResult />
        </Suspense>
    );
};

export default SearchResultsPage;
