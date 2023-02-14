<template>
    <title-block title="Подбор врача онлайн" description="Найти врача по профилю лечения и записаться на прием в удобное для Вас время">
        <template v-slot:image>
            <img class="title-block__image" src="~@/assets/img/theme/doctors.png" alt="">
        </template>
    </title-block>

    <ApplicationForm ApplicationFormTitle="Подберем врача для Вас">
        <template v-slot:add-input-part_a>
            <div class="filling__input-block select-block">

                <div class="input-block-name">Специализация врача</div>
                <div class="timeSelector_block doctors-spetialisation">
                    <select class="input-block-self form-select rounded-xl" id="doctors-spetialisation"
                        aria-label="Специализация врача">
                        <option selected="">Ортопед</option>
                        <option value="1">Терапевт</option>
                        <option value="2">Окулист</option>
                        <option value="3">Гинеколог</option>
                    </select>
                </div>
            </div>
        </template>

        <template v-slot:add-input-part_b>
            <div class="filling-form__wrapper part__b flex flex-col justify-between basis-full">
                <div class="filling__input-block comment">
                    <InputTextarea InputTextareaName="Что Вас беспокоит?" InputTextareaPlaceholder="Меня беспокоит...">
                    </InputTextarea>
                </div>

                <div class="filling__input-block button flex flex-col">
                    <ButtonBlock ButtonWrapper="h-[3.125rem] w-[33%]" ButtonStyle="orange" ButtonName="Найти">
                    </ButtonBlock>
                </div>
            </div>
        </template>

        <template v-slot:add-input-part_c>
            <div class="filling-form__wrapper part__c w-full">
                <div class="add-note-line text-center m-5">
                    <div class="add-note-line__textblock"> Нажимая “Отправить”, я принимаю
                        <a class="agreement__link" href="#">условия пользовательского соглашения</a>
                        и даю согласие на
                        <a class="use-of-pers-data__link" href="#">обработку персональных данных</a>
                    </div>
                </div>
            </div>
        </template>
    </ApplicationForm>

    <FilterBlock titleNameBlock="Подберите врача самостоятельно">
       
       <FilterDoc></FilterDoc>

    </FilterBlock>

    <UseInformBlock />
    <TechSupport></TechSupport>
    <OurSolutionsBlock id="doc02incom"></OurSolutionsBlock>
</template>

<script>
import TitleBlock from "@/components/blocks/TitleBlock/TitleBlock";
import UseInformBlock from "@/components/blocks/UseInform/UseInformBlock"
import TechSupport from "@/components/blocks/TechSupport/TechSupportBlock"
import FilterBlock from "@/components/blocks/Cards/FilterBlock"
import ApplicationForm from "@/components/blocks/ApplicationForm/ApplicationFormBlock"
import InputTextarea from "@/components/blocks/functionalComponents/FillingInputBlocks/InputTextarea.vue"
import ButtonBlock from "./blocks/functionalComponents/FillingInputBlocks/ButtonBlock.vue";
import FilterDoc from "./blocks/Cards/FilterDoc.vue";
import OurSolutionsBlock from "./blocks/OurSolutions/OurSolutionsBlock.vue";


export default {
    name: 'DoctorsPage',
    components: {
    TitleBlock,
    UseInformBlock,
    TechSupport,
    FilterBlock,
    ApplicationForm,
    InputTextarea,
    ButtonBlock,
    FilterDoc,
    OurSolutionsBlock
},
    data() {
        return {
            applicationFormTitle: '',
            commentName: '',
            commentPH: '',


        }


    },
}
</script>

<!-- <style>
.slider-handle  {
    outline: 0.2rem solid #DEEBFE;
}
</style> -->

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