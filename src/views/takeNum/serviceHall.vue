<style lang="less">
    body {
    }
</style>
<template>
    <div class="mii-serviceHall">
        <breadcrumb one="首页" two="微信取号" three="服务厅管理"></breadcrumb>
        <Card shadow>
            <Tabs value="tab1">
                <Tab-pane label="办税服务厅" name="tab1">
                    <i-input v-model="searchKey1" size="large" icon="ios-search-strong" placeholder="请输入服务厅名称或代码..."
                             style="width: 400px" @on-click="searchFwt"></i-input>
                    <br><br>
                    <Table v-if="showTable1" :columns="columns1" :data="data1"></Table>
                    <Spin v-if="!showTable1" fix size="large"></Spin>
                    <br><br>
                    <div style="margin: 10px;overflow: hidden">
                        <div style="float: right;">
                            <Page show-total :total="total1" :current="1" :page-size="pageSize"
                                  @on-change="changePage1"></Page>
                        </div>
                    </div>
                    <br><br>
                </Tab-pane>
                <Tab-pane label="业务类型" name="tab2">
                    <i-input v-model="searchKey2" size="large" icon="ios-search-strong" placeholder="请输入业务名称或代码..."
                             style="width: 400px" @on-click="searchYw"></i-input>
                    <br><br>
                    <Table v-if="showTable2" stripe :columns="columns2" :data="data2"></Table>
                    <Spin v-if="!showTable2" fix size="large"></Spin>
                    <div style="margin: 10px;overflow: hidden">
                        <div style="float: right;">
                            <Page show-total :total="total2" :current="1" :page-size="pageSize"
                                  @on-change="changePage2"></Page>
                        </div>
                    </div>
                </Tab-pane>
            </Tabs>
        </Card>
    </div>
</template>
<script type="text/ecmascript-6">
    import {serviceHallList, businessList, getBsfwtLists, getYwLists} from '@/service/getData'
    import breadcrumb from '@/components/breadcrumb.vue'

    export default{
        data(){
            return {
                searchKey1: '',
                searchKey2: '',
                columns1: '',
                columns2: '',
                data1: '',
                data2: '',
                showTable1: false,
                showTable2: false,
                total1: 0,
                total2: 0,
                pageSize: 10,
            }
        },
        components: {breadcrumb},
        mounted(){
            this.initData()
        },
        methods: {
            async initData(){
                //初始化服务厅表头
                let service_column = await serviceHallList()
                this.columns1 = service_column.columns
                //初始化业务表头
                let busniess_res = await businessList()
                this.columns2 = busniess_res.columns
                //获取业务数据
                this.getYwLists()
                //获取服务厅数据
                this.getBsfwtLists()
            },
            async getBsfwtLists(param = '', pageSize = 10, pageNumber = 1){
                let res_data = await getBsfwtLists(param, pageSize, pageNumber)
                this.data1 = res_data.resultData.list
                this.total1 = res_data.resultData.total
                this.showTable1 = true
            },
            async getYwLists(param = '', pageSize = 10, pageNumber = 1){
                let res_data = await getYwLists(param, pageSize, pageNumber)
                this.data2 = res_data.resultData.list
                this.total2 = res_data.resultData.total
                this.showTable2 = true
            },
            changePage1(page){
                this.getBsfwtLists(this.searchKey1, this.pageSize, page)
            },
            changePage2(page){
                this.getYwLists(this.searchKey2, this.pageSize, page)
            },
            searchFwt(){
                this.getBsfwtLists(this.searchKey1, this.pageSize)
            },
            searchYw(){
                this.getYwLists(this.searchKey2, this.pageSize)
            }
        }
    }
</script>
