# AuraScent - AI Fortune & Perfume

一个基于AI的算命和香氛推荐应用，为用户提供个性化的命运分析和专属香氛推荐。

## 🚀 项目特点

- **AI智能分析**: 基于用户出生信息进行星座、命理分析
- **个性化香氛推荐**: 根据性格特征推荐真实存在的香水产品
- **精美UI设计**: 粉色主题，专为年轻女性用户设计
- **玻璃拟态效果**: 现代化的视觉效果和动画
- **响应式设计**: 完美适配移动端和桌面端

## 🛠️ 技术栈

- **前端框架**: Next.js 15 + React 19
- **样式**: Tailwind CSS
- **字体**: Google Fonts (Cinzel, Lato)
- **AI服务**: Google Gemini API
- **部署**: Vercel

## 📦 部署指南

### 1. 准备工作

1. 注册 [Vercel](https://vercel.com) 账号
2. 获取 [Google Gemini API Key](https://ai.google.dev/)
3. 准备自定义域名（可选）

### 2. 部署到 Vercel

#### 方式一：GitHub 集成（推荐）

1. 将代码推送到 GitHub 仓库
2. 登录 Vercel，点击 "New Project"
3. 选择 GitHub 仓库
4. 配置环境变量：
   - `API_KEY`: 你的 Google Gemini API Key
5. 配置自定义域名（如果需要）
6. 点击 "Deploy"

#### 方式二：直接部署

1. 安装 Vercel CLI：
   ```bash
   npm i -g vercel
   ```

2. 在项目根目录运行：
   ```bash
   vercel --prod
   ```

3. 设置环境变量：
   ```bash
   vercel env add API_KEY
   ```

### 3. 域名配置

如果你有自定义域名：

1. 在 Vercel 项目设置中添加域名
2. 在域名提供商处配置 DNS：
   - A 记录：`76.76.19.61` (CNAME: `cname.vercel-dns.com`)
3. 等待 SSL 证书生成（通常几分钟）

### 4. 环境变量配置

在 Vercel 项目设置中添加以下环境变量：

```
API_KEY=AIzaSyC_your_google_gemini_api_key
```

## 🎨 自定义配置

### 主题色彩

项目使用粉色主题，可以在以下文件中修改：

- `app/globals.css`: 全局样式
- `tailwind.config.js`: Tailwind 配置
- `components/`: 组件级别样式

### API 配置

修改 `app/api/fortune/route.ts` 中的提示词和配置：

```typescript
const prompt = `
  // 自定义你的算命提示词
`;
```

## 📁 项目结构

```
aurascent---ai-fortune-&-perfume/
├── app/                    # Next.js App Router
│   ├── api/fortune/       # API 路由
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── components/            # React 组件
│   ├── Background.tsx     # 背景组件
│   ├── Form.tsx          # 表单组件
│   └── Result.tsx        # 结果展示组件
├── types.ts              # TypeScript 类型定义
├── next.config.js        # Next.js 配置
├── tailwind.config.js    # Tailwind 配置
└── package.json          # 依赖配置
```

## 🔄 开发

### 本地开发

1. 克隆项目：
   ```bash
   git clone <repository-url>
   cd aurascent---ai-fortune-&-perfume
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 创建环境变量文件：
   ```bash
   cp .env.example .env.local
   # 在 .env.local 中添加你的 API_KEY
   ```

4. 启动开发服务器：
   ```bash
   npm run dev
   ```

5. 访问 `http://localhost:3000`

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 🎯 功能特色

### 算命功能
- 基于出生日期和时间的详细命理分析
- 五行属性和神秘原型判断
- 事业、感情、健康、财富等全方位运势
- 幸运数字、颜色、方位推荐

### 香氛推荐
- 根据性格特征推荐真实香水产品
- 详细的香调分析（前调、中调、后调）
- 个性化的使用建议
- 品牌和产品推荐便于购买

### 用户体验
- 流畅的加载动画
- 响应式设计适配所有设备
- 优雅的视觉效果和交互
- 中文界面亲切友好

## 📈 性能优化

- Next.js 15 自动代码分割
- 图片优化和懒加载
- Tailwind CSS 纯样式优化
- API 请求错误处理

## 🔒 安全考虑

- API 密钥环境变量保护
- 前端输入验证
- CORS 配置
- XSS 防护

## 📞 支持

如需技术支持或定制开发，请通过以下方式联系：

- 创建 GitHub Issue
- 发送邮件至开发者邮箱

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件