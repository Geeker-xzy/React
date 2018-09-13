import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { Modal} from 'antd';
import { changeModalVisible } from "../../store/action";
import store from "../../store/store";
import Spot from '../Form/spot';
import Spotv from '../Form/spotv';
import Spotsafe from '../Form/spotSafe';
import Swap from '../Form/swap';
import Swrt from '../Form/swrt';
import Ir from '../Form/ir';
import Bstk from '../Form/bstk';
import Vol from '../Form/vol';
import formatType from '../../utils/formatter';
class App extends Component {
    constructor(props){
        super(props);
        this.setModalVisible = this.setModalVisible.bind(this);
        this.selectFormContent = this.selectFormContent.bind(this);
    }
  render() {
    let {type} = this.props;
    return (
      <div>
        <Modal
          title={formatType(type)}
          style={{ top: 20 }}
          visible={this.props.modalVisible}
          onCancel={this.setModalVisible}
          okText="发价"
          cancelText="取消"
        >
        {this.selectFormContent(type)}
        </Modal>
      </div>
    );
  }
  setModalVisible(modalVisible) {
    store.dispatch(changeModalVisible(false));
  }
  selectFormContent(type){
    switch(type){
      case 'Spot':
       type = <Spot/>
       break;
      case 'SpotSafe':
       type = <Spotsafe/>
       break;
       case 'Spotv':
        type = <Spot/>
       break;
      case 'Swap':
       type = <Swap/>
       break;
       case 'Swrt':
       type = <Swrt/>
       break;
      case 'Ir':
       type = <Ir/>
       break;
       case 'Bstk':
       type = <Bstk/>
       break;
    }
    return type;
  }
  
}
const mapStateToProps = (store) => {
    console.log(store);
    return {
        modalVisible: store.modalVisible,
    }
}
export default withRouter(connect(mapStateToProps)(App));
