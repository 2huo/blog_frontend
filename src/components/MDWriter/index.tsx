// import react, react-markdown-editor-lite, and a markdown parser you like
import React from 'react';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import { Button, Input } from 'antd';

import MDRender from '../MDRender';

function handleEditorChange(Prop: { html: string; text: string }) {
  console.log('handleEditorChange', Prop.html, Prop.text);
}

const MDWriter: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex">
        <Input placeholder="文章标题"></Input>
        <Button type="primary">发布</Button>
      </div>
      <MdEditor
        style={{ flex: '1' }}
        renderHTML={(text) => (
          <div className="border-l-2 pl-4">
            <MDRender content={text}></MDRender>
          </div>
        )}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default MDWriter;
