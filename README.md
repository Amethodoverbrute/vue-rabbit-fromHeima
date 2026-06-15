# 小兔鲜儿 - Vue 3 电商项目

> 一个基于 Vue 3 的现代化电商前端项目，采用组件化、模块化的架构设计。

## 📁 项目结构

```
vue-rabbit/
├── public/                    # 静态资源目录
│   └── favicon.ico           # 网站图标
├── src/                       # 源代码目录
│   ├── apis/                 # API 接口封装
│   │   ├── cart.js           # 购物车接口
│   │   ├── category.js       # 分类接口
│   │   ├── checkout.js       # 结算接口
│   │   ├── detail.js         # 商品详情接口
│   │   ├── home.js           # 首页接口
│   │   ├── layout.js         # 布局相关接口
│   │   ├── order.js          # 订单接口
│   │   ├── pay.js            # 支付接口
│   │   └── user.js           # 用户接口
│   ├── assets/               # 静态资源
│   │   ├── images/           # 图片资源
│   │   ├── base.css          # 基础样式
│   │   ├── main.css          # 主样式入口
│   │   └── logo.svg          # Logo
│   ├── components/           # 全局组件
│   │   ├── ImageView/        # 图片查看器
│   │   └── XtxSku/           # SKU 选择组件
│   ├── composables/          # 组合式函数
│   │   └── useCountDown.js   # 倒计时 hook
│   ├── directives/           # 自定义指令
│   ├── router/               # 路由配置
│   │   └── index.js          # 路由定义
│   ├── stores/               # Pinia 状态管理
│   │   ├── cartStore.js      # 购物车状态
│   │   ├── categoryStore.js  # 分类状态
│   │   └── userStore.js      # 用户状态
│   ├── styles/               # 全局样式
│   │   ├── common.scss       # 通用样式
│   │   ├── var.scss          # 样式变量
│   │   └── element/          # Element Plus 样式覆盖
│   ├── utils/                # 工具函数
│   │   └── http.js           # Axios 封装
│   ├── views/                # 页面视图
│   │   ├── CartList/         # 购物车列表页
│   │   ├── Category/         # 分类页
│   │   ├── Checkout/         # 结算页
│   │   ├── Detail/           # 商品详情页
│   │   ├── Home/             # 首页
│   │   ├── Layout/           # 布局组件
│   │   ├── Login/            # 登录页
│   │   ├── Member/           # 会员中心
│   │   ├── Pay/              # 支付页
│   │   └── SubCategory/      # 子分类页
│   ├── App.vue               # 根组件
│   └── main.js               # 应用入口
├── .editorconfig             # 编辑器配置
├── .gitignore                # Git 忽略配置
├── eslint.config.js          # ESLint 配置
├── index.html                # HTML 模板
├── jsconfig.json             # JS 配置
├── package.json              # 项目依赖
└── vite.config.js            # Vite 配置
```

## 🏗️ 技术架构

### 核心技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue | 3.5+ | 渐进式 JavaScript 框架 |
| Vite | 7.0+ | 下一代前端构建工具 |
| Vue Router | 4.5+ | Vue 官方路由管理器 |
| Pinia | 3.0+ | Vue 官方状态管理 |
| Element Plus | 2.11+ | Vue 3 组件库 |
| Axios | 1.11+ | HTTP 客户端 |
| Sass | 1.92+ | CSS 预处理器 |

### 架构设计

#### 1. 组件分层

- **视图层 (Views)**：页面级组件，负责页面布局和业务逻辑
- **组件层 (Components)**：可复用的 UI 组件
- **布局层 (Layout)**：通用布局组件（Header、Footer、Sidebar）

#### 2. 状态管理

采用 Pinia 进行集中状态管理，分为三个 store：

| Store | 职责 |
|-------|------|
| `userStore` | 用户信息、登录状态、token 管理 |
| `cartStore` | 购物车商品列表、选中状态、数量统计 |
| `categoryStore` | 商品分类数据 |

#### 3. API 封装

所有后端接口统一封装在 `src/apis/` 目录下，每个模块对应一个文件，便于维护和管理。

#### 4. 路由设计

| 路径 | 组件 | 说明 |
|------|------|------|
| `/` | Home | 首页 |
| `/login` | Login | 登录页 |
| `/category` | Category | 分类页 |
| `/category/:id` | SubCategory | 子分类页 |
| `/detail/:id` | Detail | 商品详情页 |
| `/cart` | CartList | 购物车页 |
| `/checkout` | Checkout | 结算页 |
| `/pay` | Pay | 支付页 |
| `/member` | Member | 会员中心 |

## 🚀 快速开始

### 环境要求

- Node.js >= 20.19.0 或 >= 22.12.0
- npm >= 10.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看项目。

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist/` 目录。

### 预览生产版本

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

## 📡 接口配置

项目已配置好后端接口代理，无需额外配置。接口地址：
- 开发环境：`https://pcapi-xiaotuxian-front-devtest.itheima.net`

## 🎯 功能模块

### 已实现功能

1. **首页**：轮播图、商品分类、热门商品、新品推荐
2. **分类页**：商品分类展示、子分类筛选
3. **商品详情**：商品信息、SKU 选择、加入购物车
4. **购物车**：商品列表、数量调整、选中状态、价格计算
5. **结算页**：收货地址、订单确认、提交订单
6. **支付页**：订单信息、支付方式、倒计时
7. **会员中心**：用户信息、订单列表、订单状态筛选
8. **登录页**：账号密码登录、表单验证

## 📝 开发规范

### 命名规范

- **组件名**：PascalCase（大驼峰），如 `HomeBanner.vue`
- **变量名**：camelCase（小驼峰），如 `userInfo`
- **文件名**：kebab-case（短横线分隔），如 `home-banner.vue`
- **常量名**：UPPER_CASE（大写下划线），如 `MAX_COUNT`

### 代码风格

- 使用 Composition API（`<script setup>`）
- 优先使用 `const`，避免使用 `var`
- 组件模板使用 2 空格缩进
- SCSS 使用 2 空格缩进

## 📄 许可证

MIT License

---

**小兔鲜儿** - 新鲜 · 亲民 · 快捷