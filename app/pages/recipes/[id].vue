<template>
    <div class="rounded-[24px] border border-[rgba(38,37,34,0.24)] m-2 p-4 pt-6">
        <h2>{{ recipe.title }}</h2>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRecipes } from '#imports'

const route = useRoute()
const recipeId = Number(route.params.id)  
const recipes = useRecipes()
console.log(recipes)
const recipe = ref()
recipe.value = recipes.find(r=>r.id === recipeId)
console.log(recipe.value)
</script>

<style lang="scss" scoped></style>