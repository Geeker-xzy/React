// 即期表格
import React, { Component } from 'react'
import { Table } from 'antd';
import axios from 'axios';
// 列名
const columns = [{
    title: '货币对',
    dataIndex: 'cyPairCode',
    render: text => <a href="javascript:;">{text}</a>,
    align: 'center'
},
{
    title: '报价单位',
    className: 'column-money',
    dataIndex: 'quoteUnit',
    align: 'center'
},
{
    title: '买价',
    dataIndex: 'bid',
    align: 'center'
},
{
    title: '卖价',
    dataIndex: 'ask',
    align: 'center'
},
{
    title: '中间价',
    dataIndex: 'mid',
    align: 'center'
},
{
    title: '价格状态',
    dataIndex: 'priceState',
    align: 'center'
},
{
    title: '更新日期',
    dataIndex: 'updateDate',
    align: 'center'
},
{
    title: '更新时间',
    dataIndex: 'updateTime',
    align: 'center'
},
];
class Spotv extends Component {
    constructor(props) {
        super(props);
        this.state = { data: data };
    }
    render() {
        return (
            <Table
                columns={columns}
                dataSource={this.state.data}
                bordered
                pagination={false} />
        )
    }
}

export default Spotv;
