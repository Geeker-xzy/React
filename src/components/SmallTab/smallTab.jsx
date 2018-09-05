import React, { Component } from 'react';
import { Tabs } from 'antd';
// import Spot from '../Table/spot';
import SpotForm from '../Form/spot';
import SpotvForm from '../Form/spotv';
import SpotSafeForm from '../Form/spotSafe';
import FwdvForm from '../Form/fwdv';
import Swap from '../Form/swap';
import Swrt from "../Form/swrt";
import Ir from "../Form/ir";
import Bstk from "../Form/bstk";
import Bstks from "../Form/bstks";
import Vol from "../Form/vol";
const TabPane = Tabs.TabPane;
class SmallTab extends Component {
    render() {
        return (
            <div className="tab-right">
                {/* <h3>单次发价:</h3> */}
                <Tabs defaultActiveKey="1" size="small">
                    <TabPane tab="即期" key="1">
                        <SpotForm />
                    </TabPane>
                    <TabPane tab="即期带量" key="2">
                        <SpotvForm />
                    </TabPane>
                    <TabPane tab="即期监管" key="3">
                        <SpotSafeForm />
                    </TabPane>
                    <TabPane tab="远期带量" key="4">
                        <FwdvForm />
                    </TabPane>
                    <TabPane tab="掉期" key="5">
                        <Swap />
                    </TabPane>
                    <TabPane tab="掉期率" key="6">
                        <Swrt />
                    </TabPane>
                    <TabPane tab="利率" key="7">
                        <Ir />
                    </TabPane>
                    <TabPane tab="商品" key="8">
                        <Bstk />
                    </TabPane>
                    <TabPane tab="商品结算" key="9">
                    <Bstks />
                    </TabPane>
                    <TabPane tab="波动率" key="10">
                    <Vol />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
export default SmallTab;