<template>
    <section>
        <div class="content">
            <div class="solutions-block">
                <TitleName :titleName="titleName"></TitleName>

                <div class="functional-block__wrapper">
                    <div class="functional-card grid-block__a aliceblue_theme rounded-xl">
                        <div class="news-content p-4">
                            <img src="~@/assets/img/svg/anamnesis.svg" alt="" style="width: 100px; ">
                            <div class="news-content__textblock">
                                <div class="title__textblock font-bold text-lg xl:text-2xl">Анамнез</div>
                                <div class="title__description text-sm md:text-base xl:text-xl">Основные показатели
                                    Вашего здоровья -
                                    группа крови и резус-фактор, артериальное давление, аллергии,
                                    перенесенные операции, хронические и инфекционные заболевания
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="functional-card grid-block__b aliceblue_theme rounded-xl">
                        <div class="news-content p-4">
                            <img src="~@/assets/img/svg/vaccination.svg" alt="" style="width: 100px; ">
                            <div class="news-content__textblock">
                                <div class="title__textblock font-bold text-lg xl:text-2xl">Вакцинации</div>
                                <div class="title__description text-sm md:text-base xl:text-xl">Это Ваш электронный
                                    прививочный сертификат.
                                    Информация о прививках всегда под рукой.
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="functional-card grid-block__c aliceblue_theme rounded-xl">
                        <div class="news-content p-4">
                            <img src="~@/assets/img/svg/research.svg" alt="" style="width: 100px; ">
                            <div class="news-content__textblock">
                                <div class="title__textblock font-bold text-lg xl:text-2xl">Исследования</div>
                                <div class="title__description text-sm md:text-base xl:text-xl">Результаты
                                    диагностических процедур, таких как
                                    эндоскопия, рентген, УЗИ и анализы. Любая запись может быть дополнена скан-копией
                                    оригинала заключения

                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="functional-card grid-block__d aliceblue_theme rounded-xl">
                        <div class="news-content p-4">
                            <img src="~@/assets/img/svg/hospitalization.svg" alt="" style="width: 100px; ">
                            <div class="news-content__textblock">
                                <div class="title__textblock font-bold text-lg xl:text-2xl">Госпитализация</div>
                                <div class="title__description text-sm md:text-base xl:text-xl">В разделе содержится
                                    информация о Ваших плановых и
                                    внеплановых госпитализациях, диагнозах, эпикризе, с возможностью фильтрации по датам
                                    и месту лечения</div>
                            </div>

                        </div>
                    </div>

                    <div class="functional-card grid-block__e aliceblue_theme rounded-xl">
                        <div class="news-content p-4">
                            <img src="~@/assets/img/svg/medAppointments.svg" alt="" style="width: 100px; ">
                            <div class="news-content__textblock">
                                <div class="title__textblock font-bold text-lg xl:text-2xl">Лекарственные назначения
                                </div>
                                <div class="title__description text-sm md:text-base xl:text-xl">Загрузите в раздел
                                    «Назначения» аннотацию лекарства и
                                    рецепты от Вашего лечащего врача и не переживайте, что Вы забудете название
                                    препарата, который когда-то Вам помог</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TitleName from "@/components/blocks/functionalComponents/TitleName.vue"

export default {
    name: "FunctionalBlock",
    components: {
        TitleName,
    },

    data() {
        return {
            titleName: 'Функционал электронной медицинской карты'
        }
    },
}
</script>
