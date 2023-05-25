export type DishIngredient = {
    name: string; // Name of ingredient.
    amount: number; // The amount used.
    measurement: string; // The measurement used for the amount.
};

export type Dish = {
    dish: string; // Title of the dish.
    subtitle: string; // Subtitle of the dish
    dishIngredients: DishIngredient[]; // List of ingredients in the dish.
    prepTime: number; // Number of estimated minutes it takes to prepare the dish.
    portions: number; // Portion size for the dish
    steps: string[]; // Steps that must be followed for preparation
    mealPlanId: string; // Unique identifier used to find out what meal plan this dish is a part of.
  };
  