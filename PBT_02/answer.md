# PHIẾU BÀI TẬP 02  

## PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)

### Câu A1 (5đ) — Input Types

- **type="text"** -> Ô nhập văn bản một dòng, không có validation tự động.  
  Dùng để nhập họ tên khách hàng trong form thanh toán hoặc form đăng ký tài khoản.

- **type="password"** -> Ô nhập văn bản nhưng ký tự được ẩn (dấu chấm hoặc dấu sao), không có validation tự động.  
  Dùng để nhập mật khẩu khi đăng nhập hoặc tạo tài khoản mới.

- **type="number"** -> Ô nhập liệu có nút tăng/giảm giá trị (spinner), tự động kiểm tra dữ liệu số hợp lệ; có thể kết hợp `min`, `max`, `step`.  
  Dùng để điều chỉnh số lượng sản phẩm trong giỏ hàng.

- **type="tel"** -> Ô nhập văn bản, trên di động hiện bàn phím số; không tự động validate số điện thoại, thường dùng kèm `pattern`.  
  Dùng để nhập số điện thoại liên hệ trong form giao hàng.

- **type="email"** -> Ô nhập văn bản có kiểm tra định dạng email hợp lệ (có `@` và domain).  
  Dùng để nhập email nhận xác nhận đơn hàng hoặc đăng ký nhận bản tin.

- **type="radio"** -> Nút tròn cho phép chỉ chọn 1 lựa chọn trong cùng nhóm `name`; chỉ kiểm tra trạng thái `checked`.  
  Dùng để chọn phương thức thanh toán như COD, thẻ tín dụng, ví điện tử.

- **type="checkbox"** -> Ô vuông cho phép chọn nhiều mục cùng lúc; chỉ kiểm tra trạng thái `checked`.  
  Dùng để chọn "Lưu thông tin thanh toán" hoặc "Đồng ý điều khoản sử dụng".

- **type="date"** -> Ô nhập có lịch chọn ngày (date picker), đảm bảo ngày hợp lệ.  
  Dùng để chọn ngày sinh khi đăng ký thành viên.

- **type="search"** -> Ô nhập tương tự `text`, thường có nút xóa nhanh từ khóa (tùy trình duyệt), không có validation tự động.  
  Dùng làm thanh tìm kiếm sản phẩm trên website.

- **type="file"** -> Nút chọn tệp từ máy tính, mở hộp thoại duyệt file; có thể giới hạn loại file bằng `accept`.  
  Dùng để tải ảnh minh họa khi gửi đánh giá sản phẩm.

## Câu A2 (5đ) — Validation Attributes

### Trường hợp 1
```html
<input type="text" required value="">
```

**Dự đoán:**  
Form không submit được.

**Tại sao:**  
Thuộc tính `required` bắt buộc trường này không được để trống. User để trống nên trình duyệt chặn submit và báo lỗi yêu cầu nhập dữ liệu.

---

### Trường hợp 2
```html
<input type="email" value="abc">
```

**Dự đoán:**  
Form không submit được.

**Tại sao:**  
`type="email"` kiểm tra định dạng email hợp lệ. Giá trị `abc` thiếu `@` và tên miền nên sai định dạng.

---

### Trường hợp 3
```html
<input type="number" min="1" max="10" value="15">
```

**Dự đoán:**  
Form không submit được.

**Tại sao:**  
Giá trị `15` lớn hơn `max="10"` nên vi phạm giới hạn phạm vi nhập liệu.

---

### Trường hợp 4
```html
<input type="text" pattern="[0-9]{10}" value="abc123">
```

**Dự đoán:**  
Form không submit được.

**Tại sao:**  
Pattern `[0-9]{10}` yêu cầu đúng 10 chữ số. `abc123` không đúng định dạng nên validation fail.

---

### Trường hợp 5
```html
<input type="password" minlength="8" value="123">
```

**Dự đoán:**  
Form không submit được.

**Tại sao:**  
`minlength="8"` yêu cầu tối thiểu 8 ký tự, nhưng `123` chỉ có 3 ký tự nên không hợp lệ.

## Câu A3 (5đ) — Accessibility

### 1. Tại sao `<label for="email">` quan trọng cho người dùng screen reader?

