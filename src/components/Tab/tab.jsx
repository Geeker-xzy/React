import React, { Component } from 'react';
import { Tabs } from 'antd';
import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()
const TabPane = Tabs.TabPane;

class tab extends Component {
  constructor(props) {
    super(props);
    this.switchPages = this.switchPages.bind(this);
  }
  render() {
    return (
      <div className="tab-main">
        <Tabs defaultActiveKey="spot" size="small" onChange={this.switchPages}>
          <TabPane tab="即期" key="spot">
          </TabPane>
          <TabPane tab="即期带量" key="spotv" >
          </TabPane>
          <TabPane tab="即期监管" key="spotSafe" ></TabPane>
          <TabPane tab="远期带量" key="fwdv" ></TabPane>
          <TabPane tab="掉期" key="swap" ></TabPane>
          <TabPane tab="掉期率" key="swrt" ></TabPane>
          <TabPane tab="利率" key="ir" ></TabPane>
          <TabPane tab="商品" key="bstk" ></TabPane>
          <TabPane tab="商品结算" key="bstks" ></TabPane>
          <TabPane tab="波动率" key="vol" ></TabPane>
          <TabPane tab="期权费率" key="option" ></TabPane>
        </Tabs>
      </div>
    )
  }
  switchPages(route) {
    console.log('111')
    this.props.history.push({
      pathname: `/${route}`,
    })
  }

}
export default tab;
