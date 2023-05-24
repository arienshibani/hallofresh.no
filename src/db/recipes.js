import db from "$db/mongo";

export const recipes = db.collection("recipes")
