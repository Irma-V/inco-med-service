<template>

    <section>
        <div class="content">
            <TitleName :titleName="titleName"> </TitleName>

            <div class="assistent-block aliceblue_theme with_shadow h-[22.5rem] p-10 rounded-xl">
                <div class="assistent-block__wrapper flex flex-col justify-between h-full">
                    <div class="assist-titleblock basis-1/4">
                        <div class="wrapper flex flex-col items-center">
                            <div class="titlename text-xl font-bold">Внесение данных о Вашем здоровье профессиональным
                                ассистентом</div>
                            <div class="description text-md "> Рекомендуем на начальном этапе использования ЭМК</div>
                        </div>
                    </div>


                    <div class="assist-range basis-1/4">
                        <div class="wrapper flex flex-col justify-between h-full ">
                            <div class="rangeblock">
                                <Slider v-model="value" :step="50">
                                </Slider>
                            </div>
                            <div class="range-items__wrapper flex flex-row justify-between">
                                <div class="range-first text-4xl font-bold">300 ₽</div>
                                <div class="textblock">Количество записей внесенных самостоятельно не ограничено</div>
                                <div class="range-last text-4xl font-bold">5 000 ₽</div>
                            </div>
                        </div>
                    </div>

                    <div class="assist-payment basis-auto flex justify-center">
                        <div class="wrapper flex flex-row justify-between w-3/5">
                            <div class="payment-description">Ассистент внесет <span class="font-bold">15</span> записей
                            </div>
                            <div class="payment-button basis-1/3">
                                <ButtonBlock ButtonWrapper="h-[3.125rem]" ButtonStyle="orange" ButtonName="Купить">
                                </ButtonBlock>
                            </div>
                            <div class="payment-price"> За один год: <span class="text-[#ff9314] font-bold">2 500 ₽
                                </span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import TitleName from "@/components/blocks/functionalComponents/TitleName.vue"
import Slider from '@vueform/slider'
import ButtonBlock from "../functionalComponents/FillingInputBlocks/ButtonBlock.vue";

export default {
    name: "TariffAssistentBlock",
    components: {
    TitleName,
    Slider,
    ButtonBlock
},
    data() {
        return {
            value: 50,
            titleName: 'Выберите свой тариф',
            assistentService: [
                {
                    id: 'valav',
                    AssistTitlename: 'Внесение данных о Вашем здоровье профессиональным ассистентом',
                    AssistDescription: 'Рекомендуем на начальном этапе использования ЭМК',
                    RangeTextblock: 'Количество записей внесенных самостоятельно не ограничено',
                    ButtonName: 'Купить',
                    PaymentPrice: '2500',
                    RecordsText: 'Ассистент внесет 15 записей',
                },
                {
                    id: 'valmin',
                    AssistTitlename: 'Самостоятельное внесение данных о Вашем здоровье',
                    AssistDescription: 'Рекомендуем для уверенных пользователей',
                    RangeTextblock: '',
                    ButtonName: 'Купить',
                    PaymentPrice: '300',
                    RecordsText: 'Количество записей: не ограничено',
                },
                {
                    id: 'valmax',
                    AssistTitlename: 'Внесение данных о Вашем здоровье профессиональным ассистентом',
                    AssistDescription: 'Соберем и внесем в ЭМК всю историю Вашего здоровья',
                    RangeTextblock: '',
                    ButtonName: 'Оформить',
                    PaymentPrice: '5000',
                    RecordsText: 'Количество записей: не ограничено',
                },
            ],
        }
    }
}
</script>


<!-- <style lang="scss">
.slider-handle {
    outline: 0.7rem solid #4267b2;
}
</style> -->