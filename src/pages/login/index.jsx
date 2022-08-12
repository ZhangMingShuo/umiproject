import { Button, Checkbox, Form, Input, Card, Row, Col, Spin } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useModel, history, useRequest } from 'umi';
import { userLogin } from '@/api/user';

const Login = () => {
  const { initialState, setInitialState } = useModel('@@initialState'); //修改
  let { data, loading, run } = useRequest(userLogin, {
    manual: true,
  }); //ahooks docs

  console.log(data, loading);
  const onFinish = (values) => {
    console.log('Success:', values);
    run(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (data) {
      //修改全局的initialState,让Layout有机会进入主面板
      setInitialState({
        //更新本地initialState,重新触发权限判断
        isLogin: true,
        userInfo: data,
      });

      //触发路由切换('/')
      setTimeout(() => {
        history.push('/');
      }, 1000);
    }
  }, [data]);

  let initData = {
    username: '张三丰',
    password: '123',
    remember: true,
  };
  return (
    <Row align="middle" style={{ height: '100vh', background: '#f6f6f6' }}>
      <Col span={8} offset={8}>
        <Spin spinning={loading}>
          <Card title="请登录" extra={<a href="#">去注册</a>}>
            <Form
              name="basic"
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 20,
              }}
              initialValues={initData}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="账号"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Spin>
      </Col>
    </Row>
  );
};

export default Login;
