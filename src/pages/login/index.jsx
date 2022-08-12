import { Button, Checkbox, Form, Input, Card, Row, Col } from 'antd';
import React from 'react';
import { useModel, history } from 'umi';

const Login = () => {
  const { initialState, setInitialState } = useModel('@@initialState'); //修改

  const onFinish = (values) => {
    //修改全局的initialState,让Layout有机会进入主面板
    setInitialState({
      isLogin: true,
      userInfo: values,
    });
    console.log('Success:', values);
    //触发路由切换('/')
    setTimeout(() => {
      history.push('/');
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  let initData = {
    username: '张三丰',
    password: '123',
    remember: true,
  };
  return (
    <Row align="middle" style={{ height: '100vh', background: '#f6f6f6' }}>
      <Col span={8} offset={8}>
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
      </Col>
    </Row>
  );
};

export default Login;
