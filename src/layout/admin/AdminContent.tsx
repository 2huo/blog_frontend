import { Layout } from 'antd';
import React from 'react';

const AdminContent: React.FC = () => {
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
