import React, { useEffect, useState } from 'react';
import MDRender from '@/components/MDRender';
import query from '@/utils/query';
import { useDispatch } from 'react-redux';
import { setSiderStatus, setTitle } from '@/store/page/actions';

function About(): JSX.Element {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    query.get('article/get_about').then((res) => {
      if (res.data.code === 'ok') {
        setContent(res.data.data);
        dispatch(setSiderStatus({ isShow: false, sideContent: null }));
        dispatch(setTitle({ title: 'About Me' }));
      }
    });
  }, []);

  return (
    <div>
      <MDRender content={content}></MDRender>
    </div>
  );
}

export default About;
