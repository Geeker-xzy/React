import React, { Component } from 'react';
import { Select,Icon } from 'antd';
import { changeDrawVisible } from "../../store/action";
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import store from "../../store/store";
const Option = Select.Option;
class Header extends Component {
	constructor(props){
    		super(props);
    		this.showDrawer = this.showDrawer.bind(this);
    	}
    render() {
        return (
            <div className={this.props.headerVisible ? 'header':'header hide'}>
            <div className="antd-pro-components-global-header-index-header">
            <Icon type="bars" theme="outlined" className="antd-pro-components-global-header-index-trigger" onClick={this.showDrawer} />
                            <Select defaultValue="CMDS" style={{ width: 120 }}>
                            <Option value="CMDS">CMDS</Option>
                            <Option value="CITI">CITI</Option>
                             <Option value="CS">RMDS</Option>
                          </Select>
                         
                 </div> 
            </div>
        )
    }
    showDrawer(){
        store.dispatch(changeDrawVisible(true));

    }
}
const mapStateToProps = (store) => {
    // console.log(store.headerVisible);
    return {
        headerVisible: store.headerVisible,
    }

}
export default withRouter(connect(mapStateToProps)(Header));