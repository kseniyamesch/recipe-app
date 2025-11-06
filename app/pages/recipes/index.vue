<template>
    <section class="rounded-[24px] border border-[rgba(38,37,34,0.24)] m-2 p-4 pt-6">
        <h2 class="uppercase text-xl font-semibold text-[#4B3832] text-center ml-6 text-primary">Explore all our recipes
            — filter by
            category, difficulty or preparation time.</h2>
        <div class="border border-[rgba(38,37,34,0.24)] mt-6 p-3 rounded-[24px] shadow shadow-lg ">
            <RecipeFilters></RecipeFilters>
        </div>
        <ul class="grid grid-cols-3 gap-2 mt-4">
            <RecipeCard v-for="item in recipesToShow" :key="item.id" :recipe="item">
            </RecipeCard>
        </ul>
        <div class="flex justify-center mt-6">
            <nav
                class="flex items-center gap-2 px-4 py-2 rounded-2xl border border-[rgba(38,37,34,0.24)] bg-[#FAF6F0]/80 backdrop-blur-md shadow-sm">
                <button
                    class="px-3 py-1 text-sm rounded-full border border-transparent hover:border-[#9AE6B4] hover:bg-[#9AE6B4]/30 transition"
                    :class="currentPage === 1
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:border-[#9AE6B4] hover:bg-[#9AE6B4]/30'" @click="onPrevClick"
                    :disabled="currentPage === 1">
                    ← Prev
                </button>

                <button v-for="page in visiblePages" :key="page"
                    class="w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition" :class="page === currentPage
                        ? 'bg-[#9AE6B4]/60 text-black shadow-sm '
                        : 'hover:bg-[#9AE6B4]/30 hover:text-black'" @click="currentPage = page">
                    {{ page }}
                </button>
                <button
                    class="px-3 py-1 text-sm rounded-full border border-transparent hover:border-[#9AE6B4] hover:bg-[#9AE6B4]/30 transition"
                    :class="currentPage === totalPages
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:border-[#9AE6B4] hover:bg-[#9AE6B4]/30'" @click="onNextClick" :disabled="currentPage === totalPages">
                    Next →
                </button>
            </nav>
        </div>
    </section>
</template>

<script setup lang="ts">

import { useRecipes } from '#imports';
import RecipeCard from '~/components/RecipeCard.vue';
const recipes = useRecipes()
const filterStore = useFilterStore();

const recipesPerPage: number = 6;
const currentPage = ref(1);

const totalPages = computed(() =>
    Math.ceil(filteredRecipes.value.length / recipesPerPage)
)

const filteredRecipes = computed(() => {
    return recipes.filter(recipe => {
        const matchCategory = filterStore.selectedCategories.length === 0 ||
            filterStore.selectedCategories.includes(recipe.category.toLowerCase())

        const matchTags = filterStore.selectedTags.length === 0 ||
            filterStore.selectedTags.every(tag => recipe.tags?.includes(tag))

        return matchCategory && matchTags
    })
})

const recipesToShow = computed(() => {
    const start = (currentPage.value - 1) * recipesPerPage
    const end = currentPage.value * recipesPerPage
    return filteredRecipes.value.slice(start, end)
})

function onNextClick() {
    if (currentPage.value < totalPages.value) currentPage.value++
}

function onPrevClick() {
    if (currentPage.value > 1) currentPage.value = currentPage.value - 1
}

const visiblePages = computed(() => {
    const pages: number[] = []
    const total = totalPages.value

    if (total <= 3) {
        for (let i = 1; i <= total; i++) pages.push(i)
    } else {
        if (currentPage.value === 1) {
            pages.push(1, 2, 3)
        } else if (currentPage.value === total) {
            pages.push(total - 2, total - 1, total)
        } else {
            pages.push(currentPage.value - 1, currentPage.value, currentPage.value + 1)
        }
    }
    return pages
})

</script>

<style scoped></style>