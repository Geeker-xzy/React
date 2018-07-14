import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Table } from 'antd';
import axios from 'axios';
import TableForm from '../components/TableForm/tableForm';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import { initDate } from "../store/action";
const columns = [
    { title: '期权类型', width: 120, dataIndex: 'optionType',fixed:'left', key: '1',render: text => <a href="javascript:;">{text}</a>, align: 'center', },
    { title: '期权子类', dataIndex: 'subType', key: '2', width: 120, align: 'center', },
    { title: '货币对', width: 120, dataIndex: 'cyPairCode', key: '3', align: 'center', },
    { title: '看涨买价', dataIndex: 'safeHigh', key: '3', width: 120, align: 'center', },
    { title: '看涨卖价', dataIndex: 'safeRate', key: '4', width: 120, align: 'center', },
    { title: '看跌买价', dataIndex: 'bidVolume', key: '5', width: 120, align: 'center', },
    { title: '看跌卖价', dataIndex: 'askVolume', key: '6', width: 120, align: 'center', },
    { title: '即期买价', dataIndex: 'updateDate', key: '7', width: 120, align: 'center', },
    { title: '即期卖价', dataIndex: 'updateTime', key: '8', width: 120, align: 'center', },
    { title: '模式', dataIndex: 'updateDate', key: '9', width: 120, align: 'center', },
    { title: 'Delta', dataIndex: 'updateTime', key: '10', width: 120, align: 'center', },
    { title: '协定汇率', dataIndex: 'updateDate', key: '11', width: 120, align: 'center', },
    { title: '触碰上限', dataIndex: 'updateTime', key: '12', width: 120, align: 'center', },
    { title: '触碰下限', dataIndex: 'updateDate', key: '13', width: 120, align: 'center', },
    { title: '协定汇率点差', dataIndex: 'updateTime', key: '14', width: 160, align: 'center', },
    { title: '触碰上限点差', dataIndex: 'updateDate', key: '15', width: 160, align: 'center', },
    { title: '到期日模式', dataIndex: 'updateTime', key: '16', width: 150, align: 'center', },
    { title: '面值货币', dataIndex: 'updateTime', key: '17', width: 120, align: 'center', },
    { title: '期权费率货币', dataIndex: 'updateTime', key: '18', width: 160, align: 'center', },
    { title: '更新日期', dataIndex: 'updateTime', key: '19', width: 120, align: 'center', },
    { title: '更新时间', dataIndex: 'updateTime', key: '20', width: 120, align: 'center', }
    
];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London`,
        cyPaircode: 'USDCNY',
        volume: '10000',
        quoteUnit: '100',
        safeLow: '100',
        safeRate: '200',
        safeHigh:'300',
        askVolume: '10000',
        bidVolume: '100000',
        valueDate: '18-09-07',
        updateDate: '18-07-04',
        updateTime: '18-07-09',
        optionType:'障碍'
    });
}

class Option extends Component {

    render() {
        return (
            <div className="form-main">
                <TableForm />
                <div className="spinner">
                    <Spin />
                </div>
                <Table columns={columns} dataSource={data} scroll={{x:2500,y: 459 }}
                    pagination={false} />
            </div>

        )

    }
}
export default Option;
