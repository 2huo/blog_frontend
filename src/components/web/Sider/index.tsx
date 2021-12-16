import React from 'react';
import { Link } from 'react-router-dom';
import userConfig from '@/public/config';
import menuConfig from '@/public/menu';
import './sider.css';
interface ISiderProps {
  siderContent?: JSX.Element | string;
}

const Sider: React.FC<ISiderProps> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link to="/about" className="text-center">
        <img className="mt-10 w-32 h-32 " src={userConfig.avatar} alt="avatar" />
        <div className=" mt-5 text-4xl text-black">{userConfig.authorName}</div>
      </Link>
      <div className="mt-5">
        {props.siderContent ? (
          <div>{props.siderContent}</div>
        ) : (
          <ul className="flex justify-center flex-col items-center">
            {menuConfig.linkList.map((item) => {
              return (
                <Link key={item.label} to={item.to} className=" mt-4 sideMenuLink">
                  <li className="">{item.label}</li>
                </Link>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sider;
