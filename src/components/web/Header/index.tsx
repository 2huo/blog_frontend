import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = (): JSX.Element => {
  const pageConfig = {
    myBrand: "2huo's BLOG",
    pageTitle: 'HOME',
  };
  const linkList = [
    {
      to: '/',
      label: 'HOME',
    },
    {
      to: '/article_list',
      label: 'ARTICLES',
    },
    {
      to: '/topic_list',
      label: 'TOPICS',
    },
    {
      to: '/about',
      label: 'ABOUT',
    },
  ];

  // useEffect(() => {
  //   console.log('header reload');
  // }, []);

  return (
    <>
      <div className="flex px-10 bg-white bg-opacity-70 z-20 absolute w-full top-0">
        <div className="justify-between flex lg:w-1/3">
          <div className="text-black text-3xl self-center select-none">{pageConfig.myBrand}</div>
          {/* <div className="justify-end text-sm text-gray-500 self-center">{myTalk}</div> */}
        </div>
        <ul className="flex flex-1 justify-end mb-0">
          {linkList.map((item) => {
            return (
              <Link key={item.label} to={item.to} className="text-gray-600 ml-16">
                <li>{item.label}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className=" text-white text-6xl z-20 relative overflow-ellipsis whitespace-nowrap overflow-hidden px-5">
        {pageConfig.pageTitle}
      </div>
    </>
  );
};

export default Header;
