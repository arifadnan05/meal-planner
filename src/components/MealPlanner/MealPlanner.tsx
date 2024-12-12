"use client"
import React, { useState } from 'react';
import { format, addDays } from 'date-fns';
import MealPlannerModal from './MealPlannerModal/MealPlannerModal';

const MealPlannerCalendar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const today = new Date();
  const daysOfWeek = Array.from({ length: 7 }, (_, i) => addDays(today, i));

  
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Weekly Meal Planner Calendar
      </h2>
      <p className="text-center text-lg mb-6 text-gray-600">
        {format(today, 'MMMM dd')} - {format(addDays(today, 6), 'MMMM dd, yyyy')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {daysOfWeek.map((date, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-700 text-center">
              {format(date, 'EEEE, MMM dd')}
            </h3>
            <div className="space-y-4">
              {['Breakfast', 'Lunch', 'Dinner'].map((meal, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                  <div className="flex-1">
                    <h4 className="text-md font-bold text-gray-800">{meal} Title</h4>
                    <p className="text-sm text-gray-600">Calories: -</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors"
            >
              Open Modal
            </button>
          </div>
        ))}
      </div>

      {isOpen && <MealPlannerModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default MealPlannerCalendar;
