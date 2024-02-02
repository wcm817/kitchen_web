<template>
  <div class="products">
    <div class="pic">About Us</div>
    <div class="detail w">
      <p>
        Established in 1979, Guangzhou Hongling began to manufacture baking
        equipment of Hongling brand in 1979, with more than 40 years of
        technology in manufacturing and production.Have over 260 employees and a
        workshop area of 20000 square meters, with strong OEM / ODM
        capabilities. We have formed an integrated management system of product
        development, design, manufacturing and selling, which has been in
        continued improvement. We have always been adhering to the production
        and service principle of quality first and customer supreme. We have
        established a research and development team consisting of such
        professional personnel as senior engineers, engineers, and technicians.
      </p>
      <p>
        Established in 1979, Guangzhou Hongling began to manufacture baking
        equipment of Hongling brand in 1979, with more than 40 years of
        technology in manufacturing and production.Have over 260 employees and a
        workshop area of 20000 square meters, with strong OEM / ODM
        capabilities. We have formed an integrated management system of product
        development, design, manufacturing and selling, which has been in
        continued improvement. We have always been adhering to the production
        and service principle of quality first and customer supreme. We have
        established a research and development team consisting of such
        professional personnel as senior engineers, engineers, and technicians.
      </p>
    </div>
    <div class="purpose w">
      <div class="purpose-title">
        "We believe in simplifing the complicated"
      </div>
      <el-row class="list">
        <el-col :xs="24" :sm="8" class="item">
          <div class="item-title">26K+</div>
          <div class="info">PROJECTS WORLDWIDE</div>
        </el-col>
        <el-col :xs="24" :sm="8" class="item">
          <div class="item-title">7K+</div>
          <div class="info">BRANDS SERVICED</div>
        </el-col>
        <el-col :xs="24" :sm="8" class="item">
          <div class="item-title">3</div>
          <div class="info">GLOBAL LACATIONS</div>
        </el-col>
      </el-row>
    </div>
    <div class="challenge"></div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  components: {},
  data () {
    return {}
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang="scss" scoped>
.products {
  .pic {
    width: 100%;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $main-color;
    font-size: 0.96rem;
    font-weight: 600;
    color: #fff;
  }
  .detail {
    padding: 1.6rem 0;
  }
  .purpose {
    .purpose-title {
      width: 10rem;
      max-width: 100vw;
      margin: 0 auto;
      font-size: 0.59rem;
      text-align: center;
      border-bottom: 1px solid $main-color;
      padding-bottom: 0.27rem;
    }
    .list {
      padding: $pd-m 2.67rem;
      .item {
        text-align: center;
        line-height: 0.69rem;
        padding-bottom: $pd-m;
        .item-title {
          font-size: 0.48rem;
          color: $main-color;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
