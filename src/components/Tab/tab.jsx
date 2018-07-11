import React, { Component } from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom';
import {Link } from 'react-router-dom';
// import { Tabs } from 'antd';
// import Spot from '../Table/spot';
// import FormLayoutDemo from '../TableForm/tableForm';
// import { HashRouter, Switch, Route} from 'react-router-dom';
// import { Link } from 'react-router-dom';
// const TabPane = Tabs.TabPane;
// class tab extends Component {
//     render() {
//         return (
//             <div className="tab-main">
//             <Tabs defaultActiveKey="1" size="small">
//                 <TabPane tab="即期" key="1">
//                 {/* <Link to="/"/> */}
//                 {/* <Link to="/spotv">11</Link> */}
//                 {/* <FormLayoutDemo/> */}
//                 {/* <Spot/> */}
//                 </TabPane>
//                 <TabPane tab="即期带量" key="2">
//                 <Link to="/spotv"/></TabPane>
//                 <TabPane tab="即期监管" key="3">选项卡三3内容</TabPane>
//                 <TabPane tab="远期带量" key="4">选项卡一4内容</TabPane>
//                 <TabPane tab="掉期" key="5">选项卡二5内容</TabPane>
//                 <TabPane tab="掉期率" key="6">选项卡三6内容</TabPane>
//                 <TabPane tab="利率" key="7">选项卡一7内容</TabPane>
//                 <TabPane tab="商品" key="8">选项卡二8内容</TabPane>
//                 <TabPane tab="商品结算" key="9">选项卡三9内容</TabPane>
//                 <TabPane tab="波动率" key="10">选项卡一10内容</TabPane>
//                 <TabPane tab="期权费率" key="11">选项卡二11内容</TabPane>
//             </Tabs>
//             </div>
//         )
//     }
// }
// export default tab;
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends React.Component {
  state = {
    current: 'spot',
  }

  handleClick = (e) => {
    // console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
        <div className="tab-main">
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="spot">
           <Link to="/">即期</Link>
           {/* <NavLink to="/" activeClassName="selected">MyBlog</NavLink> */}
        </Menu.Item>
        <Menu.Item key="spotv">
        <Link to="/spotv">即期带量</Link>
        </Menu.Item>
        <Menu.Item key="spotSafe">
           <Link to="/spotSafe">即期监管</Link>
           {/* <NavLink to="/" activeClassName="selected">MyBlog</NavLink> */}
        </Menu.Item>
        <Menu.Item key="swap">
        <Link to="/swap">掉期</Link>
        </Menu.Item>
        <Menu.Item key="swrt">
           <Link to="/swrt">掉期率</Link>
           {/* <NavLink to="/" activeClassName="selected">MyBlog</NavLink> */}
        </Menu.Item>
        <Menu.Item key="ir">
        <Link to="/ir">利率</Link>
        </Menu.Item>
        <Menu.Item key="bstk">
           <Link to="/bstk">商品</Link>
           {/* <NavLink to="/" activeClassName="selected">MyBlog</NavLink> */}
        </Menu.Item>
        <Menu.Item key="bstks">
        <Link to="/bstks">商品结算</Link>
        </Menu.Item>
        <Menu.Item key="vol">
           <Link to="/vol">波动率</Link>
           {/* <NavLink to="/" activeClassName="selected">MyBlog</NavLink> */}
        </Menu.Item>
        <Menu.Item key="option">
        <Link to="/option">期权费率</Link>
        </Menu.Item>
      </Menu>     
      </div>
    );

  }
}
export default App;
