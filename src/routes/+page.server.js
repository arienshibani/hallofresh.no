// @ts-ignore
import getDatabase from "$db/mongo";

const serializeNonPOJOs = (value) => {
	return structuredClone(value);
};

export const load = async function () {
	try {
		const db = await getDatabase();
		// Fetch recipes
		const recipes = await db.collection("recipes").find({}).toArray();
		// Fetch mealplans
		const mealplans = await db.collection("mealplans").find({}).toArray();
		return {
			recipes: serializeNonPOJOs(recipes),
			mealplans: serializeNonPOJOs(mealplans),
		};
	} catch (error) {
		console.error("Error accessing the database:", error);
	}
};
