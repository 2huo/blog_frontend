import React, { useEffect, useState } from 'react';
import MDRender from '@/components/MDRender';
import query from '@/utils/query';
import useBus from '@/hooks/useBus';

function About(): JSX.Element {
  const [content, setContent] = useState('');
  const bus = useBus();

  useEffect(() => {
    query.get('article/get_about').then((res) => {
      if (res.data.code === 'ok') {
        setContent(res.data.data);
        bus.emit('siderShow', { show: false, content: null });
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
