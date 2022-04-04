import React, { useEffect } from 'react';
import query from '@/utils/query';
import { useState } from 'react';
import { Tag, Button } from 'antd';
import { Link } from 'react-router-dom';

export interface IArticle {
  id: number;
  article_desc: string;
  title: string;
  updatedAt: string;
  visit_count: number;
  Tags: tag[];
}

interface tag {
  id: number;
  name: string;
}

function ManageArticle(): JSX.Element {
  const [articleList, setArticleList] = useState<IArticle[]>([]);

  useEffect(() => {
    query.get('article/get_articles').then((res) => {
      if (res.data.code == 'ok') {
        console.log(res.data.data);
        setArticleList(res.data.data);
      }
    });
  }, []);

  return (
    <div>
      {articleList.map((article) => {
        return (
          <div
            key={'article-' + article.id}
            className="flex items-center border-b-2 p-4 mx-4 border-dashed"
          >
            <Link to={''} className="text-black flex-1">
              <div>
                <div className=" text-3xl my-2">{article.title}</div>
                <p>{article.article_desc}</p>
                <div className="flex">
                  <span className=" mr-4">{article.updatedAt}</span>
                  {article.Tags.map((tag) => (
                    <Tag key={`tag-${tag.id}`} color="#2db7f5">
                      {tag.name}
                    </Tag>
                  ))}
                </div>
              </div>
            </Link>
            <Button type="primary" danger className="ml-10">
              删除文章
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default ManageArticle;
