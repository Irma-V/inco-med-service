<template>
    <div class="title__name">
        <div class="h1 font-bold basis-1/2 text-[1.45rem] pb-5 sm:py-5 sm:px-0 sm:text-xl md:text-4xl">
           {{titleName}}
        </div>
    </div>
</template>

<script>
export default {
    name: "TitleName",
    props: {
        titleName: {type: String}
    }
}
</script>

