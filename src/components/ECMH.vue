<template>
    <title-block :title="title" :description="description">
        <template v-slot:image>
            <img class="title-block__image" src="~@/assets/img/theme/expertise.png" alt="">
        </template>
    </title-block>

    <vAboutIt :aboutItTitleHeader="aboutItTitleHeader" :aboutItTitle="aboutItTitle"
        :aboutItDescription="aboutItDescription">
        <template v-slot:aboutItImage>
            <img class="object-contain title-block__image" src="~@/assets/img/theme/resourse_04.png" alt="">
        </template>
    </vAboutIt>

    <vAboutIt id="license" :aboutItTitleHeader="aboutItTitleHeader2" :aboutItTitle="aboutItTitle2"
        :aboutItDescription="aboutItDescription2">
        <template v-slot:aboutItImage>
            <p>У нас работают лучшие врачи-эксперты, имеющие большой опыт в проведении экспертиз и высокий уровень
                компетенции.</p> <br>
            <p>ИНКО-МЕД СЕРВИС проводит экспертизы любой сложности, привлекая лучших врачей любых, даже редких и
                специфических медицинских специальностей.</p> <br>
            <p>При необходимости, возможно проведение медицинских консилиумов для составления максимально полного
                заключения.</p> <br>
        </template>
    </vAboutIt>

    <License></License>

    <ApplicationForm :ApplicationFormTitle="applicationFormTitle">

        <template v-slot:add-input-part_a>
            <div class="filling__input-block button">
                <div class="input-block-name hide-text">Кнопка</div>
                <ButtonBlock ButtonWrapper="" ButtonStyle="orange" ButtonName="Отправить">
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
                    <ButtonBlock ButtonWrapper="h-[2.125rem] w-2/4" ButtonStyle="blue" ButtonName="Бесплатная консультация">
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

    <UseInformBlock />
    <OurSolutionsBlock id="exp03incom" />
    <TechSupport></TechSupport>

</template>

<script>
import TitleBlock from "@/components/blocks/TitleBlock/TitleBlock";
import UseInformBlock from "@/components/blocks/UseInform/UseInformBlock"
import TechSupport from "@/components/blocks/TechSupport/TechSupportBlock"
import vAboutIt from "@/components/blocks/functionalComponents/AboutItComponent/v-AboutIt"
import License from "@/components/blocks/License/License"
import OurSolutionsBlock from "@/components/blocks/OurSolutions/OurSolutionsBlock"

import ApplicationForm from "@/components/blocks/ApplicationForm/ApplicationFormBlock"
import InputTextarea from "@/components/blocks/functionalComponents/FillingInputBlocks/InputTextarea.vue"
import ButtonBlock from "./blocks/functionalComponents/FillingInputBlocks/ButtonBlock.vue";
// import InputText from "@/components/blocks/functionalComponents/FillingInputBlocks/InputText.vue"


export default {
    name: "ECMHPage",
    components: {
        TitleBlock,
        UseInformBlock,
        TechSupport,
        vAboutIt,
        License,
        OurSolutionsBlock,
        ApplicationForm,
        InputTextarea,
        ButtonBlock,
    },

    data() {
        return {
            title: 'Экспертиза качества медицинской помощи',
            description: 'Проверка качества оказанной Вам медицинской помощи',

            aboutItTitleHeader: ' ',
            aboutItTitle: 'Что такое экспертиза качества лечения? ',
            aboutItDescription: '<p>Это заключение о выявленных нарушениях при оказании медицинской помощи, в том числе своевременности ее оказания, правильности выбора методов профилактики, диагностики, лечения и реабилитации, степени достижения запланированного результата.</p> <br> <p>При необходимости организуем участие врача-эксперта в судебном заседании.</p>',

            aboutItTitleHeader2: 'Об экспертах',
            aboutItTitle2: '',
            aboutItDescription2: '<p>Наши специалисты могут:</p><br>  <ul> <li>- проконсультировать о правомерности оказания или неоказания медицинской помощи;</li><li>- проанализировать заключение; </li><li>- составить рецензию на уже проведённую медицинскую экспертизу; </li><li>- защищать Ваши интересы в судебном заседании.</li></ul>',

            applicationFormTitle: 'Заявка на экспертизу качества лечения',

            /* // surnameName: 'Фамилия',
            // surnamePH: 'Иванов',
        
            // firstnameName: 'Имя',
            // firstnamePH: 'Иван',
        
            // patronymicName: 'Отчество',
            // patronymicPH: 'Иванович',
        
            // telephoneName: 'Телефон',
            // telephonePH: '+7 952 540-45-44',
        
            // emailName: 'email',
            // emailPH: 'email', */

            commentName: 'Комментарий',
            commentPH: '',
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

    .add-note-line {
        text-align: center;
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