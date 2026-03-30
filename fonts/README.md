# 字体使用说明 / Font Usage Guide

## 当前状态 / Current Status

✅ **已启用思源黑体（Noto Sans SC）- 通过 Google Fonts CDN**
- 无需下载任何文件即可使用
- 字体文件从 Google 服务器自动加载
- 适合快速部署和测试

⚠️ **注意**：国内访问 Google Fonts 可能不稳定

## 如何使用本地字体文件 / How to Use Local Font Files

### 选项 1：推荐 - 使用本地字体（确保可移植性）

#### 步骤 1：下载字体文件

从以下任一来源下载 **Noto Sans SC Light**：

**方式 A：Google Fonts（推荐）**
1. 访问：https://fonts.google.com/noto/specimen/Noto+Sans+SC
2. 点击 "Download family"
3. 解压后找到：
   - `NotoSansSC-Light.ttf` 或
   - `NotoSansSC-Light.woff2`（推荐，体积更小）

**方式 B：GitHub Release**
1. 访问：https://github.com/googlefonts/noto-cjk/releases
2. 下载最新版本的 `Sans/OTF/SimplifiedChinese` 或 `Sans/Variable`
3. 解压后复制到本目录

#### 步骤 2：转换字体格式（可选但推荐）

如果下载的是 `.ttf` 文件，建议转换为 `.woff2` 格式以减小文件体积：

在线转换工具：
- https://cloudconvert.com/ttf-to-woff2
- https://font.soddeli.com/font-converter/

#### 步骤 3：放置字体文件

将字体文件放入此 `fonts/` 目录：

```
fonts/
├── NotoSansSC-Light.woff2    ← 必需
├── NotoSansSC-Regular.woff2  ← 可选
└── NotoSansSC-Bold.woff2     ← 可选
```

#### 步骤 4：启用本地字体

1. 打开 `css/style.css`
2. 找到文件顶部的 `/* Local Font Version */` 部分
3. 取消注释 `@font-face` 定义（删除 `/*` 和 `*/`）
4. 注释掉 `@import` 行：
   ```css
   /* @import url('https://fonts.googleapis.com/css2?family=...'); */
   ```

### 选项 2：继续使用 CDN（最简单）

保持当前设置不变，无需任何操作。

---

## 字体文件大小参考 / Font File Size Reference

| 格式 | 大小 | 加载速度 | 推荐 |
|------|------|----------|------|
| .woff2 | ~100-200KB | ⭐⭐⭐⭐⭐ | ✅ |
| .woff | ~150-300KB | ⭐⭐⭐⭐ | |
| .ttf | ~5-10MB | ⭐⭐⭐ | |
| .otf | ~5-10MB | ⭐⭐⭐ | |

---

## 测试字体是否加载成功

打开浏览器开发者工具（F12）→ Network 标签 → 刷新页面
- 如果看到 `NotoSansSC-*.woff2` 或类似文件加载，说明本地字体工作正常
- 如果看到 `fonts.googleapis.com` 请求，说明正在使用 CDN

---

## 问题排查 / Troubleshooting

**字体没有生效？**
1. 清除浏览器缓存（Ctrl+Shift+Delete）
2. 检查字体文件路径是否正确
3. 打开浏览器控制台查看是否有 404 错误

**本地字体加载失败？**
- 保持 CDN 版本的 `@import` 语句，它会作为备选方案

---

## 许可证 / License

思源黑体（Noto Sans CJK）由 Adobe 和 Google 联合开发
- 开源免费
- 可用于个人和商业项目
- SIL Open Font License 1.1

详细信息：https://github.com/googlefonts/noto-cjk#license
