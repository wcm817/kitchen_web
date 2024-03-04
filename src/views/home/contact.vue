<template>
  <div class="contact w">
    <div class="title">Visit Us Today!</div>
    <el-row class="contact-detail">
      <el-col :xs="24" :sm="18" class="form">
        <el-form :rules="rules" :model="userData" ref="form">
          <el-form-item prop="name">
            <el-input v-model="userData.name" placeholder="名称"></el-input>
          </el-form-item>
          <el-form-item class="phone-item" prop="phone">
            <el-select v-model="userData.phonecode">
              <el-option label="+86" value="86"></el-option>
            </el-select>
            <el-input
              v-model="userData.phone"
              placeholder="电话号码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input v-model="userData.email" placeholder="邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="business">
            <el-input
              v-model="userData.business"
              placeholder="公司名称"
            ></el-input>
          </el-form-item>
          <el-form-item prop="message">
            <el-input
              type="textarea"
              :rows="3"
              v-model="userData.message"
              placeholder="请输入您的咨询信息"
            ></el-input>
          </el-form-item>
        </el-form>
        <button class="submit" @click="handleSubmit">提交</button>
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
import { post } from '@/api/request.js';
export default {
  name: 'Contact',
  components: {},
  data () {
    return {
      userData: {
        name: '',
        phonecode: '86',
        phone: '',
        email: '',
        business: '',
        message: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入您的名称', trigger: 'blur' },
        ],
        phone: [
          { required: true, message: '请输入联系方式', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    };
  },
  created () { },
  mounted () { },
  methods: {
    handleSubmit () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          const res = await post({
            path: 'addComment',
            params: this.userData
          });
          if (res.code === 0) {
            this.$message({
              type: 'success',
              message: '留言成功'
            });
            this.$refs.form.resetFields();
          }
        } else {
          return false;
        }
      });
    }
  }
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
    .phone-item {
      ::v-deep .el-form-item__content {
        display: flex;
        .el-select {
          width: 100px;
        }
      }
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
