<style lang="less">
    .mii-header {
        box-shadow: 0 4px 4px 0 rgba(205, 224, 247, 2);
        text-align: center;
        .ivu-card-body {
            padding: 0px !important;
        }
        .mii-header-row {
            height: 100px;
            width: 100%;
            background-color: #3284e4;
            color: white;
            div {
                line-height: 100px;
            }
            .mii-hover:hover {
                background-color: #5cadff;
                cursor: pointer;
            }
            .mii-hover-icon:hover{
                font-weight:bold;
                cursor: pointer;
            }
            .mii-logo {
                float: right;
                width: 60px;
                height: 53px;
                border-radius: 50%;
            }
            .mii-title {
                text-align: left;
                font-size: 30px;
                font-weight: 600;
            }
            .mii-avatar {
                float: right;
                height: 60px;
                width: 60px;
                border-radius: 50%;
            }
            .mii-name {
                font-size: 18px;
                text-align: left;

            }
        }
    }
</style>
<template>
    <div>
        <Card class="mii-header" shadow>
            <Row class="mii-header-row" :gutter="10" type="flex" justify="end" align="middle">
                <i-col span="15">
                    <Row :gutter="5" type="flex" align="middle" justify="start">
                        <i-col>
                            <img class="mii-logo" src="../assets/imgs/logo_white.png"/>
                        </i-col>
                        <i-col>
                            <p class="mii-title">湖北国税移动办税平台</p>
                        </i-col>
                    </Row>
                </i-col>
                <i-col span="1" class="mii-hover-icon">
                    <Badge :count="userInfo.email">
                        <Icon size="35" type="ios-email-outline"></Icon>
                    </Badge>
                </i-col>
                <i-col span="1" class="mii-hover-icon">
                    <Badge :count="userInfo.notice">
                        <Icon size="35" type="ios-bell-outline"></Icon>
                    </Badge>
                </i-col>
                <i-col span="4">
                    <Row :gutter="5" type="flex" align="middle" justify="center">
                        <i-col>
                            <img class="mii-avatar" :src="userInfo.avatar"/>
                        </i-col>
                        <i-col>
                            <p class="mii-name">{{userInfo.realName+' '}}
                                <Icon type="ios-arrow-down"></Icon>
                            </p>
                        </i-col>
                    </Row>
                </i-col>
                <i-col span="2" class="mii-hover">
                    <div @click="logoutModal = true">
                        <Badge :count="0">
                            <Icon type="log-out" size="28"></Icon>
                        </Badge>
                    </div>
                </i-col>
            </Row>
        </Card>
        <Modal v-model="logoutModal" title="提示" @on-ok="logout" :mask-closable="false">
            <p>是否要退出登录？</p>
        </Modal>
    </div>
</template>
<script type="text/ecmascript-6">
    import {mapState, mapMutations, mapGetters} from 'vuex'
    import {GET_USERINFO, GET_RESOURCE} from '@/store/mutation-types'
    import {removeStore} from '@/utils/common'

    export default{
        data(){
            return {
                logoutModal: false,
            }
        },
        components: {},
        computed: {
            ...mapGetters({
                userInfo: GET_USERINFO
            })
        },
        mounted(){

        },
        methods: {
            logout(){
                localStorage.JOOJEE_ADMIN_ISLOGIN = false
                removeStore('menu')
                this.$router.push('/')
            }
        }
    }
</script>
