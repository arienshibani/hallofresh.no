import { recipes } from "$db/recipes";

// @ts-ignore
const serializeNonPOJOs = (value) => {
    return structuredClone(value)
};


export const load = async function() {
    const data = await recipes.find({}).toArray();
    console.log("Fetched", data.length, "recipes total." )
    return { recipes: serializeNonPOJOs(data) }

}
