<template>
  <Carousel id="gallery" :items-to-show="1" autoplay="5000" :wrap-around="false" v-model="currentSlide">
    <Slide v-for="(slide, i) in banners" :key="i">
      <div class="carousel__item" :style="`background-image: url(${slide.image});`">
        <!-- <img :src="slide.image" /> -->
        <div class="" >
          <transition name="fade" mode="out-in">
            <span class="">
              {{ slide.subtitle }}
            </span>
          </transition>
          <transition bounce-enter-active>
            <h2 class="slide-fade" >
              {{ slide.title }}
            </h2>
          </transition>
          <div class="" >
            <!-- Button -->
            <button class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
              <router-link :to="{name: 'shop'}">Shop Now</router-link>
            </button>
          </div>
        </div>
      </div>
    </Slide>
  </Carousel>

  <Carousel id="thumbnails" :items-to-show="4" :wrap-around="true" v-model="currentSlide" ref="carousel">
    <Slide v-for="(slide, i) in banners" :key="i">
      <div class="thumbnail__item" @click="slideTo(i)">
        <img class="thumbnail__item" :src="slide.image" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import $ from 'jquery';
import { mapState } from 'vuex';

import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'Gallery',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    currentSlide: 0,
  }),   
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
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val
    },
  },
}
</script>



<style scoped>
.carousel__item {
  min-height: 450px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.thumbnail__item {
  min-height: 50px;
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

/* transition 작동조건
조건부 렌더링 (v-if 사용)
조건부 출력 (v-show 사용)
동적 컴포넌트
컴포넌트 루트 노드 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* 애니메이션 진입 및 진출은 다른 지속 시간 및  */
/* 타이밍 기능을 사용할 수 있습니다. */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>