`<label>` liên kết nhãn với ô input thông qua thuộc tính `for` trùng với `id` của input.

Ví dụ:

```html
<label for="email">Email</label>
<input type="email" id="email">
```

**Quan trọng vì:**
- Screen reader đọc được tên trường nhập liệu, ví dụ “Email”.
- Giúp người dùng biết cần nhập dữ liệu gì.
- Hỗ trợ điều hướng tốt hơn cho người dùng dùng công nghệ hỗ trợ.
- Click vào label cũng có thể focus vào input, tăng usability.

---

### 2. Khi nào dùng `<fieldset>` + `<legend>`?

Dùng khi nhiều input thuộc cùng một nhóm thông tin liên quan, đặc biệt radio hoặc checkbox.

- `<fieldset>` dùng để nhóm các trường liên quan.  
- `<legend>` dùng làm tiêu đề mô tả cho nhóm đó.

Ví dụ:

```html
<fieldset>
  <legend>Phương thức thanh toán</legend>

  <input type="radio" id="cod" name="payment">
  <label for="cod">COD</label>

  <input type="radio" id="card" name="payment">
  <label for="card">Thẻ tín dụng</label>
</fieldset>
```

**Lợi ích:**
- Screen reader hiểu đây là một nhóm lựa chọn.
- Người dùng biết bối cảnh của nhóm input.
- Cải thiện semantic HTML và accessibility.

---

### 3. `aria-label` dùng khi nào?

Dùng khi phần tử không có nhãn hiển thị nhưng vẫn cần tên để screen reader đọc.

Ví dụ:

```html
<input type="search" aria-label="Tìm kiếm sản phẩm">
```

Ô tìm kiếm không có label hiển thị, nên `aria-label` cung cấp tên truy cập.

---

### 4. Tại sao KHÔNG nên dùng `aria-label` khi đã có `<label>`?

Không nên dùng vì `<label>` đã là giải pháp semantic chuẩn cho accessibility.

Lý do:
- Có thể gây trùng lặp thông tin.
- Có thể ghi đè tên accessible mặc định.
- Dễ gây xung đột khi screen reader đọc.
- Nguyên tắc ưu tiên: dùng HTML native trước, chỉ dùng ARIA khi thật sự cần.

## Câu A4 (5đ) — Media

### 1. Giải thích `loading="lazy"` trên thẻ `<img>`

`loading="lazy"` dùng để **trì hoãn tải ảnh** cho đến khi ảnh gần xuất hiện trong vùng nhìn (viewport) của người dùng.

Ví dụ:

```html
<img src="product.jpg" alt="iPhone 16 màu đen" loading="lazy">
```

### Nó cải thiện gì?
- Giảm thời gian tải trang ban đầu.
- Giảm băng thông vì ảnh chưa cần chưa tải ngay.
- Tăng hiệu năng, đặc biệt trang có nhiều ảnh.
- Cải thiện trải nghiệm người dùng và hỗ trợ tối ưu SEO/Core Web Vitals.

### Khi nào KHÔNG nên dùng?
Không nên dùng cho ảnh quan trọng xuất hiện ngay đầu trang, ví dụ:
- Hero banner
- Ảnh sản phẩm chính phía trên màn hình đầu tiên
- Logo
- Ảnh LCP (Largest Contentful Paint)

Vì lazy load có thể làm các ảnh này hiện chậm hơn.

---

### 2. Tại sao nên cung cấp nhiều `<source>` trong thẻ `<video>`?

Vì không phải trình duyệt nào cũng hỗ trợ cùng một định dạng video.

Dùng nhiều `<source>` giúp:
- Tăng khả năng tương thích trình duyệt.
- Trình duyệt tự chọn format hỗ trợ tốt nhất.
- Có phương án fallback nếu format này không chạy.

