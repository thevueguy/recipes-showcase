import * as getters from '@/store/getters'

// Faking the state
const state = {
  recipes: [{
      name: "Brownie",
      calories: 500,
      cookTime: 9,
      cuisine: 'American'
    }, {
      name: "Apple Pie",
      calories: 400,
      cookTime: 30,
      cuisine: 'Worlwide'
    }, {
      name: "Crackers",
      calories: 100,
      cookTime: 1,
      cuisine: 'Worlwide'
    }, {
      name: "Soy sweet",
      calories: 200,
      cookTime: 2,
      cuisine: 'Asian'
    }
  ]
};

describe('lowCaloriesRecipes', () => {
  it("returns recipes with less than 250 calories", () => {
    expect(getters.lowCaloriesRecipes(state)).toHaveLength(2)
  });
});

describe('easyRecipes', () => {
  it("returns recipes that take less than 10 minutes to cook", () => {
    expect(getters.easyRecipes(state)).toHaveLength(3)
  });
});

describe('asianRecipes', () => {
  it("returns asian recipes", () => {
    expect(getters.asianRecipes(state)).toHaveLength(1)
  });
});