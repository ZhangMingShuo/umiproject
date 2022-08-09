import { Button, Form, Input, Spin } from 'antd';
import { bannerAdd } from '@/api/cake';
import React from 'react';
import { useRequest } from 'umi';
import ImageUpload from '../../components/ImgUpload';

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

const BannerPub = () => {
  const [form] = Form.useForm();
  let { data, loading, run } = useRequest(
    (value) => {
      // console.log('useRequest执行了',value);
      return bannerAdd(value);
    },
    { manual: true },
  ); //开启手动执行
  const onFinish = (values) => {
    run(values);
    // console.log('values:', values);
    // cateAdd(values).then((res) => {
    //   console.log('cateAdd', res);
    // });
    // console.log(values);
    // let {data,loading,error} = useRequest(()=>{
    //   return cateAdd(values)
    // })
  };

  const onReset = () => {
    form.resetFields();
  };
  //表单初始值
  let initData = {
    title: '五一节活动',
    link: 'https://h5.mcake.com/?key1=hd_banner&key2=xinren2022#/active?id=2236&type=2',
  };

  return (
    <Spin spinning={loading}>
      <Form
        {...layout}
        initialValues={initData}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
      >
        <Form.Item
          name="title"
          label="活动名称"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="link"
          label="活动链接"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="imgurl"
          label="封面图片"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <ImageUpload />
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

export default BannerPub;
