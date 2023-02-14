<template>
    <div class="modal-form w-full md:w-[45rem] white">
        <div class="form__wrapper flex flex-col justify-between">

            <!-- <div class="modal-form__title p-10">
                        <div class="popup-header__wrapper">
                            <div class="title__self">
                                <TitleName :titleName="titleName"></TitleName>
                            </div>
                            <div class="title__close">
                                <div class="close-modal-form">×</div>
                            </div>
                        </div>
                    </div> -->

            <div class="modal-form__filling p-10">
                <div class="modal-form__filling__wrapper">
                    <FIOMailPhone></FIOMailPhone>

                    <!-- <div class="filling__input-block surname">
                        <InputText :InputTextName="surnameName" :InputTextPlaceholder="surnamePH">
                        </InputText>
                    </div>

                    <div class="filling__input-block firstname">
                        <InputText :InputTextName="firstnameName" :InputTextPlaceholder="firstnamePH">
                        </InputText>
                    </div>

                    <div class="filling__input-block patronymic">
                        <InputText :InputTextName="patronymicName" :InputTextPlaceholder="patronymicPH">
                        </InputText>

                    </div>

                    <div class="filling__input-block email">
                        <InputText :InputTextName="emailName" :InputTextPlaceholder="emailPH">
                        </InputText>
                    </div>

                    <div class="filling__input-block telephone">
                        <InputText :InputTextName="telephoneName" :InputTextPlaceholder="telephonePH">
                        </InputText>

                    </div> -->

                    <!-- <div class="filling__input-block comment">
                                <InputTextarea :InputTextareaName="commentName"
                                    :InputTextareaPlaceholder="commentPlaceholder"></InputTextarea>
                    </div> -->

                    <div class="filling__input-block button">
                        <div class="input-block-name hide-text">Кнопка</div>
                        <ButtonBlock ButtonWrapper="h-[3.125rem] w-1/3" ButtonStyle="orange"
                            ButtonName="Оставить заявку">
                        </ButtonBlock>

                    </div>
                </div>
            </div>

            <div class="modal-form__add-note-line px-10 pb-10">
                <div class="add-note-line">
                    <div class="add-note-line__textblock text-center">
                        Нажимая “Оставить заявку”, я принимаю <a class="agreement__link" href="#">условия
                            пользовательского соглашения</a> и даю согласие на <a class="use-of-pers-data__link"
                            href="#">обработку персональных данных</a>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
// import InputText from "@/components/blocks/functionalComponents/FillingInputBlocks/InputText.vue"
import FIOMailPhone from "../ApplicationForm/FIOMailPhone.vue";
import ButtonBlock from "../functionalComponents/FillingInputBlocks/ButtonBlock.vue";
// import InputTextarea from "../functionalComponents/FillingInputBlocks/InputTextarea.vue";
// import TitleName from "../functionalComponents/TitleName.vue";
export default {
    name: "ModalFormTechsupport",
    props: {},
    components: {
        // InputText,
        // TitleName,
        ButtonBlock,
        FIOMailPhone
    },
    data() {
        return {
            // titleName: 'Бесплатная консультация',

            // commentName: 'Описание проблемы',
            // commentPlaceholder: 'Ваш комментарий',
        }
    },
}
</script>