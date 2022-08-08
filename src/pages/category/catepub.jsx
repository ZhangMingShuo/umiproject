import { Button, Form, Input } from 'antd';
import { cateAdd } from '@/api/cake';
import React from 'react';

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const CatePub = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('values:', values);
    cateAdd(values).then((res) => {
      console.log('cateAdd', res);
    });
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="catename"
        label="分类名称"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
        <Button htmlType="button" onClick={onReset}>
          重置
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CatePub;
