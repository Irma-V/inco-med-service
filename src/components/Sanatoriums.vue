<template>
    <title-block :title="title" :description="description">
        <template v-slot:image>
            <img class="title-block__image" src="~@/assets/img/theme/sanatorium.png" alt="">
        </template>
    </title-block>

    <ApplicationForm :ApplicationFormTitle="applicationFormTitle">
        <template v-slot:add-input-part_a>
            <div class="filling__input-block button">
                <div class="input-block-name hide-text">Кнопка</div>
                <ButtonBlock ButtonWrapper="h-[3.125rem]" ButtonStyle="orange" ButtonName="Подобрать">
                </ButtonBlock>
            </div>
        </template>

        <template v-slot:add-input-part_b>
            <div class="filling-form__wrapper part__b flex flex-col justify-between basis-full">
                <div class="filling__input-block comment">
                    <InputTextarea :InputTextareaName="commentName" :InputTextareaPlaceholder="commentPH">
                    </InputTextarea>
                </div>

                <div class="filling__input-block button flex flex-col">
                    <div class="add-note-line text-left">
                        <div class="add-note-line__textblock"> Нажимая “Отправить”, я принимаю
                            <a class="agreement__link" href="#">условия пользовательского соглашения</a>
                            и даю согласие на
                            <a class="use-of-pers-data__link" href="#">обработку персональных данных</a>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </ApplicationForm>

    <FilterBlock :titleNameBlock="titleNameBlock">

        <FilterSanat></FilterSanat>

    </FilterBlock>

    <UseInformBlock />
    <TechSupport></TechSupport>
    <OurSolutionsBlock id="san04incom"></OurSolutionsBlock>


</template>

<script>
import TitleBlock from "@/components/blocks/TitleBlock/TitleBlock";
import UseInformBlock from "@/components/blocks/UseInform/UseInformBlock"
import TechSupport from "@/components/blocks/TechSupport/TechSupportBlock"
import FilterBlock from "@/components/blocks/Cards/FilterBlock"
import ApplicationForm from "@/components/blocks/ApplicationForm/ApplicationFormBlock"
import InputTextarea from "@/components/blocks/functionalComponents/FillingInputBlocks/InputTextarea.vue"
import ButtonBlock from "./blocks/functionalComponents/FillingInputBlocks/ButtonBlock.vue";
import FilterSanat from "./blocks/Cards/FilterSanat.vue";
import OurSolutionsBlock from "./blocks/OurSolutions/OurSolutionsBlock.vue";

export default {
    name: "SanatoriumsPage",
    components: {
    TitleBlock,
    UseInformBlock,
    TechSupport,
    FilterBlock,
    ApplicationForm,
    InputTextarea,
    ButtonBlock,
    FilterSanat,
    OurSolutionsBlock
},
    data() {
        return {
            title: 'Подбор санаторно- курортного лечения',
            description: 'Найти подходящий санаторий с лучшими условиями и лечебными процедурами',
            titleNameBlock: 'Каталог санаториев',
            applicationFormTitle: 'Заявка на экспертизу качества лечения',
            commentName: 'Пожелания',
            commentPH: 'Ваш комментарий',


        }
    },
}
</script>


<style scoped lang="scss">
.filling-form__wrapper {
    .filling__input-block {
        display: flex;
        flex-direction: column;

    }

    .button {
        .buttonblock {
            .buttonblock__wrapper {
                height: 3rem;
            }
        }
    }

}

.part__a {
    .filling__input-block {
        flex-basis: 40%;
        justify-content: space-between;
        padding-bottom: 2%;

        .input-block-name {
            font-weight: bold;
        }


    }


}


.part__b {
    .comment {
        // height: 300px;
        flex-basis: 80%;
    }

    .filling__input-block {
        padding-bottom: 2%;
    }

}
</style>