import { MongoClient } from 'mongodb';
const apiKey = process.env.KASSALAPP_API_KEY;
const mongoUri = process.env.MONGO_URI;

let cachedDb = null;


if(apiKey === undefined){
  console.error('KASSALAPP_API_KEY is missing');
  process.exit(1);

}

if(mongoUri === undefined){
  console.error('MONGO_URI is missing');
  process.exit(1);
}

// Fetch list of all ingredients from MongoDB
const fetchListOfIngredientsFromMongoDB = async () => {
  const client = new MongoClient(mongoUri);
  try {
    await client.connect();
    cachedDb = client.db("hello-freiche-prod").collection("ingredients");
    const listOfAllIngredients = await cachedDb.find().toArray();
    return listOfAllIngredients;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

// Upsert ingredient in MongoDB with with price info from Kassal.app
const refreshIngredientPriceData = async (ingredient) => {

  const client = new MongoClient(mongoUri);

  try {

    let noDiff = false;
    await client.connect();
    cachedDb = client.db("hello-freiche-prod").collection("ingredients");

    console.info(`Fetching price info from Kassal.app: ${ingredient.name} ${ingredient.ean}...`)
    const priceInfo = await getProductBy(ingredient.ean);

    // If there is no price info diff, we skip the update and flag it as no diff
    if (JSON.stringify(ingredient.data) === JSON.stringify(priceInfo)) {
      console.info(`No price info diff for ${ingredient.name} ${ingredient.ean}. Skipping upsert...`);
      noDiff = true;
    }

    const result = await cachedDb.updateOne(
      { ean: ingredient.ean },
      { $set: priceInfo },
      { upsert: true }
    );
    return result;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

// Fetch product by EAN from Kassal.app
const getProductBy = async (ean) => {
  const response = await fetch(`https://kassal.app/api/v1/products/ean/${ean}`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  });
  const data = await response.json();
  return data;
}


const InitScan = async () => {
  const ingredients = await fetchListOfIngredientsFromMongoDB();
  console.info('Initiate Hallofresh.no ingredient price scanner -', new Date());
  console.table(ingredients, ['name', 'ean', 'data']);

  // Wait for 10 seconds
  await new Promise(resolve => setTimeout(resolve, 5000));

  // For each ingredient, check if it has an object named "data", if not, we fetch it from Kassal.app
  // Count the number of ingredients that have been updated
  let scannedIngredients = 0;
  for (const ingredient of ingredients) {
    await refreshIngredientPriceData(ingredient);
    scannedIngredients++;
  }

  console.info(`Successfully scanned ${scannedIngredients} ingredients 👍`, new Date());

  // exit
  process.exit(0);
}

await InitScan();
