<template>
  <div class="about w">
    <block-title :title="$t('home.aboutUs')"></block-title>
    <el-row class="content">
      <el-col :xs="24" :sm="12">
        <img
          style="max-width: 440px"
          class="left-img"
          src="@/assets/test.jpg"
          alt=""
        />
      </el-col>
      <el-col :xs="24" :sm="12" class="video-infos">
        <div class="title">
          <router-link to="/about"
            >GUANGZHOU HONGLING ELECTRIC HEATING EQUIPMENT CO.,LTD.</router-link
          >
        </div>
        <div class="p">
          Guangzhou Hongling Electric Heating Equipment Co., Ltd.
          <div>
            Established in 1979, Guangzhou Hongling began to manufacture baking
            equipment of Hongling brand in 1979, with more than 40 years of
            technology in manufacturing and production.Have over 260 employees
            and a workshop area of 20000 square meters, with strong OEM / ODM
            capabilities. We have formed an integrated management system of
            product development, design, manufacturing and selling, which has
            been in continued improvement. We have always been adhering to the
            production and service principle of quality first and customer
            supreme. We have established a research and development team
            consisting of such professional personnel as senior engineers,
            engineers, and technicians.
          </div>
        </div>
        <div class="video-section">
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
              >
                <div class="img-box">
                  <img :src="item.imgSrc" />
                  <span></span>
                </div>
                <h4>{{ item.title }}</h4>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import BlockTitle from '@/components/blockTitle.vue';
import Swiper from 'swiper';
import { mapState } from 'vuex';

export default {
  components: {
    BlockTitle,
  },
  data () {
    return {
      list: [
        {
          imgSrc: require('@/assets/home/about/1.jpg'),
          path: '/',
          title: '1111-60L / 80L Planetary Mixer '
        },
        {
          imgSrc: require('@/assets/home/about/2.jpg'),
          path: '/',
          title: '2222-Hot Sale Baking Equipment Pizza Electric Deck Oven'
        },
        {
          imgSrc: require('@/assets/home/about/1.jpg'),
          path: '/',
          title: '333-60L / 80L Planetary Mixer '
        },
        {
          imgSrc: require('@/assets/home/about/2.jpg'),
          path: '/',
          title: '444-Hot Sale Baking Equipment Pizza Electric Deck Oven'
        },
        {
          imgSrc: require('@/assets/home/about/1.jpg'),
          path: '/',
          title: '555-60L / 80L Planetary Mixer '
        },
        {
          imgSrc: require('@/assets/home/about/2.jpg'),
          path: '/',
          title: '666-Hot Sale Baking Equipment Pizza Electric Deck Oven'
        },
        {
          imgSrc: require('@/assets/home/about/2.jpg'),
          path: '/',
          title: '777-Hot Sale Baking Equipment Pizza Electric Deck Oven'
        }
      ],
      swiper: null
    };
  },
  computed: {
    ...mapState(['isMobile']),
  },
  mounted () {
    this.$nextTick(() => {
      // swiper实例化
      this.swiper = new Swiper(".swiper-container", {
        loop: true,
        keyboard: true,
        autoHeight: true,
        // 屏幕分隔
        breakpoints: {
          320: {  //当屏幕宽度大于等于320
            slidesPerView: 1,
            spaceBetween: 0
          },
          768: {  //当屏幕宽度大于等于768 
            slidesPerView: 2,
            spaceBetween: 16
          },
          1280: {  //当屏幕宽度大于等于1280
            slidesPerView: 2,
            spaceBetween: 16
          }
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    })
  },
  methods: {
    hanldePre () {
      this.swiper.slidePrev();
    },
    hanldeNext () {
      this.swiper.slideNext();
    }
  }
};
</script>
<style lang="scss" scoped>
.about {
  padding: 0 0.267rem;

  .content {
    .left-img {
      width: 100%;
      display: block;
    }

    .el-col {
      padding: 0 0.213rem;
      margin-bottom: 0.267rem;
    }

    .video-infos {
      .title {
        font-size: 0.373rem;
        font-weight: 600;
        padding-bottom: 0.267rem;
      }

      .p {
        font-size: 0.32rem;
        line-height: 0.533rem;
        max-height: 5.333rem;
        margin-bottom: 0.267rem;
        overflow: hidden;

        > div {
          text-indent: 2em;
        }
      }

      .video-section {
        position: relative;
        .arrow {
          display: none;
          width: calc(100% + 0.8rem);
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 99;
          justify-content: space-between;
          transform: translate(-50%, -50%);
          span {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 0.8rem;
            height: 0.64rem;
            cursor: pointer;
            transition: 0.3s;
            background-color: #fff;
            border: 1px solid #ddd;
          }
        }
        &:hover {
          .arrow {
            display: flex;
          }
        }
        .swiper-slide {
          .img-box {
            width: 100%;
            height: 4.16rem;
            position: relative;
            overflow: hidden;
            img {
              width: 100%;
              transition: all 1s;
            }
            span {
              position: absolute;
              left: 50%;
              top: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              transform: translate(-50%, -50%);
              width: 1.07rem;
              height: 1.07rem;
              background-color: $main-color;
              border-radius: 50%;
              &::after {
                display: block;
                content: '';
                border: 0.16rem solid transparent;
                border-left: 0.21rem solid #fff;
                margin-left: 0.21rem;
              }
            }
          }

          h4 {
            padding: 0.27rem 0;
            height: 1.6rem;
            @include moreEllipsis(2);
          }
          &:hover {
            @media screen and (min-width: 751px) {
              .img-box {
                img {
                  transform: scale(1.2);
                }
              }
            }

            h4 {
              color: $main-color;
            }
          }
        }
      }
    }
  }
}
</style>
