import React from 'react';
import { Link } from 'react-router-dom';
import menuConfig from '@/public/menu';
import userConfig from '@/public/config';
import { MenuOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Header = (): JSX.Element => {
  const pageTitle = useSelector((state: RootState) => state.page.title);

  const DropMenu = (
    <Menu style={{ opacity: 0.7, width: '125px', float: 'right' }}>
      {menuConfig.linkList.map((item) => {
        return (
          <Menu.Item key={item.label}>
            <Link to={item.to} className="text-gray-600 text-center">
              {item.label}
            </Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <>
      <div className="flex px-4 sm:px-10 bg-white bg-opacity-70 z-20 absolute w-full top-0">
        <div className="justify-between flex lg:w-1/3">
          <div className="text-black text-3xl self-center select-none whitespace-nowrap">
            {userConfig.blogBrand}
          </div>
          {/* <div className="justify-end text-sm text-gray-500 self-center">{myTalk}</div> */}
        </div>
        <ul className="hidden sm:flex flex-col sm:flex-row  flex-1 justify-end mb-0">
          {menuConfig.linkList.map((item) => {
            return (
              <Link key={item.label} to={item.to} className="text-gray-600 ml-16">
                <li>{item.label}</li>
              </Link>
            );
          })}
        </ul>
        <Dropdown overlay={DropMenu} trigger={['click']}>
          <div className="sm:hidden flex-1 justify-end text-right text-2xl py-4">
            <MenuOutlined />
          </div>
        </Dropdown>
      </div>
      <div className=" text-white text-6xl z-20 relative overflow-ellipsis whitespace-nowrap overflow-hidden px-5">
        {pageTitle}
      </div>
    </>
  );
};

export default Header;
