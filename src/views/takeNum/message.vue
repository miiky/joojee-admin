<style lang="less" scoped>
    .mii-message {
        .mii-title {
            font-size: 20px;
        }
        .mii-item {
            margin-top: 20px;
            .mii-item-header {
                border-bottom: 1px solid #e9eaec;
                padding: 10px 0px;
                .mii-content {
                    font-size: 18px;
                    line-height: 30px;
                    color: #3284e4;
                }
            }
            .mii-item-content {
                padding: 30px 0px 10px 0px;
            }

            .mii-float-right {
                float: right;
            }
        }
    }
</style>
<template>
    <div class="mii-message">
        <breadcrumb one="首页" two="微信取号" three="消息设置"></breadcrumb>
        <Card shadow>
            <Row>
                <i-col span="18">
                    <span>选择办税服务厅:</span>
                    <i-select size="large" v-model="taxOffice" style="width:200px">
                        <i-option v-for="item,index in taxOfficeList" :value="item.value" :key="index">{{ item.label }}
                        </i-option>
                    </i-select>
                    <i-select size="large" v-model="serviceHall" style="width:300px">
                        <i-option v-for="item,index in serviceHallList" :value="item.value" :key="index">{{ item.label
                            }}
                        </i-option>
                    </i-select>
                </i-col>
            </Row>
        </Card>
        <br>
        <Card shadow>
            <span class="mii-title">
                微信消息
                <Tooltip placement="right">
                    <div slot="content">
                        <p>微信取号各个阶段微信消息推送提醒</p><p>右侧可开启或者关闭该阶段的推送</p><p>下面可以在查看消息模板修改或查看模板！</p>
                    </div>
                <Icon type="help-circled" color="black"></Icon>
            </Tooltip>
            </span>
            <Card class="mii-item">
                <Row class="mii-item-header">
                    <i-col span="4">
                        <span class="mii-content">取号成功
                        </span>
                    </i-col>
                    <i-col span="20">
                        <div class="mii-float-right">
                            <i-switch>
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </i-switch>
                        </div>
                    </i-col>
                </Row>
                <Row class="mii-item-content">
                    <i-col>
                        <span>纳税人取号成功后，向纳税人推送微信消息，告知纳税人电子票号信息。<a>查看消息模板</a></span>
                    </i-col>
                </Row>
            </Card>
            <Card class="mii-item">
                <Row class="mii-item-header">
                    <i-col span="4">
                        <span class="mii-content">排队等候</span>
                    </i-col>
                    <i-col span="20">
                        <div class="mii-float-right">
                            <i-switch>
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </i-switch>
                        </div>
                    </i-col>
                </Row>
                <Row class="mii-item-content">
                    <i-col>
                        <span>纳税人排队等候人数小于<Input-number :max="100" :min="1" v-model="value2_1"></Input-number>人，向纳税人推送微信消息，告知纳税人注意当前业务办理信息，不要过号。消息推送频次<Input-number
                                :max="10" :min="1" v-model="value2_2"></Input-number>号/每次。<a>查看消息模板</a></span>
                    </i-col>
                </Row>
            </Card>
            <Card class="mii-item">
                <Row class="mii-item-header">
                    <i-col span="4">
                        <span class="mii-content">业务办理</span>
                    </i-col>
                    <i-col span="20">
                        <div class="mii-float-right">
                            <i-switch>
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </i-switch>
                        </div>
                    </i-col>
                </Row>
                <Row class="mii-item-content">
                    <i-col>
                        <span>当前受理号为纳税人所取电子票号，向纳税人推送微信消息，告知纳税人前往窗口办理业务。<a>查看消息模板</a></span>
                    </i-col>
                </Row>
            </Card>
            <Card class="mii-item">
                <Row class="mii-item-header">
                    <i-col span="4">
                        <span class="mii-content">票号过号</span>
                    </i-col>
                    <i-col span="20">
                        <div class="mii-float-right">
                            <i-switch>
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </i-switch>
                        </div>
                    </i-col>
                </Row>
                <Row class="mii-item-content">
                    <i-col>
                        <span>纳税人未及时办理业务，导致票号过号，向纳税人推送微信消息，告知纳税人票号作废，需重新取号。<a>查看消息模板</a></span>
                    </i-col>
                </Row>
            </Card>
            <Card class="mii-item">
                <Row class="mii-item-header">
                    <i-col span="4">
                        <span class="mii-content">取消排队</span>
                    </i-col>
                    <i-col span="20">
                        <div class="mii-float-right">
                            <i-switch>
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </i-switch>
                        </div>
                    </i-col>
                </Row>
                <Row class="mii-item-content">
                    <i-col>
                        <span>纳税人取消排队，向纳税人推送微信消息，告知纳税人电子票号作废，如需办理业务，可重新取号。<a>查看消息模板</a></span>
                    </i-col>
                </Row>
            </Card>
            <Card class="mii-item">
                <Row class="mii-item-header">
                    <i-col span="4">
                        <span class="mii-content">评价服务</span>
                    </i-col>
                    <i-col span="20">
                        <div class="mii-float-right">
                            <i-switch>
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </i-switch>
                        </div>
                    </i-col>
                </Row>
                <Row class="mii-item-content">
                    <i-col>
                        <span>纳税人业务办理完成后，向纳税人推送微信消息，请纳税人对本次服务进行评价。<a>查看消息模板</a></span>
                    </i-col>
                </Row>
            </Card>
        </Card>
    </div>
</template>
<script type="text/ecmascript-6">
    import breadcrumb from '@/components/breadcrumb.vue'
    export default{
        data(){
            return {
                taxOffice: '420101000000',
                taxOfficeList: [{
                    value: '420101000000',
                    label: '武汉市洪山区国税局',
                }
                ],
                serviceHall: '0001',
                serviceHallList: [{
                    value: '0001',
                    label: '武汉市洪山区国税局办税服务厅'
                }, {
                    value: '0002',
                    label: '武汉市洪山区国税局办税服务厅子厅'
                }
                ],
                value2_1: 1,
                value2_2: 1,
            }
        },
        components: {breadcrumb},
        mounted(){

        },
        methods: {}
    }
</script>
