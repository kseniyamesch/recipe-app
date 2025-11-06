<template>
    
    <div class="flex justify-between ">
        <ul class="flex gap-2">
            <li v-for="c in categories" :key="c.id">
                <button type="button" @click="onCategoryBtnClick(c.slug)">{{ c.name }}</button>
            </li>
        </ul>
       
        <ul class="flex gap-2">
            <li v-for="t in tags" :key="t.id">
                <button @click="onTagBtnClick(t.slug)" type="button">{{ t.name }}</button>
            </li>
        </ul>
         <button @click="onClearFilters" class="flex " style="border: none; font-weight: bold; text-decoration: underline;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width='16px' fill="#6D4C41"><path d="M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6-12.5 0-22.6 10.1-22.6 22.6l0 29.1 108.3 108.3 29.1 0c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8c-22.3 22.3-34.8 52.5-34.8 84 0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9 0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8 30.6-30.6 45.9-73.1 42.3-115.8z"/></svg>
        Clear filters</button>
    </div>
    
</template>

<script setup lang="ts">

import { categories } from '~/data/categories';
import { tags } from '~/data/tags';
import { useFilterStore } from '#imports';

const filterStore = useFilterStore();


function onTagBtnClick(slug: string) {
    filterStore.toggleTag(slug)
    console.log("Tag filter clicked", slug)
    console.log(filterStore.selectedTags)
}

function onCategoryBtnClick(slug: string) {
    filterStore.toggleCategory(slug)
    console.log("Categories filter clicked", slug)
    console.log(filterStore.selectedCategories)
}

function onClearFilters () {
    filterStore.clearFilters()
    console.log("selected tags: ",filterStore.selectedTags)
    console.log("Selected categories: ", filterStore.selectedCategories)
}

</script>

<style scoped>
button {
    border-radius: 24px;
    border: 1px solid rgba(38, 37, 34, 0.24);
    padding: 8px 12px;

    &:hover {
        background-color: #FFD93D;
        color: white;
    }
}
</style>