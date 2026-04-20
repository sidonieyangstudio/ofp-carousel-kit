# OFP 套版工具（歐的樂星球 Carousel Kit）

歐的樂星球專用的 IG 輪播圖 / FB 配圖快速套版工具。單一 HTML 檔，
純前端運作（無後端、無追蹤），瀏覽器打開即用。

## 線上使用

部署到 Cloudflare Pages 後可直接在手機 / 桌機使用：
把公網 URL 加到手機主畫面就像原生 app。

## 本機啟動

直接 `open index.html` 即可；若遇到字型載入問題，
用本地 HTTP server 跑：

```bash
cd ofp-carousel-kit
python3 -m http.server 8765
# 瀏覽器開 http://localhost:8765
```

## 字型

- **粉圓（jf-openhuninn-1.1）** — 開源字型，已內嵌 + CDN fallback
- **Google Fonts** — Chiron GoRound TC / Nunito / Jost（CDN 載入）

## 版本

v3.4 — 2026-04-20 定案
