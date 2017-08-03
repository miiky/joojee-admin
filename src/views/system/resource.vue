<style lang="less">
    .mii-resource {
    }
</style>
<template>
    <div class="mii-resource">
        <Card shadow>
            <Breadcrumb style="float: left; border-left: 5px solid #9ea7b4; padding-left: 10px;">
                <Breadcrumb-item>首页</Breadcrumb-item>
                <Breadcrumb-item>系统</Breadcrumb-item>
                <Breadcrumb-item>资源管理</Breadcrumb-item>
            </Breadcrumb>
            <br><br>
            <Row :gutter="10">
                <i-col span="8">
                    <Card>
                        <p slot="title"><i class="fa fa-tree"></i>&nbsp;系统资源树</p>
                        <a href="#" slot="extra">
                            <Icon type="ios-loop-strong"></Icon>
                            &nbsp;刷新
                        </a>
                        <div id="resource_tree"></div>
                    </Card>
                </i-col>
                <i-col span="16">
                    <Card>
                        <p slot="title"><i class="fa fa-tree"></i>&nbsp;资源属性详情</p>
                        <Table border :columns="columns" :data="data"></Table>
                    </Card>
                </i-col>
            </Row>

        </Card>
    </div>
</template>
<script type="text/ecmascript-6">
    import {resource} from '@/service/getData'
    export default{
        data(){
            return {
                data: [],
                columns: [{
                    title: '资源名',
                    key: 'key',
                }, {
                    title: '资源值',
                    key: 'value',
                }, {
                    title: '操作',
                    // width: 100,
                    // fixed: 'right',
                    align: 'center',
                    key: 'action',
                    render: (h, params) => {
                        let self = this
                        self.value = params.row.value
                        return h('Poptip', {
                            props: {
                                title: '标题',
                                // placement: 'left-start',
                                confirm: true,
                                transfer: true,
                            },
                            on: {
                                'on-ok': () => {
                                    let item = self.data[params.row._index]
                                    item.value = this.value
                                    // console.log(item)
                                    self.data.splice(params.row._index, 1, item)
                                }
                            }
                        }, [
                            h('div', {
                                slot: 'title',
                                props: {}
                            }, [
                                h('p', {}, '是否修改资源值:'),
                                h('i-input', {
                                    props: {
                                        value: self.value,
                                        refs: params.row._index,
                                    },
                                    style: {
                                        marginTop: '10px',
                                    },
                                    on: {
                                        input: function (e) {
                                            self.value = e
                                        }
                                    }
                                })
                            ]),
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                }
                            }, '修改')

                        ]);
                    }
                }
                ],
            }
        },
        components: {},
        watch: {
            inputValue: function (val) {
                console.log(val)

            }
        },
        mounted(){
            this.initTree()
        },
        methods: {
            async initTree(){
                let _this = this
                let _data = await resource()
                let tree = _data.menuList

                // 初始化资源树结构
                $("#resource_tree").jstree({
                    "core": {
                        "themes": {
                            "responsive": false
                        },
                        // so that create works
                        "check_callback": true,
                        'data': tree
                    },
                    "plugins": ["contextmenu", "state"],
                }).bind("loaded.jstree", function (event, data) {
                    // 初始化
                }).bind("select_node.jstree", function (event, data) {
                    // 选中
                    let item = data.node
                    _this.getResourceDetail(tree, item.id)

                }).bind("create_node.jstree", function (e, data) {
                    // 新建
                }).bind("rename_node.jstree", function (e, data) {
                }).bind("delete_node.jstree", function (e, data) {
                });
            },
            getResourceDetail(data, id){
                let resultItem = null
                //从资源列表中找到选中的节点
                for (let item of data) {
                    if (item.id == id) {
                        resultItem = item
                        break
                    }
                    if (item.children) {
                        for (let childrenItem of item.children) {
                            if (childrenItem.id == id) {
                                resultItem = childrenItem
                                break
                            }
                        }
                    }
                }
                // 通过模板构造详情需要的数据结构
                let data_temp = [{
                    key: '资源名称',
                    value: resultItem.name
                }, {
                    key: '资源图标',
                    value: resultItem.icon
                }, {
                    key: '资源路径',
                    value: resultItem.path
                }, {
                    key: '资源排序字典',
                    value: '1'
                }, {
                    key: '资源描述',
                    value: resultItem.value
                }
                ]
                // 赋值给明细数据
                this.data = data_temp

            }
        }
    }
</script>
