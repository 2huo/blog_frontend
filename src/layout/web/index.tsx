import React, { useState, Suspense } from 'react';
import { Layout } from 'antd';
import { useListener } from '@/hooks/useBus';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';

import Header from '@/components/web/Header';
import Sider from '@/components/web/Sider';
import Footer from '@/components/web/Footer';

const WebLayout: React.FC = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [siderContent, setSiderContent] = useState<JSX.Element | string>();
  useListener<{ show: boolean; content: JSX.Element | string }>('siderShow', (e) => {
    setCollapsed(e.show);
    setSiderContent(e.content);
  });

  function toggleSider() {
    setCollapsed(!collapsed);
  }

  const SiderTrigger: React.FC = () => {
    return (
      <div className="fixed bottom-10 left-5 cursor-pointer text-4xl z-10" onClick={toggleSider}>
        {collapsed ? <LeftCircleOutlined /> : <RightCircleOutlined />}
      </div>
    );
  };

  return (
    <Layout>
      <Layout.Sider
        collapsible
        width={300}
        collapsedWidth={0}
        collapsed={!collapsed}
        trigger={null}
        className="relative"
      >
        {collapsed ? <Sider siderContent={siderContent} /> : null}
        <SiderTrigger></SiderTrigger>
      </Layout.Sider>
      <Layout>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content>
          <Suspense fallback={<div>loading content</div>}>
            <div className="mx-auto mt-3 max-w-4xl">{props.children}</div>
          </Suspense>
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default WebLayout;
