import React, { useState, useEffect } from 'react';
import query from '@/utils/query';
import { IArticle } from './types';
import { Skeleton } from 'antd';
import Card from './Card';

function ArticleList() {
  const [articleList, setArticleList] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    query.get('article/get_articles').then((res) => {
      res.data.code === 'ok' && setArticleList(res.data.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Skeleton active loading={loading}>
        {articleList.map((article) => (
          <Card key={`article-${article.id}`} {...article}></Card>
        ))}
      </Skeleton>
    </div>
  );
}

export default ArticleList;
