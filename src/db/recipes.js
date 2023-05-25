import getDatabase from "$db/mongo";


export async function recipes() {
  try {
    const db = await getDatabase();
    // Use the `db` object to perform database operations
    // For example:
    const collection = db.collection('recipes');
    // Perform queries, updates, etc.
  } catch (error) {
    console.error('Error accessing the database:', error);
  }
}
