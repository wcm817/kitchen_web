<template>
  <div class="about">
    <block-title :title="$t('home.aboutUs')"></block-title>
    <el-row class="content">
      <el-col :xs="24" :sm="12">
        <img class="left-img" src="@/assets/test.jpg" alt="">
      </el-col>
      <el-col :xs="24" :sm="12" class="video-infos">
        <div class="title">
          <router-link to="/about">GUANGZHOU HONGLING ELECTRIC HEATING EQUIPMENT CO.,LTD.</router-link>
        </div>
        <div class="p">
          Guangzhou Hongling Electric Heating Equipment Co., Ltd.
          <div>
            Established in 1979, Guangzhou Hongling began to
            manufacture baking equipment of Hongling brand in 1979, with more than 40 years of technology in manufacturing
            and production.Have over 260 employees and a workshop area of 20000 square meters, with strong OEM / ODM
            capabilities. We have formed an integrated management system of product development, design, manufacturing and
            selling, which has been in continued improvement. We have always been adhering to the production and service
            principle of quality first and customer supreme. We have established a research and development team
            consisting
            of such professional personnel as senior engineers, engineers, and technicians.
          </div>
        </div>
        <div class="video-section">
          <el-carousel trigger="click">
            <el-carousel-item v-for="(item, I) in videoList" :key="I" class="carousel-item">
              <div class="item-content" v-for="(subItem, subI) in item" :key="`${I}${subI}`"
                @click="$router.push({ path: subItem.path })">
                <div class="img-box">
                  <img :src="subItem.imgSrc" alt="">
                  <span></span>
                </div>
                <h4>{{ subItem.title }}</h4>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import BlockTitle from '@/components/blockTitle.vue';
export default {
  components: {
    BlockTitle,
  },
  data() {
    return {
      list: [
        {
          imgSrc: require('@/assets/home/about/1.jpg'),
          path: '/',
          title: '60L / 80L Planetary Mixer '
        },
        {
          imgSrc: require('@/assets/home/about/2.jpg'),
          path: '/',
          title: 'Hot Sale Baking Equipment Pizza Electric Deck Oven'
        },
        {
          imgSrc: require('@/assets/home/about/1.jpg'),
          path: '/',
          title: '60L / 80L Planetary Mixer '
        },
        {
          imgSrc: require('@/assets/home/about/2.jpg'),
          path: '/',
          title: 'Hot Sale Baking Equipment Pizza Electric Deck Oven'
        },
        {
          imgSrc: require('@/assets/home/about/1.jpg'),
          path: '/',
          title: '60L / 80L Planetary Mixer '
        },
        {
          imgSrc: require('@/assets/home/about/2.jpg'),
          path: '/',
          title: 'Hot Sale Baking Equipment Pizza Electric Deck Oven'
        }
      ]
    };
  },
  computed: {
    videoList() {
      const res = [];
      for (let i = 0; i < this.list.length; i += 2) {
        res.push(this.list.slice(i, i + 2));
      }
      console.log('res:::', res);
      return res;
    }
  }
};
</script>
<style lang="scss" scoped>
.about {
  padding: 0 0.267rem;
  ;

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

        >div {
          text-indent: 2em;
        }
      }
      /deep/.el-carousel__container{
        height: 5.333rem;
      }

      .carousel-item {
        display: flex;

        .item-content {
          width: 50%;
          box-sizing: border-box;
          padding: 0 0.213rem;
          .img-box {
            img {
              width: 100%;
              display: block;
            }
          }
        }
      }

    }
  }
}</style>
