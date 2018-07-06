import React, { Component } from 'react';
import {  Switch, Icon } from 'antd';
class performItem extends Component {
    render() {
        return (
            <div className="item">
                <label>即期:</label>
                <span>
                <span>115</span>&nbsp;
                次/s
                </span>
                <Switch checkedChildren="开" unCheckedChildren="关" />
            </div>
        )
    }
}
export default performItem;
