<template>
  <carousel v-bind="settings" :wrap-around="true" :autoplay="2000">
    <Slide v-for="(slide, i) in banners" :key="i">
      <div class="carousel__item">
        <img :src="slide.image" />
      </div>      
    </slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import $ from 'jquery';
import { mapState } from 'vuex';

import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data() {
    return {
    }
  },   
  mounted () {
    //this.asNavFor1.push(this.$refs.thumbnails)
    //this.asNavFor2.push(this.$refs.main)
  },
  computed: {
    ...mapState('banner', {
        banners: state => state.mainBanners
    })
  },
  created() {
    this.$store.dispatch('banner/setMainBanners').then(() => {
      $(this.$refs.slick).slick1;
    });
  }
}
</script>

<!-- 
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
</style> -->