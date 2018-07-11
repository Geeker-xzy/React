// 即期表格
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Table } from 'antd';
import axios from 'axios';
import TableForm from '../components/TableForm/tableForm';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import {initDate} from "../store/action";
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
    title: '起息日',
    dataIndex: 'valueDate',
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
class Spot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            waveRange: '',
            flag: true,
            singleNumLimit: '',
            display: [],
        };
    }
    getData() {
        initDate({productType:"spot"})
    }
    render() {
        return (
            <div className="form-main">
                <TableForm />
                <div className="spinner">
                    <Spin spinning={this.props.loading} />
                </div>
                <Table
                    columns={columns}
                    dataSource={this.props.display}
                    bordered
                    pagination={false} >
                </Table>
            </div>
        )
    }
    componentDidMount() {
        this.getData();  
    }
    componentWillReceiveProps(nextProps){
        console.log(22222);
        console.log(nextProps);

    }
}
const mapStateToProps = (store) => {
    console.log(store);
    return {
        loading:store.loading,
        display:store.display,
    }
}
export default withRouter(connect(mapStateToProps)(Spot));
