<template>
    <vAboutItForCards :AboutCardTitle="AboutCardTitle" :AdditionalText="AdditionalText"
        :AboutCardDescription="AboutCardDescription">

        <template v-slot:AboutCardGalery>
            <!-- <GaleryImg></GaleryImg> -->
            <div class="about-card__photo-gallery basis-2/5 pb-8 pr-4 lg:pb-0">
                <div class="photo-gallery-block">
                    <div class="photo-gallery__wrapper flex flex-col justify-between  md:h-full lg:h-[42rem]">

                        <div class="photo-gallery__large-image flex basis-4/5">
                            <img class="large-image__wrapper object-cover" id="largeImg"
                                src="~@/assets/img/sanatorium/gallery/img3-lg.jpg" alt="Image 3">
                        </div>

                        <ul class="photo-gallery__thumbs basis-1/5" id="thumbs">

                            <li>
                                <a href="img/sanatorium/gallery/img2-lg.jpg" title="Image 2"><img
                                        src="~@/assets/img/sanatorium/gallery/img2-thumb.png"></a>
                            </li>
                            <li>
                                <a href="img/sanatorium/gallery/img3-lg.jpg" title="Image 3"><img
                                        src="~@/assets/img/sanatorium/gallery/img3-thumb.png"></a>
                            </li>
                            <li>
                                <a href="img/sanatorium/gallery/img4-lg.jpg" title="Image 4"><img
                                        src="~@/assets/img/sanatorium/gallery/img4-thumb.png"></a>
                            </li>
                            <li>
                                <a href="img/sanatorium/gallery/img5-lg.jpg" title="Image 5"><img
                                        src="~@/assets/img/sanatorium/gallery/img5-thumb.png"></a>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </template>

        <template v-slot:AboutCardInputs>
            <div class="about-card__input-block flex flex-col lg:flex-row basis-[60%] md:basis-[15%] pb-[3%]">
                <EllipseIcon EllipseIconSvg='loc_logo'>
                    <ul>
                        <li>Краснодарский край,</li>
                        <li>г.Геленджик,</li>
                        <li>ул.Туристическая, 19</li>

                    </ul>
                </EllipseIcon>

                <EllipseIcon EllipseIconSvg='food_logo'>
                    <ul>
                        <li>Без питания,</li>
                        <li>только завтрак,</li>
                        <li>всё включено</li>

                    </ul>
                </EllipseIcon>

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
        </template>

    </vAboutItForCards>
    <RoomsSelector></RoomsSelector>
    <TechSupport></TechSupport>
</template>

<script>
//import
import vAboutItForCards from "@/components/blocks/functionalComponents/AboutItComponent/v-AboutItForCards"
import RoomsSelector from "@/components/blocks/RoomsSelector/RoomsSelector"
import TechSupport from "@/components/blocks/TechSupport/TechSupportBlock"
import EllipseIcon from "./blocks/functionalComponents/Ellipse/EllipseIcon.vue"


export default {
    name: "CardSanatorium",
    components: {
        vAboutItForCards,
        RoomsSelector,
        TechSupport,
        EllipseIcon
    },
    props: {},

    data() {
        return {
            AboutCardTitle: 'ЛОК “СОЛНЕЧНАЯ”',
            AdditionalText: 'Лечение органов дыхания · Движения · Зрения · Сердечно-сосудистой системы Опорно-дигательного аппарата · Профилаткика детской заболеваемости',
            AboutCardDescription: '<p>Одна из лучших здравниц Геленджика – ЛОК «Солнечная» – расположилась в 7 км от шумного центра на берегу Геленджикской бухты. С трех сторон территория ограничена корпусами, а южная сторона через парк выходит на балюстраду городской набережной. И все это в окружении пицундской сосны, кипарисов, платанов и ленкоранской акации.</p><br> <p>700 жилых номеров разместились в 4- и 7-этажном корпусах, соединенных крытыми переходами со столовой, лечебным корпусом, бассейном, питьевым бюветом. Отдыхающим предоставляется 3-разовое питание по системе «шведский стол». Дополнительно работает лобби-бар и кафе «Избушка».</p><br> <p>Для разнообразного досуга гостей проводятся различные развлекательные мероприятия, киносеансы, дискотеки, экскурсии, анимационные программы для детей. Имеются возможности для проведения различного рода бизнес-мероприятий.</p>',

        }
    }
}
</script>

<style scoped lang="scss">

</style>