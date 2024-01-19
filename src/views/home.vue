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
    <!-- 留言 -->
    <comment></comment>
    <!-- 联系我们 -->
    <contact></contact>
  </div>
</template>

<script>
import Banner from './home/banner.vue';
import Product from './home/product.vue';
import About from './home/about.vue';
import Authorize from './home/authorize.vue';
import Comment from './home/comment.vue';
import Contact from './home/contact.vue';
export default {
  name: 'Home',
  components: {
    Banner,
    Product,
    About,
    Authorize,
    Comment,
    Contact
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
