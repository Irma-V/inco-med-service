<template>
    <div class="catalog-item med-specialist white with_shadow rounded-xl w-full flex content-center min-[660px]:justify-center my-[2%]"
        :id="id">
        <div
            class="catalog-item__wrapper mx-7 my-5 w-full flex flex-col min-[660px]:flex-row justify-between items-center">
            <div
                class="services-img-block w-full h-1/2 min-[660px]:h-full basis-[30%] lg:basis-1/5 pb-5 min-[660px]:pr-5 min-[660px]:pb-0 lg:p-0 ">
                <img class="services-img__photo  services-img__doctor rounded-xl object-cover" :src="doctorsPhoto"
                    alt="">
            </div>
            <div class="services-info-block w-full h-full basis-1/2 min-[850px]:basis-[63%] lg:basis-3/4">
                <div class="services-info-block__wrapper w-full h-full flex flex-col">

                    <router-link :to="{ name: 'CardDoctor' }">
                        <div class="catalog-item__name doctor__name font-bold text-lg lg:text-2xl basis-[10%] pb-[3%]">
                            {{ fio }}
                        </div>
                    </router-link>


                    <div class="catalog-item__info h-full flex flex-col min-[660px]:flex-row justify-between min-[660px]:items-center basis-11/12">

                        <div class="catalog-item__info__input-block h-full basis-[30%] flex flex-col justify-around">

                            <EllipseIcon EllipseIconSvg='doc_logo'>
                                <ul>
                                    <li>{{ spec }}</li>
                                    <li>{{ specCategory }}</li>
                                    <li>Стаж работы {{ stage }} лет</li>

                                </ul>
                            </EllipseIcon>

                            <EllipseIcon EllipseIconSvg='clinic_logo'>
                                <ul>
                                    <router-link :to="{ name: 'CardClinic' }">
                                        <li>Клиника Сова</li>
                                    </router-link>

                                    <router-link :to="{ name: 'CardClinic' }">
                                        <li>Клиника Пересвет</li>
                                    </router-link>

                                    <router-link :to="{ name: 'CardClinic' }">
                                        <li>Клиника Эксперт</li>
                                    </router-link>

                                </ul>
                            </EllipseIcon>
                        </div>

                        <div class="catalog-item__info__join-block h-full flex flex-col lg:flex-row justify-around lg:justify-between basis-1/2 lg:basis-[60%]">
                            <div class="timeSelector h-full flex flex-col justify-around basis-auto lg:basis-[30%]">
                                <div class="timeSelector_block date py-[2%] min-[660px]:p-0">
                                    <input type="date" class="form-select" id="date" name="date">
                                </div>
                                <div class="timeSelector_block time py-[2%] min-[660px]:p-0">
                                    <select class="form-select" id="time" aria-label="Выбор времени">
                                        <option selected="">Время
                                        </option>
                                        <option value="1">09:00
                                        </option>
                                        <option value="2">11:00
                                        </option>
                                        <option value="3">14:50
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div
                                class="choose-a-service_block h-full flex flex-col min-[660px]:flex-row-reverse lg:flex-col justify-between lg:justify-around basis-[10%] lg:basis-[35%]">
                                <div
                                    class="priceBlock font-bold text-3xl min-[660px]:text-lg lg:text-3xl basis-auto py-[2%] min-[660px]:p-0">
                                    {{ price }} ₽</div>
                                <div class="button basis-1/2 lg:basis-auto py-[2%] min-[660px]:p-0">
                                    <ButtonBlock @click="IsPopupOpen = true" ButtonWrapper="h-[2.125rem]"
                                        ButtonStyle="blue" ButtonName="Записаться">
                                    </ButtonBlock>

                                </div>
                            </div>
                        </div>
                        <!-- {{ info }} -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <PopupBlank :is-open="IsPopupOpen" @close="IsPopupOpen = false" PopupTitleName="Запись на прием к врачу">
        <ModalFormDoctor :id="id" :doctorsPhoto="doctorsPhoto" :fio="fio" :spec="spec" :fullSpec="fullSpec"
            :specCategory="specCategory" :stage="stage" :price="price"> </ModalFormDoctor>
    </PopupBlank>
</template>

<script>
import EllipseIcon from '../functionalComponents/Ellipse/EllipseIcon.vue';
import ButtonBlock from '../functionalComponents/FillingInputBlocks/ButtonBlock.vue';
import ModalFormDoctor from '../ModalForm/ModalFormDoctor.vue';
import PopupBlank from '../ModalForm/PopupBlank.vue';

export default {
    name: "DoctorCatalogCard",
    components: {
        EllipseIcon,
        ButtonBlock,
        PopupBlank,
        ModalFormDoctor
    },

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
    // inject: ['doctorsInformation'],
    data() {
        return {
            IsPopupOpen: false,
        }
    },

}
</script>