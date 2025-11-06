<template>
    <section class="rounded-[24px] border border-[rgba(38,37,34,0.24)] m-2 p-4 pt-6">
        <h2 class="uppercase text-xl font-semibold text-[#4B3832] text-center ml-6 text-primary">Explore all our recipes — filter by
            category, difficulty or preparation time.</h2>
        <div class="border border-[rgba(38,37,34,0.24)] mt-6 p-3 rounded-[24px] shadow shadow-lg ">
            <RecipeFilters></RecipeFilters>
        </div>

        <ul class="grid grid-cols-3 gap-2 mt-4">
            <RecipeCard v-for="item in filteredRecipes" :key="item.id" :recipe="item">
            </RecipeCard>
        </ul>
    </section>
</template>

<script setup lang="ts">

import { useRecipes } from '#imports';
import RecipeCard from '~/components/RecipeCard.vue';
const recipes = useRecipes()
const filterStore = useFilterStore();

const filteredRecipes = computed(()=> {
    return recipes.filter(recipe => {
        const matchCategory = filterStore.selectedCategories.length === 0 ||
        filterStore.selectedCategories.includes(recipe.category.toLowerCase())

        const matchTags = filterStore.selectedTags.length === 0 || 
        filterStore.selectedTags.every(tag => recipe.tags?.includes(tag)) 

        return matchCategory && matchTags
    })
})



</script>

<style scoped></style>