# 🚀 GitHub上传指南

由于网络连接问题，无法通过命令行直接推送到GitHub。请按照以下步骤手动上传：

## 方法一：使用GitHub网页界面上传

### 1. 访问您的GitHub仓库
- 打开：https://github.com/martinlauepfl/aurascent

### 2. 上传文件
您需要上传以下核心文件（按此顺序）：

#### **配置文件：**
- `package.json`
- `package-lock.json`
- `next.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `tsconfig.json`
- `vercel.json`

#### **Next.js应用文件：**
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `app/api/fortune/route.ts`

#### **组件文件：**
- `components/Form.tsx`
- `components/Result.tsx`
- `components/Background.tsx`

#### **类型定义：**
- `types.ts`

#### **文档：**
- `README.md`

#### **Git配置：**
- `.gitignore`

### 3. 上传步骤
1. 在仓库页面点击 "Add file" → "Upload files"
2. 拖拽或选择上述文件
3. 在 "Commit changes" 中输入：
   ```
   🎉 Convert to Next.js architecture for Vercel deployment

   - ✅ Migrated from React/Vite to Next.js 15
   - ✅ Created API route for Gemini service
   - ✅ Updated all components with 'use client' directive
   - ✅ Configured Tailwind CSS and ESM modules
   - ✅ Added Vercel deployment configuration
   - ✅ Maintained Chinese AI fortune-telling functionality
   - ✅ Preserved pink theme and glass morphism UI
   - ✅ Complete documentation for deployment

   🤖 Generated with [Claude Code](https://claude.com/claude-code)

   Co-Authored-By: Claude <noreply@anthropic.com>
   ```
4. 点击 "Commit changes"

## 方法二：使用GitHub Desktop（推荐）

1. **下载GitHub Desktop**: https://desktop.github.com/
2. **安装并登录**您的GitHub账户
3. **添加本地仓库**：
   - 选择 "File" → "Add Local Repository"
   - 选择您的项目文件夹：`/Users/martinlau/Desktop/aurascent---ai-fortune-&-perfume`
4. **发布到GitHub**：
   - 点击 "Publish repository"
   - 确认仓库名称为 `aurascent`
   - 设置为Public或Private
   - 点击 "Publish repository"

## 方法三：稍后重试命令行

当网络状况好转后，在终端中运行：
```bash
cd /Users/martinlau/Desktop/aurascent---ai-fortune-\&-perfume
git push -u origin main
```

## ✅ 完成后的下一步

一旦代码成功上传到GitHub：

1. **访问Vercel**: https://vercel.com
2. **连接GitHub仓库**
3. **配置环境变量**：
   - `API_KEY`: 您的Google Gemini API密钥
4. **部署应用**

## 🔧 环境变量设置

在Vercel项目设置中添加：
```
API_KEY=AIzaSyC_iRBogeSYzBXpbJFxDLwO0n87zvZx3jY
```

## 📱 部署完成后

您的应用将可以通过以下方式访问：
- Vercel提供的默认URL
- 您配置的自定义域名

---

**注意**: 所有文件都已经准备好并提交到本地Git仓库。您只需要选择一种方式上传到GitHub即可！