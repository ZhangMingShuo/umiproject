import { Space, Table, Tag } from 'antd';
import React from 'react';
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '分数',
    dataIndex: 'score',
    key: 'score',
  },
  {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: '生日',
    key: 'time',
    dataIndex: 'time',

  },
  {
    title: '操作区域',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    score: 100,
    city:'重庆',
    time: '2022-10-10',
  }
];

export default function StuList() {
  return (
    <Table columns={columns} dataSource={data} />
  );
}
