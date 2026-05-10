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

### Câu A3 (7đ) — Box Model — Tính toán kích thước

#### trường hợp 1: content-box (mặc định)

```css
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```

**giải thích:**

ở kiểu này, `width` chỉ tính phần nội dung bên trong. còn `padding` và `border` sẽ được cộng thêm vào kích thước thực tế.

**chiều rộng thực tế của box:**

- phần nội dung: 400px  
- khoảng đệm (`padding`): 20px × 2 = 40px  
- đường viền (`border`): 5px × 2 = 10px  

→ tổng chiều rộng:

400 + 40 + 10 = **450px**

**không gian box chiếm trên trang:**

- chiều rộng box: 450px  
- khoảng cách ngoài (`margin`): 10px × 2 = 20px  

→ tổng:

450 + 20 = **470px**

---

#### trường hợp 2: border-box

```css
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```

**giải thích:**

ở kiểu này, `width` đã bao gồm luôn phần nội dung, khoảng đệm và đường viền.

nên khi đặt `width: 400px` thì tổng chiều rộng của box vẫn là 400px.

**chiều rộng thực tế của box:**

→ **400px**

**phần nội dung còn lại:**

- tổng chiều rộng: 400px  
- trừ khoảng đệm: 20px × 2 = 40px  
- trừ đường viền: 5px × 2 = 10px  

→ phần nội dung:

400 - 40 - 10 = **350px**

**không gian box chiếm trên trang:**

- chiều rộng box: 400px  
- khoảng cách ngoài: 10px × 2 = 20px  

→ tổng:

400 + 20 = **420px**

---

#### trường hợp 3: margin collapse

```css
.box-a {
    margin-bottom: 25px;
}

.box-b {
    margin-top: 40px;
}
```

**khoảng cách giữa hai box:**

→ **40px**

**giải thích:**

khi hai `margin` theo chiều dọc chạm nhau thì chúng không cộng lại.

trình duyệt sẽ lấy giá trị lớn hơn.

ở đây:

- `margin-bottom` của box-a là 25px  
- `margin-top` của box-b là 40px  

vì 40 lớn hơn 25 nên khoảng cách cuối cùng là:

→ **40px**

**lưu ý:**

hiện tượng này chỉ xảy ra với:

- khoảng cách trên và dưới (`top`, `bottom`)  
- các phần tử dạng khối  

không xảy ra với khoảng cách trái phải hoặc các phần tử đặc biệt như `absolute` hay `float`.

---

#### trường hợp có margin âm

```css
.box-a {
    margin-bottom: -10px;
}

.box-b {
    margin-top: 40px;
}
```

**khoảng cách giữa hai box:**

→ **30px**

**giải thích:**

- khoảng cách dương lớn nhất: 40px  
- khoảng cách âm: -10px  

→ kết quả:

40 + (-10) = **30px**

nếu cả hai đều âm:

```css
.box-a {
    margin-bottom: -15px;
}

.box-b {
    margin-top: -25px;
}
```

→ kết quả là **-25px** vì lấy giá trị âm lớn hơn.

---

### Câu A4 (5đ) — Specificity (Độ ưu tiên)

cho đoạn css:

```css
p {
    color: black;
}

.price {
    color: blue;
}

#main-price {
    color: red;
}

p.price {
    color: green;
}
```

phần tử:

```html
<p class="price" id="main-price">
```

#### 1. tính độ ưu tiên

- `p` → (0, 0, 0, 1)  
  vì có 1 thẻ html

- `.price` → (0, 0, 1, 0)  
  vì có 1 class

- `#main-price` → (0, 1, 0, 0)  
  vì có 1 id

- `p.price` → (0, 0, 1, 1)  
  vì có 1 class và 1 thẻ html

#### 2. phần tử sẽ có màu gì

→ **màu đỏ**

**giải thích:**

`id` có độ ưu tiên cao hơn `class` và tên thẻ.

vì `#main-price` có `id` nên css này sẽ được áp dụng.

nên màu cuối cùng là:

→ **red**

---

#### 3. nếu thêm style trực tiếp vào html

```html
<p class="price" id="main-price" style="color: orange;">
```

→ phần tử sẽ có **màu cam**

**giải thích:**

css viết trực tiếp trong thẻ html sẽ có độ ưu tiên cao hơn css bình thường.

nên `orange` sẽ ghi đè lên các màu còn lại.

---

