import { Button, Space, Table, Image } from 'antd';
import React from 'react';
import { bannerGet } from '@/api/cake';
import { useRequest } from 'umi';

export default function BannerList() {
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
      title: '操作区域',
      key: 'action',
      render: (text, record, index) => (
        <Space size="middle">
          <Button type="primary" shape="round" size="small">
            编辑
          </Button>
          <Button
            type="primary"
            danger
            size="small"
            onClick={() => {
              stuDel(record.objectId).then((res) => {
                //删除线上
                console.log(res);
                data.splice(index, 1); //更新线下
                setData([...data]);
              });
            }}
          >
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
