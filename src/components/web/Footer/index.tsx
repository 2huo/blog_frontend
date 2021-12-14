import React from 'react';

const Footer = (): JSX.Element => {
  return (
    <div className="flex justify-around items-center text-gray-500">
      <a
        className="text-gray-500"
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
