<template>
  <div class="contact">
    <div class="pic">
      <div class="text">CONTACT US</div>
    </div>
    <el-row class="content w">
      <el-col :xs="24" :sm="12">
        <div class="block">
          <div class="title">Contact Us</div>
          <div class="centre">Customer Service & Experience Centre</div>
          <div class="infos" v-for="item in infos" :key="item.label">
            <span class="label">{{ item.label }}</span>
            <span class="value">{{ item.value }}</span>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12">
        <div class="block">
          <div class="title">Enquiry / Opinions</div>
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
          <button class="btn" @click="handleSubmit">提交</button>
        </div>
      </el-col>
    </el-row>
    <div class="share w"></div>
  </div>
</template>

<script>
import { post } from '@/api/request.js';
export default {
  name: 'Contact',
  components: {
  },
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
    }
  },
  computed: {
    infos () {
      return [
        {
          label: 'Address:',
          value: 'Address Address Address Address Address Address Address'
        },
        {
          label: 'Product enquiry:',
          value: '2313 0666'
        },
        {
          label: 'Office Hours:',
          value: 'Monday to Friday - 9:00 am to 7:00pm Saturday - 10:00 am to 4:00 pm Closed on Sundays and Public Holidays'
        }
      ]
    }
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
}
</script>

<style lang="scss" scoped>
.contact {
  .pic {
    position: relative;
    background-image: url('../assets/contact.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 8rem;
    @media screen and (max-width: 820px) {
      height: 5.33rem;
    }
    img {
      width: 100%;
    }
    .text {
      position: absolute;
      left: 20%;
      top: 50%;
      transform: translateY(-50%);
      font-size: 2.13rem;
      color: #fff;
      text-shadow: 2px 2px 5px #fff;
      @media screen and (max-width: 820px) {
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0.8rem;
        text-align: center;
      }
    }
  }
  .content {
    padding: $pd-l 0;
    @media screen and (max-width: 820px) {
      padding: $pd-s 0;
    }
    .block {
      margin: 0 10px;
      .title {
        padding: 0 0.53rem;
        height: 0.91rem;
        line-height: 0.91rem;
        color: #fff;
        background-color: $main-color;
        margin-bottom: 0.27rem;
      }
      .centre {
        padding: 0.27rem;
        font-size: 0.53rem;
      }
      .infos {
        display: flex;
        border-top: 1px solid #eee;
        padding: 0.27rem;
        font-size: 0.32rem;
        .label {
          width: 3.73rem;
          flex-shrink: 0;
        }
      }
      .phone-item {
        ::v-deep .el-form-item__content {
          display: flex;
          .el-select {
            width: 100px;
          }
        }
      }
      .btn {
        cursor: pointer;
        width: 100px;
        background-color: $main-color;
        color: #fff;
      }
    }
  }
}
</style>
