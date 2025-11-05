<template>
    <div class="mt-3 flex justify-between">
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
    </div>
</template>

<script setup lang="ts">

import { categories } from '~/data/categories';
import { tags } from '~/data/tags';
import { useFilterStore } from '#imports';

const filterStore = useFilterStore();
const selectedTags = filterStore.selectedTags
const selectedCategories = filterStore.selectedCategories


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