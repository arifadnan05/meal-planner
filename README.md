# Meal Planner

## Overview
Meal Planner is a web application designed to simplify meal planning for everyday life. With its user-friendly interface and powerful features, Meal Planner allows users to search for recipes, organize their meals into specific time slots, and share their meal plans effortlessly. All data is securely stored in local storage, ensuring a seamless user experience.

## Features
- 🔍 **Search Recipes:** Find recipes by title or recipe name.
- 🗓️ **Meal Calendar Management:**
  - ➕ Add meals to the calendar with specific time slots: Breakfast, Lunch, Evening, and Dinner.
  - ❌ Remove meals from the calendar as needed.
- 📤 **Share Meal Plans:** Share your personalized meal plans with others.
- 💾 **Local Storage:** All data is stored locally on your browser, ensuring fast access and privacy.

## Technologies Used
- ⚛️ **Next.js (v15):** A React-based framework for building fast, modern web applications.
- 🛠️ **TypeScript:** Adds type safety and scalability to the project.
- 🎨 **Mantine.dev:** A modern React component library for styling and UI elements.
- 🌟 **Tailwind CSS:** A utility-first CSS framework for custom styling.
- 🍲 **Spoonacular API:** Provides access to recipe data with a daily limit of 150 free API calls.
- 📚 **Documentation Tools:** Ensures clarity and professional project explanation.

## Getting Started
Follow these steps to run the Meal Planner project locally:

### Prerequisites
- 🖥️ Node.js installed on your system.
- 🔑 A Spoonacular API key.

### Installation
1. **📂 Clone the Repository:**
   ```bash
   git clone https://github.com/arifadnan05/meal-planner.git
   ```
   _(Click to copy)_

2. **📁 Navigate to the Project Directory:**
   ```bash
   cd meal-planner
   ```
   _(Click to copy)_

3. **📦 Install Dependencies:**
   ```bash
   npm install
   ```
   _(Click to copy)_

4. **🔧 Set Up the API Key:**
   - Navigate to the root of the `meal-planner` folder.
   - Create a `.env.local` file:
     ```bash
     touch .env.local
     ```
     _(Click to copy)_
   - Add the following content to `.env.local`:
     ```env
     NEXT_PUBLIC_SPOONACULAR_API_KEY=128d22c5e8324ff9b3f348d814dc1130
     ```
     _(Click to copy)_

5. **🚀 Run the Development Server:**
   ```bash
   npm run dev
   ```
   _(Click to copy)_

6. **🌐 Access the Application:**
   Open your browser and visit:
   ```
   http://localhost:3000
   ```
   _(Click to copy)_

### API Key Information
- 🆓 The Spoonacular API allows 150 free calls per day.
- 🔑 Example API keys to copy:
  - `67b4247f545e413686ca1173e22c3fba`
  - `72aedcfe879440a39fcecb96af850443`
  - `037f6d097fd14144a702121fc5d8a85b`

## License
This project is licensed under the [MIT License](LICENSE).

## Conclusion
Thank you for exploring Meal Planner! This project is designed to make meal planning an enjoyable and hassle-free experience. Feel free to provide feedback or suggestions to help us improve. 🎉 Happy meal planning!

