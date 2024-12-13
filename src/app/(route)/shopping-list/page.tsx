"use client"
import React from 'react'

const ShoppingList = () => {
    const storedMealPlans = JSON.parse(localStorage.getItem('mealPlans') || '[]');
    console.log(storedMealPlans)
    return (
        <div>
            <h2>This is your shopping list...</h2>
        </div>
    )
}

export default ShoppingList
