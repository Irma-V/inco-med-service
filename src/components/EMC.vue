<template>
    <title-block :title="title" :description="description">
        <template v-slot:image>
            <img class="title-block__image" src="~@/assets/img/theme/medrecord.png" alt="">
        </template>
    </title-block>

    
    <vAboutIt class="about-EMC" :aboutItTitleHeader="aboutItTitleHeader" :aboutItTitle="aboutItTitle"
        :aboutItDescription="aboutItDescription">

        <template v-slot:aboutItImage>
            <img class=" object-contain title-block__image sm:max-w-[220%] md:max-w-full"
                src="~@/assets/img/theme/resourse_03.png" alt="">
        </template>
    </vAboutIt>


    <FunctionalBlock />
    <InformSecurity></InformSecurity>

    <AvailableInterface></AvailableInterface>
    
    <TariffAssistentBlock></TariffAssistentBlock>
    <UseInformBlock />
    <OurSolutionsBlock id="mrc01incom"> </OurSolutionsBlock>
    <TechSupport></TechSupport>
</template>

<script>
import TitleBlock from "@/components/blocks/TitleBlock/TitleBlock";
import vAboutIt from "@/components/blocks/functionalComponents/AboutItComponent/v-AboutIt"
import FunctionalBlock from "@/components/blocks/FunctBlock/FunctionalBlock"
import UseInformBlock from "@/components/blocks/UseInform/UseInformBlock"
import OurSolutionsBlock from "@/components/blocks/OurSolutions/OurSolutionsBlock"
import InformSecurity from "@/components/blocks/InformSecurity/InformSecurityBlock"
import AvailableInterface from "@/components/blocks/AvailableInterface/AvailableInterfaceBlock"
import TechSupport from "@/components/blocks/TechSupport/TechSupportBlock"
import TariffAssistentBlock from "@/components/blocks/TariffAssistent/TariffAssistentBlock"



export default {
    name: "EMC",
    components: {
        TitleBlock,
        vAboutIt,
        FunctionalBlock,
        UseInformBlock,
        OurSolutionsBlock,
        InformSecurity,
        AvailableInterface,
        TechSupport,
        TariffAssistentBlock,

    },

    data() {
        return {
            title: 'Электронная медицинская карта',
            description: 'История здоровья для вас, Ваших детей и родителей в современном формате',
            aboutItTitleHeader: ' ',
            aboutItTitle: 'Что такое электронная медицинская карта',
            aboutItDescription: '<p>Информация o Вашем здоровье в удобном формате c доступом 24/7 </p><br> <p>Храните все данные о состоянии вашего здоровья, осмотрах, анализах и назначениях в электронной медицинской карте </p><br> <p>Ваш персональный ассистент может внести данные о накопившихся бумажных заключений в электронную медицинскую карту </p><br>',
        }
    },

    created() {
    },
}
</script>
