<template>
  <div class="home">
    <!-- 广告图 -->
    <banner></banner>
    <!-- 产品类别 -->
    <product></product>
  </div>
</template>

<script>
import Banner from './home/banner.vue';
import Product from './home/product.vue';
export default {
  name: 'Home',
  components: {
    Banner,
    Product
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
