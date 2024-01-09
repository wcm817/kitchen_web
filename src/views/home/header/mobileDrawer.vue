<template>
  <el-drawer
    title="我是标题"
    direction="rtl"
    :visible.sync="drawer"
    :before-close="handleClose"
  >
    <span>我来啦!</span>
  </el-drawer>
</template>

<script>
export default {
  name: 'MobileDrawer',
  props: {
    showDrawer: {
      type: Boolean,
      default: false
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
</style>
