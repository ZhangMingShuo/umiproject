import { DownOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space, Tooltip } from 'antd';
import React from 'react';
import { useModel, history, connect } from 'umi';

const HeaderDropMenu = (props) => {
  const { initialState, setInitialState } = useModel('@@initialState'); //Hooks can only be called inside of the body of a function component
  function handleMenuClick({ key }) {
    if (key === '2') {
      //退出登录
      //清除initialState
      setInitialState({ isLogin: false, userInfo: null });
      //清除本地存储
      localStorage.removeItem('userInfo');
      sessionStorage.removeItem('userInfo');
      //路由跳转
      history.push('/login');
    }
  }

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: '个人设置',
          key: '1',
          icon: <UserOutlined />,
        },
        {
          label: '退出登录',
          key: '2',
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );

  return (
    <Space wrap>
      <Dropdown.Button overlay={menu}>Dropdown</Dropdown.Button>
      {
        props.notice.list.filter((item) => {
          return !item.read;
        }).length
      }
    </Space>
  );
};
//https://ant.design/components/dropdown-cn/

export default connect(({ notice }) => ({ notice }))(HeaderDropMenu);
