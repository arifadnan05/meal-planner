"use client"
import React, { useEffect, useState } from 'react';

const ShoppingList: React.FC = () => {
    const [storedMealPlans, setStoredMealPlans] = useState([]);

    useEffect(() => {
        const mealPlans = JSON.parse(localStorage.getItem('mealPlans') || '[]');
        setStoredMealPlans(mealPlans);
        console.log(mealPlans);
    }, []);

    return (
        <div>
          <h1>This Sopping list</h1>
        </div>
    );
};

export default ShoppingList;
