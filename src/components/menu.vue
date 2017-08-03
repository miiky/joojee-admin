<style lang="less">
    .mii-menu{
        height: 100%;
        .ivu-card-body{
            height: 100%;
        }
        .ivu-menu{
            font-size: 16px;
            overflow: hidden;/*超出部分隐藏*/
            white-space: nowrap;/*不换行*/
            text-overflow:ellipsis;/*超出部分省略号显示*/

            .ivu-menu-item{
                font-size: 14px;
                overflow: hidden;/*超出部分隐藏*/
                white-space: nowrap;/*不换行*/
                text-overflow:ellipsis;/*超出部分省略号显示*/

            }
        }
    }
</style>
<template>
    <div class="mii-menu">
        <Card shadow style="height:100%;">
            <Menu :theme="theme" width="auto" @on-select="changeMenu" @on-open-change="openMenu"
                  :active-name="menu.menuItem" :open-names="menu.subMenuItem" style="height:100%;">
                <Submenu :name="item.value" v-for="item,index in menuList" :key="item.value">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        {{item.name}}
                    </template>
                    <Menu-item v-for="cItem in item.children" :name="cItem.path" key="cItem.value">
                        <i :class="cItem.icon"></i>
                        {{cItem.name}}
                    </Menu-item>
                </Submenu>
            </Menu>
        </Card>
    </div>
</template>
<script type="text/ecmascript-6">
    import {mapState, mapMutations, mapGetters} from 'vuex'
    import {GET_USERINFO, GET_RESOURCE, GET_MENU} from '@/store/mutation-types'

    export default{
        data(){
            return {
                theme: 'light',
                subMenuItem: null,
            }
        },
        computed: {
            ...mapGetters({
                menuList: GET_RESOURCE,
                menu: GET_MENU
            })
        },
        components: {},
        created(){
            let path = this.menu.menuItem
            this.$router.push('/home/' + path)
        },
        mounted(){

        },
        methods: {
            changeMenu(path){
                let subPath = this.subMenuItem
                //记录选中的子目录和父目录的状态
                this.$store.commit({
                    type: 'CHANGE_MENU',
                    menu: {
                        menuItem: path,
                        subMenuItem: subPath,
                    }
                })
                this.$router.push('/home/' + path)
            },
            openMenu(val){
                //记录展开的父目录
                this.subMenuItem = val
            }
        }
    }
</script>
