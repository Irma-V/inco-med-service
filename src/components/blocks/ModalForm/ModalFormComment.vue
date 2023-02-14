
<template>
    <div class="modal-form w-full md:w-[45rem] white">
        <div class="form__wrapper flex flex-col justify-between">

            <div class="modal-form__filling p-10">
                <div class="modal-form__filling__wrapper">
                    <div class=" flex flex-col w-full h-[10rem]">
                        <InputTextarea InputTextareaName="Ваш отзыв" InputTextareaPlaceholder="Текст"></InputTextarea>
                    </div>
                </div>
            </div>

            <div class="modal-form__add-note-line px-10 pb-10">
                <div class="add-note-line flex justify-center">
                    <div class="filling__input-block button w-[40%]">
                        <div class="input-block-name hide-text">Кнопка</div>
                        <ButtonBlock ButtonWrapper="h-[3.125rem]" ButtonStyle="orange" ButtonName="Оставить отзыв">
                        </ButtonBlock>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import ButtonBlock from "../functionalComponents/FillingInputBlocks/ButtonBlock.vue";
import InputTextarea from "../functionalComponents/FillingInputBlocks/InputTextarea.vue";

export default {
    name: "ModalFormComment",
    props: {},
    components: {
        ButtonBlock,
        InputTextarea,
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