#### 4. nếu thêm important

```css
p {
    color: black !important;
}

.price {
    color: blue;
}

#main-price {
    color: red;
}

p.price {
    color: green;
}
```

→ phần tử sẽ có **màu đen**

**giải thích:**

`!important` có độ ưu tiên rất cao.

dù selector yếu hơn nhưng nếu có `!important` thì vẫn được ưu tiên trước.

chỉ khi nhiều css cùng có `!important` thì mới xét tiếp đến độ ưu tiên.

## PHẦN B — THỰC HÀNH CODE (55 điểm)
### Bài B1 (20đ) — Style trang Profile
[text](profile.html)

### Bài B2 (20đ) — Box Model Lab
#### Phần 1 — Chứng minh content-box vs border-box (10đ):
- content-box:
![alt text](<screenshots/image copy.png>)
```
Hộp 1 (content-box): chiều rộng thực tế = 350px
Cách tính: 300width + 20*2(padding) + 5*2(border) = 350px.
```

- border-box:
![alt text](<screenshots/image copy 2.png>)
```
Hộp 2 (border-box): chiều rộng thực tế = 300px
Cách tính: Trình duyệt tự co phần content lại còn 250px để tổng cả box vừa đúng 300px.
```

```
Giải thích:

Với content-box, thuộc tính width chỉ áp dụng cho vùng chứa nội dung. Padding và Border sẽ cộng thêm vào bên ngoài, làm hộp to hơn dự kiến.

Với border-box, thuộc tính width là kích thước cuối cùng của cả hộp. Padding và Border sẽ lấn vào bên trong, giúp việc chia layout chính xác và dễ dàng hơn
```

## 1. trường hợp 1: không dùng border-box
![alt text](<screenshots/image copy 4.png>)

khi không dùng `border-box`, thuộc tính `width` chỉ tính phần nội dung bên trong. phần `padding` sẽ được cộng thêm vào kích thước thật của cột.

### tính kích thước từng cột

- cột trái:  
250px + (15px x 2) = 280px

- cột giữa:  
500px + (20px x 2) = 540px

- cột phải:  
250px + (15px x 2) = 280px

### tổng chiều rộng

280px + 540px + 280px = **1100px**

### kết quả

vì tổng chiều rộng là 1100px, lớn hơn 1000px của container nên các cột không thể nằm vừa trên một hàng.

ở hình thực tế, cột thứ ba (`ads`) đã bị đẩy xuống dòng. điều này cho thấy layout đã bị vỡ do `padding` làm kích thước thật vượt quá chiều rộng container.

---

## 2. trường hợp 2: có dùng border-box
![alt text](<screenshots/image copy 3.png>)

khi dùng `border-box`, phần `padding` sẽ được tính luôn bên trong `width` đã khai báo.

điều này giúp kích thước thật của các cột không bị tăng thêm.

### tổng chiều rộng

250px + 500px + 250px = **1000px**

### kết quả

vì tổng chiều rộng đúng bằng 1000px nên ba cột nằm vừa trong container.

ở hình thực tế, cả ba cột đều hiển thị trên cùng một hàng và không bị xuống dòng, layout hiển thị đúng như mong muốn.

### Bài B3 (15đ) — Specificity Battle
![alt text](<screenshots/image copy 5.png>)
### 1. liệt kê 10 rules và specificity score

1. `p` → **(0, 0, 0, 1)**  
vì có 1 thẻ html

2. `.text` → **(0, 0, 1, 0)**  
vì có 1 class

3. `.highlight` → **(0, 0, 1, 0)**  
vì có 1 class

4. `p.text` → **(0, 0, 1, 1)**  
vì có 1 class và 1 thẻ

5. `p.highlight` → **(0, 0, 1, 1)**  
vì có 1 class và 1 thẻ

6. `.text.highlight` → **(0, 0, 2, 0)**  
vì có 2 class

7. `p.text.highlight` → **(0, 0, 2, 1)**  
vì có 2 class và 1 thẻ

8. `#demo` → **(0, 1, 0, 0)**  
vì có 1 id

9. `p#demo` → **(0, 1, 0, 1)**  
vì có 1 id và 1 thẻ

10. `p#demo.text.highlight` → **(0, 1, 2, 1)**  
vì có 1 id, 2 class và 1 thẻ

---

### 2. element cuối cùng hiển thị màu gì? tại sao?

