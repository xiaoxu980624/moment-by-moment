<template>
  <div class="boxs">
    <div class="header">
      设置密码
    </div>
    <div class="box">
      <div :class="active != 1 ? 'int_num' : 'num int_num'">
        <input
          type="password"
          placeholder="请设置登录密码"
          maxlength="20"
          v-model="password"
          @focus="active = 1"
          @blur="active = ''"
        />
      </div>
      <div :class="active != 2 ? 'int_num' : 'num int_num'">
        <input
          type="password"
          maxlength="20"
          placeholder="请再次输入密码"
          v-model="querenpwd"
          @focus="active = 2"
          @blur="active = ''"
        />
      </div>
    </div>
    <div class="login">
      <span >确定</span>
    </div>
    <div class="bottom">
      <span class="btn" >跳过</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    password:"",
    querenpwd:"",
    active:""
}
  },

  methods: {},

  mounted () {
  },
}
</script> 

<style scoped lang='scss'>
.boxs{
  padding-top: 10px;
}
.header {
  font-size: 34px;
  font-weight: 500;
  color: #595959;
  margin: 60px 0;
  text-align: center;
}
.box {
  background-color: #fff;
  margin-top: 10px;
  padding: 0 40px;
}
input::-webkit-input-placeholder {
  color: rgba(190, 190, 190, 1);
}
.num {
  height: 100px;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
  input {
    box-sizing: border-box;
    padding: 30px 0;
    border: 0;
    width: 540px;
    height: 100%;
    font-size: 30px;
 
    font-weight: 400;
    line-height: 40px;
    float: left;
    outline: none;
  }
}
.int_num {
 border-bottom: 1px solid red;
}
.login {
  height: 374px;
 
  background-size: 100% 100%;
  font-size: 28px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 4px;
  span {
    display: inline-block;
    width: 560px;
    height: 90px;
    line-height: 90px;
    margin-top: 110px;
  }
}
.bottom {
  text-align: right;
  position: fixed;
  bottom: 0;
  right: 0;
  .btn {
    display: inline-block;
    font-size: 30px;
    color: #8c8c8c;
    padding: 12px 30px;
    border: 2px solid #d9d9d9;
    border-radius: 10px;
    margin: 30px;
  }
}
</style>