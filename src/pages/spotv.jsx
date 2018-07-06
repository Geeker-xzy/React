// 即期表格
import React, { Component } from 'react'
import { Table } from 'antd';
import axios from 'axios';
import TableForm from '../components/TableForm/tableForm';
// 列名
const columns = [{
    title: '货币对',
    dataIndex: 'cyPairCode',
    render: text => <a href="javascript:;">{text}</a>,
    align: 'center'
}, {
    title: '报价单位',
    className: 'column-money',
    dataIndex: 'quoteUnit',
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
    title:'起息日',
    dataIndex:'valuedate',
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

// let data = [
//     {
//         key: '1',
//         cyPairCode: 'AUDUSD',
//         quoteUnit: '1',
//         bid: '1.23',
//         ask: '2.34',
//         mid: '1.87',
//         priceState: 'Y',
//         updateDate: '18-07-03',
//         updateTime: '18:23:54'
//     },
//     {
//         key: '2',
//         cyPairCode: 'AUDCNY',
//         quoteUnit: '1',
//         bid: '2.23',
//         ask: '2.34',
//         mid: '1.87',
//         priceState: 'Y',
//         updateDate: '18-07-03',
//         updateTime: '18:23:54'
//     },
//     {
//         key: '3',
//         cyPairCode: 'CADUSD',
//         quoteUnit: '1',
//         bid: '1.23',
//         ask: '2.34',
//         mid: '1.87',
//         priceState: 'Y',
//         updateDate: '18-07-03',
//         updateTime: '18:23:54'
//     },
//     {
//         key: '4',
//         cyPairCode: 'AUDUSD',
//         quoteUnit: '1',
//         bid: '1.23',
//         ask: '2.34',
//         mid: '1.87',
//         priceState: 'Y',
//         updateDate: '18-07-03',
//         updateTime: '18:23:54'
//     },
//     {
//         key: '5',
//         cyPairCode: 'AUDCNY',
//         quoteUnit: '1',
//         bid: '2.23',
//         ask: '2.34',
//         mid: '1.87',
//         priceState: 'Y',
//         updateDate: '18-07-03',
//         updateTime: '18:23:54'
//     },
//     {
//         key: '6',
//         cyPairCode: 'CADUSD',
//         quoteUnit: '1',
//         bid: '1.23',
//         ask: '2.34',
//         mid: '1.87',
//         priceState: 'Y',
//         updateDate: '18-07-03',
//         updateTime: '18:23:54'
//     },
//     {
//         key: '7',
//         cyPairCode: 'AUDUSD',
//         quoteUnit: '1',
//         bid: '1.23',
//         ask: '2.34',
//         mid: '1.87',
//         priceState: 'Y',
//         updateDate: '18-07-03',
//         updateTime: '18:23:54'
//     },
//     {
//         key: '8',
//         cyPairCode: 'AUDCNY',
//         quoteUnit: '1',
//         bid: '2.23',
//         ask: '2.34',
//         mid: '1.87',
//         priceState: 'Y',
//         updateDate: '18-07-03',
//         updateTime: '18:23:54'
//     },
//     {
//         key: '9',
//         cyPairCode: 'CADUSD',
//         quoteUnit: '1',
//         bid: '1.23',
//         ask: '2.34',
//         mid: '1.87',
//         priceState: 'Y',
//         updateDate: '18-07-03',
//         updateTime: '18:23:54'
//     },
//     {
//         key: '10',
//         cyPairCode: 'AUDUSD',
//         quoteUnit: '1',
//         bid: '1.23',
//         ask: '2.34',
//         mid: '1.87',
//         priceState: 'Y',
//         updateDate: '18-07-03',
//         updateTime: '18:23:54'
//     },
//     {
//         key: '11',
//         cyPairCode: 'AUDCNY',
//         quoteUnit: '1',
//         bid: '2.23',
//         ask: '2.34',
//         mid: '1.87',
//         priceState: 'Y',
//         updateDate: '18-07-03',
//         updateTime: '18:23:54'
//     },
//     {
//         key: '12',
//         cyPairCode: 'CADUSD',
//         quoteUnit: '1',
//         bid: '1.23',
//         ask: '2.34',
//         mid: '1.87',
//         priceState: 'Y',
//         updateDate: '18-07-03',
//         updateTime: '18:23:54'
//     },
//     {
//         key: '13',
//         cyPairCode: 'AUDUSD',
//         quoteUnit: '1',
//         bid: '1.23',
//         ask: '2.34',
//         mid: '1.87',
//         priceState: 'Y',
//         updateDate: '18-07-03',
//         updateTime: '18:23:54'
//     },
//     {
//         key: '14',
//         cyPairCode: 'AUDCNY',
//         quoteUnit: '1',
//         bid: '2.23',
//         ask: '2.34',
//         mid: '1.87',
//         priceState: 'Y',
//         updateDate: '18-07-03',
//         updateTime: '18:23:54'
//     },
//     {
//         key: '15',
//         cyPairCode: 'CADUSD',
//         quoteUnit: '1',
//         bid: '1.23',
//         ask: '2.34',
//         mid: '1.87',
//         priceState: 'Y',
//         updateDate: '18-07-03',
//         updateTime: '18:23:54'
//     },
//     {
//         key: '16',
//         cyPairCode: 'AUDUSD',
//         quoteUnit: '1',
//         bid: '1.23',
//         ask: '2.34',
//         mid: '1.87',
//         priceState: 'Y',
//         updateDate: '18-07-03',
//         updateTime: '18:23:54'
//     },
//     {
//         key: '17',
//         cyPairCode: 'AUDCNY',
//         quoteUnit: '1',
//         bid: '2.23',
//         ask: '2.34',
//         mid: '1.87',
//         priceState: 'Y',
//         updateDate: '18-07-03',
//         updateTime: '18:23:54'
//     },
//     {
//         key: '18',
//         cyPairCode: 'CADUSD',
//         quoteUnit: '1',
//         bid: '1.23',
//         ask: '2.34',
//         mid: '1.87',
//         priceState: 'Y',
//         updateDate: '18-07-03',
//         updateTime: '18:23:54'
//     }
// ];

class Spot extends Component {
    constructor(props) {
        super(props);
        this.state = { data:[] };
        this.getData=this.getData.bind(this);
    }

    getData(){
        axios({url:'https://www.easy-mock.com/mock/5b3c97542eeb5562d4de71ff/example/query.action',method:"GET"}).then((data)=>{
            this.setState({data:data.data.data}) 
        })
        
    }

    render() {
        return (
            <div className="form-main">
            <TableForm/>
            <Table
                columns={columns}
                dataSource={this.state.data}
                bordered
                pagination={false} />
                </div>
        )
    }
    componentDidMount() {
        this.getData();
        // setInterval(function (params) {
        //     let data = this.state.data.map(function (item,i) {
        //         item.ask = parseInt(item.ask) + 1
        //         item.bid = parseInt(item.bid) + 1
        //         item.mid = parseInt(item.mid) + 1
        //         item.updateTime = new Date().getTime().toFixed(2);
        //         return item;
        //       })
        //       console.log(data.length);
        //     this.setState({data:data})
        // }.bind(this), 1000)
        
    }
}

export default Spot;
