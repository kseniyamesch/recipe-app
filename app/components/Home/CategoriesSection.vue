<template>
    <section
        class="m-2 rounded-[24px] p-6 mt-4 flex bg-[#FAF6F0]/80 backdrop-blur-sm border border-[rgba(38,37,34,0.24)] justify-around">
        <div class="self-center">
            <h2 class="text-[#4B3832] text-xl font-semibold mb-4 uppercase">Looking for inspiration?</h2>
            <p class="text-[#262522]/80 text-sm max-w-md mx-auto">
                Don’t know what to cook today? Explore our curated recipe categories —
                from quick everyday meals to healthy low-calorie dishes and budget-friendly ideas.
            </p>
        </div>
        <ul>
            <li v-for="item in categories" :key="item.name" class="border border-[rgba(38,37,34,0.24)] rounded-[24px] p-3 m-2 hover:border-accent hover:bg-accent/30">
                <button class="flex items-center text-textDark space-x-2">
                    <img :src="item.icon" :alt="item.name" class="w-5 h-5">
                    <span class="uppercase">{{ item.name }}</span>
                </button>
            </li>
        </ul>
        <ul>
            <li class="border border-[rgba(38,37,34,0.24)] rounded-[24px] p-3 m-2 hover:border-accent hover:bg-accent/30">
                <button class="flex items-center space-x-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="w-5 h-5" fill="#262522">
                            <path
                                d="M466.6 114.2C461.2 115.9 455.3 116 450.4 113.3C444.6 110.1 438.6 107.1 432.6 104.4C422.2 99.7 418.9 86.1 428.5 79.8C443.5 69.9 461.5 64.1 480.8 64.1C533.4 64.1 576 106.7 576 159.3C576 172.5 573.3 185.1 568.4 196.6C563.9 207.1 550 206.4 543.5 197C539.7 191.5 535.7 186.2 531.5 181C528 176.6 527 170.8 527.7 165.2C527.9 163.3 528.1 161.3 528.1 159.3C528.1 133.2 506.9 112.1 480.9 112.1C476 112.1 471.2 112.9 466.7 114.3zM96.5 196.9C90 206.3 76 207 71.6 196.5C66.7 185 64 172.4 64 159.2C64 106.6 106.6 64 159.2 64C178.5 64 196.5 69.8 211.5 79.7C221.1 86 217.8 99.6 207.4 104.3C201.3 107.1 195.4 110 189.6 113.2C184.7 115.9 178.7 115.8 173.4 114.1C168.9 112.7 164.2 111.9 159.2 111.9C133.1 111.9 112 133.1 112 159.1C112 161.1 112.1 163.1 112.4 165C113.1 170.6 112.1 176.4 108.6 180.8C104.4 186 100.4 191.3 96.6 196.8zM496 352C496 254.8 417.2 176 320 176C222.8 176 144 254.8 144 352C144 449.2 222.8 528 320 528C417.2 528 496 449.2 496 352zM460.5 526.5C422.1 557.4 373.2 576 320 576C266.8 576 217.9 557.4 179.5 526.5L137 569C127.6 578.4 112.4 578.4 103.1 569C93.8 559.6 93.7 544.4 103.1 535.1L145.6 492.6C114.6 454.1 96 405.2 96 352C96 228.3 196.3 128 320 128C443.7 128 544 228.3 544 352C544 405.2 525.4 454.1 494.5 492.5L537 535C546.4 544.4 546.4 559.6 537 568.9C527.6 578.2 512.4 578.3 503.1 568.9L460.6 526.4zM344 248L344 342.1L385 383.1C394.4 392.5 394.4 407.7 385 417C375.6 426.3 360.4 426.4 351.1 417L303.1 369C298.6 364.5 296.1 358.4 296.1 352L296.1 248C296.1 234.7 306.8 224 320.1 224C333.4 224 344.1 234.7 344.1 248z" />
                        </svg>
                    </span>
                    <span class="uppercase">Quick & Easy</span>
                </button>
            </li>
            <li class="border border-[rgba(38,37,34,0.24)] rounded-[24px] p-3 m-2 hover:border-accent hover:bg-accent/30">
                <button class="flex items-center space-x-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-5 h-5" fill="#4B3832">
                            <path
                                d="M136 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-114.9 0c-24.9 0-45.1 20.2-45.1 45.1 0 22.5 16.5 41.5 38.7 44.7l91.6 13.1c53.8 7.7 93.7 53.7 93.7 108 0 60.3-48.9 109.1-109.1 109.1l-10.9 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-72 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l130.9 0c24.9 0 45.1-20.2 45.1-45.1 0-22.5-16.5-41.5-38.7-44.7l-91.6-13.1C55.9 273.5 16 227.4 16 173.1 16 112.9 64.9 64 125.1 64l10.9 0 0-40z" />
                        </svg>
                    </span>
                    <span class="uppercase">Budget-friendly</span>
                </button>
            </li>
            <li class="border border-[rgba(38,37,34,0.24)] rounded-[24px] p-3 m-2 hover:border-accent hover:bg-accent/30">
                <button class="flex items-center space-x-2">
                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5" fill="#4B3832">
                            <path
                                d="M256.5-32a56 56 0 1 1 0 112 56 56 0 1 1 0-112zM123.6 176c-3.3 0-6.2 2-7.4 5L94.2 235.9c-6.6 16.4-25.2 24.4-41.6 17.8s-24.4-25.2-17.8-41.6l21.9-54.9C67.7 129.9 94.1 112 123.6 112l97.3 0c28.5 0 54.8 15.1 69.1 39.7l32.8 56.3 61.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-61.6 0c-22.8 0-43.8-12.1-55.3-31.8l-10-17.1-20.7 70.4 75.4 22.6c27.7 8.3 41.8 39 30.1 65.5L285.7 509c-7.2 16.2-26.1 23.4-42.2 16.2s-23.4-26.1-16.2-42.2l49.2-110.8-95.9-28.8c-32.7-9.8-52-43.7-43.7-76.8l22.7-90.6-35.9 0zm-8 181c13.3 14.9 30.7 26.3 51.2 32.4l4.7 1.4-6.9 19.3c-5.8 16.3-16 30.8-29.3 41.8L52.9 519.8c-13.6 11.2-33.8 9.3-45-4.3s-9.3-33.8 4.3-45l82.4-67.9c4.5-3.7 7.8-8.5 9.8-13.9L115.6 357z" />
                        </svg></span>
                    <span class="uppercase">Low Calorie</span>
                </button>
            </li>
            <li class="border border-[rgba(38,37,34,0.24)] rounded-[24px] p-3 m-2 hover:border-accent hover:bg-accent/30">
                <button class="flex items-center space-x-2">
                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5" fill="#4B3832">
                            <path
                                d="M471.3 6.7C477.7 .6 487-1.6 495.6 1.2 505.4 4.5 512 13.7 512 24l0 186.9c0 131.2-108.1 237.1-238.8 237.1-77 0-143.4-49.5-167.5-118.7-35.4 30.8-57.7 76.1-57.7 126.7 0 13.3-10.7 24-24 24S0 469.3 0 456C0 381.1 38.2 315.1 96.1 276.3 131.4 252.7 173.5 240 216 240l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-39.7 0-77.3 8.8-111 24.5 23.3-70 89.2-120.5 167-120.5 66.4 0 115.8-22.1 148.7-44 19.2-12.8 35.5-28.1 50.7-45.3z" />
                        </svg></span>
                    <span class="uppercase">Vegetarian</span>
                </button>
            </li>
            <li class="border border-[rgba(38,37,34,0.24)] rounded-[24px] p-3 m-2 hover:border-accent hover:bg-accent/30">
                <button class="flex items-center space-x-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5" fill="#4B3832">
                            <path
                                d="M63.9 14.4C63.1 6.2 56.2 0 48 0s-15.1 6.2-16 14.3L17.9 149.7c-1.3 6-1.9 12.1-1.9 18.2 0 45.9 35.1 83.6 80 87.7L96 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7 0-6.1-.6-12.2-1.9-18.2L223.9 14.3C223.1 6.2 216.2 0 208 0s-15.1 6.2-15.9 14.4L178.5 149.9c-.6 5.7-5.4 10.1-11.1 10.1-5.8 0-10.6-4.4-11.2-10.2L143.9 14.6C143.2 6.3 136.3 0 128 0s-15.2 6.3-15.9 14.6L99.8 149.8c-.5 5.8-5.4 10.2-11.2 10.2-5.8 0-10.6-4.4-11.1-10.1L63.9 14.4zM448 0C432 0 320 32 320 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-448c0-17.7-14.3-32-32-32z" />
                        </svg>
                    </span>
                    <span class="uppercase">Week menu</span>
                </button>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { categories } from '~/data/categories';

</script>

<style scoped></style>