Ví dụ:

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <source src="video.ogv" type="video/ogg">
</video>
```

### 3 format video web phổ biến:
- MP4 (H.264)
- WebM
- Ogg / OGV

---

### 3. Thuộc tính `alt` trên `<img>` dùng để làm gì?

`alt` là văn bản thay thế mô tả nội dung ảnh.

Công dụng:
- Screen reader đọc cho người khiếm thị.
- Hiện mô tả nếu ảnh lỗi không tải được.
- Hỗ trợ SEO và hiểu nội dung ảnh.

---

### Viết alt cho 3 trường hợp

#### Ảnh sản phẩm iPhone 16
```html
alt="Điện thoại iPhone 16 màu titan xanh chụp mặt trước và mặt sau"
```

---

#### Ảnh trang trí (decorative)
```html
alt=""
```

Ảnh chỉ trang trí nên để alt rỗng để screen reader bỏ qua.

---

#### Ảnh biểu đồ doanh thu Q1/2026
```html
alt="Biểu đồ doanh thu quý 1 năm 2026 cho thấy doanh thu tăng từ tháng 1 đến tháng 3"
```

## Câu A5 (5đ) — So sánh `<figure>` vs `<img>`

### Khi nào dùng Cách 1 (`<img>`)

```html
<img src="product.jpg" alt="iPhone">
```

Dùng khi ảnh chỉ là nội dung hình ảnh đơn lẻ, không cần chú thích đi kèm.

Phù hợp khi:
- Ảnh minh họa đơn giản.
- Ảnh không cần caption.
- Ảnh là thành phần nhỏ trong giao diện.

### Ví dụ thực tế

**Ví dụ 1:** Ảnh logo thương hiệu trong header

```html
<img src="logo.png" alt="Logo Apple">
```

**Ví dụ 2:** Ảnh thumbnail sản phẩm trong card

```html
<img src="iphone16.jpg" alt="iPhone 16 màu đen">
```

---

### Khi nào dùng Cách 2 (`<figure>` + `<figcaption>`)

```html
<figure>
    <img src="product.jpg" alt="iPhone 16 Pro Max 256GB Titan">
    <figcaption>iPhone 16 Pro Max — 25.990.000đ</figcaption>
</figure>
```

Dùng khi ảnh cần chú thích, mô tả hoặc caption gắn liền với ảnh.

Phù hợp khi:
- Ảnh cần giải thích nội dung.
- Ảnh sản phẩm có thông tin đi kèm.
- Ảnh biểu đồ, minh họa, ảnh trong bài viết.

### Ví dụ thực tế

**Ví dụ 1:** Ảnh sản phẩm kèm tên và giá

```html
<figure>
  <img src="iphone16.jpg" alt="iPhone 16 Pro Max">
  <figcaption>iPhone 16 Pro Max — 25.990.000đ</figcaption>
</figure>
```

**Ví dụ 2:** Ảnh biểu đồ trong báo cáo

```html
<figure>
  <img src="chart.png" alt="Biểu đồ doanh thu quý 1">
  <figcaption>Doanh thu tăng 18% trong quý 1/2026</figcaption>
</figure>
```

---

### Kết luận
- `<img>` -> dùng khi chỉ cần hiển thị ảnh.  
- `<figure>` + `<figcaption>` -> dùng khi ảnh cần ngữ cảnh hoặc chú thích đi kèm.

## PHẦN B — THỰC HÀNH CODE (55 điểm)
### Bài B1 (20đ) — Form Đăng ký Tài khoản
### Giải thích tại sao HTML không thể validate Confirm Password

HTML chỉ kiểm tra dữ liệu của từng ô input riêng bằng các thuộc tính như `required`, `minlength`, `pattern`... nên chỉ biết ô nhập đó có đúng định dạng hay không.

Ví dụ ô xác nhận mật khẩu có thể kiểm tra:
- đủ 8 ký tự  
- có ít nhất 1 chữ hoa  
- có ít nhất 1 số  

Nhưng HTML không tự so sánh được mật khẩu nhập ở ô Password có giống ô Confirm Password hay không.

Ví dụ:

```text
Password: Abc12345
Confirm Password: Abc12346
```

Hai mật khẩu khác nhau nhưng HTML vẫn có thể coi cả hai hợp lệ vì đều đúng pattern.

Việc kiểm tra hai ô có trùng nhau hay không là kiểm tra giữa nhiều trường dữ liệu (cross-field validation), HTML thuần không làm được, thường phải dùng JavaScript hoặc kiểm tra phía server để xử lý.

## PHẦN C — PHÂN TÍCH & SUY LUẬN

## Câu C1 (10đ) — Debug Form

**Lỗi 1:** Input "Tên" không có `<label for="">`, vi phạm accessibility.  

**Sửa:**
```html
<label for="name">Tên:</label>
<input type="text" id="name" name="name" required>
```

---

**Lỗi 2:** Input Email không có label, chỉ dùng placeholder là chưa đủ cho accessibility.

**Sửa:**
```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
```

---

**Lỗi 3:** Password chưa có validation tối thiểu (`required`, `minlength`).

**Sửa:**
```html
<label for="password">Mật khẩu:</label>
<input 
type="password"
id="password"
name="password"
minlength="8"
required>
```

---

**Lỗi 4:** Confirm Password không có label và chưa có required.

**Sửa:**
```html
<label for="confirm-password">
Nhập lại mật khẩu:
</label>

