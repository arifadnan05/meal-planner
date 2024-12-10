import axios from "axios"

export class RecipesServices {
    private static URL: string = 'https://api.spoonacular.com'

    public static getAllRecipes() {
        const RecipesURL: string = `${this.URL}/recipes/random?apiKey=5edc3b430cea4bfea6d0526b38524510&number=8`
        return axios.get(RecipesURL)
    }
}