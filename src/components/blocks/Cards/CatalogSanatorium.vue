<template>
    <div class="choise-a-specialists__catalog">
        <div class="catalog__wrapper">
            <div class="catalog-item sanatorium with_shadow rounded-xl">

                <div
                    class="catalog-service__wrapper sanatorium white with_shadow rounded-xl w-full flex min-[660px]:justify-center">
                    <div
                        class="catalog-item__wrapper mx-7 my-5 w-full flex flex-col min-[660px]:flex-row justify-between items-center">

                        <div
                            class="services-img-block w-full min-[660px]:h-full flex flex-col justify-between basis-[30%] lg:basis-1/5 pb-5 min-[660px]:pr-5 min-[660px]:pb-0 lg:p-0">
                            <img class="services-img__photo min-[660px]:basis-4/5 services-img__sanatorium rounded-xl object-cover"
                                src="~@/assets/img/sanatorium/sanatorium_01_x1.png" alt="">

                            <div class="hidden min-[660px]:block lg:hidden additional-button_block">
                                <ButtonBlock @click="IsPopupOpen = true" ButtonWrapper="h-[2.125rem]" ButtonStyle="blue"
                                    ButtonName="Подробнее">
                                </ButtonBlock>
                            </div>
                        </div>
                        <div class="services-info-block w-full h-full min-[660px]:basis-[63%] lg:basis-3/4">

                            <div class="services-info-block__wrapper w-full h-full flex flex-col">
                                <div
                                    class="catalog-item__name sanatorium__name font-bold text-lg lg:text-2xl basis-[10%] pb-[3%]">
                                    ЛОК "Солнечная"

                                </div>
                                <span class="additional_textblock text-sm md:text-base xl:text-base pb-[3%]">
                                    Травмотология и ортопедия · Детская хирургия · Артроскопия ·
                                    Эндопротезирование · Нейрохирургия
                                </span>
                                <div
                                    class="catalog-item__info h-full flex flex-col min-[660px]:flex-row justify-between min-[660px]:items-center basis-11/12">

                                    <div
                                        class="catalog-item__info__input-block flex flex-col justify-between sanatorium-grid basis-full lg:basis-[78%] min-[1220px]:basis-[70%]">

                                        <div class="location basis-[30%]">

                                            <EllipseIcon EllipseIconSvg='loc_logo'>
                                                <ul>
                                                    <li>Краснодарский край,</li>
                                                    <li>г.Геленджик,</li>
                                                    <li>ул.Туристическая, 19</li>

                                                </ul>
                                            </EllipseIcon>

                                        </div>

                                        <div class="food basis-[30%]">

                                            <EllipseIcon EllipseIconSvg='food_logo'>
                                                <ul>
                                                    <li>Без питания,</li>
                                                    <li>только завтрак,</li>
                                                    <li>всё включено</li>

                                                </ul>
                                            </EllipseIcon>

                                        </div>

                                        <div class="roomType basis-[30%]">

                                            <EllipseIcon EllipseIconSvg='roomType_logo'>
                                                <ul>
                                                    <li>одноместный стандарт,</li>
                                                    <li>двухместный стандарт,</li>
                                                    <li>трехместный стандарт,</li>
                                                    <li>одноместный люкс,</li>
                                                    <li>двухместный люкс,</li>
                                                    <li>трехместный люкс</li>
                                                </ul>
                                            </EllipseIcon>

                                        </div>
                                    </div>

                                    <div
                                        class="flex min-[660px]:hidden lg:flex choose-a-service_block h-full flex-col min-[660px]:flex-row-reverse lg:flex-col justify-between basis-[10%] lg:basis-[25%]">
                                        <div class="button basis-1/2 lg:basis-auto py-[2%] min-[660px]:p-0">
                                            <router-link :to="{ name: 'CardSanatorium' }">
                                                <ButtonBlock ButtonWrapper="h-[2.125rem]"
                                                    ButtonStyle="blue" ButtonName="Подробнее">
                                                </ButtonBlock>
                                            </router-link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import EllipseIcon from '../functionalComponents/Ellipse/EllipseIcon.vue';
import ButtonBlock from '../functionalComponents/FillingInputBlocks/ButtonBlock.vue';

export default {
    name: "CatalogSanatorium",
    data() {
        return {

        };
    },
    components: {
        ButtonBlock,
        EllipseIcon,
    }
}
</script>