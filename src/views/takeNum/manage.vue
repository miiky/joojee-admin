<style lang="less">
    .mii-manage {

    }
</style>
<template>
    <div class="mii-manage">
        <breadcrumb one="首页" two="微信取号" three="取号管理"></breadcrumb>
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
            <br>
            <Row>
                <i-col span="22">
                    <span>关键字: </span>
                    <i-input size="large" placeholder="请输入单号..."
                             style="width: 200px"></i-input>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;选择查询日期: </span>
                    <Date-picker type="date" size="large" placeholder="选择日期" style="width: 150px"></Date-picker>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;选择票号状态: </span>
                    <i-select size="large" v-model="status" style="width:150px">
                        <i-option v-for="item,index in statusList" :value="item.value" :key="index">
                            {{ item.label}}
                        </i-option>
                    </i-select>
                </i-col>
                <i-col span="2">
                    <Button style="float: left;" size="large" type="primary">搜索</Button>
                </i-col>
            </Row>
        </Card>
        <br>
        <Card shadow>
            <Table v-if="showTable" stripe :columns="columns" :data="data"></Table>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="8" :current="1" :page-size="4" @on-change="changePage"></Page>
                </div>
            </div>
        </Card>
    </div>
</template>
<script type="text/ecmascript-6">
    import breadcrumb from '@/components/breadcrumb.vue'

    import {orderList} from '@/service/getData'
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
                status: '0',
                statusList: [{
                    value: '0',
                    label: '全部',
                }, {
                    value: '1',
                    label: '排队等候',
                }, {
                    value: '2',
                    label: '取消排队',
                }, {
                    value: '3',
                    label: '办理成功',
                }, {
                    value: '4',
                    label: '办理失败',
                }, {
                    value: '5',
                    label: '过号作废',
                }
                ],
                columns: null,
                data: null,
                showTable: false,

            }
        },
        components: {breadcrumb},
        mounted(){
            this.initData()
        },
        methods: {
            async initData(){
                let res = await orderList()
                // console.log(res)
                this.columns = res.columns
                this.data = res.data
                this.showTable = true
            },
            changePage(){

            }
        }
    }
</script>
