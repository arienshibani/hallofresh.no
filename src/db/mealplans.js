import getDatabase from "$db/mongo";


export async function mealplans() {
  try {
    const db = await getDatabase();
    // Use the `db` object to perform database operations
    // For example:
    const collection = db.collection('mealplans');
    // Perform queries, updates, etc.
  } catch (error) {
    console.error('Error accessing the database:', error);
  }
}
