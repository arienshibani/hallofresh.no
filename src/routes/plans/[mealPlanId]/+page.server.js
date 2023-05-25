// @ts-nocheck
import { mealplans } from "$db/mealplans";


const serializeNonPOJOs = (value) => {
    return structuredClone(value)
};


export const load = async function({params}) {
    // Use the URL parameter to find mealplan
    const URLparameter = params.mealPlanId

    const mealPlanData = await mealplans.findOne({"mealPlanId": URLparameter});
    const allMealPlansData = await mealplans.find({}, {projection: {mealPlanId: 1, name: 1}}).toArray();

    // Find the index of the current mealplan in the Array of all meal plans.
    const currentIndex = allMealPlansData.findIndex(el => el.mealPlanId === params.mealPlanId)
 
    console.log(allMealPlansData[allMealPlansData.length - 1]?.mealPlanId)
    console.log( allMealPlansData[0]?.mealPlanId)

    // Find the next, and previous one.
    const nextMealPlanId = allMealPlansData[currentIndex + 1]?.mealPlanId || allMealPlansData[0]?.mealPlanId
   
    const previousMealPlanId = allMealPlansData[currentIndex - 1]?.mealPlanId ||  allMealPlansData[allMealPlansData.length - 1]?.mealPlanId
    return { 
        mealPlan: serializeNonPOJOs(mealPlanData), 
        nextMealPlanId: nextMealPlanId,
        previousMealPlanId: previousMealPlanId,
    }
}
