<template>
    <section
        class="m-2 mt-4 rounded-[24px] p-4 pb-[60px] pt-6 border border-[rgba(38,37,34,0.24)] ">
        <div>
            <h2 class="uppercase text-xl font-semibold text-[#4B3832] ml-6 mb-4">From Our Blog</h2>
            <div class="grid md:grid-cols-3 gap-6">
                <ArticleCard v-for="article in blogArticles" :key="article.id" :title="article.title"
                    :excerpt="article.description" :image="article.image" :link="article.link" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

import { blogArticles } from "@/data/blogArticles"

</script>

<style scoped></style>