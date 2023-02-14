<template>

    <vAboutItForCards :AboutCardTitle="AboutCardTitle" :AdditionalText="AdditionalText"
        :AboutCardDescription="AboutCardDescription">

        <template v-slot:AboutCardGalery>
            <!-- <GaleryImg></GaleryImg> -->
            <div class="about-card__photo-gallery basis-2/5 pb-8 lg:pb-0">
                <div class="photo-gallery-block">
                    <div class="photo-gallery__wrapper flex flex-col justify-between  md:h-full lg:h-[42rem]">

                        <div class="photo-gallery__large-image flex basis-4/5">
                            <img class="large-image__wrapper object-cover" id="largeImg"
                                src="~@/assets/img/clinic/gallery/img3-lg.jpg" alt="Image 3">
                        </div>

                        <ul class="photo-gallery__thumbs basis-1/5" id="thumbs">

                            <li>
                                <a href="img/clinic/gallery/img2-lg.jpg" title="Image 2"><img
                                        src="~@/assets/img/clinic/gallery/img2-thumb.png"></a>
                            </li>
                            <li>
                                <a href="img/clinic/gallery/img3-lg.jpg" title="Image 3"><img
                                        src="~@/assets/img/clinic/gallery/img3-thumb.png"></a>
                            </li>
                            <li>
                                <a href="img/clinic/gallery/img4-lg.jpg" title="Image 4"><img
                                        src="~@/assets/img/clinic/gallery/img4-thumb.png"></a>
                            </li>
                            <li>
                                <a href="img/clinic/gallery/img5-lg.jpg" title="Image 5"><img
                                        src="~@/assets/img/clinic/gallery/img5-thumb.png"></a>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </template>

        <template v-slot:AboutCardInputs>
            <div class="about-card__input-block flex flex-col lg:flex-row flex-wrap basis-[60%] md:basis-[15%]">

                <EllipseIcon EllipseIconSvg='loc_logo'>
                    <ul>
                        <li>Краснодарский край,</li>
                        <li>г.Геленджик,</li>
                        <li>ул.Туристическая, 19</li>

                    </ul>
                </EllipseIcon>
            </div>

        </template>
    </vAboutItForCards>

    <DoctorsBlock></DoctorsBlock>
    <MapAndContacts />
    <TechSupport></TechSupport>
</template>

<script>
//import
import vAboutItForCards from "@/components/blocks/functionalComponents/AboutItComponent/v-AboutItForCards"
import DoctorsBlock from "@/components/blocks/Doctors/DoctorsBlock"
import MapAndContacts from "@/components/blocks/Map/MapAndContacts"
import TechSupport from "@/components/blocks/TechSupport/TechSupportBlock"
import EllipseIcon from "./blocks/functionalComponents/Ellipse/EllipseIcon.vue"
// import GaleryImg from "@/components/blocks/functionalComponents/GaleryImg.vue"


export default {
    name: "CardClinic",
    components: {
    vAboutItForCards,
    DoctorsBlock,
    MapAndContacts,
    TechSupport,
    EllipseIcon
},
    props: {},

    data() {
        return {
            AboutCardTitle: 'Клиника семейной медицины “Эвкалипт”',
            AdditionalText: 'Травмотология и ортопедия · Детская хирургия · Артроскопия · Эндопротезирование · Нейрохирургия',
            AboutCardDescription: '<p>«Эвкалипт» — это многопрофильная клиника семейной медицины, в которой представлен широкий спектр медицинских услуг, как для детей, так и для взрослых. Работая круглосуточно, мы обеспечиваем качественную неотложную медицинскую помощь по направлениям детской хирургии, травматологии и ортопедии, урологии-андрологии, ведём плановый приём у квалифицированных узких специалистов. </p> <p>В нашей клинике созданы максимально комфортные условия для пациентов. Организованы дневной стационар и стационар круглосуточного пребывания для случаев, когда госпитализация необходима по медицинским показаниям. Комфортабельные палаты благоустроены по европейским стандартам качества. </p>',
        }
    }
}
</script>

<style scoped lang="scss">

</style>