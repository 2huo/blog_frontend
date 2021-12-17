import React from 'react';

const Footer = (): JSX.Element => {
  return (
    <div className="flex justify-around items-center text-gray-400 flex-col absolute bottom-0 left-1/2  transform -translate-x-1/2 w-full">
      <a
        className="text-gray-400"
        target="_blank"
        rel="noopener noreferrer"
        href="https://beian.miit.gov.cn/#/Integrated/index"
      >
        粤ICP备2021021459号-1
      </a>
      <span className="">POWER BY LAOXU</span>
      <span className="">All rights reserved.</span>
    </div>
  );
};

export default Footer;
