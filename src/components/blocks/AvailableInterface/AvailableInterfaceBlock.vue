<template>
    <section class="py-[3%]">
        <div class="available-interface__block">
            <TitleName titleName="Удобный интерфейс"></TitleName>

            <Agile :slidesToShow="1" :initialSlide="1" :timing="linear" centerMode
                AgileButtonsStyle="rounded-full border-none w-10 h-10 flex items-center justify-center blue with_shadow">

                <template v-slot:prevButton>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </template>
                <template v-slot:nextButton>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </template>
                
                <div class="available-interfase-img">
                    <img src="~@/assets/img/theme/laptop_slide_1.png" alt="">
                </div>
                <div class="available-interfase-img">
                    <img src="~@/assets/img/theme/laptop_slide_2.png" alt="">
                </div>
                <div class="available-interfase-img">
                    <img src="~@/assets/img/theme/laptop_slide_3.png" alt="">
                </div>

            </Agile>

        </div>
    </section>
</template>

<script>
import Agile from 'vue-agile/src/Agile.vue';
import TitleName from '../functionalComponents/TitleName.vue';

export default {
    name: "AvailableInterface",
    components: { Agile, TitleName }
}
</script>

<style scoped lang="scss">

</style>