element cuối cùng hiển thị **màu gold**.

lý do là rule:

```css
p#demo.text.highlight {
    color: gold;
}
```

có độ ưu tiên cao nhất:

**(0, 1, 2, 1)**

rule này có:
- 1 id
- 2 class
- 1 thẻ html

nên nó có độ ưu tiên cao hơn tất cả các rule còn lại và được áp dụng cuối cùng.

---

### 3. thay đổi thứ tự rules trong file css, kết quả có đổi không? giải thích

**kết quả không đổi**.

vì rule:

```css
p#demo.text.highlight
```

vẫn có độ ưu tiên cao nhất nên dù đổi vị trí trong file css thì phần tử vẫn hiển thị màu gold.

tuy nhiên, nếu hai rule có cùng độ ưu tiên thì rule được viết sau sẽ được ưu tiên hơn.

## PHẦN C — DEBUG & SUY LUẬN (20 điểm)
### Câu C1 (10đ) — Debug CSS Layout
#### 1. Chiều rộng thực tế:
```
- Mặc định (box-sizing: content-box), kích thước = width + padđing + border
  + Sidebar:  300px (width) + 20px*2 (padding, trái và phải) + 1px (border, trái + phải) = 342px
  + Content: 660px + 30px*2 + 1*2px = 724px 
```
#### 2. Lý do Layout bị vỡ:
```
- Chiều rộng thực tế = 342px + 724px = 1066px
=> Vượt quá chiều rộng của .container (960px). Khi dùng float: left, nếu không đủ không gian trên 1 hàng
thì phần tử thứ 2 sẽ bị đẩy xuống dưới. 
```

#### 3. Cách sửa:
1. Cách 1: Sử dụng `border-box`
```
Thêm box-sizing: border-box để padding và border được tính bên trong width đã khai báo:
.sidebar, .content {
    box-sizing: border-box;
}
=> + Sidebar = 300px (bao gồm padding và border)
   + Content = 660px
   => Tổng = 300px + 660px = 960px 
```
2. Cách 2: Sửa lại width của sidebar và content
```
.sidebar {
    width: 258px;  /* 300 - 40 - 2 */
}
.content {
    width: 598px;  /* 660 - 60 - 2 */
}
=> + Sidebar = 258 + 40 + 2 = 300px
   + Content = 598 + 60 + 2 = 660px
   => Tổng = 300 + 660 = 960px
```

#### 4. Files

### Câu C2 (10đ) — Cascade Puzzle
#### 1. "Sản phẩm A" (h2) có font-size = ? và color = ?
```
- font-size:
.body: 16px
.container: 14px
.card .title: 20px (specificity: (0, 0, 2, 0)) 
=> font-size = 20px

- color:
.body: #333
.card: blue (không áp dụng cho title)
#featured .title: red (specificity: (0, 1, 1, 0))
.highlight: green !important (!important)
=> color = green (do !important)
```

#### 2. "Mô tả sản phẩm" (p trong card featured) có color = ?
```
-color:
.body: #333
.card: blue
.card p: inherit (inherit từ parent .card = blue)
=> color = blue (inherit lấy giá trị từ phần tử cha. Ở đây cha là .card (có color = blue) nên .card p sẽ có color bue)
```

#### 3. "Sản phẩm B" (h2) có font-size = ? và color = ?
```
-font-size
.body: 16px
.container: 14px
.card .title: 20px (specificity: (0, 0, 2, 0))
=>font-size = 20px

-color:
.body: #333
.card: blue
.card .title: không có khai báo color => inherit từ .card = blue
=>color = blue
vì rule .card .title chỉ định nghĩa font-size mà không có color
,nên thuộc tính color sẽ kế thừa từ phần tử cha .card là màu blue.
```

#### 4. "Mô tả sản phẩm B" (p.highlight) có color = ?
```
- color:
body: #333 (inherited)
.card: blue
.card p: inherit (kế thừa từ .card = blue)
.highlight: green !important (!important override tất cả)
=> color = green

giải thích:
Dù rule .card p có thuộc tính color: inherit (lấy màu blue từ .card), 
nhưng rule .highlight có khai báo color: green !important. 
Trong CSS Cascade, !important có độ ưu tiên cao nhất, 
ghi đè lên cả Specificity và tính kế thừa, nên kết quả cuối cùng là green.
```
- Ảnh:
![alt text](<screenshots/image copy 6.png>)
