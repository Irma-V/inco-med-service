<template>
    <div class="filter-content__wrapper">
        <div
            class="filter-body white with_shadow p-10 rounded-xl flex flex-col lg:flex-row lg:items-center justify-between">

            <div class="filter-item basis-[35%]">
                <input type="text" placeholder="ФИО врача, специальность, клиника" class="input-block-self"
                    v-model="findADoctor" @keydown.enter="fff()">
            </div>
            <div class="filter-item py-10 lg:py-0 basis-[35%]">
                <DotsSlider></DotsSlider>
            </div>

            <div class="filter-item basis-[15%]">
                <ButtonBlock ButtonWrapper="h-[2.125rem]" ButtonStyle="blue" ButtonName="Найти" @click="fff">
                </ButtonBlock>
            </div>


        </div>

        <CatalogDoctors> </CatalogDoctors>

    </div>

    <div class="pagination-block">
        <nav class="pagination-block__wrapper">
            <PaginationBlock></PaginationBlock>
        </nav>
    </div>
</template>

<script>
import PaginationBlock from '../functionalComponents/Pagination/PaginationBlock.vue';
import CatalogDoctors from './CatalogDoctors.vue';
import ButtonBlock from '../functionalComponents/FillingInputBlocks/ButtonBlock.vue';
import DotsSlider from './DotsSlider.vue';


export default {
    name: "filterDoc",
    components: {
    CatalogDoctors,
    PaginationBlock,
    ButtonBlock,
    DotsSlider,
},
    props: {},

    // provide: {
    //      doctorsInformation: [
    //             {
    //                 id: Math.floor(Math.random() * (999 - 1)) + 1,
    //                 doctorsPhoto: require('@/assets/img/doctors/ivanova.png'),
    //                 fio: "Иванова Татьяна Владимировна",
    //                 spec: "Акушер, гинеколог",
    //                 fullSpec: 'Акушер · гинеколог',
    //                 specCategory: "Высшая категория",
    //                 stage: 17,
    //                 price: 1100,
    //             },
    //             {
    //                 id: Math.floor(Math.random() * (999 - 1)) + 1,
    //                 doctorsPhoto: require('@/assets/img/doctors/petrov.png'),
    //                 fio: "Петров Петр Петрович",
    //                 spec: "Хирург-травматолог",
    //                 fullSpec: 'Травматолог · Хирург-травматолог',
    //                 specCategory: "Высшая категория",
    //                 stage: 25,
    //                 price: 2800,
    //             },
    //             {
    //                 id: Math.floor(Math.random() * (999 - 1)) + 1,
    //                 doctorsPhoto: require('@/assets/img/doctors/dorokhova.png'),
    //                 fio: "Дорохова Елена Тимофеевна",
    //                 spec: "Врач-терапевт",
    //                 fullSpec: 'Врач-терапевт',
    //                 specCategory: "Высшая категория",
    //                 stage: 14,
    //                 price: 1200,
    //             },
    //             {
    //                 id: Math.floor(Math.random() * (999 - 1)) + 1,
    //                 doctorsPhoto: require('@/assets/img/doctors/ivanov.jpg'),
    //                 fio: "Иванов Алексей Александрович",
    //                 spec: "Стоматолог-имплантолог",
    //                 fullSpec: 'Стоматолог · Стоматолог-имплантолог · Стоматолог-хирург · Челюстно-лицевой хирург',
    //                 specCategory: "Высшая категория",
    //                 stage: 22,
    //                 price: 1500,
    //             },
    //         ]
    // },

    data() {
        return {
            findADoctor: "",
        }
    },

    methods: {
        fff() {
            console.log(this.findADoctor)
        }
    },
}
</script>

<style scoped lang="scss">
.filter__input-block__wrapper {
    .input-block-item__input-text {
        flex-basis: 35%;
    }
}
</style>

<style src="@/scss/default.css">

</style>

<style>
.slider-handle {
    outline: 0.2rem solid #DEEBFE;

}


.slider-base {
    height: 0.2rem;
}
</style>

<style lang="scss">
.slider-handle {

    .slider-tooltip,
    .slider-tooltip-top {
        display: none;
    }
}
</style>