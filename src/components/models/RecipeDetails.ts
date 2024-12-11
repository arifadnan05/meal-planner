export interface RecipesDetails {
    id: string;
    title: string;
    image: string;
    summary: string;
    readyInMinutes: number;
    servings: number;
    diets: string[];
    params: {
        id: string
    };
    instructions: string;
    spoonacularScore: number;
    healthScore: number;
    extendedIngredients: [{
        name: string;
        id: number;
        image: string;
    }];
    dishTypes: string[];
    analyzedInstructions: [{
        steps: [{
            number: number;
            step: string;
            equipment: [{
                id: string;
                name: string;
                image: string;
                localizedName: string;
            }]
            
        }]
    }]
}

export interface Equipment {
    id: string;
    name: string;
    image: string;
    localizedName: string;
}

