<template>
    <header>
        <div class="m-2 p-3 border border-[rgba(38,37,34,0.24)] rounded-[24px] flex justify-between items-center shadow hover:shadow-lg transition-shadow bg-background/90" >
            <div>
                <h3 class="font-bold">tAIsty</h3>
            </div>
            <nav>
                <ul class="flex space-x-4">
                    <li v-for="link in navLinks" :key="link.to">
                        <NuxtLink :to="link.to" class="font-semibold uppercase border-b-2 px-1 transition-colors"
                            :class="route.path === link.to
                                ? 'text-primary border-primary'
                                : 'text-textDark border-transparent hover:text-primary'">
                            {{ link.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="flex align-center">
                <form action="" class="bg-white rounded-[24px] p-3 mr-2">
                    <input type="text" placeholder="Search recipes..." class="bg-transparent outline-none">
                    <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10px" height="10px" fill="#4B3832"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>
                </form>
                <ul class="flex items-center">
                    <li class="mr-2">
                        <button
                            class="bg-primary text-white px-6 py-3 rounded-[24px] font-semibold hover:bg-secondary transition-colors">Generate
                            recipe</button>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Recipes', to: '/recipes' },
    { name: 'Blog', to: '/blog' },
]
</script>

<style scoped></style>