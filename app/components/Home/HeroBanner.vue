<template>
    <section class="mt-[20px] mx-[8px] p-[120px_20px] rounded-[24px] bg-cover text-white"
  style="background-image: url('/hero.jpg')">
    <!-- <section> -->
        <div class="max-w-7xl mx-auto px-4 flex flex-col items-start justify-center space-y-6">
            <h1 class="text-4xl md:text-6xl font-bold">
                Delicious Recipes at Your Fingertips
            </h1>
            <p class="text-lg md:text-xl text-gray-300">
                Find inspiration or generate a recipe from ingredients you already have at home.
            </p>
            <div class="flex space-x-4">
                <NuxtLink to="/recipes"
                    class="bg-primary text-white px-6 py-3 rounded-[24px] font-semibold hover:bg-secondary transition-colors">
                    Browse All Recipes
                </NuxtLink>
                <NuxtLink to="/ai-generator"
                    class="bg-accent text-white px-6 py-3 rounded-[24px] font-semibold hover:bg-secondary transition-colors">
                    Generate a Recipe
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>