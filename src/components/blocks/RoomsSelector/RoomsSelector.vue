<template>
    <section class="aliceblue_theme">
        <div class="content">
            <TitleName :titleName="titleName"></TitleName>
            <div class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
                <RoomsItem v-for="roomsItem in roomsItems" :key="roomsItem.id" :RoomType="roomsItem.RoomType"
                    :RoomDescription="roomsItem.RoomDescription" :RoomPrice="roomsItem.RoomPrice"
                    :RoomImgUrl="roomsItem.RoomImgUrl">
        
                </RoomsItem>
            </div>

        </div>
    </section>
</template>

<script>
import RoomsItem from "@/components/blocks/RoomsSelector/RoomsItem.vue"
import TitleName from "@/components/blocks/functionalComponents/TitleName.vue"


export default {
    name: "RoomsSelector",
    components: {
        RoomsItem,
        TitleName,
    },
    data() {
        return {
            titleName: 'Выбор номера',
            roomsItems: [
                {
                    id: Math.floor(Math.random() * (999 - 1)) + 1,
                    RoomType: 'Одноместный стандарт',
                    RoomDescription: 'Площадь 24 М2, Кондиционер, Холодильник, С/у, душ, балкон, две кровати',
                    RoomPrice: '12500',
                    RoomImgUrl: require('@/assets/img/sanatorium/room_type/room01_x1.png'),
                },
                {
                    id: Math.floor(Math.random() * (999 - 1)) + 1,
                    RoomType: 'Одноместный эконом',
                    RoomDescription: 'Площадь 24 М2, Кондиционер, Холодильник, С/у, душ, балкон, две кровати',
                    RoomPrice: '12500',
                    RoomImgUrl: require('@/assets/img/sanatorium/room_type/room01_x1.png'),

                },
                {
                    id: Math.floor(Math.random() * (999 - 1)) + 1,
                    RoomType: 'Четырехместный стандарт',
                    RoomDescription: 'Площадь 24 М2, Кондиционер, Холодильник, С/у, душ, балкон, две кровати',
                    RoomPrice: '12500',
                    RoomImgUrl: require('@/assets/img/sanatorium/room_type/room01_x1.png'),

                },
                {
                    id: Math.floor(Math.random() * (999 - 1)) + 1,
                    RoomType: 'Трехместный люкс',
                    RoomDescription: 'Площадь 24 М2, Кондиционер, Холодильник, С/у, душ, балкон, две кровати',
                    RoomPrice: '12500',
                    RoomImgUrl: require('@/assets/img/sanatorium/room_type/room01_x1.png'),

                },
            ]
        }
    },

    mounted() {
        // console.log(this.roomsItems);
    }
}
</script>
