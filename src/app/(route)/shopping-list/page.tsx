"use client"
import React, { useEffect, useState } from 'react';

const ShoppingList = () => {
    const [storedMealPlans, setStoredMealPlans] = useState([]);

    useEffect(() => {
        // Access localStorage only on the client-side
        const mealPlans = JSON.parse(localStorage.getItem('mealPlans') || '[]');
        setStoredMealPlans(mealPlans);
        console.log(mealPlans);
    }, []);

    return (
        <div>
            <h2>This is your shopping list...</h2>
            {/* You can render the stored meal plans if needed */}
            <ul>
                {storedMealPlans.map((meal, index) => (
                    <li key={index}>{meal}</li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;
