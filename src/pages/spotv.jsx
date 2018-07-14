import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Table } from 'antd';
import axios from 'axios';
import TableForm from '../components/TableForm/tableForm';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import { initDate } from "../store/action";
const columns = [
    { title: '货币对', width: 120, dataIndex: 'cyPaircode', key: 'name', fixed: 'left', render: text => <a href="javascript:;">{text}</a>, align: 'center', },
    { title: '交易量', width: 120, dataIndex: 'volume', key: 'age', fixed: 'left', align: 'center', },
    { title: '买价编号', dataIndex: 'address', key: '1', width: 120, align: 'center', },
    { title: '卖价编号', dataIndex: 'address', key: '2', width: 120, align: 'center', },
    { title: '报价单位 ', dataIndex: 'quoteUnit', key: '3', width: 120, align: 'center', },
    { title: '买价', dataIndex: 'bid', key: '4', width: 120, align: 'center', },
    { title: '卖价', dataIndex: 'ask', key: '5', width: 120, align: 'center', },
    { title: '买价量', dataIndex: 'bidVolume', key: '6', width: 120, align: 'center', },
    { title: '卖价量', dataIndex: 'askVolume', key: '7', width: 120, align: 'center', },
    { title: '起息日', dataIndex: 'valueDate', key: '8', width: 120, align: 'center', },
    { title: '更新日期', dataIndex: 'updateDate', key: '9', width: 120, align: 'center', },
    { title: '更新时间', dataIndex: 'updateTime', key: '10', width: 120, align: 'center', }
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
        bid: '100',
        ask: '200',
        askVolume: '10000',
        bidVolume: '100000',
        valueDate: '18-09-07',
        updateDate: '18-07-04',
        updateTime: '18-07-09'
    });
}

class Spotv extends Component {

    render() {
        return (
            <div className="form-main">
                <TableForm />
                <div className="spinner">
                    <Spin />
                </div>
                <Table columns={columns} dataSource={data} scroll={{ x: 1400, y: 459 }}
                bordered
                    pagination={false} />
            </div>

        )

    }
}
export default Spotv;
