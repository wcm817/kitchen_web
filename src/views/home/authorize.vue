<template>
  <div class="authorize w">
    <div class="arrow">
      <span class="el-icon-arrow-left" @click="hanldePre"></span>
      <span class="el-icon-arrow-right" @click="hanldeNext"></span>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in list"
          :key="index"
          @click="hanleScale(item)"
        >
          <img :src="item.imgSrc" />
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      :fullscreen="isMobile"
    >
      <div class="dialog-content">
        <img :src="currentImgSrc" alt="" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Swiper from 'swiper';
import { mapState } from 'vuex';
export default {
  name: 'Authorize',
  components: {},
  data () {
    return {
      list: [
        { imgSrc: require('@/assets/home/authorize/1.jpg') },
        { imgSrc: require('@/assets/home/authorize/2.jpg') },
        { imgSrc: require('@/assets/home/authorize/1.jpg') },
        { imgSrc: require('@/assets/home/authorize/2.jpg') },
        { imgSrc: require('@/assets/home/authorize/1.jpg') },
        { imgSrc: require('@/assets/home/authorize/2.jpg') },
        { imgSrc: require('@/assets/home/authorize/1.jpg') },
        { imgSrc: require('@/assets/home/authorize/2.jpg') },
        { imgSrc: require('@/assets/home/authorize/1.jpg') },
        { imgSrc: require('@/assets/home/authorize/2.jpg') },
      ],
      swiper: null,
      dialogVisible: false,
      currentImgSrc: ''
    };
  },
  computed: {
    ...mapState(['isMobile'])
  },
  created () { },
  mounted () {
    this.$nextTick(() => {
      // swiper实例化
      this.swiper = new Swiper(".authorize .swiper-container", {
        loop: true,
        keyboard: true,
        autoHeight: true,
        autoplay: {
          delay: 6000
        },
        // 屏幕分隔
        breakpoints: {
          320: {  //当屏幕宽度大于等于320
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {  //当屏幕宽度大于等于768 
            slidesPerView: 4,
            spaceBetween: 16
          },
          1280: {  //当屏幕宽度大于等于1280
            slidesPerView: 6,
            spaceBetween: 16
          }
        }
      });
    });
  },
  methods: {
    hanldePre () {
      this.swiper.slidePrev();
    },
    hanldeNext () {
      this.swiper.slideNext();
    },
    hanleScale (item) {
      this.dialogVisible = true;
      this.currentImgSrc = item.imgSrc;
      console.log('item::', item)
    },
    handleClose () {
      this.dialogVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.authorize {
  padding: $pd-l;
  @media screen and (max-width: 750px) {
    padding: $pd-m;
  }
  box-sizing: border-box;
  background-color: #eee;
  position: relative;
  .arrow {
    @media screen and (max-width: 750px) {
      display: none;
    }
    width: calc(100% + 1rem);
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 99;
    transform: translate(-50%, -50%);
    span {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.01rem;
      height: 0.75rem;
      cursor: pointer;
      transition: 0.3s;
      background-color: #fff;
      border: 1px solid #ddd;
      &:first-child {
        left: 0px;
      }
      &:last-child {
        right: 0px;
      }
    }
  }
  .swiper-wrapper {
    .swiper-slide {
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }
}
</style>
<style lang="scss">
.dialog-content {
  display: flex;
  width: 100%;
  justify-content: center;
  img {
    width: 100%;
    max-width: 660px;
  }
}
</style>
 