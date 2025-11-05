<template>
    <section class="m-2 mt-4 rounded-[24px] p-4 pt-6 border border-[rgba(38,37,34,0.24)] bg-primary">
        <h2 class="uppercase text-xl font-bold text-white text-center mt-6">Join our culinary community</h2>
        <p class="mt-6 text-white text-center">Get fresh recipe ideas and cooking tips right to your inbox.</p>
        <div class="mt-6 bg-white border border-[rgba(38,37,34,0.24)] rounded-[24px] overflow-hidden pt-[6px] pb-[6px] pl-[15px] pr-[15px] w-1/2 mx-auto">
            <form @submit.prevent="handleSubmit" class="flex justify-between">
                <input type="email" placeholder="Email adress" class="p-[6px] w-1/2 outline-none" v-model="email">
                <button type="submit" class=" text-white bg-text rounded-[24px] p-[7px] hover:bg-secondary transition-colors">Subscribe</button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">

const email = ref('');

function handleSubmit () {
    if(!email.value) {
        return 
    }
console.log("Email: ", email.value)
}

</script>

<style scoped></style>