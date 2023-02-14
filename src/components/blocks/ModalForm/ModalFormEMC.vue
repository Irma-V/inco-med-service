<template>
    <div class="modal-form w-full md:w-[45rem] white">
        <div class="form__wrapper flex flex-col justify-between">

            <div class="modal-form__filling p-10">
                <div class="modal-form__filling__wrapper">
                    <FIOMailPhone></FIOMailPhone>

                    <div class="filling__input-block button">
                        <div class="input-block-name hide-text">Кнопка</div>
                        <ButtonBlock ButtonWrapper="h-[3.125rem]" ButtonStyle="orange" ButtonName="Оставить заявку">
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
import FIOMailPhone from "../ApplicationForm/FIOMailPhone.vue";
import ButtonBlock from "../functionalComponents/FillingInputBlocks/ButtonBlock.vue";

export default {
    name: "ModalFormEMC",
    props: {},
    components: {
        // InputText,
        // TitleName,
        FIOMailPhone,
        ButtonBlock,
    },
    data() {
        return {

            surnameName: 'Фамилия',
            surnamePH: 'Иванов',

            firstnameName: 'Имя',
            firstnamePH: 'Иван',

            patronymicName: 'Отчество',
            patronymicPH: 'Иванович',

            telephoneName: 'Телефон',
            telephonePH: '+7 952 540-45-44',

            emailName: 'email',
            emailPH: 'email',
        }
    },
}
</script>