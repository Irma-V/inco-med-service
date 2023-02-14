<template>
  <div class="slider-block01">
    <div class="slider-block_wrapper">
      <div class="slider-button">
        <button @click="buttonPrev()" ref="btnPrev" class="btn-prev white with_shadow" :disabled="prevCan">
          &laquo;
        </button>
      </div>
      <div ref="container" class="slider-container" id="container">
        <div ref="track" class="slider-track">
          <slot></slot>
        </div>
      </div>
      <div class="slider-button">
        <button @click="buttonNext()" ref="btnNext" class="btn-next white with_shadow" :disabled="nextCan">
          &raquo;
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "v-Slider",

  props: {
  },
  data() {
    return {
      slides: [],
      position: 0,
      slidesToScroll: 2,
      timer: 5000,
      containerWidth: 1
    };
  },

  computed: {
    nextCan() {
      // console.log(this.itemsCount, this.itemWidth, this.containerWidth);
      if ((this.itemsCount * this.itemWidth) <= this.containerWidth) {
        return true
      }
      return false
    },
    prevCan() {
      if ((this.itemsCount * this.itemWidth) <= this.containerWidth) {
        return true
      }
      return false
    },
    itemsCount() {
      return this.slides.length
    },

    slidesToShow() {
      return Math.ceil(Math.abs(this.containerWidth / 210))
      // return Math.ceil(Math.abs(this.$refs.container.clientWidth / 206))
      // return Math.abs(this.containerWidth / 206)

    },

    itemWidth() {
      // return Math.floor((this.$refs.container.clientWidth / this.slidesToShow) + 10)
      // return (this.$refs.container.clientWidth / this.slidesToShow) + 10

      // console.log('containerWidth  ' + this.containerWidth);
      // console.log('slidesToShow  ' + this.slidesToShow);
      // console.log(this.containerWidth / this.slidesToShow);

      return (this.containerWidth / this.slidesToShow) +'10%'

    },

    movePosition() {
      return (this.slidesToScroll * this.itemWidth);
    },
  },

  mounted() {

    //превращаем коллекцию дочерних элементов html в массив
    setTimeout(() => {
      this.slides = Array.from(this.$refs.track.children)
      this.slides.forEach((item) => {
        item.style.minWidth = this.itemWidth + 'px'
      });
    }, 1)
    /****************************  this.autoSlider() */
    const el = document.getElementById('container')

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.containerWidth = entry.target.clientWidth
      }
    })
    resizeObserver.observe(el)
  },

  // created() {
  //   const asdasd = document.getElementById('container')
  //   this.slides = Array.from(asdasd.children)
  //   this.slides.forEach((item) => {
  //     console.log(item , 1);
  //     item.style.minWidth = this.itemWidth + 'px'
  //   });
  // },

  methods: {

    // itemsCount() {
    //   // console.log(this.$refs.track);
    //   return this.slides.length
    // },

    setPosition() {
      console.log('set position ' + this.position);
      this.$refs.track.style.transform = `translateX(${this.position}px)`
    },

    checkBtns() {
      if (this.position === 0) {
        this.$refs.btnPrev.disabled
      }

      // btnPrev.prop ('enabled', position > 0);

      if (this.position <= (this.itemsCount - this.slidesToShow) * this.itemWidth * (-1)) {
        this.$refs.btnNext.disabled
      }
      // this.$refs.btnNext.disabled = this.position <= (this.itemsCount - this.slidesToShow) * this.itemWidth
    },
    buttonPrev() {

      this.checkBtns();
      const itemLeft = Math.abs(this.position) / this.itemWidth;

      console.log('position до выч ' + this.position);
      this.position += itemLeft >= this.slidesToScroll ? this.movePosition : itemLeft * this.itemWidth;
      console.log('position после выч ' + this.position);


      this.setPosition();

    },

    buttonNext() {
      this.checkBtns();
      // console.log('itemsCount ' + this.itemsCount);
      // console.log('Math.abs(this.position) ' + Math.abs(this.position));


      const itemLeft = this.itemsCount - (Math.abs(this.position) + this.slidesToShow * this.itemWidth) / this.itemWidth;


      console.log(itemLeft);
      console.log('position до выч ' + this.position);
      this.position -= itemLeft >= this.slidesToScroll ? this.movePosition : itemLeft * this.itemWidth;
      console.log('position после выч ' + this.position);


      this.setPosition();
    },

    autoNext() {
      setInterval(this.buttonNext, this.timer)
    },

    autoSlider() {
      // console.log (Math.floor((this.itemsCount - this.slidesToShow) * this.itemWidth * (-1)));
      this.slidesToScroll = 1;
      this.buttonNext();
      this.autoNext();
    },


  }
};
</script>
