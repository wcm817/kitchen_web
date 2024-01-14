<template>
  <div class="product w">
    <block-title :title="$t('home.hotProduct')"></block-title>
    <div class="catogary">
      <el-row>
        <el-col
          :xs="12"
          :sm="12"
          :md="6"
          v-for="(item, i) in catagoryListCopy"
          :key="i"
        >
          <div class="grid-content">
            <div class="icon">
              <span :class="`iconfont ${item.iconName}`"></span>
            </div>
            <div class="title">{{ item.name }}</div>
            <div class="info">{{ item.info }}</div>
            <div class="product-list">
              <div
                class="item"
                v-for="(subItem, subI) in item.products"
                :key="`${i}${subI}`"
              >
                <router-link to="/">{{ subItem.name }}</router-link>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="more hidden-md-and-up">
        <span
          :class="`iconfont icon-more ${
            catagoryListCopy.length > 4 ? 'up' : 'down'
          }`"
          @click="handleShowMorePro"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import BlockTitle from '@/components/blockTitle.vue';
import { mapState } from 'vuex';
export default {
  name: 'Product',
  components: {
    BlockTitle,
  },
  data () {
    return {
      catagoryListCopy: [],
    };
  },
  computed: {
    ...mapState(['isMobile']),
    catagoryList () {
      return [
        {
          name: 'Restautant Equipment',
          iconName: 'icon-kitchencabinetinterior',
          info: 'Shop everything from ice makers to ovens.',
          products: [
            { name: 'Commerccial REfrigertors', path: '/' },
            { name: 'Commerccial REfrigertors', path: '/' },
            { name: 'Commerccial REfrigertors', path: '/' },
            { name: 'Commerccial REfrigertors', path: '/' },
          ]
        },
        {
          name: 'Restautant Equipment',
          iconName: 'icon-hongbeigongju',
          info: 'Shop everything from ice makers to ovens.',
          products: [
            { name: 'Commerccial REfrigertors', path: '/' },
            { name: 'Commerccial REfrigertors', path: '/' }
          ]
        },
        {
          name: 'Restautant Equipment',
          iconName: 'icon--coffee-maker',
          info: 'Shop everything from ice makers to ovens.',
          products: [
            { name: 'Commerccial REfrigertors', path: '/' },
            { name: 'Commerccial REfrigertors', path: '/' },
            { name: 'Commerccial REfrigertors', path: '/' }
          ]
        },
        {
          name: 'Restautant Equipment',
          iconName: 'icon-restaurant',
          info: 'Shop everything from ice makers to ovens.',
          products: [
            { name: 'Commerccial REfrigertors', path: '/' },
            { name: 'Commerccial REfrigertors', path: '/' },
            { name: 'Commerccial REfrigertors', path: '/' }
          ]
        },
        {
          name: 'Restautant Equipment',
          iconName: 'icon-uniE768',
          info: 'Shop everything from ice makers to ovens.',
          products: [
            { name: 'Commerccial REfrigertors', path: '/' },
            { name: 'Commerccial REfrigertors', path: '/' },
            { name: 'Commerccial REfrigertors', path: '/' }
          ]
        },
        {
          name: 'Restautant Equipment',
          iconName: 'icon-xiwanji-xian',
          info: 'Shop everything from ice makers to ovens.',
          products: [
            { name: 'Commerccial REfrigertors', path: '/' },
            { name: 'Commerccial REfrigertors', path: '/' },
            { name: 'Commerccial REfrigertors', path: '/' }
          ]
        },
        {
          name: 'Restautant Equipment',
          iconName: 'icon-Restaurant',
          info: 'Shop everything from ice makers to ovens.',
          products: [
            { name: 'Commerccial REfrigertors', path: '/' },
            { name: 'Commerccial REfrigertors', path: '/' },
            { name: 'Commerccial REfrigertors', path: '/' }
          ]
        },
        {
          name: 'Restautant Equipment',
          iconName: 'icon-lajitong',
          info: 'Shop everything from ice makers to ovens.',
          products: [
            { name: 'Commerccial REfrigertors', path: '/' },
            { name: 'Commerccial REfrigertors', path: '/' },
            { name: 'Commerccial REfrigertors', path: '/' }
          ]
        }
      ]
    },
  },
  watch: {
    catagoryList: {
      handler (val) {
        const list = JSON.parse(JSON.stringify(val));
        this.catagoryListCopy = this.isMobile ? list.slice(0, 4) : list;
      },
      deep: true,
    }
  },
  created () { },
  mounted () {
    const list = JSON.parse(JSON.stringify(this.catagoryList));
    this.catagoryListCopy = this.isMobile ? list.slice(0, 4) : list;
  },
  methods: {
    handleShowMorePro () {
      const list = JSON.parse(JSON.stringify(this.catagoryList));
      this.catagoryListCopy = this.catagoryListCopy.length > 4 ? list.slice(0, 4) : list;
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  padding: 0 0.267rem;
  .catogary {
    .el-col {
      margin-bottom: 0.27rem;
      padding: 0 0.213rem;
      .grid-content {
        display: flex;
        padding: 0.27rem;
        height: 5.87rem;
        box-sizing: border-box;
        flex-direction: column;
        align-items: center;
        border: 1px solid #ddd;
        cursor: pointer;
        &:hover {
          border-color: $main-color-1;
          .title {
            color: $main-color-1;
          }
          .icon {
            border-color: $main-color-1;
          }
        }
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 1.6rem;
          height: 1.6rem;
          border: 2px solid $main-color;
          border-radius: 50%;
          margin-bottom: 0.27rem;
          .iconfont {
            font-size: 0.8rem;
            font-weight: 600;
            color: #666;
          }
        }
        .title {
          font-size: 0.37rem;
          font-weight: 600;
          padding-bottom: 0.37rem;
          @include ellipsis;
        }
        .info {
          width: 100%;
          font-size: 0.32rem;
          color: #666;
          @include ellipsis;
        }
        .product-list {
          width: 100%;
          .item {
            padding-top: 0.16rem;
            font-size: 0.32rem;
            a {
              color: $main-color;
            }
          }
        }
      }
    }
    .more {
      display: flex;
      justify-content: center;
      padding-bottom: 0.27rem;
      .iconfont {
        display: inline-block;
        cursor: pointer;
        color: #999;
        &.down {
          transform: rotate(90deg);
        }
        &.up {
          transform: rotate(-90deg);
        }
        &:hover {
          color: $main-color;
        }
      }
    }
  }
}
</style>
