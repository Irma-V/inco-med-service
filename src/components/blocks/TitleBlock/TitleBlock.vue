<template>
  <section>
    <div class="content">
      <div class="title-block">
        <div class="title-block__wrapper flex flex-col-reverse sm:flex-row sm:justify-between">

          <div class="title-content flex flex-col sm:justify-between sm:basis-[51%] lg:justify-around lg:basis-2/5">

            <div class="title__textblock font-bold basis-1/2 text-[1.45rem] pb-5 sm:p-0 md:text-3xl lg:text-5xl lg:w-1/2 lg:leading-[4rem]">{{ title }}</div>

            <div class="title__description md:w-3/4  md:text-base lg:text-xl pb-5 sm:p-0">{{ description }}</div>
          </div>

          <div class="title-img">
            <slot name="image"></slot>
          </div>

        </div>
      </div>
    </div>
  </section>


</template>

<script>
export default {
  name: "TitleBlock",
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    image: {
      type: String
    }
  }
};
</script>
