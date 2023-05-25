// @ts-nocheck TODO: Add types
import { serializeNonPOJOs } from "$lib/util/serializeNonPOJOs";

// MongoDB Collection Modules
import { mealplans } from "$db/mealplans";
import { recipes } from "$db/recipes";



export const load = async function({params}) {

    const URLparameter = params.recipeId

    // Use the URL parameter to find recipe.
    const getRecipeByName = async (URLpathParameter) => {

        // Query the Database
        const recipeData = await recipes.findOne({ "recipeId": URLparameter});
        return serializeNonPOJOs(recipeData);
    }

    // Use a recipes mealPlanId to get the rest of the recipes belonging to the same plan.
    const getMealsByMealPlanId = async (mealPlanId) => {
       
        const query = { "mealPlanId": mealPlanId }
        const projection = { "projection": { recipes: 1} } // Exclude everything but the recipes

        // Query the Database
        const mealPlanData = await mealplans.findOne(query, projection)
        return serializeNonPOJOs(mealPlanData)
    }

    const recipeData = await getRecipeByName(params.recipe)
    const mealPlanData = await getMealsByMealPlanId(recipeData.mealPlanId)

    return { 
        // Data that gets returned to +page.svelte 
        recipe: recipeData,
        mealPlan: mealPlanData
    }

}
