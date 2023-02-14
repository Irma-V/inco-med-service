<template>

    <section>
        <div class="content">

            <div class="about-it__block">
                <div class="title__name">
                    <div
                        class="h1 font-bold basis-1/2 text-[1.45rem] pb-5 sm:py-5 sm:px-0 md:text-3xl lg:text-3xl lg:w-1/2">
                        {{ aboutItTitleHeader }}
                    </div>
                </div>

                <div class="about-it__wrapper flex flex-col-reverse  md:flex-row-reverse justify-between items-center">
                    <div class="about-it__textblock flex flex-col justify-between md:basis-1/2 lg:basis-[45%]">

                        <div class="title__textblock w-full font-bold leading-4 sm:text-xl md:text-3xl pb-5">
                            {{ aboutItTitle }} </div>
                        <div v-html="aboutItDescription" class="title__description text-sm md:text-base xl:text-xl">
                        </div>
                    </div>

                    <div class="title-img basis-[45%] mb-9 md:m-0">
                        <slot name="aboutItImage"></slot>

                    </div>
                </div>
            </div>

        </div>
    </section>

</template>

<script>


export default {
    name: "v-AboutIt",
    
    props: {
        aboutItTitleHeader: {
            type: String
        },
        aboutItTitle: {
            type: String
        },
        aboutItDescription: {
            type: String

        },
        aboutItImage: {
            type: String
        }
    },

    data() {
        return {
            // aboutItTitleHeader: ""
        }
    }
};
</script>
