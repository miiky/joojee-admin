<style lang="less">
    html, body {
        background-color: #f5f7f9;
    }
    .home {
        background-color: #f5f7f9;
        width: 100%;
        height: auto;
        top: 0;
        bottom: 0;
        left: 0;
        /*position: absolute;*/
        .mii-footer{
            position: fixed;
            height: 60px;
            padding-top: 10px;
            line-height: 20px;
            bottom:0;
            left:0;
            width: 100%;
            background-color: #3284e4;
            text-align: center;
            color: white;
        }
    }

    .mii-body {
        .mii-content{
            margin: 20px 40px 70px 10px;
        }
    }

</style>
<template>
    <div class="home">
        <miiHeader></miiHeader>
        <div class="mii-body">
            <Row>
                <i-col span="4">
                    <miiMenu></miiMenu>
                </i-col>
                <i-col span="20">
                    <div class="mii-content">
                        <router-view></router-view>
                    </div>
                </i-col>
            </Row>
        </div>
        <Row class="mii-footer">
            <i-col>
                <p>版权所有：湖北省国家税务局2016 备案号：鄂ICP备05010861</p>
                <p>HuBei State Administration Of Taxation © all rights reserved 2016</p>
            </i-col>
        </Row>
        <Back-top :height="100" :bottom="70" :right="0"></Back-top>
    </div>
</template>
<script type="text/ecmascript-6">
    import menu from '@/components/menu.vue'
    import header from '@/components/header.vue'
    export default{
        data(){
            return {}
        },
        components: {
            miiMenu: menu,
            miiHeader: header,
        }
    }
</script>
