import React, { Component } from 'react';
import { Menu, Icon} from 'antd';
import store from "../../store/store";
const SubMenu = Menu.SubMenu;
class App extends Component {
  constructor(props) {
    super(props);
    this.switchPages = this.switchPages.bind(this);
  }
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];
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
    let { key } = route;
    this.props.history.push({
      pathname: `/${key}`,
    })
    let upperKey = key.toUpperCase();
    if (upperKey.indexOf('QUOTATION') > -1 || upperKey.indexOf('Query') > -1) {
      store.dispatch({ type: 'changeHeaderVisible', data: false })
    }
    else {
      store.dispatch({ type: 'changeHeaderVisible', data: true })
    }

  }

  render() {
    return (
      <div className="antd-pro-components-sider-menu-index-sider ant-layout-sider ant-layout-sider-dark">
        <div className="antd-pro-components-sider-menu-index-logo" id="logo">
          <span className="logo-title">FQTI 1.0</span>
        </div>
        <div style={{ width: 200 }} className="menuSet">
          <Menu
            defaultSelectedKeys={['spot']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed} onSelect={this.switchPages} openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
          >
            <SubMenu key="sub1" title={<span><Icon type="rise" /><span>市场价模拟器</span></span>}>
              <Menu.Item key="spot">即期行情价</Menu.Item>
              <Menu.Item key="spotsafe">即期监管价</Menu.Item>
              <Menu.Item key="spotv">即期带量行情价</Menu.Item>
              <Menu.Item key="swap">掉期行情价</Menu.Item>
              <Menu.Item key="swrt">掉期率行情价</Menu.Item>
              <Menu.Item key="ir">利率行情价</Menu.Item>
              <Menu.Item key="bstk">商品行情价</Menu.Item>
              <Menu.Item key="vol">波动率价</Menu.Item>
              <Menu.Item key="option">期权</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="line-chart" /><span>查询模拟器</span></span>}>
              <Menu.Item key="quotation">报价查询</Menu.Item>
              <Menu.Item key="math">算价查询</Menu.Item>
              <Menu.Item key="optionQ">期权查询</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="fall" /><span>发布模拟器</span></span>}>
              <Menu.Item key="swa">即期历史数据</Menu.Item>
              <Menu.Item key="swr">即期监管历史数据</Menu.Item>
              <Menu.Item key="swrt">掉期历史数据</Menu.Item>
              <Menu.Item key="ir">利率历史数据</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div >
    );
  }
}
export default App;