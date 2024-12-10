import axios from "axios"
import * as dotenv from 'dotenv';

dotenv.config();
export class RecipesServices {
    private static URL: string = 'https://api.spoonacular.com'

    public static getAllRecipes() {
        const RecipesURL: string = `${this.URL}/recipes/random?apiKey=5edc3b430cea4bfea6d0526b38524510&number=8`
        return axios.get(RecipesURL)
    }

    // Fetch Single Recipe Information.

    public static getRecipesDetails({ id }: { id: string }) {
        // console.log('api fetching',id)
        const RecipeDetailsURL: string = `${this.URL}/recipes/${id}/information?apiKey=5edc3b430cea4bfea6d0526b38524510`
        return axios.get(RecipeDetailsURL)
    }
}