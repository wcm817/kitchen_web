<template>
  <div class="home">
    <!-- 广告图 -->
    <banner></banner>
    <!-- 产品类别 -->
    <product></product>
    <!-- 关于我们视频 -->
    <about></about>
    <!-- 证书 -->
    <authorize></authorize>
  </div>
</template>

<script>
import Banner from './home/banner.vue';
import Product from './home/product.vue';
import About from './home/about.vue';
import Authorize from './home/authorize.vue';
export default {
  name: 'Home',
  components: {
    Banner,
    Product,
    About,
    Authorize
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
