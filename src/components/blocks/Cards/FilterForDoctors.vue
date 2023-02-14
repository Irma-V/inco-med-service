<template>
    <div class="filter-body white with_shadow p-10 rounded-xl flex flex-col lg:flex-row lg:items-center justify-between">

        <div class="filter-item basis-[35%]">
            <!-- <div class="input-block-name">Введите информацию</div> -->
            <input type="text" placeholder="ФИО врача, специальность, клиника" class="input-block-self">
        </div>
        <div class="filter-item py-10 lg:py-0 basis-[35%]">
            <div class="filter__input-block__wrapper flex flex-row items-center justify-between">

                <div class="input-block-item__input-text">
                    <div class="filling__input-block input-text-block">
                        <input type="text" placeholder="От 2500" class="input-block-self dot__start">
                    </div>
                </div>

                <div class="input-block-item__slider-block basis-4/5 flex justify-center">
                    <div class="slider-block__wrapper basis-3/5">
                        <div class="rangecontainer w-full lg:w-28 xl:w-40 ">
                            <!-- <input type="range" min="1" max="5000" step="10" value="2500" class="range" id="myRange"> -->
                            <!-- <input ref="range" type="range" min="0" max="100" step="5" value="50" class="range01" @input="range()"> -->
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
        </div>
        
        <div class="filter-item basis-[15%]">
            <ButtonBlock ButtonWrapper="h-[2.125rem]" ButtonStyle="blue" ButtonName="Найти">
            </ButtonBlock>
        </div>


    </div>

</template>

<script>
import Slider from '@vueform/slider'
import ButtonBlock from '../functionalComponents/FillingInputBlocks/ButtonBlock.vue';

export default {
    name: "FilterForDoctors",
    components: {
        Slider,
        ButtonBlock,
    },

    data: () => ({
        value: [50, 100],

    }),

    methods: {

        /* шаблон: <input ref="range" type="range" min="0" max="100" step="5" value="50" class="range01" @input="range()"> */
        // range() {
        //     const range = this.$refs.range
        //     let val = range.value
        //     // val=(val*100)/5000 /* пр: от 0 до 5000 ед */
        //     return range.style.background = '-webkit-linear-gradient(left, #4267B2 0%, #4267B2 ' + val + '%, #DEEBFE ' + val + '%, #DEEBFE 100%)'
        //     // console.log(val, range.style);
        // }
    }
}
</script>

<style scoped lang="scss">
// .range01 {
//     -webkit-appearance: none;
//     // border: 1px solid #DEEBFE;
//     width: 10rem;
//     height: 0.2rem;
//     outline: none;
//     background: -webkit-linear-gradient(left, #4267B2 0%, #4267B2 50%, #DEEBFE 50%, #DEEBFE 100%);

//     &::-webkit-slider-thumb {
//         -webkit-appearance: none;
//         background: white;
//         outline: 0.1rem solid #DEEBFE;
//         width: 0.9rem;
//         height: 0.9rem;
//         border-radius: 100%;
//         cursor: pointer;

//     }

//     &::-moz-range-track {
//         -moz-appearance: none;
//         // border: 1px solid #DEEBFE;
//         width: 10rem;
//         height: 0.2rem;
//         outline: none;
//         background: -moz-linear-gradient(left, #4267B2 0%, #4267B2 50%, #DEEBFE 50%, #DEEBFE 100%);
//     }

//     &::-moz-range-thumb {
//         -moz-appearance: none;
//         background: white;
//         outline: 0.1rem solid #DEEBFE;
//         width: 0.9rem;
//         height: 0.9rem;
//         border-radius: 100%;
//         cursor: pointer;

//     }
// }

.filter__input-block__wrapper {
    .input-block-item__input-text {
        flex-basis: 35%;
    }
}

// .rangecontainer {
//     width: 100%;
//     .range {
// //     appearance: none;
// //     width: 100%;
// //     height: 2px;
// //     border-radius: 5px;
// //     background: #DEEBFE;
// //     outline: none;
// //     opacity: 1;
// //     -webkit-transition: 0.2s;
// //     transition: opacity 0.2s;

// //     // &:hover {
// //     //   opacity: 1; /* Fully shown on mouse-over */
// //     // }

// //     &::-webkit-slider-thumb {
// //       appearance: none;
// //       width: 15px;
// //       height: 15px;
// //       outline: 2px solid #DEEBFE;
// //       // background: #DEEBFE;
// //       background: white;
// //       cursor: pointer;
// //       border-radius: 50%;
// //     }

// //     &::-moz-range-thumb {
// //       width: 15px;
// //       height: 15px;
// //       // background: #DEEBFE;
// //       background: #4267b2;
// //       cursor: pointer;
// //       border-radius: 50%;
// //     }
//   }
// }
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