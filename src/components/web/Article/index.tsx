import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MDRender from '@/components/MDRender';
import { Breadcrumb, Skeleton } from 'antd';
// import { FolderOpenOutlined } from '@ant-design/icons';
import query from '@/utils/query';
import './article.css';
import { useDispatch } from 'react-redux';
import { setSiderStatus, setTitle as dispatch_setTitle } from '@/store/page/actions';

const Article: React.FC = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const { id: articleId } = useParams();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    query
      .get('/article/get_article_content/' + articleId)
      .then((res) => {
        const data = res.data.code === 'ok' ? res.data.data : null;
        data ? (setContent(data.content), setTitle(data.title)) : null;
        setLoading(false);
        dispatch(dispatch_setTitle({ title: data.title }));
        document.title = data.title;
      })
      .catch(() => {
        setLoading(false);
        setContent('');
      });
  }, [articleId]);

  const getToc = (content: JSX.Element) => {
    dispatch(setSiderStatus({ isShow: true, sideContent: content }));
  };

  return (
    <div className="article">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">
            <span className=" ml-1">主页</span>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/article_list">
            {/*<FolderOpenOutlined />*/}
            <span className="ml-1">文章列表</span>
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
        <MDRender content={content} getToc={getToc}></MDRender>
      </Skeleton>
      <div className={'p-4 mb-20 border-4 border-emerald-400 rounded mt-8'}>
        转载请注明出处:{' '}
        <a href={'https://' + document.location.host + document.location.pathname}>
          https://{document.location.host + document.location.pathname}
        </a>
        <br />
        如发现文章有错误、对内容有疑问，请邮件联系我：maipianlaoxu@gmail.com
      </div>
    </div>
  );
};

export default Article;
