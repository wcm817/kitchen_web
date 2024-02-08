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
        </div>
      </el-col>
    </el-row>
    <div class="share w"></div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  components: {
  },
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
  methods: {}
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
    }
  }
}
</style>
