<style lang="less">
    .mii-user {

    }
</style>
<template>
    <div class="mii-user">
        <breadcrumb one="首页" two="系统管理" three="用户管理"></breadcrumb>
        <Card>
            <Table v-if="showTable" :columns="columns" :data="data" ></Table>
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
    import {userList} from '@/service/getData'

    export default{
        data(){
            return {
                columns: null,
                data: null,
                showTable: false
            }
        },
        components: {breadcrumb},
        mounted(){
            this.initData()
        },
        methods: {
            async initData(){
                let res = await userList()
                this.columns = res.columns
                this.data = res.userList
                this.showTable = true
            },
            changePage(){

            }
        }
    }
</script>
