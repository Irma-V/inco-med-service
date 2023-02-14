<template>
    <div class="filter">
        <div class="filter__wrapper">

            <div class="filter__content select-sanatorium__form">
                <div class="tabs">

                    <nav class="tabs__items flex">
                        <span v-for="tab in tabs" :key="tab" @click="selectedTabs = tab"
                            class="tabs__item white  cursor-pointer flex flex-row items-center justify-center h-12 w-[10rem] rounded-t-xl mr-1 text-[#4267B2] font-bold text-lg"
                            :class="{ activeTab: selectedTabs === tab }"> {{ tab }} </span>
                        <!-- <a href="#" class="tabs__item white with_shadow"> <span>Санатории,  На карте</span></a> -->

                    </nav>

                    <div class="tabs__body">
                        <div class="tabs__block">

                            <!-- <slot name="Doctors"></slot>

                            <slot name="Sanatoriums"></slot> -->

                            <ul>

                                <!-- <li :id="tab.id" v-if="selectedTabs === 'Санатории'"> -->
                                <li v-if="selectedTabs === 'Санатории'">
                                    <div class="tabs__content">

                                        <div class="tabs__block__content__wrapper">

                                            <FilterForSanatorium></FilterForSanatorium>
                                            <CatalogSanatorium></CatalogSanatorium>

                                        </div>
                                    </div>
                                    <div class="free-area white h-[16.5rem] w-full with_shadow"> </div>

                                    <div class="pagination-block">
                                        <nav class="pagination-block__wrapper">
                                            <PaginationBlock></PaginationBlock>
                                        </nav>
                                    </div>
                                </li>

                                <!-- <li :id="tab.id" v-if="selectedTabs === 'На карте'"> -->
                                <li v-if="selectedTabs === 'На карте'">
                                    <div class="tabs__content">

                                        <div class="tabs__block__content__wrapper">

                                            <FilterForSanatorium></FilterForSanatorium>
                                            <MapAndContacts></MapAndContacts>

                                        </div>
                                    </div>

                                    <div class="free-area white h-[16.5rem] w-full with_shadow"> </div>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>


                <component :is="MapAndContacts"></component>
            </div>
            <!-- <input type="text" v-model="text_value">
            {{ text_value }} -->
        </div>
    </div>
</template>

<script>
import PaginationBlock from "@/components/blocks/functionalComponents/Pagination/PaginationBlock"
import MapAndContacts from "@/components/blocks/Map/MapAndContacts";
import FilterForSanatorium from "@/components/blocks/Cards/FilterForSanatorium"
import CatalogSanatorium from "@/components/blocks/Cards/CatalogSanatorium"


export default {
    name: "FilterSanat",
    components: {
        PaginationBlock,
        MapAndContacts,
        FilterForSanatorium,
        CatalogSanatorium,
    },
    
    data() {
        return {
            // props: {
            //     tabs: {
            //         type: Array,
            //     },
            //     selectedTabs: {
            //         type: String
            //     },
            // },
            tabs: [
                // { id: 'tab01', name: 'Врачи', content: 'tab1' },
                // { id: 'tab02', name: 'Санатории', content: 'tab2' },
                // { id: 'tab03', name: 'На карте', content: 'tab3' },

                'Санатории',
                'На карте',
            ],

            selectedTabs: 'tabsBody',
            text: ''
        }
    },
    computed: {

        /* 
        text_value: {
            get() {
                return this.text;
            },
            set(value) {
                this.text = value + 1
            }
        }, */


    }
}

</script>

<style scoped lang="scss">
.tabs__block {
    ul {
        li {
            .tabs__content {
                border-bottom-right-radius: 0.75rem;
                border-bottom-left-radius: 0.75rem;
                border-top-right-radius: 0.75rem;

                // background-color: white;
            }
        }
    }
}
</style>