<template>
    <div class="room-selector__item white with_shadow with_border rounded-xl mb-[2%] lg:mb-0">
        <div class="room-selector__item__wrapper flex flex-col md:flex-row justify-between mx-8 my-5">
            <div class="room-selector__item__img-block basis-[45%]">
                <img :src="RoomImgUrl" alt="" class="img-block__photo rounded-xl object-cover w-full">
            </div>

            <div class="room-selector__item__info basis-1/2">
                <div class="info__wrapper flex flex-col justify-between h-full">
                    <div class="room-type font-bold text-lg sm:text-xl md:text-2xl w-4/5">{{ RoomType }}</div>
                    <div class="description text-xs sm:text-sm md:text-base lg:text-base xl:text-xl">{{ RoomDescription }}
                    </div>
                    <div class="price-block font-bold text-lg sm:text-xl">от {{ RoomPrice }} ₽</div>
                    
                    <ButtonBlock @click="IsPopupOpen = true"
                        ButtonWrapper="h-[2.125rem]"  ButtonStyle="blue" ButtonName="Забронировать">
                    </ButtonBlock>
                    
                </div>
            </div>
        </div>
    </div>

    <PopupBlank :is-open="IsPopupOpen" @ok="PoppupConfirmed" @close="IsPopupOpen = false"
        PopupTitleName="Заявка на бронирование">
        <ModalFormSanatorium></ModalFormSanatorium>
    </PopupBlank>
</template>

<script>
// import

import ButtonBlock from '../functionalComponents/FillingInputBlocks/ButtonBlock.vue';
import ModalFormSanatorium from '../ModalForm/ModalFormSanatorium.vue';
import PopupBlank from '../ModalForm/PopupBlank.vue';

export default {
    name: "RoomsItem",
    components: {
    ButtonBlock,
    PopupBlank,
    ModalFormSanatorium,
},
    props: {
        RoomType: {
            type: String
        },
        RoomDescription: {
            type: String
        },
        RoomPrice: {
            type: String
         },
         RoomImgUrl: {
            type: String
         }
    },
data() {
    return {
        IsPopupOpen: false,
    }
}
}
</script>