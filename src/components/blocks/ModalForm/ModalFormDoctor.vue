<template>
    <div class="modal-form h-full w-full md:w-[45rem] white">
        <div class="form__wrapper flex flex-col justify-between">

            <div class="modal-form__catalog-item aliceblue_theme" :id="id">
                <div class="modal-form__catalog-item__wrapper flex flex-row justify-between mx-6 my-8">
                    <div class="catalog-item__img-block w-[20%]">
                        <img :src="doctorsPhoto" alt=""
                            class="img_ellipse_form w-[7rem] h-[7rem] object-cover rounded-full">
                    </div>

                    <div class="catalog-item__textblock w-[75%] flex flex-col justify-between">
                        <div
                            class="title__textblock w-full font-bold sm:text-xl md:text-2xl flex flex-col justify-between">
                            {{ fio }}
                            <span
                                class="additional_textblock additional_textblock text-sm md:text-base xl:text-base mb-[2%]">{{
                                    fullSpec
                                }}</span>
                        </div>
                        <div class="textblock__description basis-3/4">
                            <div class="textblock__description__wrapper flex flex-col justify-between">

                                <div class="description-item">
                                    <div class="description__field specialisation">Специализация:</div>
                                    <div class="description__text">{{ spec }}</div>
                                </div>

                                <div class="description-item">
                                    <div class="description__field experience">Стаж работы:</div>
                                    <div class="description__text">{{ stage }} лет</div>
                                </div>

                                <div class="description-item">
                                    <div class="description__field price">Стоимость:</div>
                                    <div class="description__text"> {{ price }} руб (первичный приём)</div>
                                </div>

                                <div class="description-item">
                                    <div class="description__field category">Категория:</div>
                                    <div class="description__text"> {{ specCategory }} </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-form__filling p-10">
                <div class="modal-form__filling__wrapper">
                    <FIOMailPhone></FIOMailPhone>

                    <div class="filling__input-block therapy__group">
                        <div class="input-block-name">Желаемая дата и время посещения</div>
                        <div class="input-block_group">

                            <div class="input-block_group">
                                <div class="input-block_group__wrapper">
                                    <div class="input-block_group__item">
                                        <div class="timeSelector_block date"><input type="date" class="form-select"
                                                id="date" name="date"></div>
                                    </div>
                                    <div class="input-block_group__item">
                                        <div class="timeSelector_block time"><select class="form-select" id="time"
                                                aria-label="Время">
                                                <option selected="">Время</option>
                                                <option value="1">01</option>
                                                <option value="2">02</option>
                                                <option value="3">03</option>
                                            </select></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="filling__input-block comment">
                        <InputTextarea InputTextareaName="Описание проблемы" InputTextareaPlaceholder="Ваш комментарий">
                        </InputTextarea>
                    </div>
                    <div class="filling__input-block button">
                        <div class="input-block-name hide-text">Кнопка</div>
                        <ButtonBlock ButtonWrapper="h-[3.125rem] w-1/3" ButtonStyle="orange"
                            ButtonName="Записаться на прием">
                        </ButtonBlock>
                    </div>
                </div>
            </div>

            <div class="modal-form__add-note-line px-10 pb-10">
                <div class="add-note-line">
                    <div class="add-note-line__textblock text-center">
                        Нажимая “Записаться на прием”, я принимаю <a class="agreement__link" href="#">условия
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
import InputTextarea from "../functionalComponents/FillingInputBlocks/InputTextarea.vue";

export default {
    name: "ModalFormDoctor",
    props: {
        id: { type: String },
        doctorsPhoto: { type: String },
        fio: { type: String },
        spec: { type: String },
        fullSpec: { type: String },
        specCategory: { type: String },
        stage: { type: String },
        price: { type: String },
    },
    components: {
        // InputText,
        // TitleName,
        InputTextarea,
        ButtonBlock,
        FIOMailPhone
    },
    data() {
        return {
        }
    },
}
</script>