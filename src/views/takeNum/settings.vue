<style lang="less" scoped>
    .mii-settings {
        .mii-total-switch {
            line-height: 36px;
            float: right;
            .ivu-switch {
                width: 70px;
                height: 36px;
            }
            .ivu-switch:after {
                height: 30px;
                width: 30px;
                top: 2px;
            }
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
                padding: 10px 0px;
            }

            .mii-float-right {
                float: right;
            }
        }
    }
</style>
<template>
    <div class="mii-settings">
        <breadcrumb one="首页" two="微信取号" three="取号设置"></breadcrumb>
        <Card shadow>
            <Row>
                <i-col span="18">
                    <span>选择办税服务厅:</span>
                    <i-select :loading="loading" loading-text="加载中..." size="large" v-model="taxOffice" style="width:300px">
                        <i-option v-for="item,index in taxOfficeList" :value="item.value" :key="index">{{ item.label }}
                        </i-option>
                    </i-select>
                    <i-select size="large" v-model="serviceHall" style="width:300px">
                        <i-option v-for="item,index in serviceHallList" :value="item.value" :key="item.value">{{ item.label
                            }}
                        </i-option>
                    </i-select>
                </i-col>
                <i-col span="6">
                    <div class="mii-total-switch">
                        <span>开通微信取号</span>
                        <i-switch size="large" v-model="status" @on-change="togalSwitch">
                        </i-switch>
                    </div>
                </i-col>
            </Row>
        </Card>
        <br>
        <Card shadow>
            <Row>
                <i-col span="8">
                    <span>纳税人每日微信取号总数:</span>
                    <i-select :disabled="!status" size="large" v-model="takeNumTotal" style="width:80px">
                        <i-option v-for="item,index in numList" :value="item" :key="index">{{ item }}
                        </i-option>
                    </i-select>
                </i-col>
                <i-col span="8">
                    <span>累计微信取号未办理次数上限:</span>
                    <i-select :disabled="!status" size="large" v-model="unhandleNum" style="width:80px">
                        <i-option v-for="item,index in numList" :value="item" :key="index">{{ item }}
                        </i-option>
                    </i-select>
                </i-col>
                <i-col span="8">
                    <Alert closable type="warning" show-icon>达到上限则当月禁用微信取号功能，下月恢复！</Alert>
                </i-col>
            </Row>
            <!-- 业务列表开始 -->
            <Card class="mii-item" v-for="item,index in businessData" :key="index">
                <Row class="mii-item-header">
                    <i-col span="6">
                        <span class="mii-content">{{item.name}}</span>
                    </i-col>
                    <i-col span="18">
                        <Alert style="width: 200px; float:left;" v-show="!item.noChange" type="warning" show-icon>
                            数据有修改，请保存!
                        </Alert>
                        <div class="mii-float-right">
                            <!--<span>开启业务</span>-->
                            <i-switch v-model="item.status" @on-change="status = true">
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </i-switch>
                        </div>
                    </i-col>
                </Row>
                <Row class="mii-item-content">
                    <i-col span="8">
                        <span>每日微信取号数:</span>
                        <i-select :disabled="!item.status" size="large" style="width:80px"
                                  v-model="item.takeNumTotal" @on-change="item.noChange = false">
                            <i-option v-for="item,index in totalNumList" :value="item" :key="index">{{ item }}
                            </i-option>
                        </i-select>
                    </i-col>
                    <i-col span="8">
                        <span>纳税人每日取票次数:</span>
                        <i-select :disabled="!item.status" size="large" style="width:80px"
                                  v-model="item.taxpayerTakeNumTotal" @on-change="item.noChange = false">
                            <i-option :disabled="takeNumTotalDisable" v-for="item,index in numList" :value="item" :key="index">{{ item }}
                            </i-option>
                        </i-select>
                    </i-col>

                </Row>
                <Row class="mii-item-content">
                    <i-col span="20">
                        <span>取票时间:</span>
                        <Time-picker :disabled="!item.status" @on-change="item.noChange = false" :value="item.timeAM"
                                     confirm type="timerange" size="large" placement="bottom-end" placeholder="选择时间"
                                     style="width: 168px"></Time-picker>
                        <Time-picker :disabled="!item.status" @on-change="item.noChange = false" :value="item.timePM"
                                     confirm type="timerange" size="large" placement="bottom-end" placeholder="选择时间"
                                     style="width: 168px"></Time-picker>
                    </i-col>
                    <i-col>
                        <Button class="mii-float-right" type="primary" :disabled="item.noChange" @click="submit(item)">
                            保存
                        </Button>
                    </i-col>
                </Row>
            </Card>
            <!-- 业务列表结束 -->
            <!-- 友情提示开始 -->
            <Card class="mii-item">
                <Row class="mii-item-header">
                    <i-col span="4">
                        <span class="mii-content">友情提示</span>
                    </i-col>
                    <i-col span="20">
                        <div class="mii-float-right">
                            <i-switch v-model="tipsSwitch">
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </i-switch>
                        </div>
                    </i-col>
                </Row>
                <Row class="mii-item-content">
                    <i-col>
                        <i-input :disabled="!tipsSwitch" v-model="tips" type="textarea"
                                 :autosize="{minRows: 4,maxRows: 10}" @on-change="tipsNoChange = false"></i-input>
                    </i-col>
                </Row>
                <Row>
                    <i-col span="2" offset="20">
                        <Button :disabled="!tipsSwitch" class="mii-float-right" type="primary" @click="autoTips">
                            自动生成
                        </Button>
                    </i-col>
                    <i-col span="2">
                        <Button class="mii-float-right" type="primary" :disabled="tipsNoChange" @click="submitTips">
                            保存
                        </Button>
                    </i-col>
                </Row>
            </Card>
            <!-- 友情提示结束 -->
        </Card>

    </div>
