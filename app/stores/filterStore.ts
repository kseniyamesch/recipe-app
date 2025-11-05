import { ref } from 'vue'
import { defineStore } from "pinia";

export const useFilterStore = defineStore('filter', () => {
    const selectedCategories = ref<string[]>([]);
    const selectedTags = ref<string[]>([]);

    function toggleCategory(slug: string) {
        if (selectedCategories.value.includes(slug)) {
            selectedCategories.value = selectedCategories.value.filter(s => s !== slug)
            console.log('Delete category')
            console.log(selectedCategories.value)
        } else {
            selectedCategories.value.push(slug)
        }
    }

    function toggleTag(slug: string) {
        if (selectedTags.value.includes(slug)) {
            selectedTags.value = selectedTags.value.filter(s => s !== slug)
        } else {
            selectedTags.value.push(slug)
        }
    }

    function clearFilters () {
        selectedCategories.value = [];
        selectedTags.value = []
    }

    return {selectedCategories, selectedTags, toggleCategory, toggleTag, clearFilters}
})