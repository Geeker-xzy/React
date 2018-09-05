import React, { Component } from 'react';
import { Form, Input, Button, Radio } from 'antd';

const FormItem = Form.Item;

class IrForm extends Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'inline',
    };
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
      <div>
        <Form layout={formLayout}>
          <FormItem
            label="货币对"
            {...formItemLayout}
          >
            <Input placeholder="" />
          </FormItem>
          <FormItem
            label="期限"
            {...formItemLayout}
          >
            <Input placeholder="" />
          </FormItem>
          <FormItem
            label="来源"
            {...formItemLayout}
          >
            <Input placeholder="" />
          </FormItem>
          <FormItem
            label="买价"
            {...formItemLayout}
          >
            <Input placeholder="" />
          </FormItem>
          <FormItem
            label="卖价"
            {...formItemLayout}
          >
            <Input placeholder="" />
          </FormItem>
          <FormItem
            label="中间价"
            {...formItemLayout}
          >
            <Input placeholder="" />
          </FormItem>
          <FormItem
            label="起息日"
            {...formItemLayout}
          >
            <Input placeholder="" />
          </FormItem>
          <FormItem
            label="到期日"
            {...formItemLayout}
          >
            <Input placeholder="" />
          </FormItem>
          <FormItem
            label="状态"
            {...formItemLayout}
          >
            <Input placeholder="" />
          </FormItem>
          <FormItem {...buttonItemLayout}>
            <Button type="primary">单次发价</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
// ReactDOM.render(<FormLayoutDemo />, mountNode);
export default IrForm;