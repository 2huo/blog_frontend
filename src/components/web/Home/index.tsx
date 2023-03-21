import React from 'react';
import {useEffect} from 'react';
import {
  GithubOutlined,
  MailOutlined,
  createFromIconfontCN,
  SmileOutlined,
} from '@ant-design/icons';
import userConfig from '@/public/config';
import './home.css';
import {useDispatch} from 'react-redux';
import {setSiderStatus, setTitle} from '@/store/page/actions';
import Footer from '../Footer';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_3026269_cadmlffp49.js'],
});

function Home(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle({title: 'Welcome'}));
    dispatch(setSiderStatus({isShow: false, sideContent: null}));
  });
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className=" text-xl sm:text-3xl text-black mt-10 flex items-center">
        <span className="mr-4">👋 你好，朋友</span>
        <SmileOutlined/>
      </h2>
      {/* <h2 className="text-xl sm:text-3xl text-gray-400 mt-5">Hello, My friend</h2> */}
      <div className="links">
        <a href={userConfig.github} target="_blank" rel="noopener noreferrer">
          <GithubOutlined/>
        </a>
        <a href={userConfig.juejin} target="_blank" rel="noopener noreferrer">
          <IconFont type="icon-juejin"/>
        </a>
        <a href={`mailto:${userConfig.email}`} target="_blank" rel="noopener noreferrer">
          <MailOutlined/>
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
