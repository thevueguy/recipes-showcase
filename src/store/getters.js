export function lowCaloriesRecipes(state) {
  return state.recipes.filter(recipe => recipe.calories > 0 && recipe.calories <
    250);
}

export function easyRecipes(state) {
  return state.recipes.filter(recipe => recipe.cookTime < 10);
}

export function asianRecipes(state) {
  return state.recipes.filter(recipe => recipe.cuisine === 'Asian');
}