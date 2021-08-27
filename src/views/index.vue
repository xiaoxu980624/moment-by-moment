<template>

  <div class="login">
     <div class="top">
       <img class="img" src="@/assets/A1.jpg" alt="">
     </div>

     <!-- 登录 -->
     <div class="log">
         <p class="one">
           <input type="text" v-model="tel" placeholder="请输入手机号" name="" id="">
           <button class="btn" @click="get" v-if="!isshow">获取验证码</button>
            <button class="btn" v-if="isshow" style="color:#ccc;">获取验证码({{time}})</button>
         </p>
          <p class="two">
           <input type="text" v-model="code" placeholder="请输入短信验证码" name="" id="">
         </p>
           <div class="no">
           *未注册的手机号将自动注册
           <button class="btn2">使用密码登录</button>
         </div>
        <div class="deng">
           <van-button class="dl" type="danger" @click="login"> 登录</van-button>
        </div>
       
     </div>

     <!-- 底部 -->
     <div class="inf">
      <div class="info">
       <van-checkbox v-model="checked" checked-color="#ee0a24"></van-checkbox>
       <p >我同意</p>
        <a  href="/treaty?name=user_protect_contract" class="">用户注册协议</a>
       <p >和</p>
       <a  href="/treaty?name=user_protect_contract" class="">隐私保护协议</a>
      </div>
     </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tel: "",//手机号
      code: "",//验证码
      checked: false,
      isshow: false,
      time: 60
    };
  },
  computed: {},
  watch: {},
  methods: {
    //获取验证码
    async get() {
      var reg= /^1[35879]\d{9}$/
      if(!reg.test(this.tel)){
        this.$toast.fail("手机号格式不正确")
        return false
      }
      this.isshow = true;
      let res=await this.$http.post('/smsCode', {
          mobile: this.tel,
          sms_type: 'login'
        })
         .then(() => {
           this.isshow = true;
          this.time = 60;
          let that= this;
          var timer = setInterval(function() {
            that.time--;
            if (that.time <= 0) {
              that.isshow = false;
              clearInterval(timer);
            }
          }, 1000);
        
        });
      
    },
  async  login() {
      //勾选
      if (!this.checked) {
        this.$toast.fail("请勾选协议");
        return;
      }
      if (this.tel == "") {
        this.$toast.fail("手机号格式不正确");
        return;
      }
      //登录
        let res=await this.$http.post('/login', {
          mobile: this.tel,
          sms_code:this.code,
          type:2,//短信登录
          client:1,//学生端
        })
        .then((res)=>{
          console.log(res);
          if(res.code==200){
            this.$router.push('/set')
          }
        })
         
      
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
.login {
  width: 100%;
  background: #f1f1f1;
  .act {
    background: red;
  }
  .right {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #ccc;
    font-size: 12px;
    text-align: center;
    line-height: 50px;
  }
  .top {
    width: 100%;

    .img {
      width: 100%;
      height: 560px;
      margin: auto;
    }
  }
  .log {
    width: 100%;
    height: 240px;
    text-align: center;
    background: #fff;
    margin-top: 18px;
    padding-top: 15px;
    .dl {
      width: 408px;
      height: 80px;
      margin-top: 20px;
      border-radius: 5px;
      color: #fff;
      background: linear-gradient(
        to left,
         rgb(226,  25,  25),
         rgb(232,  89,  112)
      );
    }
    p {
      width: 70%;
      margin: auto;
      padding-bottom: 20px;
      height: 45px;
      line-height: 45px;
      overflow: hidden;
      border-bottom: 1px solid #eaeaea;
    }
    .deng {
      width: 100%;
      height: 50px;
      margin-top: 80px;
      border-radius: 5px;
      box-shadow: 2px 2px 30px 0px rgb (242,  82,  82);
      background: linear-gradient(to left,  red,  red,  pink);
    }

    input {
      width: 370px;
      border: 0px;
      height: 60px;
      line-height: 60px;

      background-color: #fff;
      font-size: 16px;
    }
    .one {
      position: relative;
      margin-top: 50px;
      margin-bottom: 80px;
    }
    .btn {
      border: 0px;
      color: red;
      font-size: 12px;
      background: #fff;
      position: absolute;
      right: 50px;
      top: 5px;
      margin-bottom: 30px;
    }
  }
  .no {
    width: 75%;

    font-size: 14px;
    color: #999;
    margin-top: 30px;
    padding-left: 10px;
    box-sizing: border-box;
    margin-top: 25px;
    position: relative;
    button {
      border: 0px;
      position: absolute;
      right: -55px;
      background: #fff;
    }
  }

  .inf {
    background: #fff;
    width: 100%;
    font-size: 14px;
   position: relative;
    .info {
      width: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 400px;
    }
    p {
      font-size: 14px;
    }
    a {
      color: red;
      font-size: 14px;
    }
  }
}
</style>
              