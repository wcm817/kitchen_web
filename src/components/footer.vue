<template>
  <div class="footer">
    <el-row class="w">
      <el-col :xs="24" :sm="12" class="one">
        <div class="logo">
          <p>MAKITA KITCHEN</p>
          <p>美汇达厨房</p>
        </div>
        <div class="title">
          What's your biggest challenge? <br />
          We're here to help.
        </div>
        <div class="text">
          We understand the design We understand the design We understand the
          design We understand the design We understand the design We understand
          the design We understand the design We understand the design
        </div>
        <div class="share">
          <a href="/" class="iconfont icon-in in"></a>
          <a href="/" class="iconfont icon-facebook facebook"></a>
          <a href="/" class="iconfont icon-tuite twitter"></a>
        </div>
      </el-col>
      <el-col :xs="24" :sm="6" class="two">
        <dl>
          <dt>Product</dt>
          <dd><router-link :to="{ path: '/' }">product1</router-link></dd>
          <dd><router-link :to="{ path: '/' }">product2</router-link></dd>
          <dd><router-link :to="{ path: '/' }">product3</router-link></dd>
          <dd><router-link :to="{ path: '/' }">product4</router-link></dd>
        </dl>
      </el-col>
      <el-col :xs="24" :sm="6" class="two">
        <dl>
          <dt>Fast entry</dt>
          <dd><router-link :to="{ path: '/' }">Home</router-link></dd>
          <dd><router-link :to="{ path: '/' }">About Us</router-link></dd>
          <dd><router-link :to="{ path: '/' }">Product</router-link></dd>
          <dd><router-link :to="{ path: '/' }">Video</router-link></dd>
          <dd><router-link :to="{ path: '/' }">News</router-link></dd>
          <dd><router-link :to="{ path: '/' }">Contact Us</router-link></dd>
        </dl>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {};
  },
  created () { },
  mounted () { },
  methods: {}
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $main-color;
  padding: 1.07rem 0;
  @media screen and (max-width: 750px) {
    padding: 1.07rem 0.27rem;
  }
  .one {
    padding-right: 1.6rem;
    @media screen and (max-width: 750px) {
      padding-right: 0;
    }
    .logo {
      color: #fff;
      font-weight: 600;
      p {
        margin: 0;
        line-height: 0.64rem;
        font-size: 0.53rem;
        &:last-child {
          font-size: 0.37rem;
        }
      }
    }
    .title {
      padding-top: 0.53rem;
      font-size: 0.48rem;
      color: #fff;
    }
    .text {
      padding: 0.53rem 0;
      color: #eee;
    }
    .share {
      a {
        display: inline-block;
        width: 0.75rem;
        height: 0.75rem;
        background-color: #fff;
        border-radius: 50%;
        font-size: 0.8rem;
        margin-right: 0.53rem;
      }
      .facebook {
        color: #1769bb;
      }
      .in {
        color: #0791d1;
      }
      .twitter {
        color: #60b5f0;
      }
    }
  }
  .two {
    dl {
      color: #fff;
      margin-left: 0.53rem;
      a {
        color: #fff;
      }
      dt {
        padding-bottom: 0.27rem;
      }
      dd {
        font-size: 0.32rem;
        line-height: 0.53rem;
      }
    }
  }
}
</style>
