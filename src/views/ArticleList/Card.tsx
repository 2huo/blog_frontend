import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import { IArticle } from './types';

const Card: React.FC<IArticle> = (props) => {
  return (
    <div className="my-6 py-6 border-b-2 border-dashed border-gary-300 hover:border-blue-300">
      <Link to={`/article/${props.id}`} className="text-gray-700">
        <div className=" text-4xl ">{props.title}</div>
      </Link>
      <div className="my-2">
        <ClockCircleOutlined />
        <Link to="/articles" className="text-gray-500">
          <span className="mx-2">{props.update_time}</span>
        </Link>
        {props.tags?.map((item) => (
          <Tag key={`tag-${item}`} color="#2db7f5">
            {item}
          </Tag>
        ))}
      </div>
      <div className="text-gray-500">
        <p>{props.article_desc}</p>
      </div>
    </div>
  );
};

export default Card;
