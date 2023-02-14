<template>
    <section class="aliceblue_theme" id="doctors">
        <div class="content">
            <div class="filter-block">
                <div class="filter-block__wrapper w-full flex flex-col justify-between">
                    <TitleName :titleName="titleNameBlock"></TitleName>
                    <slot></slot>
                </div>
            </div>
        </div>
    </section>


</template>


<script>
import TitleName from "@/components/blocks/functionalComponents/TitleName.vue"

export default {
    name: "FilterBlock",
    components: {
        TitleName,
    },
    props: {
        titleNameBlock: {
            type: String,
        },

    },

    data() {
        return {
        }
    },
}
</script>
