import React, { Component } from 'react'
import { Table } from 'antd';
import axios from 'axios';

const columns = [{
    title: '货币对',
    dataIndex: 'cyPairCode',
    render: text => <a href="javascript:;">{text}</a>,
    align: 'center'
}, {
    title: '报价单位',
    className: 'column-money',
    dataIndex: 'feedCode',
    align: 'center'
}, {
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

let data = [
    {
        key: '1',
        cyPairCode: 'AUDUSD',
        feedCode: 'RMDS',
        bid: '1.23',
        ask: '2.34',
        mid: '1.87',
        priceState: 'Y',
        updateDate: '18-07-03',
        updateTime: '18:23:54'
    },
    {
        key: '2',
        cyPairCode: 'AUDCNY',
        feedCode: 'RMDS',
        bid: '2.23',
        ask: '2.34',
        mid: '1.87',
        priceState: 'Y',
        updateDate: '18-07-03',
        updateTime: '18:23:54'
    },
    {
        key: '3',
        cyPairCode: 'CADUSD',
        feedCode: 'RMDS',
        bid: '1.23',
        ask: '2.34',
        mid: '1.87',
        priceState: 'Y',
        updateDate: '18-07-03',
        updateTime: '18:23:54'
    },
    {
        key: '4',
        cyPairCode: 'AUDUSD',
        feedCode: 'RMDS',
        bid: '1.23',
        ask: '2.34',
        mid: '1.87',
        priceState: 'Y',
        updateDate: '18-07-03',
        updateTime: '18:23:54'
    },
    {
        key: '5',
        cyPairCode: 'AUDCNY',
        feedCode: 'RMDS',
        bid: '2.23',
        ask: '2.34',
        mid: '1.87',
        priceState: 'Y',
        updateDate: '18-07-03',
        updateTime: '18:23:54'
    },
    {
        key: '6',
        cyPairCode: 'CADUSD',
        feedCode: 'RMDS',
        bid: '1.23',
        ask: '2.34',
        mid: '1.87',
        priceState: 'Y',
        updateDate: '18-07-03',
        updateTime: '18:23:54'
    },
    {
        key: '7',
        cyPairCode: 'AUDUSD',
        feedCode: 'RMDS',
        bid: '1.23',
        ask: '2.34',
        mid: '1.87',
        priceState: 'Y',
        updateDate: '18-07-03',
        updateTime: '18:23:54'
    },
    {
        key: '8',
        cyPairCode: 'AUDCNY',
        feedCode: 'RMDS',
        bid: '2.23',
        ask: '2.34',
        mid: '1.87',
        priceState: 'Y',
        updateDate: '18-07-03',
        updateTime: '18:23:54'
    },
    {
        key: '9',
        cyPairCode: 'CADUSD',
        feedCode: 'RMDS',
        bid: '1.23',
        ask: '2.34',
        mid: '1.87',
        priceState: 'Y',
        updateDate: '18-07-03',
        updateTime: '18:23:54'
    },
    {
        key: '10',
        cyPairCode: 'AUDUSD',
        feedCode: 'RMDS',
        bid: '1.23',
        ask: '2.34',
        mid: '1.87',
        priceState: 'Y',
        updateDate: '18-07-03',
        updateTime: '18:23:54'
    },
    {
        key: '11',
        cyPairCode: 'AUDCNY',
        feedCode: 'RMDS',
        bid: '2.23',
        ask: '2.34',
        mid: '1.87',
        priceState: 'Y',
        updateDate: '18-07-03',
        updateTime: '18:23:54'
    },
    {
        key: '12',
        cyPairCode: 'CADUSD',
        feedCode: 'RMDS',
        bid: '1.23',
        ask: '2.34',
        mid: '1.87',
        priceState: 'Y',
        updateDate: '18-07-03',
        updateTime: '18:23:54'
    },
    {
        key: '13',
        cyPairCode: 'AUDUSD',
        feedCode: 'RMDS',
        bid: '1.23',
        ask: '2.34',
        mid: '1.87',
        priceState: 'Y',
        updateDate: '18-07-03',
        updateTime: '18:23:54'
    },
    {
        key: '14',
        cyPairCode: 'AUDCNY',
        feedCode: 'RMDS',
        bid: '2.23',
        ask: '2.34',
        mid: '1.87',
        priceState: 'Y',
        updateDate: '18-07-03',
        updateTime: '18:23:54'
    },
    {
        key: '15',
        cyPairCode: 'CADUSD',
        feedCode: 'RMDS',
        bid: '1.23',
        ask: '2.34',
        mid: '1.87',
        priceState: 'Y',
        updateDate: '18-07-03',
        updateTime: '18:23:54'
    },
    {
        key: '16',
        cyPairCode: 'AUDUSD',
        feedCode: 'RMDS',
        bid: '1.23',
        ask: '2.34',
        mid: '1.87',
        priceState: 'Y',
        updateDate: '18-07-03',
        updateTime: '18:23:54'
    },
    {
        key: '17',
        cyPairCode: 'AUDCNY',
        feedCode: 'RMDS',
        bid: '2.23',
        ask: '2.34',
        mid: '1.87',
        priceState: 'Y',
        updateDate: '18-07-03',
        updateTime: '18:23:54'
    },
    {
        key: '18',
        cyPairCode: 'CADUSD',
        feedCode: 'RMDS',
        bid: '1.23',
        ask: '2.34',
        mid: '1.87',
        priceState: 'Y',
        updateDate: '18-07-03',
        updateTime: '18:23:54'
    }
];

class Spot extends Component {
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
    componentDidMount() {
        setInterval(function (params) {
            data = data.map(function (item) {
                item.ask = parseInt(item.ask) + 1
                item.bid = parseInt(item.bid) + 1
                item.mid = parseInt(item.mid) + 1
                item.updateTime = new Date().getTime().toFixed(2);
                // item.key = parseInt(Math.random(100))
                return item;
              })
            // data[0].ask = Number(data[0].ask) + 1
            this.setState({data:data})
            // axios({
            //     method:'post',
            //     url:'192.168.1.1/user/12345',
            //     data:{
            //         data
            //     }
            // });
        }.bind(this), 1000)
        
    }
}

export default Spot;
