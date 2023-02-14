<template>

    <section>
        <div class="content">
            <div class="application-form-block ">
                <div class="application-form-block__wrapper">
                    <div class="title__name">
                        <div
                            class="h1 font-bold basis-1/2 text-[1.45rem] pb-5 sm:py-5 sm:px-0 md:text-3xl lg:text-3xl lg:w-1/2">
                            {{ ApplicationFormTitle }}
                        </div>
                    </div>

                    <div class="filling-form__block with_shadow aliceblue_theme rounded-xl">

                        <div class="filling-form__column-wrapper flex flex-col p-8">

                            <div class="filling-form__row-wrapper flex flex-row justify-between w-full pb-[2%]">


                                <div class="filling-form__wrapper part__a flex flex-wrap justify-between basis-2/5">

                                    <FIOMailPhone></FIOMailPhone>

                                    <slot name="add-input-part_a"></slot>

                                </div>

                                <div class="filling-form__wrapper part__b flex flex-col justify-between basis-1/2">
                                    <slot name="add-input-part_b"> </slot>
                                </div>
                            </div>

                            <div class="filling-form__row-wrapper flex flex-row justify-center w-full">
                                <slot name="add-input-part_c"> </slot>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import TitleName from "@/components/blocks/functionalComponents/TitleName.vue"
// import InputText from "@/components/blocks/functionalComponents/FillingInputBlocks/InputText.vue"

import FIOMailPhone from './FIOMailPhone.vue';


export default {
    name: "ApplicationForm",
    components: {
        FIOMailPhone
    },

    props: {
        ApplicationFormTitle: {
            type: String
        }
    },

    data() {
        return {
            applicationFormTitle: 'Заявка на экспертизу качества лечения',
            
        }
    },
}
</script>

<style scoped lang="scss">
.filling-form__block {
    width: 100%;
    // border-radius: 10px;

    .filling-form__column-wrapper {
        .filling-form__row-wrapper {
            .filling-form__wrapper {
                .filling__input-block {
                    display: flex;
                    flex-direction: column;

                }

                .button {
                    .buttonblock {
                        .buttonblock__wrapper {
                            height: 3rem;
                        }
                    }
                }
            }
        }
    }
}

.part__a {
    .filling__input-block {
        flex-basis: 40%;
        justify-content: space-between;
        padding-bottom: 2%;




    }


}
</style>