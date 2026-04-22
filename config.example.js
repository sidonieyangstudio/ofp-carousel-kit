// ============================================================
// OFP 套版工具｜本機設定檔範本
// ============================================================
// 使用方式：
//   1. 複製此檔案為 config.js（同目錄下）
//   2. 填入下方三個實際值
//   3. config.js 已列入 .gitignore，不會被 commit 到 GitHub
//
// 注意：
//   - cloudName、uploadPreset 最終仍會出現在瀏覽器 Network 請求中，
//     無法真正「藏起來」。真正的防線是 Cloudinary 後台的
//     「Allowed referrers」（限制來源網域）——請務必完成設定。
//   - ADMIN_PASSWORD 是前端明碼，只能擋一般人，無法擋技術人員。
//     僅作為「避免誤按上傳」的輕量閘門，不是真正的身份驗證。
// ============================================================

window.OFP_CONFIG = {
  CLOUDINARY_CLOUD_NAME: 'your_cloud_name_here',
  CLOUDINARY_UPLOAD_PRESET: 'your_unsigned_preset_here',
  ADMIN_PASSWORD: 'your_admin_password_here',
};
