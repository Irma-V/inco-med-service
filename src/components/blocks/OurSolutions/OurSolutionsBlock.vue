<template>
    <section>
        <div class="content">
            <div class="our-solutions-block">
                <TitleName :titleName="titleName"></TitleName>

                <!-- <div ref="SolutionsContent" id="mrc01incom" 
                    class="our-solutions__content-block hidden xl:flex xl:flex-row xl:justify-between xl:flex-wrap"> -->
                <div ref="SolutionsContent" :id="id"
                    class="our-solutions__content-block flex flex-row justify-between flex-wrap">


                    <OurSolutionsItem v-for="solutionItem in solutionItems" :key="solutionItem.id" :id="solutionItem.id"
                        :solutionHeader="solutionItem.solutionHeader"
                        :solutionDescription="solutionItem.solutionDescription" :solutionImg="solutionItem.solutionImg" :linkName="solutionItem.linkName">
                    </OurSolutionsItem>



                </div>

                <div class="our-solutions__content-block hidden">
                    <v-slider>
                        <vSliderItem ref="sliderItems" v-for="solutionItem in solutionItems" :key="solutionItem">

                            <!-- <template v-slot:slide>
                                <div class="slider-item solutionBlockForMob__example01 with_border flex mr-5  last:mr-0 bg-white"
                                    :id="solutionItem.id">
                                    <div class="solutionBlockForMob__wrapper  w-90 h-[30rem] flex flex-col justify-between p-5 last:p-5">
                                        <div class="textblock_solutForMob basis-1/4 flex flex-col justify-between">
                                            <div class="title__textblock font-bold sm:text-base md:text-lg xl:text-xl">
                                                {{ solutionItem.solutionHeader }}
                                            </div>
                                            <div class="title__description text-sm md:text-base xl:text-xl basis-1/2">
                                                {{ solutionItem.solutionDescription }}
                                            </div>
                                        </div>
                                        <div class="imgblock_solut border-solid border-b-4 border-[#2B2B2B]
                                            bgr_resourse01 bg-no-repeat bg-center bg-contain 
                                            flex justify-center items-end
                                            w-full basis-1/2">

                                            <img class="title-block__image" :src="solutionItem.solutionImg" alt="">
                                        </div>

                                        <div class="buttonblock">
                                            <div class="buttonblock__wrapper">
                                                <button class="buttonstyle blue">
                                                    Перейти
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>                           -->

                            <template v-slot:slide>
                                <div class="slider-item mr-5 last:mr-0">
                                    <div class="solutionBlockForMob__example01 w-80" :id="solutionItem.id">
                                        <div class="solutionBlockForMob__wrapper p-5  with_border">
                                            <div class="textblock_solutForMob ">
                                                <div class="title__textblock ">
                                                    {{ solutionItem.solutionHeader }}
                                                </div>
                                                <div class="title__description">
                                                    {{ solutionItem.solutionDescription }}
                                                </div>
                                            </div>
                                            <div class="imgblock_solut bgr_resourse01 bg-no-repeat bg-center">

                                                <img class="title-block__image" :src="solutionItem.solutionImg" alt="">
                                            </div>

                                            <ButtonBlock ButtonWrapper="h-[2.125rem]" ButtonStyle="blue" ButtonName="Перейти">
                                            </ButtonBlock>
                                        </div>
                                    </div>

                                </div>
                            </template>
                        </vSliderItem>
                    </v-slider>
                </div>
            </div>



        </div>
    </section>
</template>

<script>
import TitleName from "@/components/blocks/functionalComponents/TitleName"
import OurSolutionsItem from "@/components/blocks/OurSolutions/OurSolutionsItem"
import vSlider from '@/components/blocks/functionalComponents/SliderComponent/v-Slider';
import vSliderItem from '@/components/blocks/functionalComponents/SliderComponent/v-SliderItem';
import ButtonBlock from "../functionalComponents/FillingInputBlocks/ButtonBlock.vue";


// OurSolutionsItem 
export default {
    name: "OurSolutionsBlock",
    components: {
        TitleName,
        OurSolutionsItem,
        vSlider,
        vSliderItem,
        ButtonBlock
    },
    props: {
        id: { type: String},
    },
    data() {
        return {
            titleName: 'Наши сервисы',
            solutionItems: [],
            solutions: [
                {
                    // id: Math.floor(Math.random() * (999 - 1)) + 1,
                    id: "mrc01incom",
                    solutionHeader: "Электронная медицинская карта",
                    solutionDescription: "История здоровья для Вас, Ваших детей и родителей в современном формате",
                    solutionImg: require('@/assets/img/solutionBlockForMob/resourse01_x1.png'),
                    linkName: "EMCPage",
                },
                {
                    // id: Math.floor(Math.random() * (999 - 1)) + 1,
                    id: "doc02incom",
                    solutionHeader: "Подбор врача",
                    solutionDescription: "Найти врача любой специальности и записаться на прием",
                    solutionImg: require('@/assets/img/solutionBlockForMob/resourse02_x1.png'),
                    linkName: "DoctorsPage",
                },
                {
                    // id: Math.floor(Math.random() * (999 - 1)) + 1,
                    id: "exp03incom",
                    solutionHeader: "Экспертиза качества лечения",
                    solutionDescription: "Проверить качество оказанной Вам медицинской помощи",
                    solutionImg: require('@/assets/img/solutionBlockForMob/resourse03_x1.png'),
                    linkName: "ECMHPage",
                },
                {
                    // id: Math.floor(Math.random() * (999 - 1)) + 1,
                    id: "san04incom",
                    solutionHeader: "Санаторно-курортное лечение ",
                    solutionDescription: "Подобрать и забронировать санаторий с лечебными процедурами",
                    solutionImg: require('@/assets/img/solutionBlockForMob/resourse04_x1.png'),
                    linkName: "SanatoriumsPage",
                },
                {
                    // id: Math.floor(Math.random() * (999 - 1)) + 1,
                    id: "org05incom",
                    solutionHeader: "Организация медицинской помощи",
                    solutionDescription: "Спланировать поход к врачу, обследование, операцию или реабилитацию",
                    solutionImg: require('@/assets/img/solutionBlockForMob/resourse05_x1.png'),
                    linkName: "MedhelpPage",
                },
            ],
        }
    },



    mounted() {

        this.solutionItems = this.solutions.filter(item => item.id != this.$refs.SolutionsContent.id)
        // console.log(this.solutionItems);
    },

    methods: {
    },


}
</script>