<style lang="less">
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        .mii-login-header {
            background-color: white;
            height: 100px;
            .mii-logo {
                float: right;
                height: 65px;
                width: 65px;
                border-radius: 50%;
            }
            p{
                text-align: left;
                font-size: 30px;
                font-weight: 600;
            }
        }
        .mii-login-body {
            background-color: #3284e4;
            background-image: url('../assets/imgs/login_logo.png');
            background-repeat: no-repeat;
            -moz-background-size:90% auto;
            background-size:auto 100%;
            height: 80%;
            .ivu-row-flex {
                height: 100%;
            }
            .mii-card {
                padding: 20px 40px;
                margin-right: 200px;
                width: 350px;
                .ivu-card-head p {
                    height: 40px;
                    line-height: 40px;
                    font-size: 24px;

                }
                .mii-login-btn {
                    font-size: 18px;
                }
                .ivu-tabs-bar{
                    display: none;
                }
                .demo-spin-icon-load{
                    margin-top: 60px;
                    animation: ani-demo-spin 1s linear infinite;
                }
                @keyframes ani-demo-spin {
                    from { transform: rotate(0deg);}
                    50%  { transform: rotate(180deg);}
                    to   { transform: rotate(360deg);}
                }
            }
            .mii-bg-pic {
                height: 100%;
                width: 100%;
            }
        }

        .mii-login-footer {
            height: 100px;
        }

    }

</style>
<template>
    <div class="index">
        <Row class="mii-login-header" type="flex" justify="start" align="middle">
            <i-col span="4">
                <img class="mii-logo" src="../assets/imgs/logo_blue.png"/>
            </i-col>
            <i-col span="20"><p>&nbsp;湖北国税移动办税平台</p></i-col>
        </Row>
        <div class="mii-login-body">
            <Row type="flex" justify="end" align="middle">
                <i-col>
                    <Card class="mii-card">
                        <p slot="title">管理平台登录</p>
                        <Tabs :value="loginMode">
                            <Tab-pane name="pwd">
                                <Alert v-show="isError" type="error" show-icon>
                                    <p class="mii-title">用户名或者密码错误</p>
                                </Alert>
                                <br>
                                <i-input v-model="loginInfo.username" placeholder="用户名">
                                    <span slot="prepend"><Icon size="20" type="ios-person-outline"></Icon></span>
                                </i-input>
                                <br/>
                                <i-input type="password" v-model="loginInfo.password" placeholder="密码">
                                    <span slot="prepend"><Icon size="20" type="ios-locked-outline"></Icon></span>
                                </i-input>
                                <br/><br/>
                                <Button class="mii-login-btn" type="primary" :loading="btnLoading" @click="login" long>登录
                                </Button>
                            </Tab-pane>
                            <Tab-pane name="qrCode">
                                <qrcode v-if="qrcodeUrl" :value="qrcodeUrl" :options="{ size: 190 }">
                                </qrcode>
                                <div v-else="!qrcodeUrl">
                                    <Spin>
                                        <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                                        <div>Loading QRCode...</div>
                                    </Spin>
                                </div>
                            </Tab-pane>
                        </Tabs>
                        <br>
                        <a @click="toggleLoginMode">{{loginMode == 'pwd'?'二维码登陆':'密码登陆'}} <Icon type="arrow-swap"></Icon></a>
                    </Card>
                </i-col>
            </Row>
        </div>
        <Row class="mii-login-footer">
            <i-col>
                <br>
                <p>版权所有：湖北省国家税务局2016 备案号：鄂ICP备05010861</p>
                <p>HuBei State Administration Of Taxation © all rights reserved 2016</p>
            </i-col>
        </Row>
    </div>
</template>
<script type="text/ecmascript-6">
    import Qrcode from 'vue-qrcode'
    import { userInfo, resource } from '../service/getData'

    export default {
        data(){
            return {
                qrcodeUrl: null,
                loginMode: 'pwd',
                loginInfo: {
                    username: '',
                    password: '',
                },
                insertName: '',
                insertPwd: '',
                btnLoading: false,
                isError: false
            }
        },
        components:{
            Qrcode: Qrcode,
        },
        methods: {
            async login(){
                let _this = this
                _this.btnLoading = true

                if (_this.loginInfo.username == 'admin' && _this.loginInfo.password == 'admin') {

                    localStorage.JOOJEE_ADMIN_ISLOGIN = 'T'
                    //登陆成功，获取用户信息，放到store中
                    let res1 = await userInfo()
                    _this.$store.commit({
                        type: 'SET_USERINFO',
                        userInfo: res1
                    })

                    //获取用户资源信息
                    let res2 = await resource()
                    _this.$store.commit({
                        type: 'SET_RESOURCE',
                        resource: res2.menuList
                    })
                    _this.$router.push('home')
                } else {
                    setTimeout(function () {
                        _this.isError = true
                        _this.btnLoading = false
                    }, 1000)
                    setTimeout(function () {
                        _this.isError = false
                    }, 3000)
                }
            },
            toggleLoginMode(){
                if(this.loginMode == 'pwd'){
                    let _this = this
                    this.loginMode = 'qrCode'
                    setTimeout(function () {
                        _this.qrcodeUrl = 'https://www.joojee.cn'
                    },1000)
                }else{
                    this.loginMode = 'pwd'
                }
            }
        }
    };


</script>