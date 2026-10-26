# Ôn tập Phát triển Web Kinh doanh

Web trắc nghiệm ôn tập môn Phát triển Web Kinh doanh (Khoa HTTT, UEL, TS. Trần Duy Thanh). Trang tĩnh thuần HTML/CSS/JS nên chạy được ngay bằng Live Server và deploy thẳng lên GitHub Pages.

## Có gì trong web

- **623 câu hỏi** chia theo 11 chương: Mạng & Internet, Thiết kế web, HTML 1-2, CSS 1-2, Form, JavaScript 1-2, XML & DOM, JSON.
- **Luyện tập**: lọc theo chương, độ khó, nguồn đề, trạng thái và tìm theo từ khóa (gõ không dấu cũng được). Câu một đáp án chấm ngay khi chọn, có giải thích.
- **Thi thử**: chọn số câu, thời gian, độ khó, các chương; câu hỏi và đáp án được xáo ngẫu nhiên, có điểm theo từng chương.
- **Câu làm sai**: tự gom các câu từng làm sai để ôn lại.
- Đoạn code trong câu hỏi được hiển thị dạng khối code dễ đọc.

## Nguồn câu hỏi

| Nguồn (bộ lọc) | File | Số câu | Ghi chú |
|---|---|---|---|
| Ngân hàng theo chương | `bank/questions_c1.js` … `c11.js` | 366 | Lý thuyết theo slide từng chương |
| Quiz trên lớp của thầy | `bank/questions_quiz.js` | 88 | Chép từ Quizz 1, 2, 3 trên E-Learning; câu dựa vào hình được viết lại bằng mô tả |
| Bổ sung: code & bài tập thực tế | `bank/questions_bosung.js` | 169 | Đoán kết quả code, chọn code đúng, tìm lỗi, tình huống từ file Bài tập Module 1-6 |

Các đáp án JavaScript trong file bổ sung đã được chạy thử: `node tools/verify_bosung.js`.

## Cấu trúc thư mục

```
web-on-thi/
├── index.html              # Trang chính
├── assets/
│   ├── style.css
│   └── app.js              # Logic: luyện tập, thi thử, câu sai
├── data/
│   └── questions.js        # TỰ SINH từ bank/ — không sửa tay
├── bank/                   # Nơi soạn và sửa câu hỏi
├── tools/
│   ├── merge_questions.js  # Gộp bank/ -> data/questions.js và kiểm tra lỗi
│   ├── verify_bosung.js    # Chạy thử các đáp án JavaScript
│   └── server.js           # Server xem thử ở máy
├── .github/workflows/pages.yml  # Tự build + deploy lên GitHub Pages
└── .nojekyll
```

## Chạy ở máy

Cách nhanh nhất: mở thư mục `web-on-thi` bằng VS Code, chuột phải `index.html` → **Open with Live Server**.

Hoặc dùng Node.js:

```bash
node tools/merge_questions.js   # chỉ cần khi có sửa bank/
node tools/server.js            # mở http://localhost:48173
```

## Deploy lên GitHub Pages

### Cách 1: dùng git (khuyên dùng, tự build mỗi lần push)

1. Tạo repo mới trên GitHub, ví dụ `on-tap-web-kinh-doanh` (Public).
2. Trong thư mục `web-on-thi`, mở Terminal và chạy:
   ```bash
   git init
   git add .
   git commit -m "Web on tap Phat trien Web Kinh doanh"
   git branch -M main
   git remote add origin https://github.com/<tên-github>/on-tap-web-kinh-doanh.git
   git push -u origin main
   ```
3. Trên GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Vào tab **Actions**, đợi workflow *Deploy GitHub Pages* chạy xong (khoảng 1-2 phút). Web có ở `https://<tên-github>.github.io/on-tap-web-kinh-doanh/`.
5. Lần sau sửa câu hỏi trong `bank/` chỉ cần `git add .`, `git commit -m "..."`, `git push`, web tự cập nhật.

### Cách 2: không dùng git, kéo thả file trên web

1. Chạy `node tools/merge_questions.js` để chắc `data/questions.js` là bản mới nhất.
2. Tạo repo mới trên GitHub → **Add file → Upload files**, kéo thả `index.html`, `.nojekyll`, thư mục `assets` và `data` (không cần kéo `.github`), bấm **Commit changes**.
3. **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**.
4. Đợi 1-2 phút rồi mở `https://<tên-github>.github.io/<tên-repo>/`.

## Thêm hoặc sửa câu hỏi

Mỗi file trong `bank/` dùng hàm rút gọn `S(...)` (một đáp án) và `M(...)` (nhiều đáp án), **đáp án đúng luôn đặt ở đầu mảng**; script build tự xáo vị trí A/B/C/D cố định theo id.

```js
S("c8-99", 8, 2, "Đoạn mã sau in ra gì?" + C(`var a = "5";
document.write(a + 2);`),
  ["52", "7", "NaN", "Lỗi"],
  "Toán tử + gặp chuỗi thì nối chuỗi.")
```

- Tham số: id (duy nhất), chương (1-11), độ khó (1 Dễ, 2 Trung bình, 3 Khó), câu hỏi, đúng 4 phương án, giải thích.
- `C(code)` tạo khối code; viết `` `abc` `` trong câu hỏi để hiển thị code ngắn.
- Câu có phương án kiểu "Tất cả đều đúng" sẽ không bị xáo vị trí.

Sau khi sửa, chạy `node tools/merge_questions.js`. Script báo lỗi nếu thiếu trường, trùng id, sai số phương án hoặc có emoji.
