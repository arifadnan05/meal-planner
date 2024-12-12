// import React from 'react'
// import { IoSaveOutline } from "react-icons/io5";
// import { useForm, SubmitHandler } from "react-hook-form"

// type Toggle = {
//     isOpen: boolean;
//     onClose: () => void;
//     date: string;
//     firstName: string;
//     meal: GenderEnum;
// }

// enum GenderEnum {
//     female = "female",
//     male = "male",
//     other = "other",
// }

// const MealPlannerModal: React.FC<Toggle> = ({ isOpen, onClose }) => {
//     const { register, handleSubmit } = useForm<Toggle>()

//     const onSubmit: SubmitHandler<Toggle> = (data) => console.log(data)

//     return (
//         <div>
//             <div
//                 className="fixed inset-0 z-10 overflow-y-auto backdrop-blur transition-opacity duration-300 ease-in-out bg-black/30"
//                 aria-labelledby="modal-title"
//                 role="dialog"
//                 aria-modal="true"
//             >
//                 <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
//                     <span
//                         className="hidden sm:inline-block sm:align-middle sm:h-screen"
//                         aria-hidden="true"
//                     >
//                         &#8203;
//                     </span>

//                     <div
//                         className={`relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform duration-300 ease-out ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-[1000px] sm:w-full sm:p-6 animate-fade-in-scale`}
//                     >
//                         <div className="flex items-center justify-center">
//                             <i className='text-gray-700 text-3xl dark:text-gray-300'>
//                                 <IoSaveOutline />
//                             </i>
//                         </div>

//                         <div className="mt-2 text-center">
//                             <h3
//                                 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
//                                 id="modal-title"
//                             >
//                                 Add Meal
//                             </h3>
//                             <h3>Friday, Dec 13</h3>
//                         </div>

//                         <form onSubmit={handleSubmit(onSubmit)}>
//                             <div className='flex items-center gap-2'>
//                                 <div className='w-1/2'>
//                                     <label className="block text-gray-700 dark:text-gray-200">Username</label>
//                                     <input
//                                         placeholder="Make sure you do space"
//                                         {...register("firstName")}
//                                         className=" p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required
//                                     />
//                                 </div>

//                                 <div className="flex flex-col w-1/2 px-4 mx-auto">
//                                     <label htmlFor="meal" className="block text-gray-700 dark:text-gray-200">
//                                         Select Meal:
//                                     </label>
//                                     <select
//                                         {...register("meal")}
//                                         className="border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required
//                                     >
//                                         <option value="breakfast">Breakfast</option>
//                                         <option value="lunch">Lunch</option>
//                                         <option value="dinner">Dinner</option>
//                                     </select>
//                                 </div>
//                             </div>

//                             <div className='flex justify-center mt-6'>
//                                 <button
//                                     type="submit"
//                                     className="px-4 py-2 mt-2 text-white font-medium bg-blue-500 hover:bg-blue-600 rounded-md"
//                                 >
//                                     Add Meal
//                                 </button>
//                             </div>
//                         </form>

//                         <div className="mt-5 sm:flex sm:items-center sm:justify-between">
//                             <button
//                                 onClick={onClose}
//                                 className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default MealPlannerModal;

import React from 'react'
import { IoSaveOutline } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form"
import MealPlannerSearch from '../MealPlannerSearch/MealPlannerSearch';

type Toggle = {
    isOpen: boolean;
    onClose: () => void;
    date: string;
    userName: string;
    meal: GenderEnum;
}

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
}

const MealPlannerModal: React.FC<Toggle> = ({ isOpen, onClose }) => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm<Toggle>()

    const onSubmit: SubmitHandler<Toggle> = (data) => console.log(data)

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
    }

    return (
        <div>
            <div
                className="fixed inset-0 z-10 overflow-y-auto backdrop-blur transition-opacity duration-300 ease-in-out bg-black/30"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
            >
                <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>

                    <div
                        className={`relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform duration-300 ease-out ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-[1000px] sm:w-full sm:p-6 animate-fade-in-scale`}
                    >
                        <div className="flex items-center justify-center">
                            <i className='text-gray-700 text-3xl dark:text-gray-300'>
                                <IoSaveOutline />
                            </i>
                        </div>

                        <div className="mt-2 text-center">
                            <h3
                                className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                                id="modal-title"
                            >
                                Add Meal
                            </h3>
                            <h3>Friday, Dec 13</h3>
                        </div>

                        <div>
                            <MealPlannerSearch />
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex items-center gap-2'>
                                <div className='w-1/2'>
                                    <label className="block text-gray-700 dark:text-gray-200">Username</label>
                                    <input
                                        placeholder="Only lowercase letters without spaces are allowed."
                                        {...register("userName", { validate: validateFirstName })}
                                        className=" p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    {errors.userName && (
                                        <p className="text-red-500 text-sm">{errors.userName.message}</p>
                                    )}
                                </div>

                                <div className="flex flex-col w-1/2 px-4 mx-auto">
                                    <label htmlFor="meal" className="block text-gray-700 dark:text-gray-200">
                                        Select Meal:
                                    </label>
                                    <select
                                        {...register("meal")}
                                        className="border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required
                                    >
                                        <option value="breakfast">Breakfast</option>
                                        <option value="lunch">Lunch</option>
                                        <option value="dinner">Dinner</option>
                                    </select>
                                </div>
                            </div>

                            <div className='flex justify-center mt-6'>
                                <button
                                    type="submit"
                                    className="px-10 py-2 mt-2 text-white font-medium bg-blue-500 hover:bg-blue-600 rounded-md"
                                >
                                    Add Meal
                                </button>
                            </div>
                        </form>

                        <div className="mt-5 sm:flex sm:items-center sm:justify-between">
                            <button
                                onClick={onClose}
                                className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MealPlannerModal;
