import axios from "axios";
import * as actions from '@/store/actions'

jest.mock("axios");

describe('getRecipes', () => {
    it("calls one updateRecipes mutation", async () => {
        axios.get.mockResolvedValue({
            data: [ { 'name': 'Brownie' } ]
        });
        const commit = jest.fn(); // commit spy
        await actions.getRecipes({ commit }); // dispatching the action

        // the updateRecipes mutation should have been called with the payload
        expect(commit).toHaveBeenCalledWith("updateRecipes", [{
          'name': 'Brownie'
        }]);
        // only one mutation should have been called
        expect(commit).toHaveBeenCalledTimes(1);
    });
});