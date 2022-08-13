import { Button, Space, Table, Image } from 'antd';
import React from 'react';
import { bannerGet } from '@/api/cake';
import { useRequest, history, useAccess } from 'umi';

export default function BannerList() {
  let access = useAccess();
  console.log('bannerList权限信息', access);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'objectId',
      key: 'objectId',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '活动名称',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '活动链接',
      dataIndex: 'link',
      key: 'link',
      render: (url) => (
        <a href={url} target="_blank">
          点击预览
        </a>
      ),
    },
    {
      title: '活动封面',
      key: 'imgurl',
      dataIndex: 'imgurl',
      render: (url) => <Image src={url} height={50} />,
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record, index) => (
        <Space size="middle">
          <Button
            type="primary"
            shape="round"
            size="small"
            disabled={!access.isRoot}
            onClick={() => {
              // console.log("进入编辑详情页")
              //使用history的push方法完成跳转,需要把当前待编辑的数据包通过路由传参带到下一个页面
              history.push({
                pathname: '/banner/edit',
                query: record,
              });
            }}
          >
            编辑
          </Button>
          <Button type="primary" danger size="small">
            删除
          </Button>
        </Space>
      ),
    },
  ];

  //根据useRequest方法的要求处理数据包格式
  const { data, loading, error } = useRequest(bannerGet);
  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={data}
      rowKey="objectId"
    />
  );
}
