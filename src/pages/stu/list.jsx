import { Button, Space, Table } from 'antd';
import React from 'react';
import { stuGet, stuDel } from '@/api/stu';
import { useRequest } from 'umi';
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

  // let [data, setData] = useState([]);
  // let [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   stuGet().then((res) => {
  //     console.log(res);
  //     setData(res.results);
  //     setLoading(false); //关闭Loading
  //   });
  // }, []);

  // let {data,loading,error} = useRequest(async()=>{
  //   let res = await stuGet();
  //   return {data:res.results}
  // })

  //根据useRequest方法的要求处理数据包格式
  const { data, loading, error } = useRequest(stuGet); //data是后端响应的数据包{data:[]},loading是异步请求状态,error是异步请求失败的返回结果
  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={data}
      rowKey="objectId"
    />
  );
}
