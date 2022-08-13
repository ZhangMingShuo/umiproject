import { Button, Form, Input, Spin } from 'antd';
import { roleAdd } from '@/api/user';
import React from 'react';
import { useRequest } from 'umi';

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

const RoleManager = () => {
  const [form] = Form.useForm();
  let { data, loading, run } = useRequest(
    (value) => {
      console.log('useRequest执行了', value);
      return roleAdd(value);
    },
    { manual: true },
  ); //开启手动执行
  const onFinish = (values) => {
    run(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Spin spinning={loading}>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="rolename"
          label="角色名称"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="rolecode"
          label="角色代号"
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
    </Spin>
  );
};

export default RoleManager;
