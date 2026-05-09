# PHIẾU BÀI TẬP 03
## PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)
### Câu A1 (5đ) — 3 Cách nhúng CSS
1. inline css
- VD: `<h1 style="color: blue; font-size: 40px; text-align: center;">This is a styled heading</h1>`
- Ưu điểm: Nhanh, apply ngay lập tực, không cần tạo file css riêng, ưu tiên cao nhất, tiện cho việc test 1 element cụ thể
- Nhược điểm: Phải copy nhiều lần nếu muốn dùng lại, khó đọc, khó maintain, rối mắt
- Khi nào nên dùng: Debug/Test nhanh, Email HTML, Override Style trong trường hợp đặc biệt

2. internal css (đặt trong thẻ `<style></style>`)
- VD: 
```
<!DOCTYPE html>
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
</html>
```
- Ưu điểm: Cả HTML và CSS nằm trong 1 file => dễ test, demo ; Không cần tạo file CSS riêng, Sử dụng lại style trong cùng 1 trang, Nhanh
- Nhược điểm: Không dùng lại được ở file HTML khác, file HTML dài và nặng hơn, khó bảo trì
- Khi nào nên dùng: Trang đơn, Landing Page, Email template

3. external css (tạo file css riêng)
- VD: 
- file css: 
```body {
  background-color: lightblue;
}
h1 {
  color: navy;
  margin-left: 20px;
}
```

- file html:
```<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>
</body>
</html>
```
- Ưu điểm: File dễ đọc, dễ bảo trì, dùng được file css cho nhiều trang html khác
- Nhược điểm: Cần HTTP req thêm, phải quản lý nhiều files, cần localhost/server để test
- Khi nào nên dùng: Dự án thực tế, Website nhiều trang, bảo trì lâu dài, làm việc nhóm

### Câu A2 (8đ) — CSS Selectors — Dự đoán kết quả
1. `h1` → Chọn: **ShopTLU**
   - Giải thích: Chọn tất cả thẻ h1 trong trang, ở đây chỉ có 1 thẻ h1

2. `.price` → Chọn: **25.990.000đ** và **45.990.000đ**
   - Giải thích: Chọn tất cả elements có class="price", có 2 thẻ p

3. `#app header` → Chọn: **toàn bộ thẻ <header class="top-bar dark">**
   - Giải thích: Chọn thẻ header nằm trong element có id="app"

4. `nav a:first-child` → Chọn: **Home**
   - Giải thích: Chọn thẻ a đầu tiên trong nav (pseudo-class :first-child)

5. `.product.featured h2` → Chọn: **MacBook Pro**
   - Giải thích: Chọn h2 trong element có CẢ 2 class "product" và "featured"

6. `article > p` → Chọn: **25.990.000đ**, **Mô tả sản phẩm...**, **45.990.000đ**, **Mô tả sản phẩm...**
   - Giải thích: Chọn tất cả thẻ p là con TRỰC TIẾP của article (4 thẻ p)

7. `a[href="/"]` → Chọn: **Home**
   - Giải thích: Chọn thẻ a có thuộc tính href="/" (attribute selector)

8. `.top-bar.dark h1` → Chọn: **ShopTLU**
   - Giải thích: Chọn h1 trong element có CẢ 2 class "top-bar" và "dark"

9. Screenshot: ![alt text](screenshots/image.png)