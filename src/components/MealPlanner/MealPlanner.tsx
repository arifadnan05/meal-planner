"use client"
import React, { useEffect, useState } from 'react';
import MealPlannerModal from './MealPlannerModal/MealPlannerModal';
import moment from 'moment';


const MealPlannerCalendar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>(''); // To track the selected date for the modal
  const mealPlans = JSON.parse(localStorage.getItem('mealPlans') || '[]');
  const [currentDate, setCurrentDate] = useState(moment()); // Current date
  const [weekDates, setWeekDates] = useState<string[]>([]);
  console.log(mealPlans)
  // Generate an array of the current week (7 days)
  useEffect(() => {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(currentDate.clone().add(i, 'days').format('YYYY-MM-DD'));
    }
    setWeekDates(week);
  }, [currentDate]);

  // Function to filter meals by date
  const getMealsForDate = (date: string) => {
    return mealPlans.filter(meal => meal.date === date);
  };

  // Function to open the modal and set the selected date
  const openModal = (date: string) => {
    setSelectedDate(date);
    setIsOpen(true);
  };

  return (
    <div className="container mx-auto p-4">

      <div className="meal-planner">
        <div className="week-header text-center py-4">
          <h2 className="text-xl font-bold">Meal Planner</h2>
          <p>{currentDate.format('MMMM YYYY')}</p>
        </div>
        <div className="calendar grid grid-cols-7 gap-4">
          {weekDates.map((date, index) => {
            const mealsForDay = getMealsForDate(date);

            return (
              <div key={index} className="day p-2 border rounded-lg">
                <div className="date text-center font-semibold mb-2">
                  {moment(date).format('dddd, MMM D')}
                </div>
                {mealsForDay.length > 0 ? (
                  mealsForDay.map((meal: string, mealIndex: number) => (
                    <div key={mealIndex} className="meal bg-gray-100 p-2 rounded-lg mb-2">
                      <img src={meal.value.image} alt={meal.value.title} className="w-full h-32 object-cover rounded-lg mb-2" />
                      <div className="meal-info text-center">
                        <h4 className="font-semibold">{meal.value.title}</h4>
                        <p>{meal.slot}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-meal text-center text-sm text-gray-500">No meal planned</div>
                )}

                {/* Add Meal Plan Button */}
                <div className="text-center mt-2">
                  <button
                    onClick={() => openModal(date)}
                    className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors"
                  >
                    Add Meal
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Meal Planner Modal */}
      {isOpen && <MealPlannerModal isOpen={isOpen} onClose={() => setIsOpen(false)} selectedDate={selectedDate} />}

    </div>
  );
};

export default MealPlannerCalendar;
