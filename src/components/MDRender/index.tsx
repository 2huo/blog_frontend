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
import { Element as hastElement } from 'hast';
import useBus from '@/hooks/useBus';
import { Anchor } from 'antd';

import './highlight.css';
import './markdown.css';

interface IMDRenderProps {
  content: string;
}

interface IHeader {
  id?: string;
  value?: string;
}

export default function MDRender(props: IMDRenderProps) {
  // const [headers, setHeaders] = useState<IHeader[][]>([]);
  const headers: IHeader[][] = [];
  const bus = useBus();

  // 渲染侧边栏
  function renderSider() {
    const children: (JSX.Element | null)[] = [];

    function renderChildren(headerList: IHeader[]) {
      const front = headerList.shift();
      return front ? (
        <Anchor.Link href={`#${front.id}`} title={front.value} key={'h1-' + front.id}>
          {headerList.map((item) => {
            return <Anchor.Link href={`#${item.id}`} title={item.value} key={'h2-' + item.id}></Anchor.Link>;
          })}
        </Anchor.Link>
      ) : null;
    }
    headers.forEach((item) => {
      children.push(renderChildren(item));
    });
    return (
      <Anchor affix={false} showInkInFixed={true}>
        {children}
      </Anchor>
    );
  }

  useEffect(() => {
    // console.log(headers);
    const sider = renderSider();
    bus.emit('siderShow', { show: true, content: sider });
  }, []);

  function getHeader(node: hastElement) {
    if (node) {
      const id: string = node.properties ? (node.properties.id as string) : '';
      // 此处很奇怪，node.children[0] 不存在 value 属性
      const children = node.children[0] as any;
      const value: string = children?.value as string;
      if (!value) return {};
      return { id, value };
    }
    return {};
  }

  return (
    <>
      <div id="write" className=" relative pl-0 pr-4">
        <ReactMarkdown
          className="articleDetail"
          remarkPlugins={[remarkGfm, remarkGemoji]}
          rehypePlugins={[rehypeHighlight, slug]}
          components={{
            h1: ({ node, ...props }) => {
              headers.push([getHeader(node)]);
              return <h1 {...props}></h1>;
            },
            h2: ({ node, ...props }) => {
              headers[headers.length - 1].push(getHeader(node));
              return <h2 {...props}></h2>;
            },
          }}
        >
          {props.content}
        </ReactMarkdown>
      </div>
    </>
  );
}
