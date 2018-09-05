import React, { Component } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import { connect } from 'react-redux';
import { changeModalVisible } from "../../store/action";
import store from "../../store/store";
const FormItem = Form.Item;

class FormLayoutDemo extends Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'inline',
      frequency:'',
      waveRange:'',
      singleNumLimit:''
    };
    this.changeF= this.changeF.bind(this);
    this.changeW= this.changeW.bind(this);
    this.changeS= this.changeS.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }

  render() {
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 14, offset: 4 },
    } : null;
    return (
        <Form layout={formLayout}>
          <FormItem
            label="发价频率"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" value={this.props.frequency} onChange = {this.changeF} type="number"/>
          </FormItem>
          <FormItem
            label="波动点数"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" value={this.props.waveRange} onChange = {this.changeW} type="number"/>
          </FormItem>
          <FormItem
            label="单包个数"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" value={this.props.singleNumLimit} onChange={this.changeS} type="number"/>
          </FormItem>
          <FormItem {...buttonItemLayout} className="specialIem">
            <Button type="primary">设置生效</Button>
          </FormItem>
            <FormItem {...buttonItemLayout}>
            <Button type="primary" onClick = {this.openModal}>单独发价</Button>
          </FormItem>
        </Form>
    );
  }
  changeF(e){
    this.props.changeInputVal({data:e.target.value,species:'frequency'})
  }
  changeW(e){
    this.props.changeInputVal({data:e.target.value,species:'waveRange'})
  }
  changeS(e){
    this.props.changeInputVal({data:e.target.value,species:'singleNumLimit'})
  }
  openModal(){
    store.dispatch(changeModalVisible(true));
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {changeInputVal:(val)=>{
    dispatch({
      ...val,
      type:'changeInput',
      productType:'spot'
    })
  }
}
}
const mapStateToProps = (store) => {
  return {
    frequency:store.spot.item.frequency,
    waveRange:store.spot.item.waveRange,
    singleNumLimit:store.spot.item.singleNumLimit,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(FormLayoutDemo);
