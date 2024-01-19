<template>
  <div class="comment w">
    <div class="title">What our customers are saying</div>
    <div class="content">
      <span class="iconfont icon-douhao">
        <span class="line"></span>
      </span>
      <div class="text">
        "I've had great expreiences with my purchases at Raips.I've had great
        expreiences with my purchases at Raips.I've had great expreiences with
        my purchases at Raips.I've had great expreiences with my purchases at
        Raips."
      </div>
      <div class="time">Todd Rupeil in Augurst 2022 | Googie Review</div>
      <span class="iconfont icon-douhao-copy">
        <span class="line"></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
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
.comment {
  padding: $pd-l;
  @media screen and (max-width: 750px) {
    padding: $pd-s;
  }
  .title {
    font-size: 0.43rem;
    font-weight: 600;
    padding-bottom: $pd-l;
    @media screen and (max-width: 750px) {
      padding-bottom: $pd-s;
    }
    text-align: center;
  }
  .content {
    position: relative;
    text-align: center;
    padding: 1.17rem 0;
    @media screen and (max-width: 750px) {
      padding: 0.91rem 0;
    }
    .iconfont {
      position: absolute;
      width: 0.8rem;
      height: 0.8rem;
      color: #fff;
      background-color: $main-color;
      border-radius: 50%;
      font-size: 0.43rem;
      text-align: center;
      line-height: 0.8rem;
      .line {
        position: absolute;
        width: 20vw;
        height: 2px;
        background-color: $main-color;
      }
    }
    .icon-douhao-copy {
      left: -0.16rem;
      top: 0;
      .line {
        right: 1px;
        top: 50%;
        transform: translate(100%, -50%);
      }
    }
    .icon-douhao {
      right: -0.16rem;
      bottom: 0;
      .line {
        left: 1px;
        top: 50%;
        transform: translate(-100%, -50%);
      }
    }
    .text {
      font-size: 0.37rem;
      padding-bottom: 0.27rem;
    }
    .time {
      font-size: 0.32rem;
    }
  }
}
</style>
