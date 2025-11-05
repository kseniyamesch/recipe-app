<template>
    <div
        class="rounded-[24px] bg-[#FAF6F0]/80 backdrop-blur-sm border border-[rgba(38,37,34,0.2)] overflow-hidden hover:shadow-md transition-all duration-300">
        <NuxtLink :to="link">
            <div class="h-40 w-full overflow-hidden">
                <img :src="image" :alt="title"
                    class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            </div>
            <div class="p-4">
                <h3 class="font-semibold text-[#4B3832] text-lg mb-2">
                    {{ title }}
                </h3>
                <p class="text-[#262522]/80 text-sm leading-relaxed">
                    {{ description }}
                </p>
                <div class="mt-4 text-primary font-semibold text-sm uppercase">
                    Read more →
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">

defineProps({
    title: String,
    description: String,
    image: String,
    link: String
})
</script>

<style scoped></style>