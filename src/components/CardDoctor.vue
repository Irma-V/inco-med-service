<template>
    <vAboutItForCards :AboutCardTitle="AboutCardTitle" :AdditionalText="AdditionalText"
        :AboutCardDescription="AboutCardDescription">

        <template v-slot:AboutCardPhoto>
            <div class="about-card-wrapper flex  h-full sm:h-1/2 pb-[3%] sm:pr-[3%]">
                <img class="about-a-doctor__image object-cover rounded-xl w-full sm:w-auto"
                    src="~@/assets/img/doctors/ivanov.jpg" alt="">
            </div>
        </template>

        <template v-slot:AboutCardInputs>
            <div
                class="about-card__input-block flex flex-col lg:flex-row justify-between basis-[60%] md:basis-[15%] w-4/5 ">
                <EllipseIcon EllipseIconSvg='loc_logo'>
                    <ul>
                        <li>Краснодарский край,</li>
                        <li>г.Геленджик,</li>
                        <li>ул.Туристическая, 19</li>

                    </ul>
                </EllipseIcon>
                
                <EllipseIcon EllipseIconSvg='doc_logo'>
                    <ul>
                        <li>Стоматолог-имплантолог</li>
                        <li>Высшая категория</li>
                        <li>Стаж работы 22 года</li>

                    </ul>
                </EllipseIcon>
            </div>

        </template>
    </vAboutItForCards>

    <ApplicationForm :ApplicationFormTitle="applicationFormTitle">
        <template v-slot:add-input-part_a>
            <!-- <InputSelector></InputSelector> -->
            <div class="filling__input-block select-block">

                <div class="input-block-name">Специализация врача</div>

                <select class="input-block-self rounded-xl" id="doctors-spetialisation"
                    aria-label="Специализация врача">
                    <option selected="">Ортопед</option>
                    <option value="1">Терапевт</option>
                    <option value="2">Окулист</option>
                    <option value="3">Гинеколог</option>
                </select>

            </div>
        </template>

        <template v-slot:add-input-part_b>
            <div class="filling__input-block comment">
                <InputTextarea :InputTextareaName="commentName" :InputTextareaPlaceholder="commentPH">
                </InputTextarea>
            </div>

            <div class="filling__input-block button flex flex-col">
                <ButtonBlock ButtonWrapper="w-[33%]" ButtonStyle="orange"  ButtonName="Записаться">
                </ButtonBlock>>
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
    <TechSupport></TechSupport>
</template>

<script>
//import
import vAboutItForCards from "@/components/blocks/functionalComponents/AboutItComponent/v-AboutItForCards"
import ButtonBlock from "./blocks/functionalComponents/FillingInputBlocks/ButtonBlock.vue"
import ApplicationForm from "@/components/blocks/ApplicationForm/ApplicationFormBlock"
import InputTextarea from "@/components/blocks/functionalComponents/FillingInputBlocks/InputTextarea.vue"
import TechSupport from "@/components/blocks/TechSupport/TechSupportBlock"
import EllipseIcon from "./blocks/functionalComponents/Ellipse/EllipseIcon.vue"

export default {
    name: "CardDoctor",
    components: {
    vAboutItForCards,
    ApplicationForm,
    ButtonBlock,
    InputTextarea,
    TechSupport,
    EllipseIcon
},
    props: {},

    data() {
        return {
            AboutCardTitle: 'Иванов Алексей Александрович',
            AdditionalText: 'Стоматолог · Стоматолог-имплантолог · Стоматолог-хирург · Челюстно-лицевой хирург',
            AboutCardDescription: '<p>Иванов Алексей Александрович - врач стоматолог, стаж 22 года. Все отзывы о враче. Запись онлайн или по телефону.</p><br> <p>Челюстно-лицевой хирург, хирург-стоматолог. Занимается лечением воспалительных заболеваний и травм челюстно-лицевой области, удалением зубов любой сложности и доброкачественных новообразований, имплантацией.</p>',

            applicationFormTitle: '',
            commentName: 'Комментарий',
            commentPH: 'Меня беспокоит...',
        }
    }
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