
<template>

    <title-block :title="title" :description="description">

        <template v-slot:image>
            <img class="title-block__image" src="~@/assets/img/theme/resourse_01.png" alt="">
        </template>
    </title-block>

    <solutions-cards />

    <DoctorsBlock></DoctorsBlock>

    <vAboutIt id="AboutCompany" :aboutItTitleHeader="aboutItTitleHeader" :aboutItTitle="aboutItTitle"
        :aboutItDescription="aboutItDescription">
        <template v-slot:aboutItImage>
            <img class="object-contain title-block__image" src="~@/assets/img/theme/resourse_02.png" alt="">
        </template>
    </vAboutIt>

    <NewsBlock id="NewsBlock" />
    <PartnersBlock />
    <MapAndContacts />

    <div id="MODALKI" class=" flex-row flex-wrap hidden">
        <section>
            <div class="content">
                <ModalFormSanatorium></ModalFormSanatorium>
            </div>
        </section>
        <section>
            <div class="content">
                <ModalFormDoctor></ModalFormDoctor>
            </div>
        </section>
        <section>
            <div class="content">
                <ModalFormTechsupport></ModalFormTechsupport>
            </div>
        </section>

        <section>
            <div class="content">
                <ModalFormComment></ModalFormComment>
            </div>
        </section>
    </div>
    
</template>

<script>

import DoctorsBlock from "@/components/blocks/Doctors/DoctorsBlock";
import SolutionsCards from "@/components/blocks/Solutions/SolutionsCards";
import PartnersBlock from "@/components/blocks/Partners/PartnersBlock";
import NewsBlock from "@/components/blocks/News/NewsBlock";
import vAboutIt from "@/components/blocks/functionalComponents/AboutItComponent/v-AboutIt"
import TitleBlock from "@/components/blocks/TitleBlock/TitleBlock";
import MapAndContacts from "@/components/blocks/Map/MapAndContacts";

import ModalFormSanatorium from "@/components/blocks/ModalForm/ModalFormSanatorium.vue"
import ModalFormDoctor from "./blocks/ModalForm/ModalFormDoctor.vue";
import ModalFormTechsupport from "./blocks/ModalForm/ModalFormTechsupport.vue";
import ModalFormComment from "./blocks/ModalForm/ModalFormComment.vue";

    

export default {
    name: "App",

    components: {
        DoctorsBlock,
        SolutionsCards,
        PartnersBlock,
        NewsBlock,
        vAboutIt,
        TitleBlock,
        MapAndContacts,
        ModalFormSanatorium,
        ModalFormDoctor,
        ModalFormTechsupport,
        ModalFormComment,
    
    },

    data() {
        return {
            title: 'Новые медицинские сервисы',
            description: 'Все что нужно для получения своевременной, качественной и эффективной медицинской помощи',
            aboutItTitle: 'ИНКО-МЕД СЕРВИС',
            aboutItDescription: '<p>Мы делаем современную медицину доступной каждому:</p><br><p>Организуем и сопровождаем лечение, ведем электронные медицинские карты, подбираем лучших специалистов и санатории</p><br><p>Решаем любые медицинские проблемы, опираясь на 25-летний опыт медицинской страховой компании ИНКО-МЕД</p><br>',
            aboutItTitleHeader: 'О компании',
        }
    }
};
</script>
