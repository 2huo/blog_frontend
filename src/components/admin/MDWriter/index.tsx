// import react, react-markdown-editor-lite, and a markdown parser you like
import React, { useEffect, useState } from 'react';
import MdEditor, { Plugins } from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { Button, Input, Select } from 'antd';
const { Option } = Select;

import query from '@/utils/query';
import MDRender from '@/components/MDRender';

// 添加支持插入tab
MdEditor.use(Plugins.TabInsert, {
  tabMapValue: 4,
});

const MDWriter: React.FC = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [canSelectTags, setCanSelectTags] = useState<JSX.Element[]>([]);
  const [canSelectTopics, setCanSelectTopics] = useState<JSX.Element[]>([]);
  const [selectTags, setSelectTags] = useState<string[]>([]);
  const [selectTopic, setSelectTopic] = useState<string>('');

  useEffect(() => {
    // 初始化标签
    query.get('admin/tags').then((res) => {
      if (res.data.code === 'ok') {
        const tags = res.data.data.tags;
        // console.log(tags);
        tags.forEach((tag: { id: number; name: string }) => {
          canSelectTags.push(
            <Option key={`tagId-${tag.id}`} value={tag.name}>
              {tag.name}
            </Option>,
          );
        });
        setCanSelectTags([...canSelectTags]);
      }
    });
  }, []);

  useEffect(() => {
    // 初始化主题
    query.get('admin/topics').then((res) => {
      if (res.data.code === 'ok') {
        const { topics } = res.data.data;
        // console.log(topics);
        topics.forEach((topic: { id: number; name: string }) => {
          canSelectTopics.push(
            <Option key={`topicId-${topic.id}`} value={topic.name}>
              {topic.name}
            </Option>,
          );
        });
        setCanSelectTopics([...canSelectTopics]);
      }
    });
  }, []);

  function handleEditorChange(Prop: { html: string; text: string }) {
    setContent(Prop.text);
  }

  function postArticle() {
    query.post('admin/post_article/', {
      content,
      title,
      tags: selectTags,
      topic: selectTopic,
    });
  }

  function handleSelectTag(value: string[]) {
    setSelectTags([...value]);
  }

  function handleSelectTopic(value: string) {
    setSelectTopic(value);
  }

  return (
    <div className="flex flex-col" style={{ height: '100vh' }}>
      <div className="flex items-center mt-2 mx-4">
        <span>标题：</span>
        <Input
          className="flex-1"
          placeholder="文章标题"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></Input>
        <Button type="primary" onClick={postArticle} className="ml-4">
          发布
        </Button>
      </div>
      <div className="flex my-2">
        <div className="flex flex-1 items-center ml-4">
          <span>tags：</span>
          <Select
            className="flex-1"
            mode="tags"
            allowClear
            style={{ width: '100%' }}
            placeholder="请选择文章标签"
            onChange={handleSelectTag}
          >
            {canSelectTags}
          </Select>
        </div>
        <div className="flex items-center mx-4">
          <span>主题：</span>
          <Select style={{ width: 200 }} placeholder="文章所属主题" onChange={handleSelectTopic}>
            {canSelectTopics}
          </Select>
        </div>
      </div>
      <MdEditor
        style={{ flex: '1' }}
        renderHTML={(text) => <MDRender content={text}></MDRender>}
        onChange={handleEditorChange}
        htmlClass="articleDetail"
        shortcuts={true}
      />
    </div>
  );
};

export default MDWriter;
