<template >
  <div class="home">
    <!-- <SlideBanner /> -->
    <!-- <VueAgile /> -->
    <!-- <Example /> -->
    <Carousel />
    <BestProductList />
    <!-- <FeaturedProductList /> -->
    <FeaturedList />

  </div>
</template>

<script>
// import SlideBanner from '@/components/home/SlideBanner.vue';
// import VueAgile from '@/components/home/VueAgile.vue';
// import Example from '@/components/home/Example4.vue';
import Carousel from '@/components/home/Gallery.vue';
import BestProductList from '@/components/home/BestProductList.vue';
// import FeaturedProductList from '@/components/home/FeaturedProductList.vue';
import FeaturedList from '@/components/home/FeaturedList.vue';

export default {
  name: 'home',
  components: {
    // SlideBanner,
    // VueAgile,
    // Example, 
    Carousel, 
    BestProductList,
    // FeaturedProductList,
    FeaturedList,
  }
}
</script>

<!-- <style lang="scss" type="text/scss">
  @import '@/scss/main.scss';
</style> -->