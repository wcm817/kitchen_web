<template>
  <div class="contact w">
    <div class="title">Visit Us Today!</div>
    <el-row class="contact-detail">
      <el-col :xs="24" :sm="18" class="form">
        <el-form>
          <el-form-item>
            <el-input
              v-model="userData.firstName"
              placeholder="名称"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="userData.lastName" placeholder="姓"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="userData.phone"
              placeholder="电话号码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="userData.zipCode"
              placeholder="邮政编码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="userData.bussinessName"
              placeholder="公司名称"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="textarea"
              :rows="3"
              v-model="userData.helpInfo"
              placeholder="请输入您的咨询信息"
            ></el-input>
          </el-form-item>
        </el-form>
        <button class="submit">提交</button>
      </el-col>
      <el-col :xs="24" :sm="6" class="company-info">
        <div class="item">
          <span class="iconfont icon-email"></span>
          <div class="text">xxxxxx@cxxx.com</div>
        </div>
        <div class="item">
          <span class="iconfont icon-locationfill"></span>
          <div class="text">广东省广州市番禺区xxx厂xx号楼</div>
        </div>
        <div class="item">
          <span class="iconfont icon-phone1"></span>
          <div class="text">
            1371234567
            <div class="time">Mon-Fri 7:30 am. - 4:30 pm.</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  components: {},
  data () {
    return {
      userData: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        zipCode: '',
        bussinessName: '',
        delpInfo: ''
      }
    };
  },
  created () { },
  mounted () { },
  methods: {}
};
</script>

<style lang="scss" scoped>
.contact {
  padding: 1.07rem 0;
  @media screen and (max-width: 750px) {
    padding: 0.53rem 0;
  }
  .title {
    font-size: 0.48rem;
    font-weight: 600;
    text-align: center;
    color: $main-color;
    padding-bottom: $pd-l;
    @media screen and (max-width: 750px) {
      padding-bottom: $pd-m;
    }
  }
  .contact-detail {
    padding: 0 2.13rem;
    @media screen and (max-width: 750px) {
      padding: 0 0.27rem;
    }
  }
  .form {
    padding-right: 1.6rem;
    @media screen and (max-width: 750px) {
      padding: 0;
    }
    .submit {
      padding: 0 0.8rem;
      background-color: $main-color;
      color: #fff;
    }
  }
  .company-info {
    padding-left: 0.53rem;
    border-left: 1px solid $main-color;
    @media screen and (max-width: 750px) {
      padding-left: 0;
      padding-top: 0.43rem;
      border: 0;
    }
    .item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 0.27rem;
      .iconfont {
        display: flex;
        height: 0.53rem;
        align-items: center;
        font-size: 0.43rem;
        color: $main-color;
      }
      .icon-email {
        font-size: 0.32rem;
      }
      .text {
        line-height: 0.53rem;
        padding-left: 0.27rem;
        color: $main-color;
        font-weight: 600;
      }
    }
  }
}
</style>
