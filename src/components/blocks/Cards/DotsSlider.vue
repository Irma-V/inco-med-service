<template>
    <div class="filter__input-block__wrapper flex flex-row items-center justify-between">

        <div class="input-block-item__input-text">
            <div class="filling__input-block input-text-block">
                <input type="text" placeholder="От 2500" class="input-block-self dot__start">
            </div>
        </div>

        <div class="input-block-item__slider-block basis-4/5 flex justify-center">
            <div class="slider-block__wrapper basis-3/5">
                <div class="rangecontainer w-full lg:w-28 xl:w-40 ">
                    <Slider v-model="value"></Slider>
                </div>
            </div>
        </div>
        <div class="input-block-item__input-text">
            <div class="filling__input-block input-text-block">
                <input type="text" placeholder="До 5000" class="input-block-self dot__end">
            </div>
        </div>
    </div>
</template>

<script>
import Slider from '@vueform/slider'
export default {
    name: "DotsSlider",
    components: {
        Slider,
    },
    data: () => ({
        value: [50, 100],

    }),
}
</script>