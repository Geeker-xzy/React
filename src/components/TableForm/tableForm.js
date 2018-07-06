import React, { Component } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import { div } from 'gl-matrix/src/gl-matrix/vec2';

const FormItem = Form.Item;

class FormLayoutDemo extends Component {
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
        <Form layout={formLayout}>
          <FormItem
            label="发价频率"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem
            label="波动点数"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem
            label="单包个数"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem {...buttonItemLayout}>
            <Button type="primary">设置生效</Button>
          </FormItem>
        </Form>
    );
  }
}
// ReactDOM.render(<FormLayoutDemo />, mountNode);
export default FormLayoutDemo;