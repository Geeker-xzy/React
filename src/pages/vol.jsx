// `// 即期表格
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Table } from 'antd';
import axios from 'axios';
import TableForm from '../components/TableForm/tableForm';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import { initDate } from "../store/action";
// 列名
const columns = [
    { title: '货币对', dataIndex: 'cyPairCode',fixed: 'left', render: text => <a href="javascript:;">{text}</a>, align: 'center', width: 120 },
    { title: 'Dealta值', dataIndex: 'delata', align: 'center', width: 120 },
    { title: '期限', dataIndex: 'periodCode', align: 'center', width: 120 },
    { title: '买价', dataIndex: 'bid', align: 'center', width: 120 },
    { title: '卖价', dataIndex: 'ask', align: 'center', width: 120 },
    { title: '中间价', dataIndex: 'mid', align: 'center', width: 120 },
    { title: '交易状态', dataIndex: 'tradeState', align: 'center', width: 120 },
    { title: '起息日', dataIndex: 'valueDate', align: 'center', width: 120 },
    { title: '到期日', dataIndex: 'maturityDate', align: 'center', width: 120 },
    { title: '更新日期', dataIndex: 'updateDate', align: 'center', width: 120 },
    { title: '更新时间', dataIndex: 'updateTime', align: 'center', width: 120 },
];
class Vol extends Component {
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
        initDate({ productType: "spot", url: 'example/query.action' })
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
                    pagination={false}
                    bordered
                    scroll={{ x: 1100, y: 481 } }
                >
                </Table>
            </div>
        )
    }
    componentDidMount() {
        this.getData();
    }
    componentWillReceiveProps(nextProps) {
        // console.log(22222);
        // console.log(nextProps);

    }
}
const mapStateToProps = (store) => {
    console.log(store);
    return {
        loading: store.spot.loading,
        display: store.spot.display
    }
}
export default withRouter(connect(mapStateToProps)(Vol));
