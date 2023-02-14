<template>
    <div class="tech-support-block aliceblue_theme bgr_question pos_forDoctors">
        <div
            class="tech-support-block__wrapper w-full flex flex-col items-center justify-center h-[27.5rem] sm:h-[17.5rem]">
            <div class="tech-support__form basis-full sm:basis-[45%] flex flex-col items-center justify-between">
                <div class="tech-support__textblock font-bold text-2xl sm:text-3xl lg:text-4xl">
                    <div class="basis-4/5">
                        Задайте вопрос нашему консультанту
                    </div>
                </div>
                <div class="tech-support__buttonblock w-full flex justify-center">
                    <ButtonBlock @click="IsPopupOpen = true" ButtonWrapper="get-consultation_button h-[2.125rem] w-3/4" ButtonStyle="blue" ButtonName="Получить бесплатную консультацию">
                    </ButtonBlock>
                </div>
            </div>


        </div>
    </div>

    <PopupBlank :is-open="IsPopupOpen" @ok="PoppupConfirmed" @close="IsPopupOpen = false"
        PopupTitleName="Бесплатная консультация">
        <ModalFormTechsupport></ModalFormTechsupport>
    </PopupBlank>
</template>

<script>
import ButtonBlock from '../functionalComponents/FillingInputBlocks/ButtonBlock.vue';
import ModalFormTechsupport from '../ModalForm/ModalFormTechsupport.vue';
import PopupBlank from '../ModalForm/PopupBlank.vue';

export default {
    name: "TechSupport",
    components: {
        PopupBlank,
        ModalFormTechsupport,
        ButtonBlock
    },
    data() {
        return {
            IsPopupOpen: false,
        }
    },
    methods: {
        PoppupConfirmed() {
            alert("PoppupConfirmed")
            this.IsPopupOpen = false
        }
    }
}
</script>

<style scoped lang="scss">
@media (max-width: 999px) and (min-width: 640px) {

    .tech-support-block {
        .tech-support-block__wrapper {
            .tech-support__form {
                flex-basis: 50%;

                .tech-support__textblock {
                    width: 60%;
                    text-align: center;
                }
            }
        }
    }
}

@media (max-width: 639px) and (min-width: 50px) {
    .tech-support-block {
        background-position: center;

        .tech-support-block__wrapper {
            .tech-support__form {
                .tech-support__textblock {
                    display: flex;
                    justify-content: center;
                }
            }
        }
    }
}
</style>