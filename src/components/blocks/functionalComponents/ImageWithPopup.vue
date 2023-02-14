<template>
    <div  @click="IsPopupOpen = true" :class="ImgWrapper" :id="id">
        <img :class="ImgStyle" :src="src" alt="">
    </div>

    <!-- <PopupBlank :is-open="IsPopupOpen"  @close="IsPopupOpen = false"
        PopupTitleName="Просмотр">
       <div>J O P A</div>
    </PopupBlank> -->
</template>

<script>
// import PopupBlank from '../ModalForm/PopupBlank.vue';

export default {
    name: "ImageWithPopup",
    props: {
        ImgWrapper: { type: String },
        ImgStyle: { type: String },
        src: { type: String },
        id: { type: String },
    },
    components: { 
        // PopupBlank, 
    },
    data() {
        return {
            // IsPopupOpen: false,
        };
    },
    
}
</script>