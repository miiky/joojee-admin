/**
 * Created by yangchunyuan on 2017/7/20.
 */
export const serviceHall_list = {
    serviceHallList: {
        columns: [{
            title: '服务厅代码',
            key: 'fwtDm',
        }, {
            title: '服务厅名称',
            key: 'fwtMc',
        }, {
            title: '所属区局',
            key: 'zgswjMc'
        }, {
            title: '服务厅地址',
            key: 'fwtDz'
        }, {
            title: '大厅办理业务',
            key: 'business',
            align: 'center',
            render: (h, params) => {
                return h('Poptip', {
                    props: {
                        trigger: 'hover',
                        title: params.row.ywLists.length + '个业务',
                        placement: 'bottom'
                    }
                }, [
                    h('Tag', params.row.ywLists.length + '个业务'),
                    h('div', {
                        slot: 'content'
                    }, [
                        h('ul', params.row.ywLists.map(item => {
                            return h('li', {
                                style: {
                                    textAlign: 'center',
                                    padding: '4px'
                                }
                            }, item.ywMc)
                        }))
                    ])
                ]);
            }
        }],
        data: [{
            fwtDm: 'H0031',
            fwtMc: '江岸区国税局办税服务厅',
            zgswjMc: '江岸区国税局',
            fwtDz: '湖北省武汉市洪山区武珞路796号',
            ywLists: [{
                ywDm: '2010',
                ywMc: '综合服务'
            },{
                ywDm: '2017',
                ywMc: '发票发售'
            },{
                ywDm: '2019',
                ywMc: '文书受理'
            }]
        }, {
            fwtDm: 'H0027',
            fwtMc: '江岸区国税局办税服务厅一楼',
            zgswjMc: '江岸区国税局',
            fwtDz: '湖北省武汉市洪山区珞瑜路540号东湖新技术开发区管委会6楼',
            ywLists: [{
                ywDm: '2010',
                ywMc: '综合服务'
            },{
                ywDm: '2017',
                ywMc: '发票发售'
            }]
        }, {
            fwtDm: 'H0029',
            fwtMc: '江岸区国税局办税服务厅二楼',
            zgswjMc: '江岸区国税局',
            fwtDz: '湖北省武汉市洪山区武珞路796号',
            ywLists: [{
                ywDm: '2010',
                ywMc: '综合服务'
            },{
                ywDm: '2017',
                ywMc: '发票发售'
            },{
                ywDm: '2019',
                ywMc: '文书受理'
            }]
        }, {
            fwtDm: 'W0016',
            fwtMc: '武昌区国税局办税服务厅',
            zgswjMc: '武昌区国税局',
            fwtDz: '湖北省武汉市洪山区珞瑜路540号东湖新技术开发区管委会6楼',
            ywLists: [{
                ywDm: '2010',
                ywMc: '综合服务'
            },{
                ywDm: '2017',
                ywMc: '发票发售'
            },{
                ywDm: '2019',
                ywMc: '文书受理'
            }]
        }, {
            fwtDm: 'W0015',
            fwtMc: '武昌区国税局办税服务厅二厅',
            zgswjMc: '武昌区国税局',
            fwtDz: '湖北省武汉市洪山区武珞路796号',
            ywLists: [{
                ywDm: '2010',
                ywMc: '综合服务'
            },{
                ywDm: '2017',
                ywMc: '发票发售'
            },{
                ywDm: '2019',
                ywMc: '文书受理'
            }]
        }],
    },
    businessList: {
        columns: [{
            title: '业务代码',
            key: 'ywDm'
        }, {
            title: '业务名称',
            key: 'ywMc'
        }, {
            title: '是否同城通办',
            key: 'tctb',
            render: (h, params) => {
                const row = params.row;
                const color = row.tctb === 'Y' ? 'blue' : 'red';
                const text = row.tctb === 'Y' ? '是' : '否';
                return h('Tag', {
                    props: {
                        type: 'dot',
                        color: color
                    }
                }, text);
            }
        }, {
            title: '状态',
            key: 'status',
            render: (h, params) => {
                const row = params.row;
                const color = row.status === 'Y' ? 'blue' : 'red';
                const text = row.status === 'Y' ? '启用' : '禁用';
                return h('Tag', {
                    props: {
                        type: 'dot',
                        color: color
                    }
                }, text);
            }
        }],
        data: [{
            businessCode: '1001',
            businessName: '税务登记',
            forAll: 'Y',
            status: 'N',
        }, {
            businessCode: '1002',
            businessName: '申报纳税',
            forAll: 'N',
            status: 'N',
        }, {
            businessCode: '1003',
            businessName: '发票管理',
            forAll: 'N',
            status: 'Y',
        }, {
            businessCode: '1004',
            businessName: '发票认证',
            forAll: 'Y',
            status: 'Y',
        }, {
            businessCode: '1005',
            businessName: '文书受理',
            forAll: 'Y',
            status: 'Y',
        }, {
            businessCode: '1006',
            businessName: '代开发票',
            forAll: 'N',
            status: 'Y',
        }, {
            businessCode: '1007',
            businessName: '综合服务',
            forAll: 'Y',
            status: 'N',
        }, {
            businessCode: '1008',
            businessName: '发票领用',
            forAll: 'Y',
            status: 'Y',
        }],
    }
}
