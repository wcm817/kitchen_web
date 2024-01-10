<template>
  <el-drawer
    direction="rtl"
    size="60%"
    :withHeader="false"
    :modal="false"
    :visible.sync="drawer"
    :before-close="handleClose"
  >
    <div class="el-icon-close" @click="handleClose"></div>
    <ul class="mobile-nav">
      <li v-for="(item) in navList" :key="item.routeName">
        <router-link :to="item.path">{{ item.name }}</router-link>
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
    navList:{
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      drawer: true
    }
  },
  watch: {
    showDrawer: {
      handler (flag) {
        this.drawer = flag;
      },
      immediate: true
    }
  },
  created () { },
  mounted () { },
  methods: {
    handleClose () {
      this.$emit('handleClose');
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.el-drawer__header{
  padding: 0.267rem 0.267rem 0;
}
/deep/.el-drawer__container{
  background-color: rgba(0,0,0,0.2);
}
/deep/.el-drawer__wrapper{
    background-color: rgba(255,255,255,0.2);
} 
/deep/.el-drawer{
  background-color: #3f73a6;
  .el-drawer__body{
    position: relative;
    .el-icon-close{
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
.mobile-nav{
  padding: 0.8rem 0.533rem;
  li{
    height: 1.067rem;
    line-height: 1.067rem;
    a{
      display: block;
      height: 100%;
      padding: 0 0.267rem;
    }
  }
}
</style>
