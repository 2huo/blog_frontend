# 个人博客前端文件

在线地址：https://blog.2huo.tech

### 实现功能

- [x] 前台：主页 + 文章列表页
- [x] 文章锚点导航、回到顶部、`markdown` 代码高亮
- [x] 移动端适配
- [x] 后台：文章管理
- [ ] 前台：搜索页 + 主题页
- [ ] 后台：主题管理
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
│   │   ├── admin
│   │   └── web
│   ├── index.css
│   ├── index.tsx
│   ├── layout
│   │   ├── admin
│   │   └── web
│   ├── public // 公共配置
│   │   ├── config.ts
│   │   └── menu.ts
│   ├── react-app-env.d.ts
│   ├── routes // 路由
│   │   ├── admin.ts
│   │   ├── index.ts
│   │   └── web.ts
│   ├── utils
├── tailwind.config.js
├── tsconfig.json
└── tsconfig.paths.json

```
