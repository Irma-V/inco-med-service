<template>
  <slot name="slide"></slot>
</template>

<script>

export default {
  name: "v-SliderItem",
  props: [
    'item'
  ],
  data() {
    return {
      // minWidth: 0
    }
  },
};
</script>
