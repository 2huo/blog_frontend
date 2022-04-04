import React, { Suspense } from 'react';
import { Layout, Spin } from 'antd';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import './web.css';
import { Outlet } from 'react-router-dom';
import Header from '@/components/web/Header';
import Sider from '@/components/web/Sider';
import Footer from '@/components/web/Footer';
import { getClientWidth } from '@/utils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setSiderStatus } from '@/store/page/actions';

const WebLayout: React.FC = () => {
  const dispatch = useDispatch();
  const isShow = useSelector((state: RootState) => state.page.isShow);
  const siderContent = useSelector((state: RootState) => state.page.sideContent);
  const SM = 640;

  function toggleSider() {
    dispatch(setSiderStatus({ isShow: !isShow }));
  }

  const SiderTrigger: React.FC = () => {
    const width = getClientWidth();
    if (width && width >= SM) {
      return (
        <div className="fixed bottom-10 left-5 cursor-pointer text-4xl z-10" onClick={toggleSider}>
          {isShow ? <LeftCircleOutlined /> : <RightCircleOutlined />}
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
        collapsed={!isShow}
        trigger={null}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          zIndex: 50,
        }}
      >
        {isShow ? (
          <>
            <Sider siderContent={siderContent} />
            <Footer />
          </>
        ) : null}
        <SiderTrigger></SiderTrigger>
      </Layout.Sider>
      <Layout style={{ marginLeft: isShow ? '300px' : '0', transition: 'all 0.3s' }}>
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
