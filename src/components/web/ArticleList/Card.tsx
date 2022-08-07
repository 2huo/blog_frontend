import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
// import MDRender from '@/components/MDRender';
export interface IArticle {
  id: number;
  title: string;
  article_desc: string;
  updatedAt: string;
  Tags?: Tag[];
}

interface Tag {
  name: string;
  ArticleTag: {
    ArticleId: number;
    TagId: number;
  };
}

const Card: React.FC<IArticle> = (props) => {
  return (
    <div className="my-6 py-6 border-b-2 border-dashed border-gary-300 hover:border-blue-300 overflow-x-hidden">
      <Link to={`/article/${props.id}`} className="text-gray-700">
        <div className=" text-4xl truncate whitespace-nowrap">{props.title}</div>
      </Link>
      <div className="my-2 flex items-center">
        <ClockCircleOutlined />
        {/* <Link to="/articles" className="text-gray-500">
          <span className="mx-2">{props.updatedAt}</span>
        </Link> */}
        <span className="mx-2">{props.updatedAt}</span>

        {props.Tags?.map((item) => (
          <Tag key={`tag-${item.ArticleTag.TagId}`} color="#2db7f5">
            {item.name}
          </Tag>
        ))}
      </div>
      {/* <div className="text-gray-500">
        <MDRender content={props.article_desc}></MDRender>
      </div> */}
    </div>
  );
};

export default Card;
