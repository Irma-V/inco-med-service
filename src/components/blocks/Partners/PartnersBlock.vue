<template>

  <section>
    <div class="content">
      <div class="partners-block">
        <TitleName :titleName="titleName"></TitleName>

        <agile :slidesToShow="6" :autoplay="true" :navButtons="false" class="partners__wrapper hidden">
          <div class="partner__logo">
            <img src="~@/assets/img/logo/inco-med.png" alt="">
          </div>

          <div class="partner__logo">
            <img src="~@/assets/img/logo/healthy_child_logo.png" alt="">
          </div>

          <div class="partner__logo">
            <img src="~@/assets/img/logo/puls_clinic_logo.png" alt="">
          </div>

          <div class="partner__logo">
            <img src="~@/assets/img/logo/eucalipt_logo.png" alt="">
          </div>

          <div class="partner__logo">
            <img src="~@/assets/img/logo/regional_clinic_logo.png" alt="">
          </div>

          <div class="partner__logo">
            <img src="~@/assets/img/logo/med-invest_logo.png" alt="">
          </div>

        </agile>

      </div>
    </div>
  </section>

</template>

<script>
import { VueAgile } from 'vue-agile'
import TitleName from "@/components/blocks/functionalComponents/TitleName"

export default {
  name: "PartnersBlock",
  components: {
    agile: VueAgile,
    TitleName,

  },
  data() {
    return {
      titleName: 'Наши партнёры'
    }
  },

};
</script>
