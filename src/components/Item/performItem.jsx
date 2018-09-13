import React, { Component } from 'react';
import { Switch} from 'antd';
class performItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="item">
                <label className="performLabel">{this.props.productType}</label>
                <span>
                <span className="performSpan">115</span>&nbsp;
                次/s
                </span>
                <Switch checkedChildren="开" unCheckedChildren="关" />
            </div>
        )
    }
}
export default performItem;
