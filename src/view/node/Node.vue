<template>
    <div class="node">
        <side-bar @node="node_click"></side-bar>
        <div class="left">
            <vxe-grid
                    resizable
                    export-config
                    border
                    height="1000"
                    :loading="loading"
                    :form-config="tableForm"
                    :toolbar="tableToolbar"
                    :data="tableData"
                    :columns="tableColumn"
                    :checkbox-config="{checkField: 'checked', labelField: 'id', reserve: true, highlight: true, range: true}"
                    :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
                    ref='xTable'
                    @form-submit="findList">
            </vxe-grid>
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
    import SideBar from "../../components/content/SideBar/SideBar";
    import  {getSubtypeData} from "network/subtype_data.js";
    import Vue from 'vue'
    import 'xe-utils'
    import VXETable from 'vxe-table'
    import 'vxe-table/lib/index.css'

    Vue.use(VXETable)
    export default {

        name: "Node",
        components:{
            SideBar
        },
        data () {
            return {
                loading: false,
                tableData: [
                ],
                roleList: [
                    {
                        label: 'Start',
                        value: '1',
                        disabled: false
                    },
                    {
                        label: 'Stop',
                        value: '2',
                        disabled: false
                    },
                    {
                        label: 'Reboot',
                        value: '3',
                        disabled: false
                    },
                    {
                        label: 'Check',
                        value: '4',
                        disabled: false
                    },
                ],
                roleList1: [
                    {
                        label: '正常',
                        value: '1',
                        disabled: false
                    },
                    {
                        label: '虚警',
                        value: '2',
                        disabled: false
                    },
                    {
                        label: '故障',
                        value: '3',
                        disabled: false
                    },
                ],
                tableForm: {
                    items: [
                        {field: 'id', title: 'ID', itemRender: {name: 'input', attrs: {placeholder: '请输入要查询的ID'}}},
                        {field: 'state', title: '状态', itemRender: {name: '$select', options: [],events: {change: this.roleChangeEvent}}},
                        {itemRender: {name: '$button', props: {content: '查询', type: 'submit', status: 'primary'}}},
                        {itemRender: {name: '$button', props: {content: '重置', type: 'reset'}}}
                    ]
                },
                tableToolbar: {
                    export: false,
                    custom: false
                },
                tableColumn: [
                    {field: 'id', title: 'ID',align:'center'},
                    {field: 'sendtime', title: '最近发送数据时间',align:'center'},
                    {field: 'longtitude', title: '经度',align:'center'},
                    {field: 'latitude', title: '纬度',align:'center'},
                    {field: 'status', title: '状态',align:'center'},
                    {field: 'manage', title: '管理',align:'center', showOverflow: true,
                        editRender: {type:'visible',name: '$select', options: [],props: {clearable: true}, events: {change: this.roleChangeEvent}}},
                    { field: 'model',type: 'checkbox', title: '模型更新',align:'center' }
                ]

            }
        },
        created () {
                getSubtypeData("10001").then(res=>{
                    this.tableData = res
                    for(let i in this.tableData){
                        //将状态转换成中文
                        if(this.tableData[i].status === 0){
                            this.tableData[i].status = '正常'
                        }else if(i.status === 1){
                            this.tableData[i].status = '虚警'
                        }else{
                            this.tableData[i].status = '故障'
                        }
                        //将时间中的英文去除
                        var str =  this.tableData[i].sendtime;
                        //将.后的字符串删除
                        str=str.substring(0,str.indexOf("."))
                        //将时间中的T换成空格
                        this.tableData[i].sendtime = str.replace('T'," ");
                    }
                })

            this.tableColumn[5].editRender.options = this.roleList
            this.tableForm.items[1].itemRender.options = this.roleList1
        },
        methods: {

            //获取SideBar的点击事件
            node_click(id,name){
                console.log(id);
                console.log(name);
                //根据id从数据库中取出对应数据
                getSubtypeData(id).then(res=>{
                    console.log(res);
                   this.tableData = res

                    for(let i in this.tableData){
                        console.log(this.tableData[i]);
                        if(this.tableData[i].status === 0){
                            this.tableData[i].status = '正常'
                        }else if(i.status === 1){
                            this.tableData[i].status = '虚警'
                        }else{
                            this.tableData[i].status = '故障'
                        }
                        var str =  this.tableData[i].sendtime;
                        //将.后的字符串删除
                        str=str.substring(0,str.indexOf("."))
                        //将时间中的T换成空格
                        this.tableData[i].sendtime = str.replace('T'," ");
                    }
                })
            },

            updateRoleList () {
                // 获取表格中的全量数据
                let { fullData } = this.$refs.xTable.getTableData()
                this.roleList.forEach(item => {
                    if (item.value) {
                        // 如果当前选项已经被选过，则禁用
                       // item.disabled = fullData.some(row => row.manage === item.value)
                    }
                })
            },
            roleChangeEvent ({ row }) {
                this.updateRoleList()
            },
            findList () {
                //提交表单后，将数据写入数据库
                // this.loading = true
                // XEAjax.get('/api/user/list', this.tableForm.data).then(data => {
                //     this.tableData = data
                //     this.loading = false
                // })
            }

        }
    }
</script>

<style scoped>
    .node{
        height: 1000px;
        background: #1b7aee;
    }
    .left{
        background: #1b7aee;
        width: 81%;
        height: 800px;
        margin-left: 15px;
    }
    .right{
        width: 1%;
        height: 800px;
        background: #1b7aee;
    }
</style>