<template>
  <v-header />

  <div class="container">
    <div class="main">

      <!-- <section>
        <div class="content">
         
        </div>
      </section> -->

      <router-view></router-view>
    </div>
  </div>

  <vFooter />
</template>

<script>

import vHeader from "@/components/blocks/functionalComponents/HeaderComponent/v-Header";
import vFooter from "@/components/blocks/functionalComponents/FooterComponent/v-Footer";
// import TitleBlock from "@/components/blocks/TitleBlock/TitleBlock";

export default {
  name: "App",

  components: {
    vHeader,
    vFooter,
    // TitleBlock,
  },


};
</script>

<style scoped lang="scss"> 
// .main {
//   background-color: #DEF;
// }
</style>