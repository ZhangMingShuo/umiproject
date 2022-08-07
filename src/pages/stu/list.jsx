import {Button, Space, Table, Tag} from 'antd';
import React,{useState,useEffect} from 'react';
import {stuGet} from '@/api/stu';
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
        <Button type="primary" shape="round" size="small">编辑</Button>
        <Button type="primary" danger size="small">删除</Button>
      </Space>
    ),
  },
];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     score: 100,
//     city:'重庆',
//     time: '2022-10-10',
//   }
// ];

export default function StuList() {
  let  [data,setData] = useState([]);
  useEffect(() => {
    stuGet().then(res=>{
      console.log(res);
      setData(res.data);
    })
  }, []);

  return (
    <Table columns={columns} dataSource={data} />
  );
}
