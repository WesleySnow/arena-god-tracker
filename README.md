# 🏆 Arena God Tracker

**英雄联盟·斗魂竞技场 吃鸡进度追踪器**

为追求"全英雄制霸"成就（Arena God）的玩家打造的图鉴与战绩工具。纯静态页面，无需后端，数据实时同步官方最新版本。

**🔗 在线使用：** `https://你的用户名.github.io/arena-god-tracker/` *（部署后把这行换成你的实际网址）*

## ✨ 功能

- **英雄天命** — 点击标记吃鸡英雄，自动记录日期；收集进度条、职业筛选、专注模式、拼音/别名搜索（如"剑魔"、"jm"）
- **海克斯图鉴** — 实时拉取官方竞技场强化符文数据：官方图标、中文描述、数值等级，按 白银→黄金→棱彩→特殊 排列
- **装备百科** — 五分类陈列：棱镜装备 / 神话传说 / 鞋子 / 消耗品 / 其他，悬浮查看完整属性
- **🎲 塔罗抽卡** — 随机决定下一局的天命英雄（跟随职业筛选），高清立绘 3D 翻牌
- **📊 战绩统计** — 各职业完成度图表 + 吃鸡时间线
- **🆕 版本变动侦测** — 官方更新后自动列出海克斯/装备的新增、改动与移除
- **📱 二维码进度迁移** — 手机⇄电脑扫码同步进度，不用倒腾文件
- **📈 胜率直达** — 每个英雄一键跳转 OP.GG / Lolalytics / Blitz 竞技场攻略与实时胜率
- **🌙/☀️ 双主题** — 暗色/浅色切换，默认跟随系统
- **PWA** — 手机"添加到主屏幕"作为独立 App 使用，加载过一次后离线可用

## 🚀 部署

任意静态托管均可（GitHub Pages / Cloudflare Pages 等），把仓库内全部文件放在根目录即可，无需构建步骤。

```
index.html            主程序（单文件应用）
sw.js                 Service Worker（PWA 离线缓存）
manifest.webmanifest  PWA 应用清单
icon-192.png          应用图标
icon-512.png          应用图标
```

> 维护提示：每次修改 `index.html` 后，请同步修改 `sw.js` 第一行的 `CACHE_VERSION`，否则老用户的缓存不会刷新。

## 💾 数据说明

- 进度数据保存在浏览器 localStorage，仅存于你的设备；支持 JSON 导出/导入与二维码迁移
- 英雄/海克斯/装备数据来自 Riot Data Dragon 与 [CommunityDragon](https://www.communitydragon.org/) 公开资源，随官方版本自动更新

## ⚖️ 声明

本项目为玩家自制工具，与 Riot Games 没有从属关系，未获其认可或赞助。League of Legends 及相关资产是 Riot Games, Inc. 的商标或注册商标。本项目遵循 Riot Games 的 [Legal Jibber Jabber](https://www.riotgames.com/en/legal) 同人作品政策。

第三方攻略链接归属 OP.GG / Lolalytics / Blitz.gg 各自所有。

## 📄 License

MIT
