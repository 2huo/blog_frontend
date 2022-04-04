import React, { useState, useEffect } from 'react';
import query from '@/utils/query';
import { Skeleton } from 'antd';
import Card, { IArticle } from './Card';
import { useDispatch } from 'react-redux';
import { setSiderStatus, setTitle } from '@/store/page/actions';

function ArticleList(): JSX.Element {
  const [articleList, setArticleList] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    query.get('article/get_articles').then((res) => {
      res.data.code === 'ok' && setArticleList(res.data.data);
      console.log('articleList', res.data.data);
      setLoading(false);
    });
    console.log('siderShow--false');
    dispatch(setSiderStatus({ isShow: false, sideContent: null }));
    dispatch(setTitle({ title: 'Articles' }));
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
