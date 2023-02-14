<template>
    <section>
        <div class="content">
            <div class="specialists-block">
                <TitleName :titleName="titleName"></TitleName>

                <div class="specialists__content-block">
                    <router-link :to="{ name: 'DoctorsPage', hash: '#doctors'}"> 
                    <div class="show-more__label apply_slidertext">Все врачи</div>
                    </router-link>

                    <!-- <v-slider>
                        <vSliderItem ref="sliderItems" v-for="doctor in doctors" :key="doctor" :item="doctor">
                            <template v-slot:slide>
                                <div class="slider-item mr-5 last:mr-0">
                                    <div class="flex flex-col items-center content-center justify-center with_border shadow-none bg-white w-[13rem] h-[28.5rem] ">
                                        <div class="block_wrapper w-auto h-auto m-4 flex flex-col justify-between items-center basis-full">
                                            <div class="doctorsPhoto__miniature">
                                                <img class="doctor__miniature" src="~@/assets/img/doctors/ivanova.png"
                                                    alt="" />
                                            </div>
                                            <div class="specialist__info">
                                                <div class="specialist__info__doctorName">
                                                    {{ doctor.fio }}
                                                </div>

                                                <div class="specialist__info__description">
                                                    <div class="description__inputBlocks">
                                                        <div class="input-block specialisation">
                                                            <div class="input-block__textblock">
                                                                {{ doctor.spec }} <br />
                                                                {{ doctor.specCategory }} <br />
                                                                Стаж работы {{ doctor.stage }} лет
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="description__join_block">
                                                        <div class="choose-a-service_block__miniature">
                                                            <div class="priceBlock">{{ doctor.price }} ₽</div>
                                                            <ButtonBlock @click="checkId" ButtonWrapper="h-[2.125rem]" ButtonStyle="blue"
                                                                ButtonName="Записаться">
                                                            </ButtonBlock>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </vSliderItem>
                    </v-slider> -->

                    <Agile :slidesToShow="6" :infinite="false" :timing="linear" :options="myOptions"
                        AgileButtonsStyle="rounded-full border-none w-10 h-10 flex items-center justify-center white with_shadow">

                        <template v-slot:prevButton>
                            <ion-icon name="chevron-back-outline"></ion-icon>
                        </template>
                        <template v-slot:nextButton>
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </template>


                        <DoctorMinicard v-for=" doctor in doctors" :key="doctor" :item="doctor"
                            :doctorsPhoto="doctor.doctorsPhoto" :fio="doctor.fio" :spec="doctor.spec"
                            :specCategory="doctor.specCategory" :stage="doctor.stage" :price="doctor.price">
                        </DoctorMinicard>

                    </Agile>


                </div>


            </div>
        </div>
    </section>
</template>

<script>
import TitleName from "@/components/blocks/functionalComponents/TitleName"
import Agile from "vue-agile/src/Agile.vue"
import DoctorMinicard from "./DoctorMinicard.vue"
// import vSlider from '@/components/blocks/functionalComponents/SliderComponent/v-Slider';
// import vSliderItem from '@/components/blocks/functionalComponents/SliderComponent/v-SliderItem';
// import ButtonBlock from "../functionalComponents/FillingInputBlocks/ButtonBlock.vue";

// DoctorsContent

export default {
    name: "DoctorsBlock",
    components: {
        TitleName,
        DoctorMinicard,
        Agile,
    },

    data() {
        return {
            doctors: [],
            quantity: 10,
            titleName: 'Профессионалы в своем деле',
            myOptions: {
                responsive: [
                    {
                        breakpoint: 50,
                        settings: { slidesToShow: '1' }
                    },
                    {
                        breakpoint: 380,
                        settings: { slidesToShow: '2' }
                    },
                    {
                        breakpoint: 600,
                        settings: { slidesToShow: '2.5' }
                    },
                    {
                        breakpoint: 625,
                        settings: { slidesToShow: '3' }
                    },
                    {
                        breakpoint: 700,
                        settings: { slidesToShow: '3.5' }
                    },
                    {
                        breakpoint: 767,
                        settings: { slidesToShow: '4' }
                    },
                    {
                        breakpoint: 950,
                        settings: { slidesToShow: '5' }
                    },
                    {
                        breakpoint: 1024,
                        settings: { slidesToShow: '5.5' }
                    },
                    {
                        breakpoint: 1280,
                        settings: { slidesToShow: '6' }
                    },
                    {
                        breakpoint: 1440,
                        settings: { slidesToShow: '7', infinite: false, }
                    },
                ]
            },
        }
    },

    created() {

        for (let i = 0; i < this.quantity; i++) {
            let doctor = this.doctorTemplate()
            this.doctors.push(doctor)
        }
        // this.quantity = this.doctors.length
        this.SliderItems = this.doctors
    },

    methods: {
        doctorTemplate() {
            return {
                id: Math.floor(Math.random() * (999 - 1)) + 1,
                doctorsPhoto: require('@/assets/img/doctors/ivanova.png'),
                fio: "Иванова Татьяна Владимировна",
                spec: "Акушер, гинеколог",
                specCategory: "Высшая категория",
                stage: 17,
                price: 1100,
            }
        },
    }
}
</script>