</template>
<script type="text/ecmascript-6">
    import breadcrumb from '@/components/breadcrumb.vue'
    import {updateBsfwtConfit, getBsfwtQhKzxx} from '@/service/getData'
    export default{
        data(){
            return {
                loading: true,
                numList: ['--', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                totalNumList: ['--', 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                resultData: null,
                taxOffice: null,
                taxOfficeList: [],
                serviceHall: null,
                serviceHallList: [],
                status: true,
                takeNumTotal: '--',
                takeNumTotalDisable: false,
                unhandleNum: '--',
                businessData: [],
                tipsNoChange: true,
                tipsSwitch: true,
                tips: '',
            }
        },
        components: {breadcrumb},
        watch: {
            taxOffice: function (val) {
                let _this = this
                let _item = _this.resultData.filter((item)=>{
                    return item.zgswjDm == val
                })[0]
                // console.log(item)
                _this.serviceHallList = []
                for(let i of _item.bsfwts){
                    i.value= i.fwtDm
                    i.label = i.fwtMc
                    _this.serviceHallList.push(i)
                }
                _this.serviceHall = _this.serviceHallList[0].value
            },
            serviceHall: function (val) {
                this.changeFwt(val)
            },
            takeNumTotal: function (val) {
                let _this = this
                if(Number.isInteger(val)){
                    _this.takeNumTotalDisable = true
                    for(let item of _this.businessData){
                        item.taxpayerTakeNumTotal = '--'
                    }
                }else{
                    this.takeNumTotalDisable = false
                }
            }
        },
        mounted(){
            this.initData()
        },
        methods: {
            async initData(){
                let res = await getBsfwtQhKzxx()
                this.resultData = res.resultData
                for(let item of res.resultData){
                    this.taxOfficeList.push({value: item.zgswjDm,label: item.zgswjMc})
                }
                this.taxOffice = this.taxOfficeList[0].value
                this.loading = false
            },
            changeFwt(val){
                //更改服务厅后更换页面数据
                let _this = this
                let item = _this.serviceHallList.filter((item) => {
                    return item.value == val
                })[0]
                _this.status = item.fwtZt == 'Y' ? true : false
                _this.takeNumTotal = item.kqhs
                _this.unhandleNum = item.wbls
                _this.tipsSwitch = item.yqtsZt == 'Y' ? true : false
                _this.tips = item.yqtsNr
                let ywLists = item.ywLists
                _this.businessData = []
                for(let i of ywLists){
                    _this.businessData.push({
                        name: i.ywmc,
                        status: i.ywzt == 'Y'? true: false,
                        takeNumTotal: i.kqhs,
                        taxpayerTakeNumTotal: i.qhcs,
                        timeAM: [i.kqhsjqAm, i.kqhsjzAm],
                        timePM: [i.kqhsjqPm, i.kqhsjzPm],
                        noChange: true
                    })
                }
            },
            togalSwitch (status) {
                let _this = this
                // this.$Message.info('开关状态：' + status);
                if (status) {
                    this.update(this.serviceHall, 'Y')
                    return
                }
                this.$Modal.confirm({
                    title: '提示',
                    content: '<p>是否关闭该服务厅的微信取号服务？</p><p>关闭后该大厅将无法进行微信取号。</p><p>关闭不会丢失当前服务厅业务设置！</p>',
                    onOk: () => {
                        this.update(this.serviceHall, 'N')
                        let index = 0
                        for (let item of _this.businessData) {
                            item.status = false
                            _this.businessData.splice(index++, 1, item)
                        }
                        this.$Message.info('关闭成功');
                    },
                    onCancel: () => {
                        _this.status = true
                        this.$Message.info('关闭取消');
                    }
                });
            },
            submit(item){
                item.noChange = true
                //TODO 提交请求，修改数据
                this.$Notice.success({
                    title: '微信取号设置',
                    desc: '【' + item.name + '】数据修改成功！',
                });

            },
            submitTips(){
                this.tipsNoChange = true
                //TODO 提交请求，修改数据
                this.$Notice.success({
                    title: '微信取号设置',
                    desc: '【 友情提示 】数据修改成功！',
                });
            },
            autoTips(){
                let tips = ''
                for (let item of this.businessData) {
                    if (item.status) {
                        tips += item.name + ':微信取号时段为【' + item.timeAM + '】【' + item.timePM + '】,' +
                                '每日微信取号总数为:' + item.takeNumTotal + ',每人每日可取票次数:' + item.taxpayerTakeNumTotal + ';\n'
                    }
                }
                tips += '过号未办理业务则所取票号作废;\n当月累计微信取号未办理业务达' + this.unhandleNum + '次，将被取消微信取号资格，次月恢复;'
                this.tips = tips
                this.tipsNoChange = false

            },
            async update(serviceHall, type){
                let res = await updateBsfwtConfit(serviceHall, type)
                console.log(res)

            }
        }
    }
</script>
