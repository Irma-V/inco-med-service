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

            <div class="modal-form__catalog-item aliceblue_theme">
                <div class="modal-form__catalog-item__wrapper flex flex-row justify-between mx-6 my-8">
                    <div class="catalog-item__img-block w-[30%]">
                        <img src="~@/assets/img/sanatorium/sanatorium_01_x1.png" alt=""
                            class="w-full object-cover rounded-xl">
                    </div>

                    <div class="catalog-item__textblock w-[67%] flex flex-col justify-between">
                        <div
                            class="title__textblock w-full font-bold sm:text-xl md:text-2xl flex flex-col justify-between">
                            ЛОК "Солнечная"
                        </div>
                        <div class="textblock__description basis-3/4">
                            <div class="textblock__description__wrapper flex flex-col justify-between">
                                <div class="description-item">
                                    <div class="description__field adress basis-1/3">Адрес:</div>
                                    <div class="description__text basis-2/3">Краснодарский край,г. Геленджик,
                                        ул.
                                        Туристическая,
                                        19</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

                    <div class="filling__input-block telephone">
                        <InputText :InputTextName="telephoneName" :InputTextPlaceholder="telephonePH">
                        </InputText>

                    </div>

                    <div class="filling__input-block email">
                        <InputText :InputTextName="emailName" :InputTextPlaceholder="emailPH">
                        </InputText>
                    </div> -->

                    <div class="filling__input-block therapy__group">
                        <div class="input-block-name">Варианты лечения и питания</div>
                        <div class="input-block_group">

                            <div class="input-block_group__wrapper">
                                <div class="input-block_group__item">
                                    <div class="timeSelector_block food__options">
                                        <select class="form-select" id="food__options" aria-label="Варианты питани">
                                            <option selected="">Варианты питания</option>
                                            <option value="1">01</option>
                                            <option value="2">02</option>
                                            <option value="3">03</option>
                                        </select>
                                    </div>
                                </div>


                                <div class="input-block_group__item">
                                    <div class="timeSelector_block therapy__option">
                                        <select class="form-select" id="therapy__option" aria-label="Выбор лечения">
                                            <option selected="">Варианты лечения</option>
                                            <option value="1">01</option>
                                            <option value="2">02</option>
                                            <option value="3">03</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="filling__input-block date__group">
                        <div class="input-block-name">Выбрать даты</div>
                        <div class="input-block_group">

                            <div class="input-block_group__wrapper">
                                <div class="input-block_group__item">
                                    <div class="group__item-name">Заезд</div>

                                    <div class="timeSelector_block date">
                                        <input type="date" class="form-select" id="date" name="date">
                                    </div>
                                </div>

                                <div class="input-block_group__item">
                                    <div class="group__item-name">Выезд</div>

                                    <div class="timeSelector_block date">
                                        <input type="date" class="form-select" id="date" name="date">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="filling__input-block people__group">
                        <div class="input-block-name">Отдыхающие</div>
                        <div class="input-block_group">
                            <div class="input-block_group__wrapper">
                                <div class="input-block_group__item">
                                    <div class="group__item-name">Взрослые</div>

                                    <div class="timeSelector_block food__options">
                                        <select class="form-select" id="food__options" aria-label="Взрослые">
                                            <option selected="">3</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>


                                <div class="input-block_group__item">
                                    <div class="group__item-name">Дети</div>

                                    <div class="timeSelector_block therapy__option">
                                        <select class="form-select" id="therapy__option" aria-label="Дети">
                                            <option selected="">1</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="input-block_group__item">
                                    <div class="group__item-name">Возраст детей (через запятую)</div>

                                    <input type="text" placeholder="1" class="input-block-self"
                                        aria-label="Возраст детей">
                                </div>

                                <div class="input-block_group__item">
                                    <div class="group__item-name hide-text">Кнопка</div>
                                    <ButtonBlock ButtonWrapper="h-[3.125rem]" ButtonStyle="orange" ButtonName="Оставить заявку">
                                    </ButtonBlock>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div class="modal-form__add-note-line p-10">
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
// import TitleName from "../functionalComponents/TitleName.vue";
export default {
    name: "ModalFormSanatorium",
    props: {},
    components: {
    // InputText,
    // TitleName,
    ButtonBlock,
    FIOMailPhone
},
    data() {
        return {
            // titleName: 'Заявка на бронирование',

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