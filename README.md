# 视频展示平台

一个基于React和Next.js开发的视频展示平台

## 项目概述

本项目是一个现代化的视频展示前端页面，包含视频列表展示、分类导航、搜索功能等核心功能，旨在为用户提供流畅的视频内容浏览体验。

## 技术栈

- **前端框架**：React 18
- **服务端渲染**：Next.js 13
- **样式处理**：SCSS
- **UI组件库**：Material-UI (MUI)
- **构建工具**：Webpack (Next.js内置)
- **代码规范**：ESLint、Prettier、Husky

## 功能特点

1. **视频列表展示**：采用响应式网格布局，自适应不同屏幕尺寸
2. **分类导航**：支持按不同分类浏览视频内容
3. **搜索功能**：可根据视频标题和作者进行搜索
4. **视频卡片**：展示视频缩略图、标题、作者、观看次数和发布时间
5. **响应式设计**：完美适配桌面端和移动端设备

## 项目结构

```
├── src/
│   ├── assets/         # 静态资源文件
│   ├── component/      # React组件
│   │   ├── layout/     # 布局组件
│   │   ├── navbar/     # 导航栏组件
│   │   ├── footer/     # 页脚组件
│   │   └── video/      # 视频相关组件
│   ├── pages/          # Next.js页面文件
│   ├── styles/         # 样式文件
│   └── types/          # TypeScript类型定义
├── public/             # 静态资源目录
├── next.config.js      # Next.js配置
└── package.json        # 项目依赖配置
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

启动后，访问 http://localhost:3000 查看应用

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 许可证

MIT