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
}


// type IngredientMeasure = {
//     us: {
//       amount: number;
//       unitShort: string;
//       unitLong: string;
//     };
//     metric: {
//       amount: number;
//       unitShort: string;
//       unitLong: string;
//     };
//   };
  
//   type ExtendedIngredient = {
//     id: number;
//     aisle: string;
//     image: string;
//     consistency: 'SOLID' | 'LIQUID';
//     name: string;
//     nameClean: string;
//     original: string;
//     originalName: string;
//     amount: number;
//     unit: string;
//     meta: string[];
//     measures: IngredientMeasure;
//   };
  
//   type InstructionStep = {
//     number: number;
//     step: string;
//     ingredients: {
//       id: number;
//       name: string;
//       localizedName: string;
//       image: string;
//     }[];
//     equipment: {
//       id: number;
//       name: string;
//       localizedName: string;
//       image: string;
//     }[];
//     length?: {
//       number: number;
//       unit: string;
//     };
//   };
  
//   type Recipe = {
//     vegetarian: boolean;
//     vegan: boolean;
//     glutenFree: boolean;
//     dairyFree: boolean;
//     veryHealthy: boolean;
//     cheap: boolean;
//     veryPopular: boolean;
//     sustainable: boolean;
//     lowFodmap: boolean;
//     weightWatcherSmartPoints: number;
//     gaps: string;
//     preparationMinutes: number | null;
//     cookingMinutes: number | null;
//     aggregateLikes: number;
//     healthScore: number;
//     creditsText: string;
//     license: string;
//     sourceName: string;
//     pricePerServing: number;
//     extendedIngredients: ExtendedIngredient[];
//     id: number;
//     title: string;
//     readyInMinutes: number;
//     servings: number;
//     sourceUrl: string;
//     image: string;
//     imageType: string;
//     summary: string;
//     cuisines: string[];
//     dishTypes: string[];
//     diets: string[];
//     occasions: string[];
//     instructions: string;
//     analyzedInstructions: {
//       name: string;
//       steps: InstructionStep[];
//     }[];
//     originalId: number | null;
//     spoonacularScore: number;
//     spoonacularSourceUrl: string;
//   };