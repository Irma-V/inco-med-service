<template>
    <div class="about-card__photo-gallery basis-2/5 pb-8 lg:pb-0">
        <div class="photo-gallery-block">
            <div class="photo-gallery__wrapper flex flex-col justify-between  md:h-full lg:h-[42rem]">

                <div class="photo-gallery__large-image flex basis-4/5">
                    <img class="large-image__wrapper object-cover" id="largeImg"
                        src="~@/assets/img/clinic/gallery/img3-lg.jpg" alt="Image 3">
                </div>

                <ul class="photo-gallery__thumbs basis-1/5" id="thumbs">

                    <li>
                        <a href="img/clinic/gallery/img2-lg.jpg" title="Image 2"><img
                                src="~@/assets/img/clinic/gallery/img2-thumb.png"></a>
                    </li>
                    <li>
                        <a href="img/clinic/gallery/img3-lg.jpg" title="Image 3"><img
                                src="~@/assets/img/clinic/gallery/img3-thumb.png"></a>
                    </li>
                    <li>
                        <a href="img/clinic/gallery/img4-lg.jpg" title="Image 4"><img
                                src="~@/assets/img/clinic/gallery/img4-thumb.png"></a>
                    </li>
                    <li>
                        <a href="img/clinic/gallery/img5-lg.jpg" title="Image 5"><img
                                src="~@/assets/img/clinic/gallery/img5-thumb.png"></a>
                    </li>
                </ul>

            </div>
        </div>

    </div>
</template>

<script>
//import

export default {
    name: "GaleryImg",
    components: {},
    props: {},

    data() {
        return {

        }
    }
}
</script>

<style scoped lang="scss">

</style>