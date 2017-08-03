<style lang="less">
</style>
<template>
    <div>
        <Card shadow style="height: 50px;margin-bottom:1px">
            <Breadcrumb style="float: left; border-left: 5px solid #9ea7b4; padding-left: 10px;">
                <Breadcrumb-item>{{one}}</Breadcrumb-item>
                <Breadcrumb-item>{{two}}</Breadcrumb-item>
                <Breadcrumb-item>{{three}}</Breadcrumb-item>
            </Breadcrumb>
        </Card>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        props:['one','two','three'],
        data(){
            return{
            }
        },
        components:{
        }
    }
</script>
