<div align="center">
  <img src="./gd6/icon.png" alt="Za Pan Logo" width="120" />
  
  # Za Pan - Học Tiếng Nhật Cùng Trunk Nhé 🌸🎌
  
  **Za Pan** là một ứng dụng web Single-Page Application (SPA) hỗ trợ học tiếng Nhật từ con số 0 đến nâng cao. Ứng dụng tập trung vào việc ghi nhớ từ vựng, chữ cái (Hiragana/Katakana) và Kanji thông qua cơ chế Lặp lại ngắt quãng (Spaced Repetition System - SRS) kết hợp với các chế độ Minigame kích thích phản xạ.

  <p align="center">
    <a href="#tính-năng-nổi-bật">Tính năng</a> •
    <a href="#công-nghệ-sử-dụng">Công nghệ</a> •
    <a href="#cách-cài-đặt">Cài đặt</a> •
    <a href="#cấu-trúc-dự-án">Cấu trúc</a>
  </p>
</div>

---

## ✨ Tính năng Nổi bật

### 📚 Hệ thống Kiến thức Phân tầng
- Hỗ trợ học bảng chữ cái **Hiragana** và **Katakana** (Bao gồm chữ thường, Âm đục, Âm ghép).
- Kho từ vựng chuẩn **JLPT N5** (tiếp tục mở rộng) chia theo từng chủ đề.
- **Kanji (Hán tự)** đi kèm Âm On, Âm Kun và ví dụ ghép từ.

### 🎮 Các chế độ Học & Chơi (Minigames) đa dạng
1. **Random Quiz (Học ngẫu nhiên):** Hiển thị Flashcard thông minh dùng thuật toán lặp lại ngắt quãng phân tích điểm yếu (SuperMemo-like) để đưa ra câu hỏi.
2. **Điền Romaji (Fill-in-the-blanks):** Chế độ ôn tập cuốn chiếu, bắt buộc người học tự gõ tay phiên âm của mọi ký tự.
3. **Time Attack ⏱️:** Thử thách giới hạn phản xạ, trả lời càng nhiều câu càng tốt trong vòng tối đa **60 giây**.
4. **Sinh Tồn (Survival) ❤️:** Khắc nghiệt với **5 giây** đếm ngược cho mỗi câu. Trả lời sai rớt chữ hoặc hết thời gian sẽ bị trừ mạng.
5. **Match Game 🧩:** Trò chơi lật bài, tìm cặp âm/chữ tương ứng.
6. **Luyện Viết (Writing Practice) ✍️:** 
   - Tích hợp kỹ thuật **HTML5 Canvas** vẽ nét bằng chuột/cảm ứng.
   - Giao diện lưới chuẩn Genkouyoushi (Giấy ô ly tiếng Nhật).
   - *Đặc biệt:* Bóc tự động các chữ ghép đa âm để cung cấp khung vẽ độc lập luân phiên, đi kèm bảng nhắc Romaji.

### ☁️ Đồng bộ hóa Đám mây (Firebase)
- Hỗ trợ tạo tài khoản và Đăng nhập (Email/Username - Password).
- Lưu trữ điểm số (High Scores), tiến độ học (Spaced Repetition Stats) và Cài đặt người dùng ngay lập tức lên **Cloud Firestore**.
- **Offline Cache:** Có thể học ở chế độ Không mạng (nhờ LocalStorage) và đồng bộ lại tự động khi có mạng.

### 📊 Thống Kê & Phân Tích
- Trực quan hóa **Điểm Yếu** của người học: Theo dõi các từ/chữ cái hay sai nhất để dồn trọng tâm cho bài Quiz sau.
- Hiển thị tỷ lệ Win/Loss rành mạch, đồ thị thống kê trực quan.

### 🎨 Trải nghiệm Người Dùng (UX/UI)
- Hỗ trợ **Chế độ Sáng/Tối (Dark/Light Mode)** mượt mà, thân thiện với mắt.
- Giao diện **Responsive** hoàn toàn (chuẩn TailwindCSS) hỗ trợ hoàn hảo đối với màn hình điện thoại, máy tính bảng và PC.
- Biểu tượng iOS Homescreen cài đặt hiển thị cực mượt như ứng dụng Web Native.

---

## 💻 Công nghệ Sử dụng

Dự án này được thiết kế tinh gọn theo dạng **Standalone HTML Application**:
- **Front-end Library:** [React 18](https://reactjs.org/) (Sử dụng thông qua CDN dạng UMD).
- **Ngôn ngữ:** HTML5, CSS3, ES6 JavaScript.
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) (Biên dịch qua CDN Script), kết hợp Vanilla CSS Custom animations.
- **Backend/Database:** Firebase (Authentication & Cloud Firestore).
- **Icons:** SVG, Emoji.

---

## 🚀 Cách Cài đặt và Chạy Thử (Local Development)

Bởi vì bản chất dự án là SPA thông qua CDN tĩnh, nên không cần chạy Node server hay npm phức tạp. Bạn chỉ cần Host file HTML trên Server cục bộ:

1. **Clone Repo:**
   ```bash
   git clone https://github.com/your-username/zapan.git
   cd zapan
   ```

2. **Khởi chạy Development Server:**
   Bạn có thể sử dụng bất kỳ Web Server tùy chỉnh nào. 
   - **VS Code:** Dùng tính năng *Live Server* extension thả file `index.html` của phiên bản gốc (chẳng hạn ở mục `/gd6/index.html`) để khởi động.
   - **Python:**
     ```bash
     cd gd6
     python -m http.server 8000
     ```
     Mở trình duyệt: `http://localhost:8000/`

3. **Cấu hình Firebase (Tùy chọn):**
   Trong file `index.html`, bạn sẽ tìm thấy đối tượng biến `firebaseConfig`. Hãy thay thế API Key và cài đặt Project Database bằng cấu hình cá nhân của riêng bạn nếu muốn làm chủ Database.

---

## 📂 Cấu trúc Dự án

```text
zapan/
├── gd6/                    # Phiên bản Stable mới nhất của Website (Nên deploy)
│   ├── index.html          # Khung lõi chứa HTML, React Component, JavaScript và Logic API
│   ├── index.css           # Custom Animations, Base CSS
│   ├── icon.png            # App Icon chuẩn (PWA)
│   ├── apple-touch-icon.png# Icon dành riêng cho thiết bị iOS Homescreen
│
├── README.md               # Thông tin giới thiệu (Bạn đang ở đây)
└── ...                     # Các phiên bản Alpha và mã nguồn phụ (gd3, gd4, etc.)
```

---

## 🤝 Hướng Dẫn Đóng Góp (Contributing)

Mọi ý tưởng cải tiến (từ thêm từ vựng Hán Tự nâng cao, tới cải thiện cấu trúc Code React/Tailwind) đều được chào đón! Gửi Pull Request (PR) hay Mở Issue nếu có góp ý nào. Cảm ơn rất nhiều. 💕

1. **Fork** dự án.
2. Tạo nhánh chức năng của riêng bạn (`git checkout -b feature/AmazingFeature`).
3. **Commit** thay đổi (`git commit -m 'Add some AmazingFeature'`).
4. **Push** thẳng vô Nhánh (`git push origin feature/AmazingFeature`).
5. Open a **Pull Request**.

---

<p align="center">Made with ❤️ for everyone learning Japanese • <b>Ganbatte! 💪</b></p>
