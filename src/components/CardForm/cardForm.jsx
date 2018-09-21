import React, { Component } from 'react';
import { Form, Input } from 'antd';
import { Select } from 'antd';
import { Row, Col } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;

class SpotForm extends Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'inline',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (value) => {
    console.log(`selected ${value}`);
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
    return (
      <div>
        <Form layout={formLayout}>
              <FormItem
                label="类型"
                {...formItemLayout}
              >
                <Select defaultValue="1" style={{ width: 100 }} onChange={this.handleChange}>
                  <Option value="1">即期</Option>
                  <Option value="2">即期带量</Option>
                  <Option value="3">掉期</Option>
                  <Option value="4">掉期率</Option>
                  <Option value="5">商品行情</Option>
                  <Option value="6">商品结算</Option>
                  <Option value="7">波动率</Option>
                  <Option value="8">期权</Option>
                </Select>
              </FormItem>
              <FormItem
                label="子类"
                {...formItemLayout}
              >
                <Select defaultValue="1" style={{ width: 100 }} onChange={this.handleChange}>
                  <Option value="1">市场行情</Option>
                  <Option value="2">银行管理</Option>
                </Select>
              </FormItem>
              <FormItem
                label="银行"
                {...formItemLayout}
              >
                <Input placeholder="" />
              </FormItem>
              <FormItem
                label="银行"
                {...formItemLayout}
              >
                <Input placeholder="" />
              </FormItem>
        </Form>
      </div>
    );
  }
}
// ReactDOM.render(<FormLayoutDemo />, mountNode);
export default SpotForm;