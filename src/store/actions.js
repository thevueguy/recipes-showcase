import axios from 'axios'

export async function getRecipes({commit}) {
    await axios.get("https://sampleapis.com/recipes/api/recipes").then( response => {
        if (response.data.length){
            commit('updateRecipes', response.data);
        }
    })
}