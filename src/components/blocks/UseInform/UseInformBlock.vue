<template>
    <section>
        <div class="content">
            <div class="useful-information-block">

                <div class="useful-information-block__wrapper">
                    <TitleName titleName="Важно знать"></TitleName>

                    <div
                        class="useful-info-block flex flex-col sm:flex-row flex-nowrap sm:flex-wrap w-full justify-between">
                        <div
                            class="useful-info-block__wrapper flex flex-col w-full justify-between basis-1/2 md:basis-1/3">
                            <div class="useful-info__accordion">

                                <VAccordion :accordionItemStyle=accordionItemStyle :accordionWrapperStyle=accordionWrapperStyle :accordionTitleStyle=accordionTitleStyle>
                                    <template v-slot:accordionTitle>
                                        Кто может обратиться за услугой
                                    </template>

                                    <template v-slot:accordionContent>
                                        Placeholder content for this accordion, which is intended to demonstrate the
                                        accordion-flush class. This is the first items accordion body
                                    </template>
                                </VAccordion>

                                <VAccordion :accordionItemStyle=accordionItemStyle :accordionWrapperStyle=accordionWrapperStyle :accordionTitleStyle=accordionTitleStyle>
                                    <template v-slot:accordionTitle>
                                        Перечень необходимых сведений
                                    </template>

                                    <template v-slot:accordionContent>
                                        Placeholder content for this accordion, which is intended to demonstrate the
                                        accordion-flush class. This is the first items accordion body
                                    </template>
                                </VAccordion>
                            </div>

                            <div class="useful-info__special-solution">
                                <div class="special-solution-item aliceblue_theme m-2.5 rounded-xl">
                                    <div class="special-solution__wrapper px-4 py-5">
                                        <div class="spetial-solution__content font-bold text-base">
                                            Прием собственного квалифицированного врача-терапевта от 700р
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div
                            class="useful-info-block__wrapper flex flex-col w-full justify-between basis-1/2 md:basis-1/3">
                            <div class="useful-info__accordion">
                                <VAccordion :accordionItemStyle=accordionItemStyle :accordionWrapperStyle=accordionWrapperStyle :accordionTitleStyle=accordionTitleStyle>
                                    <template v-slot:accordionTitle>
                                        Кто может обратиться за услугой
                                    </template>

                                    <template v-slot:accordionContent>
                                        Placeholder content for this accordion, which is intended to demonstrate the
                                        accordion-flush class. This is the first items accordion body
                                    </template>
                                </VAccordion>

                                <VAccordion :accordionItemStyle=accordionItemStyle :accordionWrapperStyle=accordionWrapperStyle :accordionTitleStyle=accordionTitleStyle>
                                    <template v-slot:accordionTitle>
                                        Сроки предоставления услуги
                                    </template>

                                    <template v-slot:accordionContent>
                                        Placeholder content for this accordion, which is intended to demonstrate the
                                        accordion-flush class. This is the first items accordion body
                                    </template>
                                </VAccordion>
                            </div>

                            <div class="useful-info__special-solution">
                                <div class="special-solution-item aliceblue_theme m-2.5 rounded-xl with_fix-height">
                                    <div class="special-solution__wrapper px-4 py-5">
                                        <div class="spetial-solution__content font-bold text-base">
                                            Полное сопровождение от заявки до въезда в санаторий
                                        </div>
                                    </div>
                                </div>
                                <div class="special-solution-item aliceblue_theme m-2.5 rounded-xl with_fix-height">
                                    <div class="special-solution__wrapper px-4 py-5">
                                        <div class="spetial-solution__content font-bold text-base">
                                            Партнерская скидка до 15% при оформлении лечения
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <!-- sm:flex-row-reverse lg:flex-col sm:flex-wrap lg:flex-nowrap -->
                        <div class="useful-info-block__wrapper flex w-full justify-between 
                            flex-col sm:flex-row-reverse md:flex-col
                            flex-nowrap 
                            basis-full md:basis-1/3">

                            <div class="useful-info__accordion basis-2/5 sm:basis-1/2 lg:basis-2/5">
                                <VAccordion :accordionItemStyle=accordionItemStyle :accordionWrapperStyle=accordionWrapperStyle :accordionTitleStyle=accordionTitleStyle>
                                    <template v-slot:accordionTitle>
                                        Стоимость услуги и порядок оплаты
                                    </template>

                                    <template v-slot:accordionContent>
                                        Placeholder content for this accordion, which is intended to demonstrate the
                                        accordion-flush class. This is the first items accordion body
                                    </template>
                                </VAccordion>

                                <VAccordion :accordionItemStyle=accordionItemStyle :accordionWrapperStyle=accordionWrapperStyle :accordionTitleStyle=accordionTitleStyle>
                                    <template v-slot:accordionTitle>
                                        Результат оказания услуги
                                    </template>

                                    <template v-slot:accordionContent>
                                        Placeholder content for this accordion, which is intended to demonstrate the
                                        accordion-flush class. This is the first items accordion body
                                    </template>
                                </VAccordion>
                            </div>

                            <div class="useful-info__special-solution">
                                <div class="special-solution-item aliceblue_theme m-2.5 rounded-xl with_fix-height">
                                    <div class="special-solution__wrapper px-4 py-5">
                                        <div class="spetial-solution__content font-bold text-base">
                                            Фильтр поиска по санаториям
                                        </div>
                                    </div>
                                </div>
                                <div class="special-solution-item aliceblue_theme m-2.5 rounded-xl with_fix-height">
                                    <div class="special-solution__wrapper px-4 py-5">
                                        <div class="spetial-solution__content font-bold text-base">
                                            Запись на удобное время без очереди
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import VAccordion from "@/components/blocks/functionalComponents/AccordionComponent/v-Accordion"
import TitleName from "@/components/blocks/functionalComponents/TitleName"

export default {
    name: "UseInformBlock",
    components: {
        VAccordion,
        TitleName,
    },

    data() {
        return {
                accordionItemStyle: "m-2.5",
                accordionWrapperStyle: "aliceblue_theme flex flex-col w-full rounded-xl px-4 py-5",
                accordionTitleStyle: "flex flex-row justify-between items-center",
            
        }
    },
}
</script>