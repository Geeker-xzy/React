import React, { Component } from 'react';
import {Button,Icon} from 'antd';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

// ReactDOM.render(
  
//     <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
//     <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
//     <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
//   </Tabs>
// , mountNode);
class header extends Component{
    render(){
        return(
            <div className="header ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-5 ant-col-xl-5 ant-col-xxl-4">
            {/* <Icon type="cloud" /> */}
            <img className="logo" src="//enhancer-dev.oss-cn-hangzhou.aliyuncs.com/enhancer-project/000/000/000/031/logo.png?t=1507989843643"></img>
            <span className="title">报价引擎5.1价源模拟器</span>/
            <span className="subTitle">2018-07-02(版本)</span>/
            <span className="subTitle activeTitle">RMDS</span>
            <Tabs defaultActiveKey="1" size="small">
                 <TabPane tab="即期" key="1">选项卡一内容</TabPane>
                 <TabPane tab="即期带量" key="2">选项卡二内容</TabPane>               
                 <TabPane tab="即期监管" key="3">选项卡三3内容</TabPane>
                 <TabPane tab="远期带量" key="4">选项卡一4内容</TabPane>
                 <TabPane tab="掉期" key="5">选项卡二5内容</TabPane>               
                 <TabPane tab="掉期率" key="6">选项卡三6内容</TabPane>
                 <TabPane tab="利率" key="7">选项卡一7内容</TabPane>
                 <TabPane tab="商品" key="8">选项卡二8内容</TabPane>               
                 <TabPane tab="商品结算" key="9">选项卡三9内容</TabPane>
                 <TabPane tab="波动率" key="10">选项卡一10内容</TabPane>
                 <TabPane tab="期权费率" key="11">选项卡二11内容</TabPane>               
            </Tabs>
            </div>
        )
    }
}
export default header;