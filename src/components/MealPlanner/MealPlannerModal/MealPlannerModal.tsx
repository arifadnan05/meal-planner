"use client";
import React, { useState } from "react";
import { IoSaveOutline } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form";
import MealPlannerSearch from "../MealPlannerSearch/MealPlannerSearch";
import Image from "next/image";
import { Search } from "@/components/models/SearchResult";

type Toggle = {
    isOpen: boolean;
    onClose: () => void;
    selectedDate: string;
};

// type RecipeInfo = {
//     title: string | null;
//     image: string | null;
//     servings: string | null;
//     id: number | null;
// };

type FormData = {
    userName: string;
    meal: string;
};

const MealPlannerModal: React.FC<Toggle> = ({ isOpen, onClose, selectedDate }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [message, setMessage] = useState<Search | null>(null);

    const handleDataFromChild = (data: Search | null) => {
        setMessage(data);
    };
    console.log(handleDataFromChild)

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        if (!message) {
            alert("Please select a recipe before submitting.");
            return;
        }

        const postMealPlan = {
            username: data.userName,
            slot: data.meal,
            position: 0,
            type: "RECIPE",
            value: {
                id: message.id,
                title: message.title,
                servings: message.servings,
                image: message.image,
            },
            date: selectedDate,
        };

        if (typeof window !== "undefined") {
            const mealPlans = JSON.parse(localStorage.getItem("mealPlans") || "[]");
            mealPlans.push(postMealPlan);
            localStorage.setItem("mealPlans", JSON.stringify(mealPlans));
        }

        onClose();
    };

    return (
        <div>
            <div
                className={`fixed inset-0 z-10 overflow-y-auto backdrop-blur transition-opacity duration-300 ease-in-out bg-black/30 ${isOpen ? "block" : "hidden"}`}
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
            >
                <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform duration-300 ease-out bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-[1000px] sm:w-full sm:p-6 animate-fade-in-scale">
                        <div className="flex items-center justify-center">
                            <i className="text-gray-700 text-3xl dark:text-gray-300">
                                <IoSaveOutline />
                            </i>
                        </div>

                        <div className="my-4 text-center">
                            <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">Add Meal</h3>
                            <h3>{new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'short', day: 'numeric' }).format(new Date(selectedDate))}</h3>
                        </div>

                        <div className="h-[300px] overflow-auto">
                            <MealPlannerSearch sendDataToParent={handleDataFromChild} />
                        </div>

                        <div className="my-8">
                            {message && (
                                <div className="max-w-[150px] rounded overflow-hidden shadow-lg bg-white">
                                    <Image
                                        width={1000}
                                        height={500}
                                        className="w-full object-cover"
                                        src={message.image || ""}
                                        alt={message.title || "Meal image"}
                                    />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-base mb-2">{message.title}</div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex items-center gap-2">
                                <div className="w-1/2">
                                    <label className="block text-gray-700 dark:text-gray-200">Username</label>
                                    <input
                                        placeholder="Enter your name here..."
                                        {...register("userName", {
                                            required: "Name is required",
                                        })}
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
                                        <option value="Breakfast">Breakfast</option>
                                        <option value="Lunch">Lunch</option>
                                        <option value="Evening">Evening</option>
                                        <option value="Dinner">Dinner</option>
                                    </select>
                                    {errors.meal && <p className="text-red-500 text-sm">{errors.meal.message}</p>}
                                </div>
                            </div>

                            <div className="flex justify-center mt-6">
                                <button type="submit" className="px-10 py-2 mt-2 text-white font-medium bg-blue-500 hover:bg-blue-600 rounded-md">Add Meal</button>
                            </div>
                        </form>

                        <div className="mt-5 sm:flex sm:items-center sm:justify-between">
                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Close Modal"
                                className="w-full bg-slate-500 px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealPlannerModal;
