import { recipes } from "$db/recipes";

// @ts-ignore
const serializeNonPOJOs = (value) => {
    return structuredClone(value)
};


// @ts-ignore
export const load = async function({params}) {

    console.log(params)
    // Query for a recipe
    const query = { "dish": params.dish };
    console.log("Recipes collection, query: ", params);

    const data = await recipes.findOne(query);
    console.log("Fetched 1 recipe" )

    return { recipe: serializeNonPOJOs(data) }

}
