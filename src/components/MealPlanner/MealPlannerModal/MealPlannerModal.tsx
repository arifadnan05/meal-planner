
"use client"
import React, { useState } from 'react';
import { IoSaveOutline } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form";
import MealPlannerSearch from '../MealPlannerSearch/MealPlannerSearch';
import moment from 'moment';

type Toggle = {
    isOpen: boolean;
    onClose: () => void;
    date?: string;
    userName?: string;
    meal?: string;
    selectedDate: string;
};

type RecipeInfo = {
    title: string;
    image: string;
};

const MealPlannerModal: React.FC<Toggle> = ({ isOpen, onClose, selectedDate }) => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm<Toggle>();
    const [message, setMessage] = useState<RecipeInfo | null>(null);

    const handleDataFromChild = (data: RecipeInfo) => {
        setMessage(data);
    };
    // console.log(message)
    const onSubmit: SubmitHandler<Toggle> = async (data) => {
        const { userName, meal } = data;

        const postMealPlan = {
            username: userName,
            slot: meal,
            position: 0,
            type: "RECIPE",
            value: {
                id: message.id,
                title: message.title,
                servings: message.servings,
                image: message.image
            },
            date: selectedDate
        };

        const mealPlans = JSON.parse(localStorage.getItem('mealPlans') || '[]');

        mealPlans.push(postMealPlan);

        localStorage.setItem('mealPlans', JSON.stringify(mealPlans));

        onClose();
    };


    const validateFirstName = (value: string) => {
        const regex = /^[a-z]+$/;
        if (!regex.test(value)) {
            setError("userName", {
                type: "manual",
                message: "Only lowercase letters without spaces are allowed."
            });
            return false;
        }
        return true;
    };

    return (
        <div>
            <div
                className={`fixed inset-0 z-10 overflow-y-auto backdrop-blur transition-opacity duration-300 ease-in-out bg-black/30 ${isOpen ? 'block' : 'hidden'}`}
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
            >
                <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform duration-300 ease-out bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-[1000px] sm:w-full sm:p-6 animate-fade-in-scale">
                        <div className="flex items-center justify-center">
                            <i className='text-gray-700 text-3xl dark:text-gray-300'>
                                <IoSaveOutline />
                            </i>
                        </div>

                        <div className="my-4 text-center">
                            <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">Add Meal</h3>
                            <h3>{moment(selectedDate).format('dddd, MMM D')}</h3>
                        </div>

                        <div className='h-[300px] overflow-auto'>
                            <MealPlannerSearch sendDataToParent={handleDataFromChild} />
                        </div>

                        <div className='my-8'>
                            {message && (
                                <div className="max-w-[150px] rounded overflow-hidden shadow-lg bg-white">
                                    <img className="w-full object-cover" src={message.image} alt={message.title} />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-base mb-2">{message.title}</div>
                                    </div>

                                </div>
                            )}
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex items-center gap-2'>
                                <div className='w-1/2'>
                                    <label className="block text-gray-700 dark:text-gray-200">Username</label>
                                    <input
                                        placeholder="Only lowercase letters without spaces are allowed."
                                        {...register("userName", { validate: validateFirstName })}
                                        className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    {errors.userName && <p className="text-red-500 text-sm">{errors.userName.message}</p>}
                                </div>

                                <div className="flex flex-col w-1/2 px-4 mx-auto">
                                    <label htmlFor="meal" className="block text-gray-700 dark:text-gray-200">Select Meal:</label>
                                    <select
                                        {...register("meal", { required: "Meal selection is required" })}
                                        className="border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value='Breakfast'>Breakfast</option>
                                        <option value='Lunch'>Lunch</option>
                                        <option value='Dinner'>Dinner</option>
                                    </select>
                                    {errors.meal && <p className="text-red-500 text-sm">{errors.meal.message}</p>}
                                </div>
                            </div>

                            <div className='flex justify-center mt-6'>

                                <button type="submit" className="px-10 py-2 mt-2 text-white font-medium bg-blue-500 hover:bg-blue-600 rounded-md">Add Meal</button>

                            </div>
                        </form>
                        <div className="mt-5 sm:flex sm:items-center sm:justify-between">
                            <button onClick={onClose} className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealPlannerModal;
