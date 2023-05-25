import { mealplans } from "$db/mealplans";

// @ts-ignore
const serializeNonPOJOs = (value) => {
    return structuredClone(value)
};


export const load = async function() {
    const data = await mealplans.find({}).toArray();
    return { mealPlans: serializeNonPOJOs(data) }

}
