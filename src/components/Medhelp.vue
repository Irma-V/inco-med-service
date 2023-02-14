<template>
    <title-block :title="title" :description="description">
        <template v-slot:image>
            <img class="title-block__image" src="~@/assets/img/theme/medhelp.png" alt="">
        </template>
    </title-block>
    <UseInformBlock />
    <TechSupport></TechSupport>
    <OurSolutionsBlock id="org05incom"></OurSolutionsBlock>
</template>

<script>
import TitleBlock from "@/components/blocks/TitleBlock/TitleBlock";
import UseInformBlock from "@/components/blocks/UseInform/UseInformBlock"
import TechSupport from "@/components/blocks/TechSupport/TechSupportBlock"
import OurSolutionsBlock from "./blocks/OurSolutions/OurSolutionsBlock.vue";

export default {
    name: "MedhelpPage",
    components: {
    TitleBlock,
    UseInformBlock,
    TechSupport,
    OurSolutionsBlock
},
    data() {
        return {
            title: 'Организация медицинской помощи',
            description: 'Планирование диагностики, реабилитации и медицинской помощи на любом этапе лечения',
        }
    },
}
</script>