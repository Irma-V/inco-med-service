<template>
    <section>
        <VAccordion accordionItemStyle="" hideArrow>
            <template v-slot:accordionTitle>
                <div class="show-more__label">Смотерть лицензии</div>

            </template>

            <template v-slot:accordionContent>
                <agile :slidesToShow="3.5" :autoplay="true" :navButtons="false" :autoplaySpeed="5000"
                    :options="optionsLicense">
                    <template v-slot:prevButton>
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </template>
                    <template v-slot:nextButton>
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </template>

                    <ImageWithPopup @click="IsPopupOpen = true" v-for="licenceItem in licenseList" :key="licenceItem"
                        ImgWrapper="license-item" ImgStyle="w-[23.125rem]" :src="licenceItem.src" :id="licenceItem.id">
                    </ImageWithPopup>

                </agile>

                <PopupBlank :is-open="IsPopupOpen" @close="IsPopupOpen = false" popupHeaderStyle="hidden">
                    <!-- <div class="footer">
                        <div name="actions" :close="close" :confirm="confirm">
                            <button @click="close">Отмена</button>
                            &nbsp;
                            <button @click="confirm">Ok</button>
                        </div>
                    </div> -->
                    <img v-for="licenceItem in licenseList" :key="licenceItem" :src="licenceItem.src" alt="">
                </PopupBlank>
            </template>
        </VAccordion>
    </section>

    <div class="show-content">

    </div>




</template>

<script>
import { VueAgile } from 'vue-agile'
import VAccordion from '../functionalComponents/AccordionComponent/v-Accordion.vue';
import ImageWithPopup from '../functionalComponents/ImageWithPopup.vue'
import PopupBlank from '../ModalForm/PopupBlank.vue';


export default {
    name: "LicenseBlock",
    components: {
        agile: VueAgile,
        ImageWithPopup,
        PopupBlank,
        VAccordion
    },

    data() {
        return {
            licenseList: [
                {
                    id: "lic01incom",
                    src: require('@/assets/img/license_x2_01.png')
                },
                {
                    id: "lic02incom",
                    src: require('@/assets/img/license_x2_02.png')
                },
                {
                    id: "lic03incom",
                    src: require('@/assets/img/license_x2_03.png')
                },
                {
                    id: "lic04incom",
                    src: require('@/assets/img/license_x2_04.png')
                },
                {
                    id: "lic05incom",
                    src: require('@/assets/img/license_x2_05.png')
                },
                {
                    id: "lic06incom",
                    src: require('@/assets/img/license_x2_06.png')
                },
            ],
            IsPopupOpen: false,
            optionsLicense: {
                responsive: [
                    {
                        breakpoint: 50,
                        settings: { slidesToShow: '1' }
                    },
                    {
                        breakpoint: 380,
                        settings: { slidesToShow: '1.2' }
                    },
                    {
                        breakpoint: 600,
                        settings: { slidesToShow: '1.5' }
                    },
                    {
                        breakpoint: 625,
                        settings: { slidesToShow: '1.8' }
                    },
                    {
                        breakpoint: 755,
                        settings: { slidesToShow: '2.2' }
                    },
                    {
                        breakpoint: 950,
                        settings: { slidesToShow: '2.5' }
                    },
                    {
                        breakpoint: 1024,
                        settings: { slidesToShow: '2.8' }
                    },
                    {
                        breakpoint: 1210,
                        settings: { slidesToShow: '3.2' }
                    },
                    {
                        breakpoint: 1440,
                        settings: { slidesToShow: '3.5' }
                    },
                ]
            },
        }
    },

}
</script>
