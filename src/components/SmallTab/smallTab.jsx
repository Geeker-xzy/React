import React, { Component } from 'react';
import { Tabs } from 'antd';
// import Spot from '../Table/spot';
import SpotForm from '../Form/spot';
const TabPane = Tabs.TabPane;
class SmallTab extends Component {
    render() {
        return (
            <div className="tab-right">
              {/* <h3>单次发价:</h3> */}
            <Tabs defaultActiveKey="1" size="small">
                <TabPane tab="即期" key="1">
                <SpotForm/>
                {/* <FormLayoutDemo/> */}
                {/* <Spot/> */}
                </TabPane>
                <TabPane tab="即期带量" key="2"></TabPane>
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
export default SmallTab;