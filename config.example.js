// ============================================================
// OFP 套版工具｜設定檔範本
// ============================================================
// 使用方式：
//   1. 複製此檔案為 config.js（同目錄下）
//   2. 填入下方三個值
//   3. config.js 已列入 .gitignore，不要放到公開版本
//
// 注意：
//   - 雲端上傳設定會出現在瀏覽器請求中，不適合放真正機密。
//   - 請在雲端圖片服務後台設定允許來源網域。
//   - UPLOAD_UNLOCK_CODE 只是避免誤按上傳的輕量保護，不是真正登入系統。
// ============================================================

window.OFP_CONFIG = {
  CLOUDINARY_CLOUD_NAME: 'your_cloud_name_here',
  CLOUDINARY_UPLOAD_PRESET: 'your_unsigned_preset_here',
  UPLOAD_UNLOCK_CODE: 'your_upload_unlock_code_here',
};
