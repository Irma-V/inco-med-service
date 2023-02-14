<template>
    <div class="ellipse-icon-block h-full w-full specialisation">
        <div class="ellipse-icon aliceblue_theme" :class="EllipseIconSvg">
        </div>
        <div class="basis-[65%] text-sm lg:text-base w-44">
            <slot></slot>
        </div>
    </div>
</template>

<script>
// import ButtonBlock from '../functionalComponents/FillingInputBlocks/ButtonBlock.vue';

export default {
    name: "EllipseIcon",
    props: {
        EllipseIconSvg: {type: String}
    },
    data() {
        return {
            
        };
    },
    components: {
        
    }
}
</script>