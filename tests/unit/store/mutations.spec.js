import * as mutations from '@/store/mutations'

describe('updateRecipes', () => {
    const state = { recipes: [] }; // Faking the state
    it("updates recipes list", () => {
        mutations.updateRecipes(state, [{
          name: 'Apple Pie'
        }]);
        // The apple pie should now be in the recipes
        expect(state.recipes[0].name).toBe('Apple Pie');
    });
});