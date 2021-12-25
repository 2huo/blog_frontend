import useBus from '@/hooks/useBus';
import React from 'react';
import { useEffect } from 'react';
import { GithubOutlined, MailOutlined, createFromIconfontCN, SmileOutlined } from '@ant-design/icons';
import userConfig from '@/public/config';
import './home.css';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_3026269_cadmlffp49.js'],
});

function Home(): JSX.Element {
  const bus = useBus();
  useEffect(() => {
    bus.emit('pageTitle', 'Welcome');
    bus.emit('siderShow', { show: false });
  });
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl text-black mt-10 flex items-center">
        <span className="mr-4">愿你我都能保持对前端的热爱</span>
        <SmileOutlined />
      </h2>
      <h2 className="text-3xl text-gray-400 mt-5">Keep the love for the front-end</h2>
      <div className="links">
        <a href={userConfig.github} target="_blank" rel="noopener noreferrer">
          <GithubOutlined />
        </a>
        <a href={userConfig.juejin} target="_blank" rel="noopener noreferrer">
          <IconFont type="icon-juejin" />
        </a>
        <a href={`mailto:${userConfig.email}`} target="_blank" rel="noopener noreferrer">
          <MailOutlined />
        </a>
      </div>
    </div>
  );
}

export default Home;