<input
type="password"
id="confirm-password"
name="confirm-password"
required>
```

---

**Lỗi 5:** Phone dùng sai `type="text"` thay vì `type="tel"`.

**Sửa:**
```html
<label for="phone">Số điện thoại:</label>

<input
type="tel"
id="phone"
name="phone"
pattern="0[0-9]{9}"
required>
```

---

**Lỗi 6:** Dùng `value="0901234567"` làm dữ liệu mặc định không phù hợp, nên dùng placeholder.

**Sửa:**
```html
<input
type="tel"
placeholder="0901234567">
```

---

**Lỗi 7:** Select không có label, vi phạm accessibility.

**Sửa:**
```html
<label for="city">Tỉnh/Thành phố:</label>

<select id="city" name="city">
<option>Hà Nội</option>
<option>TP.HCM</option>
</select>
```

---

**Lỗi 8:** Điều khoản chưa có checkbox thật, chỉ có label.

**Sửa:**
```html
<input
type="checkbox"
id="terms"
required>

<label for="terms">
Tôi đồng ý điều khoản
</label>
```

---

## Câu C2 (10đ) — Thiết kế chiến lược Validation

### Regex cho CMND/CCCD (đúng 12 chữ số)

```html
pattern="[0-9]{12}"
```

Ví dụ hợp lệ:

```text
123456789012
```

---

### Regex cho số tài khoản (10–15 chữ số)

```html
pattern="[0-9]{10,15}"
```

Ví dụ hợp lệ:

```text
1234567890
123456789012345
```

---

### PIN (6 chữ số, không hiển thị)

```html
<input
type="password"
pattern="[0-9]{6}"
maxlength="6"
required>
```

---

### HTML5 validation có đủ an toàn cho ứng dụng ngân hàng chưa?

Không đủ.

HTML5 validation chỉ hỗ trợ kiểm tra dữ liệu phía frontend, giúp người dùng nhập đúng định dạng, nhưng không phải cơ chế bảo mật.

Người dùng có thể:
- tắt validation của trình duyệt  
- chỉnh sửa HTML bằng DevTools  
- gửi request giả bằng Postman hoặc API  
- bypass toàn bộ frontend validation  

Vì vậy vẫn bắt buộc validate ở backend.

---

### 3 loại validation HTML5 không thể tự làm

**1. So sánh giữa nhiều trường dữ liệu**  
Ví dụ:
- Xác nhận mật khẩu trùng mật khẩu  
- Nhập lại số tài khoản có khớp không

---

**2. Kiểm tra nghiệp vụ động**  
Ví dụ:
- CCCD đã tồn tại chưa  
- Email đã đăng ký chưa  
- Số dư có đủ để giao dịch không

---

**3. Validation logic phức tạp**  
Ví dụ:
- Người dùng phải từ 18 tuổi trở lên  
- PIN không được là 000000  
- Mật khẩu không chứa tên đăng nhập

---

### 2 rủi ro nếu chỉ validate Frontend

**1. Dữ liệu xấu vẫn có thể gửi lên hệ thống**  
Có thể dẫn tới:
- sai định dạng  
- dữ liệu giả  
- nhập payload độc hại

---

**2. Rủi ro bảo mật**  
Có thể bị:
- SQL Injection  
- XSS  
- giả mạo request hoặc gian lận giao dịch

Vì vậy Frontend validation chỉ hỗ trợ trải nghiệm người dùng, backend validation mới là lớp kiểm tra bắt buộc.