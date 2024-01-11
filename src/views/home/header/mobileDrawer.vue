<template>
  <el-drawer
    direction="rtl"
    size="40%"
    :withHeader="false"
    :modal="false"
    :visible.sync="drawer"
    :before-close="handleClose"
  >
    <div class="el-icon-close" @click="handleClose"></div>
    <ul class="mobile-nav">
      <li
        v-for="item in navList"
        :key="item.routeName"
        :class="currentRouteName === item.routeName ? 'active' : ''"
      >
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
      <li class="li-lang">
        <span class="lang-c">{{ $t('home.changeLang') }}</span>
        <div class="lang-box" v-click-out="hideLangListHandler">
          <span class="lang-babel" @click="showLangList = true">{{
            langLabel
          }}</span>
          <div class="lang-list" v-if="showLangList">
            <div
              class="lang-item"
              :class="item.label === langLabel ? 'active' : ''"
              v-for="item in langList"
              :key="item.value"
              @click="hanlderChangeLang(item)"
            >
              {{ item.label }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </el-drawer>
</template>

<script>
export default {
  name: 'MobileDrawer',
  props: {
    showDrawer: {
      type: Boolean,
      default: false
    },
    navList: {
      type: Array,
      default: () => []
    },
    langLabel: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      drawer: true,
      langList: [
        {
          label: '中文',
          value: 'cn'
        },
        {
          label: 'English',
          value: 'en'
        }
      ],
      showLangList: false
    }
  },
  computed: {
    currentRouteName () {
      return this.$route.name;
    }
  },
  watch: {
    showDrawer: {
      handler (flag) {
        this.drawer = flag;
      },
      immediate: true
    },
  },
  mounted () {
  },
  methods: {
    handleClose () {
      this.$emit('handleClose');
    },
    hanlderChangeLang (item) {
      this.$emit('hanldeChangeLang', item);
      this.showLangList = false;
    },
    hideLangListHandler () {
      this.showLangList = false;
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.el-drawer__header {
  padding: 0.267rem 0.267rem 0;
}
/deep/.el-drawer__container {
  background-color: rgba(0, 0, 0, 0.2);
}
/deep/.el-drawer__wrapper {
  background-color: rgba(255, 255, 255, 0.2);
}
/deep/.el-drawer {
  background-color: #3f73a6;
  .el-drawer__body {
    position: relative;
    .el-icon-close {
      position: absolute;
      right: 0.267rem;
      top: 0.267rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      width: 0.533rem;
      height: 0.533rem;
      cursor: pointer;
      font-size: 0.533rem;
    }
  }
}
</style>
<style lang="scss" scoped>
.mobile-nav {
  padding: 0.8rem 0;
  li {
    height: 1.067rem;
    line-height: 1.067rem;

    a {
      display: block;
      height: 100%;
      padding: 0 0.43rem;
      color: #fff;
    }
    &.active {
      background-color: rgba(255, 255, 255, 0.2);
    }
    &.li-lang {
      display: flex;
      align-items: center;
      .lang-c {
        margin-left: 0.43rem;
        color: #fff;
      }
      .lang-box {
        position: relative;
        width: 1.6rem;
        height: 0.75rem;
        line-height: 0.75rem;
        margin-left: 0.27rem;
        border-radius: 0.11rem;
        text-align: center;
        border: 1px solid #ccc;
        color: #ccc;
        .lang-list {
          width: 100%;
          position: absolute;
          left: 0;
          top: 0.75rem;
          background-color: rgba(0, 0, 0, 0.2);
          .active {
            background-color: rgba(255, 255, 255, 0.2);
          }
        }
      }
    }
  }
}
</style>
