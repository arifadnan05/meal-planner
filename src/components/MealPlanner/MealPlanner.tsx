// "use client"
// import React, { useEffect, useState } from 'react';
// import MealPlannerModal from './MealPlannerModal/MealPlannerModal';
// import moment from 'moment';
// import { FaTrashCan } from 'react-icons/fa6';


// const MealPlannerCalendar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [selectedDate, setSelectedDate] = useState<string>('');
//   const [currentDate, setCurrentDate] = useState(moment());
//   const [weekDates, setWeekDates] = useState<string[]>([]);
//   // console.log(mealPlans)
//   const mealPlans = JSON.parse(localStorage.getItem('mealPlans') || '[]');
//   // Generate an array of the current week (7 days)
//   useEffect(() => {
//     const week = [];
//     for (let i = 0; i < 7; i++) {
//       week.push(currentDate.clone().add(i, 'days').format('YYYY-MM-DD'));
//     }
//     setWeekDates(week);
//   }, [currentDate]);

//   // Function to filter meals by date
//   const getMealsForDate = (date: string) => {
//     return mealPlans.filter(meal => meal.date === date);
//   };

//   // Function to open the modal and set the selected date
//   const openModal = (date: string) => {
//     setSelectedDate(date);
//     setIsOpen(true);
//   };

//   return (
//     <div className="container mx-auto p-4">

//       <div className="meal-planner">
//         <div className="week-header text-center py-4">
//           <h2 className="text-xl font-bold">Meal Planner</h2>
//           <p>{currentDate.format('MMMM YYYY')}</p>
//         </div>
//         <div className="calendar grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
//           {weekDates.map((date, index) => {
//             const mealsForDay = getMealsForDate(date);

//             return (
//               <div key={index} className="day p-2 border rounded-lg">
//                 <div className="date text-center font-semibold mb-2">
//                   {moment(date).format('dddd, MMM D')}
//                 </div>
//                 {mealsForDay.length > 0 ? (
//                   mealsForDay.map((meal: string, mealIndex: number) => (
//                     <div key={mealIndex} className="meal bg-gray-100 p-2 rounded-lg mb-2">
//                       <img src={meal.value.image} alt={meal.value.title} className="w-full h-32 object-cover rounded-lg mb-2" />
//                       <div className="meal-info text-center">
//                         <h4 className="font-semibold">{meal.value.title}</h4>
//                         <div className='flex items-center mt-4 justify-between gap-4'>
//                           <p className='w-[70%] rounded p-1 bg-[#DBEAFE]'>{meal.slot}</p>
//                           <i className='w-[30%] border-2 rounded text-black text-xl p-2'><FaTrashCan /></i>
//                         </div>

//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="no-meal text-center text-sm text-gray-500">No meal planned</div>
//                 )}

//                 {/* Add Meal Plan Button */}
//                 <div className="text-center mt-2">
//                   <button
//                     onClick={() => openModal(date)}
//                     className="w-full px-4 py-2 bg-green-200 rounded text-black"
//                   >
//                     Add Meal +
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Meal Planner Modal */}
//       {isOpen && <MealPlannerModal isOpen={isOpen} onClose={() => setIsOpen(false)} selectedDate={selectedDate} />}

//     </div>
//   );
// };

// export default MealPlannerCalendar;
"use client"
import React, { useEffect, useState } from 'react';
import MealPlannerModal from './MealPlannerModal/MealPlannerModal';
import moment from 'moment';
import { FaTrashCan } from 'react-icons/fa6';

const MealPlannerCalendar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [currentDate, setCurrentDate] = useState(moment());
  const [weekDates, setWeekDates] = useState<string[]>([]);
  const [mealPlans, setMealPlans] = useState<any[]>(JSON.parse(localStorage.getItem('mealPlans') || '[]'));

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

  // Handle deleting a meal
  const handleDeleteMeal = (mealToDelete: any) => {
    // Remove the meal from the mealPlans array
    const updatedMeals = mealPlans.filter(meal => meal !== mealToDelete);
    // Update the state
    setMealPlans(updatedMeals);
    // Update localStorage
    localStorage.setItem('mealPlans', JSON.stringify(updatedMeals));
    
  };

  return (
    <div className="container mx-auto p-4">
      <div className="meal-planner">
        <div className="week-header text-center py-4">
          <h2 className="text-xl font-bold">Meal Planner</h2>
          <p>{currentDate.format('MMMM YYYY')}</p>
        </div>
        <div className="calendar grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {weekDates.map((date, index) => {
            const mealsForDay = getMealsForDate(date);

            return (
              <div key={index} className="day p-2 border rounded-lg">
                <div className="date text-center font-semibold mb-2">
                  {moment(date).format('dddd, MMM D')}
                </div>
                {mealsForDay.length > 0 ? (
                  mealsForDay.map((meal: any, mealIndex: number) => (
                    <div key={mealIndex} className="meal bg-gray-100 p-2 rounded-lg mb-2">
                      <img src={meal.value.image} alt={meal.value.title} className="w-full h-32 object-cover rounded-lg mb-2" />
                      <div className="meal-info text-center">
                        <h4 className="font-semibold">{meal.value.title}</h4>
                        <div className='flex items-center mt-4 justify-between gap-4'>
                          <p className='w-[70%] rounded p-1 bg-[#DBEAFE]'>{meal.slot}</p>
                          <i
                            className='w-[30%] border-2 rounded text-black text-xl p-2 cursor-pointer'
                            onClick={() => handleDeleteMeal(meal)}
                          >
                            <FaTrashCan />
                          </i>
                        </div>
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
                    className="w-full px-4 py-2 bg-green-200 rounded text-black"
                  >
                    Add Meal +
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