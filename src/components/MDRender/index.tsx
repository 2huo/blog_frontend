import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
// 使Markdown支持表格，删除线，任务列表
import remarkGfm from 'remark-gfm';
// 使Markdown支持表情
import remarkGemoji from 'remark-gemoji';
// 语法高亮
import rehypeHighlight from 'rehype-highlight';
// 给head添加id
import slug from 'rehype-slug';

import './highlight.css';
import './markdown.css';

interface IProps {
  content: string;
}

export default function MDRender(props: IProps) {
  return (
    <>
      <div id="write" className=" relative pl-0 pr-4">
        <ReactMarkdown
          className="articleDetail"
          remarkPlugins={[remarkGfm, remarkGemoji]}
          rehypePlugins={[rehypeHighlight, slug]}
        >
          {props.content}
        </ReactMarkdown>
      </div>
    </>
  );
}
