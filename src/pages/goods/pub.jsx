import { Button, Form, Input, Spin, Select } from 'antd';
import { cateGet, goodsAdd } from '@/api/cake';
import React from 'react';
import { request, useRequest } from 'umi';
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
import RichEditor from '../../components/RichEditor';
import axios from 'axios';
const { Option } = Select;

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
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const GoodsPub = () => {
  const [form] = Form.useForm();
  let { data, loading, run } = useRequest(cateGet); //date是分类数据包
  const onFinish = (values) => {
    console.log(values); //准备接收来自富文本编辑器组件RichEditor的商品详情数据
    let url =
      'https://h5.mcake.com/api/0434b49d1ac28f9d?cityId=110&page=1&bid=1';
    axios.get(url).then((res) => {
      console.log(res);
    });
    // goodsAdd(values).then(res=>{
    //   console.log(res);
    // });
    // run(values);
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

  return (
    <Spin spinning={loading}>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="cateId"
          label="分类选择"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            style={{ width: 350 }}
            placeholder="请选择商品分类"
            onChange={handleChange}
          >
            {data?.map((item) => {
              return (
                <Option value={item.objectId} key={item.objectId}>
                  {item.catename}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="detail"
          label="商品详情"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <RichEditor />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
          <Button type="dashed" htmlType="submit">
            批量转存
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default GoodsPub;
