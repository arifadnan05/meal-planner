import axios from "axios"
import * as dotenv from 'dotenv';

dotenv.config();
const apiKey: string = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY || "default-api-key";
export class RecipesServices {
    private static URL: string = 'https://api.spoonacular.com'

    public static getAllRecipes() {
        const RecipesURL: string = `${this.URL}/recipes/random?apiKey=${apiKey}&number=8`
        return axios.get(RecipesURL)
    }

    // Fetch Single Recipe Information.

    public static getRecipesDetails({ id }: { id: string }) {
        // console.log('api fetching',id)
        const RecipeDetailsURL: string = `${this.URL}/recipes/${id}/information?apiKey=${apiKey}`
        return axios.get(RecipeDetailsURL)
    }
}