import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import { Drawer, Button,Switch } from 'antd';
import { connect } from 'react-redux';
import { changeDrawVisible } from "../../store/action";
import Perform from '../Perform/perform'
import store from "../../store/store";
class App extends React.Component {
  state = { visible: false };
  onClose(){
    store.dispatch(changeDrawVisible(false))
  }
  render() {
    return (
      <div>
        <Drawer
          title="发价开关"
          placement="right"
          closable={false}
          maskClosable={true}
          onClose={this.onClose}
          visible={this.props.visible}
        >
         <Switch checkedChildren="开" unCheckedChildren="关" className="allRadio" />
        <Perform/>
          {/* <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p> */}
        </Drawer>
      </div>
    );
  }
}
const mapStateToProps = (store) => {
    console.log(store);
    return {
        visible: store.drawVisible,
    }
}
export default withRouter(connect(mapStateToProps)(App));