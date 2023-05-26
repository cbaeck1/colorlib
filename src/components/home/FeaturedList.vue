<template>
  <section class="newproduct bgwhite p-t-45 p-b-105">
    <div class="container">
      <div class="sec-title p-b-10">
        <h3 class="m-text5 t-center">
          Featured Products
        </h3>
      </div>
      
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="(product, i) in products" :key="i">
          <div class="carousel__item">
            <Product :product="product" />
          </div> 
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import Product from '@/components/Product.vue';

import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'FeaturedList',
  computed: {
    ...mapState('product', {
      products: state => state.featuredProducts
    })
  },
  methods: {

  },
  created() {
    this.$store.dispatch('product/setFeaturedProducts').then(() => {

    });
  },
  components: {
    Product,
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: 'start',
      },
    },
  }),
}
</script>


<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>