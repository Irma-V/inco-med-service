
<template>
    <section>
        <div class="content">
            <div class="about-card__wrapper flex flex-col ">

                <div class="card-content-item flex flex-col sm:hidden">
                    <div class="title__textblock w-full font-bold leading-4 text-xl sm:text-3xl pb-5">
                        {{ AboutCardTitle }} </div>

                    <span class="additional_textblock text-base sm:text-xl pb-5">{{ AdditionalText }} </span>
                </div>

                <div class="card-content-item flex flex-col sm:flex-row justify-between">

                    <slot name="AboutCardPhoto">
                        <!-- <img class="about-a-doctor__image object-cover rounded-xl h-[50%]" src="~@/assets/img/doctors/ivanov.jpg" alt=""> -->
                    </slot>

                    <slot name="AboutCardGalery"> </slot>

                    <div class="about-it__textblock basis-[55%] flex flex-col justify-between pb-8 lg:pb-0">

                        <div
                            class=" hidden sm:block title__textblock w-full font-bold leading-4 sm:text-xl md:text-3xl pb-5 basis-[5%]">
                            {{ AboutCardTitle }} </div>

                        <span
                            class="hidden sm:block additional_textblock text-sm md:text-base xl:text-base pb-5 basis-[25%] md:basis-[15%]">
                            {{ AdditionalText }} </span>

                        <slot name="AboutCardInputs"></slot>
                        <!-- <slot name="AboutCardDescription"></slot> -->
                        <div v-html="AboutCardDescription"
                            class="hidden lg:block title__description about-card__description  md:text-base xl:text-xl  basis-[75%]">
                        </div>



                    </div>

                </div>

                <div class="card-content-item flex-col lg:hidden">
                    <div v-html="AboutCardDescription"
                        class="title__description about-card__description text-sm md:text-base xl:text-xl  basis-[75%]">
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
//import

export default {
    name: "v-AboutItForCards",
    components: {},
    props: {
        AdditionalText: {
            type: String
        },
        AboutCardTitle: {
            type: String
        },
        AboutCardDescription: {
            type: String
        },
    },

    data() {
        return {

        }
    }
}
</script>

<!-- <script>
thumbs.onclick = function(event) {
let thumbnail = event.target.closest('a');
                                        
if (!thumbnail) return;
showThumbnail(thumbnail.href, thumbnail.title);
event.preventDefault();
}
                                        
function showThumbnail(href, title) {
largeImg.src = href;
largeImg.alt = title;
}
</script> -->

<style scoped lang="scss">

</style>