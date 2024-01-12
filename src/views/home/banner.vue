<template>
  <div class="banner">
    <el-carousel :interval="6000" height="300px">
      <el-carousel-item v-for="item in 3" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  components: {},
  data () {
    return {};
  },
  computed: {
  },
  created () { },
  mounted () { },
  methods: {}
};
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 300px;
  text-align: center;
  margin: 0;
  color: #fff;
}

.el-carousel__item:nth-child(2n) {
  background-color: $main-color;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
// 指示器颜色
/deep/.el-carousel__indicators {
  .el-carousel__button {
    height: 3px;
  }
}
/deep/.el-carousel__indicators .is-active {
  .el-carousel__button {
    background-color: $main-color;
  }
}
.banner {
  margin-top: $pd-m;
  padding: 0 5%;
}
</style>
