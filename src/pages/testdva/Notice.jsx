import { Avatar, Button, List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect } from 'umi';
// let list = [
//   {
//     picture: 'https://randomuser.me/api/portraits/women/85.jpg',
//     title: '年终奖预告',
//     desc: '如果坚持上班到年底将会得到4个月的年终奖',
//   },
// ];
function Notice(props) {
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={props.notice.list}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button type="primary" size="small" disabled={item.read}>
              {item.read ? '已读' : '未读'}
            </Button>,
          ]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.picture} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.desc}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
}

export default connect(({ notice }) => ({ notice }))(Notice);
