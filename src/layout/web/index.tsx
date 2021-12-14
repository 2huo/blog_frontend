import React from 'react';
import { Layout } from 'antd';

import Header from '@/components/web/Header';
import Sider from '@/components/web/Sider';
import Footer from '@/components/web/Footer';

const WebLayout: React.FC = (props) => {
  return (
    <Layout>
      <Layout.Sider>
        <Sider />
      </Layout.Sider>
      <Layout>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content>{props.children}</Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default WebLayout;
