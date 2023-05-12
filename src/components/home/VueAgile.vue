<template lang="pug">
section.section.VueAgile
  div.container
    div.row
      div.col-xs-12

    div.row
      div.col-xs-12
        agile
          div.slide(v-for="(banner, i) in banners", :key="i", :class="`slide--${i}`")
            img(:src="banner.image")
            
          template(#prevButton)
            i.fas.fa-chevron-left

          template(#nextButton)
            i.fas.fa-chevron-right

</template>

<script>
  import $ from 'jquery';
  import bannerApi from '@/api/banner';
  import { VueAgile } from 'vue-agile';

  export default {
    name: VueAgile, 
    data () {
        return {
          banners: [],

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
    }
  }
</script>

<style lang="sass">
  .VueAgile
    .agile
      &__actions
        margin-top: 20px

      &__nav-button
        background: transparent
        border: none
        color: #ccc
        cursor: pointer
        font-size: 24px
        transition-duration: .3s

      &:hover
        color: #888

      &__dot
        margin: 0 10px

        button
          background-color: #eee
          border: none
          border-radius: 50%
          cursor: pointer
          display: block
          height: 10px
          font-size: 0
          line-height: 0
          margin: 0
          padding: 0
          transition-duration: .3s
          width: 10px

      &--current,
      &:hover
        button
          background-color: #888

// Slides styles
.slide
  height: 400px
  align-items: center
  color: #fff
  display: flex
  justify-content: center
  padding: 40px

  h3
    font-size: 32px
    font-weight: 300

// Slides backgrounds
$colors: #f1c40f #e67e22 #e74c3c #9b59b6 #3498db #2ecc71

@for $i from 1 through length($colors)
  $color: nth($colors, $i)

  .slide--#{$i}
    background-color: $color
</style>
