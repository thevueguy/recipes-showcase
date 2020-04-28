<template>
  <div>

    <h1>Recipes app</h1>

    <h3>Filters</h3>
    <ul style="list-style-type: none;">
      <li><label><input type="radio" v-model="filter" value="all"> All</label></li>
      <li><label><input type="radio" v-model="filter" value="lowCaloriesRecipes"> Low Calories</label></li>
      <li><label><input type="radio" v-model="filter" value="easyRecipes"> Easy Recipes</label></li>
      <li><label><input type="radio" v-model="filter" value="asianRecipes"> Asian Recipes</label></li>
    </ul>

    <h3>Recipes</h3>

    <ul>
      <li v-for="recipe in recipes" :key="recipe.id">{{ recipe.title }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Recipes',
  data(){
    return {
      filter: 'all'
    }
  },
  created(){
    this.$store.dispatch('getRecipes');
  },
  computed: {
    recipes(){
      if (this.filter !== 'all'){
        return this.$store.getters[this.filter];
      }
      return this.$store.state.recipes;
    }
  }
};
</script>

<style>
</style>
