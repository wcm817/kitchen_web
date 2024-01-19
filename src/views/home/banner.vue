<template>
  <div class="banner">
    <div class="arrow">
      <span class="el-icon-arrow-left" @click="hanldePre"></span>
      <span class="el-icon-arrow-right" @click="hanldeNext"></span>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in 3" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: 'Banner',
  components: {},
  data () {
    return {
      swiper: null,
    };
  },
  computed: {
  },
  created () { },
  mounted () {
    this.$nextTick(() => {
      // swiper实例化
      this.swiper = new Swiper(".banner .swiper-container", {
        loop: true,
        autoHeight: true,
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: '.banner .swiper-pagination',
          clickable: true
        },
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
  }
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  .arrow {
    @media screen and (max-width: 750px) {
      display: none;
    }
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 99;
    transform: translate(-50%, -50%);
    span {
      position: absolute;
      transform: translate(0, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.01rem;
      height: 1.01rem;
      border-radius: 50%;
      cursor: pointer;
      transition: 0.3s;
      background-color: rgba(0, 0, 0, 0.1);
      border: 1px solid #ddd;
      color: #ddd;
      &:first-child {
        left: calc(5vw + 20px);
      }
      &:last-child {
        right: calc(5vw + 20px);
      }
    }
  }
  .swiper-wrapper {
    .swiper-slide {
      height: 8rem;
      line-height: 8rem;
      text-align: center;
    }
    .swiper-slide:nth-child(2n) {
      background-color: $main-color;
    }

    .swiper-slide:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
  /deep/.swiper-pagination {
    .swiper-pagination-bullet {
      border-radius: 0;
      width: 30px;
      height: 6px;
    }
    .swiper-pagination-bullet-active {
      background-color: #1c4976;
    }
  }
}
</style>
