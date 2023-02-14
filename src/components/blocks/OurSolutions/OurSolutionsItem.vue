<template>
    <div ref="item" class="solutionBlockForMob__example01 with_border rounded-xl h-[41.25rem] w-80 mb-5 flex white"
        id="">
        <div class="solutionBlockForMob__wrapper flex flex-col justify-between p-5">
            <div class="textblock_solutForMob basis-1/4 flex flex-col justify-between">
                <div class="title__textblock font-bold text-2xl"> {{ solutionHeader }} </div>
                <div class="title__description text-lg basis-1/2"> {{ solutionDescription }}
                </div>
            </div>
            <div class="imgblock_solut border-solid border-b-4 border-[#2B2B2B]
                bgr_resourse01 bg-no-repeat bg-center bg-contain 
                flex justify-center items-end
                w-full basis-2/5">
                <img class="title-block__image" :src="solutionImg" alt="">
            </div>
            <router-link :to="{ name: linkName }">
                <ButtonBlock ButtonWrapper="h-[2.125rem]" ButtonStyle="blue" ButtonName="Перейти">
                </ButtonBlock>
            </router-link>
        </div>
    </div>

</template>

<script>
import ButtonBlock from '../functionalComponents/FillingInputBlocks/ButtonBlock.vue';


export default {
    name: "OurSolutionsItem",
    components: {
        ButtonBlock
    },
    props: {
        id: { type: String },
        solutionHeader: { type: String },
        solutionDescription: { type: String },
        solutionImg: { type: String },
        linkName: { type: String },
    },
    data() {

    },

    created() {

    },

    mounted() {
        // console.log(this.$refs.item);
        this.$refs.item.id = this.id
    },
}
</script>