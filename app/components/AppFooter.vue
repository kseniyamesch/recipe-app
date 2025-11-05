<template>
    <section class=" bg-text p-4 mt-4 pt-6 ">
        <div class="flex text-white justify-between">
            <p class="uppercase">Logo</p>
            <ul class="flex justify-around gap-2">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/recipes">Recipes</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog">Blog</NuxtLink>
                </li>
            </ul>
        </div>

        <p class="text-background text-center">© 2025 Name</p>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>