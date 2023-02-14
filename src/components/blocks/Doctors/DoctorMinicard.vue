<template>

    <!-- <div class="flex flex-col items-center content-center justify-center with_border shadow-none bg-white w-[13rem] h-[28.5rem] mr-6"> -->
        <div class="block_wrapper w-[13rem] h-[28.5rem] white with_border rounded-xl flex flex-col justify-between items-center p-4 mr-6 ">
            <div class="doctorsPhoto__miniature">
                <img class="doctor__miniature rounded-xl" :src="doctorsPhoto" alt="" />
            </div>
            <div class="specialist__info">
                <div class="specialist__info__doctorName">
                    {{ fio }}
                </div>

                <div class="specialist__info__description">
                    <div class="description__inputBlocks">
                        <div class="input-block specialisation">
                            <div class="input-block__textblock">
                                {{ spec }} <br />
                                {{ specCategory }} <br />
                                Стаж работы {{ stage }} лет
                            </div>
                        </div>
                    </div>

                    <div class="description__join_block">
                        <div class="choose-a-service_block__miniature">
                            <div class="priceBlock">{{ price }} ₽</div>
                            <ButtonBlock ButtonWrapper="h-[2.125rem]" ButtonStyle="blue" ButtonName="Записаться">
                            </ButtonBlock>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
import ButtonBlock from '../functionalComponents/FillingInputBlocks/ButtonBlock.vue';

export default
    {
        name: "DoctorMinicard",
        props: {
            fio: { type: String },
            spec: { type: String },
            specCategory: { type: String },
            stage: { type: String },
            price: { type: String },
            doctorsPhoto: { type: String },
        },
        components: {
            ButtonBlock,
        }
    }

</script>