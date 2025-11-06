<template>
    <section class="m-2 mt-4 rounded-[24px] p-4 pt-6 border border-[rgba(38,37,34,0.24)] ">
        <h2 class="uppercase text-xl font-semibold text-[#4B3832] ml-6">Featured recipes</h2>
        <ul class="flex gap-4 mt-4 justify-center">
            <RecipeCard v-for="r in featured" :key="r.id" :recipe="r"></RecipeCard>
        </ul>
    </section>
</template>

<script setup lang="ts">
import RecipeCard from '../RecipeCard.vue';
import { useRecipes } from '~/composables/recipes';

const recipes = useRecipes();
const featured = recipes.slice(0, 2)
</script>

<style scoped></style>