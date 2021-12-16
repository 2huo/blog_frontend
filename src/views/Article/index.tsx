import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MDRender from '@/components/MDRender';
import { Breadcrumb, Skeleton } from 'antd';
import { FolderOpenOutlined } from '@ant-design/icons';
import query from '@/utils/query';
import './article.css';

const Article: React.FC = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const { id: articleId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    query.get('/article/get_article_content/' + articleId).then((res) => {
      const data = res.data.code === 'ok' ? res.data.data : null;
      data ? (setContent(data.content), setTitle(data.title)) : null;
      setLoading(false);
    });
  }, [articleId]);

  return (
    <div className="article">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">
            <span className=" ml-1">Home</span>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/article_list">
            <FolderOpenOutlined />
            <span className="ml-1">articleList</span>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={`/article/${articleId}`}>
            <span>{title}</span>
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <br />
      <Skeleton loading={loading} active>
        <MDRender content={content}></MDRender>
      </Skeleton>
    </div>
  );
};

export default Article;
