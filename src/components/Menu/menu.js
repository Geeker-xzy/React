import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()
const SubMenu = Menu.SubMenu;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.switchPages = this.switchPages.bind(this);
  }
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3','sub4', 'sub5', 'sub6'];
  state = {
    collapsed: false,
     openKeys: ['sub1'],
  }
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
   switchPages(route) {
    console.log('111')
    this.props.history.push({
      pathname: `/${route.key}`,
    })
  }

  render() {
    return (
      <div className="antd-pro-components-sider-menu-index-sider ant-layout-sider ant-layout-sider-dark">
        <div className="antd-pro-components-sider-menu-index-logo" id="logo">
            <span className="logo-title">Market</span>
        </div>
        <div style={{ width: 200 }}>
          <Menu
            defaultSelectedKeys={['spot']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed} onSelect={this.switchPages} openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
          >
            <SubMenu key="sub1" title={<span><Icon type="rise" /><span>即期</span></span>}>
              <Menu.Item key="spot">即期行情价</Menu.Item>
              <Menu.Item key="spotsafe">即期监管价</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="line-chart" /><span>即期带量</span></span>}>
              <Menu.Item key="spotv">即期带量行情价</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="fall" /><span>掉期</span></span>}>
              <Menu.Item key="swap">掉期行情价</Menu.Item>
              <Menu.Item key="swrt">掉期率行情价</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="bar-chart" /><span>利率</span></span>}>
              <Menu.Item key="ir">利率行情价</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span><Icon type="fund" /><span>商品</span></span>}>
              <Menu.Item key="bstk">商品行情价</Menu.Item>
            </SubMenu>
            <SubMenu key="sub6" title={<span><Icon type="pie-chart" /><span>期权</span></span>}>
              <Menu.Item key="vol">波动率价</Menu.Item>
              <Menu.Item key="option">期权</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div >
    );
  }
}
export default App;