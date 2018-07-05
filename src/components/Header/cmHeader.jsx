/**
 * header头部
 */
import React, { Component } from 'react';
class header extends Component {
    render() {
        return (
            <div className="header ">
                <img className="logo" src="//enhancer-dev.oss-cn-hangzhou.aliyuncs.com/enhancer-project/000/000/000/031/logo.png?t=1507989843643" alt="xprice"></img>
                <span className="title">报价引擎5.1价源模拟器</span>/
                <span className="subTitle">2018-07-02(版本)</span>/
                <span className="subTitle activeTitle">RMDS</span>
                <span className="xnet">
                <label className="activeTitle">xnetd所在地址</label>
                    &nbsp;
                        :
                    &nbsp;
            <label>192.168.193.14:55303</label>
                </span>
            </div>
        )
    }
}
export default header;