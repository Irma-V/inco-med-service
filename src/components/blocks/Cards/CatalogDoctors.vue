<template>
    <div class="choise-a-specialists__catalog">
        <div class="catalog__wrapper">
            <div class="specialist-block">

                <DoctorCatalogCard v-for="doctorItem in doctorsInformation" :key="doctorItem" :id="doctorItem.id"
                    :doctorsPhoto="doctorItem.doctorsPhoto" :fio="doctorItem.fio" :spec="doctorItem.spec"
                    :fullSpec="doctorItem.fullSpec" :specCategory="doctorItem.specCategory" :stage="doctorItem.stage"
                    :price="doctorItem.price">
                </DoctorCatalogCard>
            </div>

        </div>
    </div>

    <PopupBlank :is-open="IsPopupOpen" @close="IsPopupOpen = false" PopupTitleName="Запись на прием к врачу">
        <ModalFormDoctor></ModalFormDoctor>
    </PopupBlank>

</template>

<script>
import DoctorCatalogCard from '../Doctors/DoctorCatalogCard.vue';
import ModalFormDoctor from '../ModalForm/ModalFormDoctor.vue';
import PopupBlank from '../ModalForm/PopupBlank.vue';

export default {
    name: "CatalogDoctors",
    components: {
        PopupBlank,
        ModalFormDoctor,
        DoctorCatalogCard
    },
    data() {
        return {
            IsPopupOpen: false,
            doctorsInformation: [
                {
                    id: Math.floor(Math.random() * (999 - 1)) + 1,
                    doctorsPhoto: require('@/assets/img/doctors/ivanova.png'),
                    fio: "Иванова Татьяна Владимировна",
                    spec: "Акушер, гинеколог",
                    fullSpec: 'Акушер · гинеколог',
                    specCategory: "Высшая категория",
                    stage: 17,
                    price: 1100,
                },
                {
                    id: Math.floor(Math.random() * (999 - 1)) + 1,
                    doctorsPhoto: require('@/assets/img/doctors/petrov.png'),
                    fio: "Петров Петр Петрович",
                    spec: "Хирург-травматолог",
                    fullSpec: 'Травматолог · Хирург-травматолог',
                    specCategory: "Высшая категория",
                    stage: 25,
                    price: 2800,
                },
                {
                    id: Math.floor(Math.random() * (999 - 1)) + 1,
                    doctorsPhoto: require('@/assets/img/doctors/dorokhova.png'),
                    fio: "Дорохова Елена Тимофеевна",
                    spec: "Врач-терапевт",
                    fullSpec: 'Врач-терапевт',
                    specCategory: "Высшая категория",
                    stage: 14,
                    price: 1200,
                },
                {
                    id: Math.floor(Math.random() * (999 - 1)) + 1,
                    doctorsPhoto: require('@/assets/img/doctors/ivanov.jpg'),
                    fio: "Иванов Алексей Александрович",
                    spec: "Стоматолог-имплантолог",
                    fullSpec: 'Стоматолог · Стоматолог-имплантолог · Стоматолог-хирург · Челюстно-лицевой хирург',
                    specCategory: "Высшая категория",
                    stage: 22,
                    price: 1500,
                },
            ]
        };
    },
}
</script>