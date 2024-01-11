<template>
  <div class="header">
    <h1>Kitchen</h1>

    <div class="nav" v-if="!isMobile">
      <ul class="menu">
        <li
          v-for="(item, i) in navList"
          :key="i"
          :class="currentRouteName === item.routeName ? 'active' : ''"
        >
          <router-link :to="{ path: item.path }">{{ item.name }}</router-link>
        </li>
      </ul>
      <div class="tel">
        <span class="iconfont el-icon-phone"></span>
        <span>157xxxx0000</span>
      </div>
      <div class="lang-box">
        <span class="lang-babel">{{ langLabel }}</span>
        <div class="lang-list">
          <div
            class="lang-item"
            v-for="item in langList"
            :key="item.value"
            @click="hanlderChangeLang(item)"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-nav" v-else>
      <span class="iconfont el-icon-s-unfold" @click="showDrawer = true"></span>
      <mobile-drawer
        :show-drawer="showDrawer"
        :nav-list="navList"
        :lang-label="langLabel"
        @handleClose="showDrawer = false"
        @hanldeChangeLang="hanlderChangeLang"
      ></mobile-drawer>
    </div>
  </div>
</template>

<script>
import MobileDrawer from './header/mobileDrawer.vue';
import { mapState, mapMutations } from 'vuex';
import { isMediaMobile } from '@/utils/mobile.js';
export default {
  name: 'Header',
  components: {
    MobileDrawer
  },
  data () {
    return {
      showDrawer: false,
      langList: [
        {
          label: '中文',
          value: 'cn'
        },
        {
          label: 'English',
          value: 'en'
        }
      ]
    }
  },
  computed: {
    ...mapState(['lang', 'isMobile']),
    langLabel () {
      return this.langList.find((item) => item.value === this.lang).label || '中文'
    },
    navList () {
      return [
        {
          routeName: 'home',
          name: this.$t('home.home'),
          path: '/'
        },
        {
          routeName: 'products',
          name: this.$t('home.products'),
          path: '/products',
        },
        {
          routeName: 'videos',
          name: this.$t('home.videos'),
          path: '/videos'
        },
        {
          routeName: 'news',
          name: this.$t('home.news'),
          path: '/news'
        },
        {
          routeName: 'contact',
          name: this.$t('home.contact'),
          path: '/contact'
        },
      ]
    },
    currentRouteName () {
      return this.$route.name;
    }
  },
  created () { },
  mounted () {
    this.setIsMobile(isMediaMobile());
  },
  methods: {
    ...mapMutations(['setLang', 'setIsMobile']),
    hanlderChangeLang (item) {
      this.$i18n.locale = item.value;
      sessionStorage.setItem('lang', item.value);
      this.setLang(item.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100vw;
  padding: 0 5vw;
  height: 1.33rem;
  box-sizing: border-box;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  h1 {
    height: 1.33rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.64rem;
  }
  .nav {
    display: flex;
    align-items: center;
    height: 100%;
    .menu {
      display: flex;
      height: 100%;
      li {
        flex-shrink: 0;
        margin: 0 0.27rem;
        font-weight: 600;
        a {
          display: flex;
          align-items: center;
          height: 100%;
          padding: 0 0.27rem;
        }
        &:hover,
        &.active {
          position: relative;
          a {
            color: $main-color;
          }
          &::after {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 0.11rem;
            background-color: $main-color;
          }
        }
      }
    }
    .tel {
      margin: 0 5vw;
      display: flex;
      align-items: center;
    }
    .lang-box {
      position: relative;
      width: 80px;
      height: 28px;
      box-sizing: border-box;
      border: 2px solid #ddd;
      border-radius: 4px;
      .lang-babel {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #999;
      }
      .lang-list {
        display: none;
        position: absolute;
        top: 27px;
        left: 0;
        width: 100%;
        background-color: $main-color-1;
        padding: 4px 0;
        .lang-item {
          padding: 4px 10px;
          text-align: center;
          cursor: pointer;
          color: #fff;
          &:hover {
            background-color: $main-color;
          }
        }
      }
      &:hover {
        border-color: $main-color;
        .lang-list {
          display: block;
        }
      }
    }
  }
  .mobile-nav {
    height: 1.33rem;
    display: flex;
    align-items: center;
    .iconfont {
      font-size: 0.64rem;
    }
  }
}
</style>
