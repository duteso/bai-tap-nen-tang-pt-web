# PHIẾU BÀI TẬP 03
## PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)
### Câu A1 (5đ) — 3 Cách nhúng CSS
- 1. inline css
- VD: `<h1 style="color: blue; font-size: 40px; text-align: center;">This is a styled heading</h1>`
- Ưu điểm: Nhanh, apply ngay lập tực, không cần tạo file css riêng, ưu tiên cao nhất, tiện cho việc test 1 element cụ thể
- Nhược điểm: Phải copy nhiều lần nếu muốn dùng lại, khó đọc, khó maintain, rối mắt
- Khi nào nên dùng: Debug/Test nhanh, Email HTML, Override Style trong trường hợp đặc biệt

- 2. internal css (đặt trong thẻ `<style></style>`)
- VD: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: lightblue;
    }
    h1 {
      color: navy;
      margin-left: 20px;
    }
  </style>
</head>
<body>
  <h1>Welcome to Internal CSS</h1>
  <p>Styles defined in the head apply to this entire page.</p>
</body>
</html>`
- Ưu điểm: Cả HTML và CSS nằm trong 1 file => dễ test, demo ; Không cần tạo file CSS riêng, Sử dụng lại style trong cùng 1 trang, Nhanh
- Nhược điểm: Không dùng lại được ở file HTML khác, file HTML dài và nặng hơn, khó bảo trì
- Khi nào nên dùng: Trang đơn, Landing Page, Email template

- 3. external css (tạo file css riêng)
- VD: - file css: 
`body {
  background-color: lightblue;
}
h1 {
  color: navy;
  margin-left: 20px;
}`

- file html:
`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>
</body>
</html>`
- Ưu điểm: File dễ đọc, dễ bảo trì, dùng được file css cho nhiều trang html khác
- Nhược điểm: Cần HTTP req thêm, phải quản lý nhiều files, cần localhost/server để test
- Khi nào nên dùng: Dự án thực tế, Website nhiều trang, bảo trì lâu dài, làm việc nh