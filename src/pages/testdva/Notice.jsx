import { Avatar, Button, List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
let list = [
  {
    picture: 'https://randomuser.me/api/portraits/women/85.jpg',
    title: '年终奖预告',
    desc: '如果坚持上班到年底将会得到4个月的年终奖',
  },
];
export default function Notice() {
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[
            <a key="list-loadmore-edit">edit</a>,
            <a key="list-loadmore-more">more</a>,
          ]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.picture} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.desc}
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
}
