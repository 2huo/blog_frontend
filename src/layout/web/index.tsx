import React, { useState, Suspense } from 'react';
import { Layout, Spin } from 'antd';
import { useListener } from '@/hooks/useBus';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import './web.css';
import { Outlet } from 'react-router-dom';
import Header from '@/components/web/Header';
import Sider from '@/components/web/Sider';
import Footer from '@/components/web/Footer';
import { getClientWidth } from '@/utils';

const WebLayout: React.FC = () => {
  const [collapsed, _setCollapsed] = useState(false);
  const [siderContent, setSiderContent] = useState<JSX.Element | string>();
  const SM = 640;
  // 判断是否是手机 宽度大于640
  const setCollapsed = (isShow: boolean) => {
    if (!isShow) _setCollapsed(false);
    else {
      const width = getClientWidth();
      // console.log(width);
      if (width && width >= SM) {
        _setCollapsed(true);
      }
    }
  };

  useListener<{ show: boolean; content: JSX.Element | string }>('siderShow', (e) => {
    setCollapsed(e.show);
    setSiderContent(e.content);
  });

  function toggleSider() {
    setCollapsed(!collapsed);
  }

  const SiderTrigger: React.FC = () => {
    const width = getClientWidth();
    if (width && width >= SM) {
      return (
        <div className="fixed bottom-10 left-5 cursor-pointer text-4xl z-10" onClick={toggleSider}>
          {collapsed ? <LeftCircleOutlined /> : <RightCircleOutlined />}
        </div>
      );
    }
    return null;
  };

  return (
    <Layout>
      <Layout.Sider
        collapsible
        width={300}
        collapsedWidth={0}
        collapsed={!collapsed}
        trigger={null}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          zIndex: 50,
        }}
      >
        {collapsed ? (
          <>
            <Sider siderContent={siderContent} />
            <Footer />
          </>
        ) : null}
        <SiderTrigger></SiderTrigger>
      </Layout.Sider>
      <Layout style={{ marginLeft: collapsed ? '300px' : '0', transition: 'all 0.3s' }}>
        <Layout.Header className="web-header">
          <Header />
        </Layout.Header>
        <Layout.Content>
          <Suspense
            fallback={
              <div className="flex justify-center mt-4">
                <Spin />
              </div>
            }
          >
            <div className="lg:mx-auto mt-3 max-w-4xl  px-4">
              <Outlet />
            </div>
          </Suspense>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default WebLayout;
