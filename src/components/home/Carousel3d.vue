<template>
  <section class="home-slide1">
      <!-- -->
      <carousel-3d>
        <slide v-for="(banner, i) in banners" :index="i" :key="i">
            <template v-slot="{ index, isCurrent, leftIndex, rightIndex }">
                <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" 
                :src="`$(banner.image)`">
            </template>
        </slide>
      </carousel-3d>
  </section>
</template>

<script>
  import $ from 'jquery';
  import bannerApi from '@/api/banner';
  import { Carousel3d, Slide } from 'vue-carousel-3d';


  export default {
    data () {
        return {
          banners: []
        }
    },
    created() {
      // 방법1 : banners에 할당
      bannerApi.getMainSlideBanners().then(response => {
        // 새로운 객체를 만들어 값을 할당하는 방식으로 구현
        this.banners = [].concat(response.data);

        // created 종료한 다음에 실행
        this.$nextTick(() => {
          $(this.$refs.slick).slick1;
        }).catch(error => console.log("slick", error))            
      })
    },
    components: {
      Carousel3d,
      Slide
    }

  }
</script>