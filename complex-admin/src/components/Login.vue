<template>
  <div class="LoginWrap">
      <div class="loginCenter">
         <el-row>
            <el-col>
               <div class="title">
                   <img src="../assets/img/logo.jpg" />
                   <span>后台管理</span>
               </div>
               <p class="text">您可以访问 github 来了解项目 或
                 <router-link to="/">访问首页</router-link>
               </p>

            </el-col>
            <el-col>
               <div class="loginFrom">
                    <el-tabs tab-position="top" style="height: 200px;">
                      <el-tab-pane label="账号密码登录">
                          <div class="loginInput">
                              <el-form :model="form1"  :rules="rules1" ref="loginDataOne" class="demo-ruleForm">
                                <el-form-item  prop="user">
                                  <el-input type="text" v-model="form1.user" placeholder="请输入用户名">
                                    <i class="iconfont icon-denglu" slot="suffix"></i>
                                  </el-input>
                                </el-form-item>
                                <el-form-item  prop="password">
                                  <el-input @keyup.enter.native="submitOne" type="password" v-model="form1.password" placeholder="请输入登录密码">
                                     <i class="iconfont icon-denglumima" slot="suffix"></i>
                                  </el-input>
                                </el-form-item>
                                <div class="ohterInput" >
                                  <el-checkbox v-model="checked">记住密码</el-checkbox>
                                  <router-link to="/login">忘记密码</router-link>
                                </div>
                                <el-form-item class="submit">
                                  <el-button @click="submitOne" type="primary" :loading="loadingOne">登录</el-button>
                                </el-form-item>
                              </el-form>
                          </div>
                      </el-tab-pane>
                      <el-tab-pane label="手机号登录">
                         <div class="loginInput">
                              <el-form :model="form2"  :rules="rules2" ref="loginDataTwo" class="demo-ruleForm">
                                <el-form-item  prop="phone">
                                  <el-input type="text" v-model="form2.phone" placeholder="请输入用户名">
                                    <i class="iconfont icon-denglu" slot="suffix"></i>
                                  </el-input>
                                </el-form-item>
                                <el-form-item  prop="corde">
                                   <div class="inlineInput" >
                                     <el-input type="text" v-model="form2.corde" placeholder="验证码">
                                        <i class="iconfont icon-denglumima" slot="suffix"></i>
                                      </el-input>
                                      <el-button  v-show="isBtn" @click="requireCorde" type="primary" >获取验证码</el-button>
                                      <el-button  v-show="!isBtn" type="info" plain disabled >{{time}}s</el-button>
                                   </div>

                                </el-form-item>
                                <el-form-item class="submit">
                                  <el-button @click="submitTwo" type="primary" :loading="loadingOne">登录</el-button>
                                </el-form-item>
                              </el-form>
                          </div>
                      </el-tab-pane>
                    </el-tabs>
               </div>
            </el-col>
         </el-row>
      </div>
  </div>
</template>

<script>
import {RulesUserName,RulesPassword,RulesPhone,RulesCorde} from '@/public/rules'

export default {
  data () {
    return {  // 这里的数据实际开发中视情况保留
       time:60,
       isBtn:true,
       interval:'',
       loadingOne: false,
       checked:false,
        form1: {
          user:'',
          pass: '',
        },
        rules1:{
          user: [
            { validator: RulesUserName, trigger: 'blur' }
          ],
          password: [
            { validator: RulesPassword, trigger: 'blur' }
          ],
        },
        form2: {
          phone:'',
          corde: '',
        },
        rules2:{
          phone: [
            { validator: RulesPhone, trigger: 'blur' }
          ],
          corde: [
            { validator: RulesCorde, trigger: 'blur' }
          ],
        }
    }
  },
  methods:{
    submitOne(){  // 提交按钮二
       this.$refs.loginDataOne.validate((valid) => { // 登录表单验证
              if (valid) {
                 this.loadingOne = true;

                // 验证通过
                setTimeout(()=>{
                  this.loadingOne = false;
                },4000)

              } else {
                return false;
              }
       });
    },
    submitTwo(){ // 提交按钮二
       this.$refs.loginDataTwo.validate((valid) => { // 登录表单验证
              if (valid) {
                 this.loadingOne = true;

                // 验证通过
                setTimeout(()=>{
                  this.loadingOne = false;
                },4000)

              } else {
                return false;
              }
       });
    },
    requireCorde(){ // 获取验证码
        this.isBtn = false;
        this.interval = setInterval(()=>{
           if(this.time !== 0){
              this.time--
           }else{
             clearInterval(this.interval)
             this.isBtn = false;
             this.time =60;
           }
        },1000)
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../theme/base-theme.less");

.LoginWrap{
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    .loginCenter{
      width:368px;
      padding:140px 0 0;
      .text{
        width:100%;
        text-align: center;
        padding:8px 0;
        color:@font-color-2;
        a{
          color: @minor-color-3;
        }
      }
      .el-row{
        width:100%;

      }
      .title{
         display: flex;
         align-items: center;
         justify-content: center;
         img{
            width:40px;
            height:40px;
            margin-right:15px;
         }
         span{
            font-size:30px;
         }
      }
      .loginFrom{
         padding:60px 0 0;
         /deep/.el-tabs__header{
             display:flex;
             justify-content: center;
             .el-tabs__nav-wrap{
              //  padding:0 20px;
             }
         }
         /deep/.el-tabs__item{
           font-size:16px;
         }
         .loginInput{
            padding: 15px 0 0;
            .submit{
              .el-button{
                width:100%;
                font-size:16px;
              }
            }

            /deep/.el-input__suffix{
              width:30px;
              left:5px;
            }
            /deep/.el-input__inner{
              text-indent:25px;
            }
            .ohterInput{
              display:flex;
              justify-content: space-between;
              margin-bottom:20px;
              a{
                color:@minor-color-3;
              }
            }

         }
         .inlineInput{
            display:flex;
            .el-button--primary{
                margin-left:15px;
            }
            .el-button--info{
              width:156px;
            }
         }
      }
    }
}
</style>
