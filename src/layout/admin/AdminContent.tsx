import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useNavigate, Outlet } from 'react-router-dom';
import {
  SettingOutlined,
  FolderOutlined,
  FileOutlined,
  EditOutlined,
  FolderAddOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;

import query from '@/utils/query';

interface Topic {
  id: number;
  name: string;
}

const AdminContent: React.FC = () => {
  const role = useSelector((state: RootState) => state.user.role);
  const [topics, setTopics] = useState<Topic[]>([]);
  const navigate = useNavigate();
  const siderWidth = 200;
  const defaultSelectedKeys = ['manageArticle', 'article'];
  // 未登陆则退出
  useEffect(() => {
    // console.log(role);
    if (role !== '1') {
      navigate('/admin');
    }
    // 默认启动时跳转到文章管理页面
    handleSelect({ keyPath: defaultSelectedKeys });
  }, []);

  const handleSelect = (e: { keyPath: string[] }) => {
    // console.log(e);
    // console.log(e.keyPath);
    const path = e.keyPath.reverse().reduce((preSumPath: string, cntPath: string) => {
      return preSumPath + '/' + cntPath;
    }, '');
    navigate(`.${path}`);
  };

  useEffect(() => {
    query.get('/admin/topics').then((res) => {
      console.log(res);
      if (res.data.code === 'ok') {
        const topics = res.data.data.topics;
        setTopics(topics);
      }
    });
  }, []);

  return (
    <Layout hasSider>
      <Layout.Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          width: siderWidth,
        }}
      >
        <Menu
          onSelect={handleSelect}
          defaultSelectedKeys={defaultSelectedKeys}
          defaultOpenKeys={['article']}
          mode="inline"
        >
          <SubMenu key="article" icon={<FileOutlined />} title="文章">
            <Menu.Item key="manageArticle">文章管理</Menu.Item>
            <Menu.Item key="writeArticle" icon={<EditOutlined />}>
              写文章
            </Menu.Item>
          </SubMenu>
          <SubMenu key="topic" icon={<FolderOutlined />} title="主题">
            {topics.map((topic) => {
              return <Menu.Item key={topic.id}>{topic.name}</Menu.Item>;
            })}
            <Menu.Item key="newTopic" icon={<FolderAddOutlined />}>
              新建主题
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="userSetting" icon={<SettingOutlined />} title="个人信息">
            个人信息
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout.Content style={{ minHeight: '100vh', marginLeft: siderWidth }}>
        <Outlet></Outlet>
      </Layout.Content>
    </Layout>
  );
};

export default AdminContent;
