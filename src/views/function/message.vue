<style lang="less">
    .mii-message {
        .ivu-tabs-tab {
            font-size: 18px;
        }
        .mii-tab-pane {
            height: 500px;
            .mii-manage-push-group {

            }
            .mii-upload {
                margin: 50px 50px;
            }
        }

    }
</style>
<template>
    <div class="mii-message">
        <Card>

            <Tabs value="tab1">
                <Tab-pane label="推送" name="tab1" class="mii-tab-pane">
                    <Row type="flex" align="middle">
                        <i-col span="8">
                            <span>推送方式：</span>
                            <i-select size="large" v-model="pushStyle" style="width:200px">
                                <i-option v-for="item,index in pushStyleList" :value="item.value" :key="index">{{ item.label
                                    }}
                                </i-option>
                            </i-select>
                        </i-col>
                        <i-col span="8">
                            <span>推送对象：</span>
                            <i-select size="large" v-model="pushGroup" style="width:200px">
                                <i-option v-for="item,index in pushGroupList" :value="item.value" :key="index">{{ item.label
                                    }}
                                </i-option>
                            </i-select>
                        </i-col>
                        <i-col span="8">
                            <a class="mii-manage-push-group">
                                <Icon size="18" type="gear-a"></Icon>
                                管理推送对象</a>
                        </i-col>
                    </Row>
                    <Upload class="mii-upload"
                            multiple
                            type="drag"
                            action="//jsonplaceholder.typicode.com/posts/">
                        <div style="padding: 20px 0">
                            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                            <p>点击或将文件拖拽到这里上传</p>
                        </div>
                    </Upload>


                </Tab-pane>
                <Tab-pane label="推送记录" name="tab2">
                    <div>
                        推送记录
                    </div>
                </Tab-pane>
            </Tabs>
        </Card>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        data(){
            return {
                pushStyle: '',
                pushStyleList: [{
                    value: '1',
                    label: '税企通平台'
                }, {
                    value: '2',
                    label: '短信平台'
                }, {
                    value: '3',
                    label: '微信平台'
                }
                ],
                pushGroup: '',
                pushGroupList: [{
                    value: '1',
                    label: '分组1'
                }, {
                    value: '2',
                    label: '分组2'
                }, {
                    value: '3',
                    label: '分组3'
                }
                ],
            }
        },
        components: {}
    }
</script>
