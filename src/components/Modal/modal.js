import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { Modal, Button } from 'antd';
import { changeModalVisible } from "../../store/action";
import store from "../../store/store";
import SpotForm from '../Form/spot';
class App extends React.Component {
    constructor(props){
        super(props);
        this.setModalVisible = this.setModalVisible.bind(this);
    }
  render() {
    return (
      <div>
        <Modal
          title="即期"
          style={{ top: 20 }}
          visible={this.props.modalVisible}
          onCancel={this.setModalVisible}
          okText="发价"
          cancelText="取消"
        >
        <SpotForm/>
        </Modal>
      </div>
    );
  }
  setModalVisible(modalVisible) {
    store.dispatch(changeModalVisible(false));
  }

}
const mapStateToProps = (store) => {
    console.log(store);
    return {
        modalVisible: store.modalVisible,
    }
}
export default withRouter(connect(mapStateToProps)(App));
