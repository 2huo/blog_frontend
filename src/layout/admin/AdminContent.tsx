import { Layout } from 'antd';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import { useNavigate } from 'react-router-dom';

const AdminContent: React.FC = () => {
  const role = useSelector((state: RootState) => state.user.role);
  const navigate = useNavigate();

  // 未登陆则退出
  useEffect(() => {
    console.log(role);
    if (role !== 1) {
      navigate('/admin');
    }
  }, []);

  return (
    <Layout>
      <Layout.Header>Header</Layout.Header>
      <Layout>
        <Layout.Sider>Sider</Layout.Sider>
        <Layout.Content>Content</Layout.Content>
      </Layout>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
};

export default AdminContent;
