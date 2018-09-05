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
    { title: '商品代码', dataIndex: 'bstkCode', fixed: 'left',render: text => <a href="javascript:;">{text}</a>, align: 'center', width: 120 },
    { title: '期限', dataIndex: 'periodCode',fixed: 'left', align: 'center', width: 120 },
    { title: '期限展开方式', dataIndex: 'type', align: 'center', width: 150 },
    { title: '中间价', dataIndex: 'mid', align: 'center', width: 120 },
    { title: '交易状态', dataIndex: 'tradeState', align: 'center', width: 120 },
    { title: '更新日期', dataIndex: 'updateDate', align: 'center', width: 120 },
    { title: '更新时间', dataIndex: 'updateTime', align: 'center', width: 120 },
];
class Bstks extends Component {
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
                    scroll={{y: 481 }} bordered
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
export default withRouter(connect(mapStateToProps)(Bstks));
