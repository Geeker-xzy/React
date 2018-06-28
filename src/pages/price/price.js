import React, { Component } from 'react';
import Alert from '../../components/Alert/alert.js';
// import { AlertProps } from 'antd/lib/alert';
class Ale extends Component {
    render() {
        return (
            <div>
                <span>价格</span>
                <Alert />
            </div>
        )
    }
}
export default Ale;