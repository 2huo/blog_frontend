# 个人博客前端文件

在线地址：https://blog.2huo.tech

### 实现功能

- [x] 前台：主页 + 文章列表页
- [x] 文章锚点导航、回到顶部、`markdown` 代码高亮
- [ ] 移动端适配
- [ ] 前台：搜索页 + 主题页
- [ ] 后台：文章管理 + 主题管理
- [ ] `md` 文件导入导出功能

### 技术栈

- react v17.0.2 `hooks` + `mitt` + `react-router6`
- `react-markdown以及各种插件 highlight`
- `axios` 封装
- tailwindCSS
- TypeScript

## 项目结构

### 目录结构

```js
.
├── craco.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets // 资源文件
│   │   ├── ...
│   ├── components
│   │   ├── MDRender // markdown渲染组件
│   │   │   ├── highlight.css // 代码高亮
│   │   │   ├── index.tsx
│   │   │   └── markdown.css
│   │   ├── admin
│   │   └── web
│   │       ├── Footer
│   │       │   └── index.tsx
│   │       ├── Header
│   │       │   ├── header.css
│   │       │   └── index.tsx
│   │       └── Sider
│   │           ├── index.tsx
│   │           └── sider.css
│   ├── hooks
│   │   └── useBus.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── layout
│   │   ├── admin
│   │   │   └── index.tsx
│   │   └── web
│   │       └── index.tsx
│   ├── public // 公共配置
│   │   ├── config.ts
│   │   └── menu.ts
│   ├── react-app-env.d.ts
│   ├── routes // 路由
│   │   ├── admin.ts
│   │   ├── index.ts
│   │   └── web.ts
│   ├── utils
│   │   └── query.ts
│   └── views // 页面
│       ├── 404
│       │   └── index.tsx
│       ├── About
│       │   └── index.tsx
│       ├── Article // 文章详情页
│       │   ├── article.css
│       │   └── index.tsx
│       ├── ArticleList // 文章列表页
│       │   ├── Card.tsx
│       │   ├── index.tsx
│       │   └── types.ts
│       ├── Home
│       │   ├── home.css
│       │   └── index.tsx
│       ├── Topic // 主题详情页
│       │   └── index.tsx
│       └── TopicList // 主题列表页
│           └── index.tsx
├── tailwind.config.js
├── tsconfig.json
└── tsconfig.paths.json

```
