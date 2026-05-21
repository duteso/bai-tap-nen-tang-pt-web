# PHIẾU BÀI TẬP 06 | CSS FRAMEWORKS — Bootstrap 5 / TailwindCSS
## TRACK A — BOOTSTRAP 5
### PHẦN A — ĐỌC HIỂU (20 điểm)
#### Câu A1 (10đ) — Grid System
|Kích thước|<768px|(xs/sm)768px - 991px |>= 992px (lg)|
|-|-|-|-|
|Số cột|1 cột|2 cột|4 cột|
|Box layout | Xếp chồng dọc 4 box (1x4)|Lưới 2 hàng, mỗi hàng 2 box (2x2)|Nằm ngang trên 1 hàng (4x1)|

- col-md-6 nghĩa là gì?
```
- Hệ thống lưới của Bootstrap chia chiều ngang màn hình thành 12 cột bằng nhau.  
- col-md-6 hiểu đơn giản là: Phần tử này sẽ chiếm 6 cột (tức là đúng một nửa, 50% màn hình).  
- Tuy nhiên, nó chỉ bắt đầu chia đôi như vậy khi giao diện hiển thị trên màn hình có kích thước từ mức md trở lên (Medium - màn hình rộng từ 768px trở lên, cỡ như máy tính bảng).
```
- Tại sao không cần viết col-sm-12?
```
- Bootstrap được thiết kế theo kiểu "Mobile-First" (tức là ưu tiên code giao diện cho màn hình điện thoại trước, sau đó mới tính đến màn hình to).

- Khi dùng class col-12, nó sẽ tự động áp dụng cho màn hình bé nhất (xs) và cứ thế giữ nguyên (kế thừa) lên các màn hình lớn hơn như sm.

- Giao diện sẽ chỉ thay đổi tỷ lệ khi nó chạm vào một class quy định mốc mới (trong trường hợp này là đến mốc 768px thì gặp thằng col-md-6 để đổi thành nửa màn hình).

- Vì vậy, ở các màn hình nhỏ (xs, sm), phần tử đã mặc định chiếm trọn 12 cột rồi. Việc viết thêm col-sm-12 vào là dư code, không cần thiết.
```
#### Câu A2 (10đ) — Utilities & Components
1. `d-none d-md-block`
```
- Ẩn trên các màn hình nhỏ (kích thước xs và sm, tức là màn hình bé hơn 768px). Class d-none (display: none) áp dụng mặc định từ màn hình nhỏ nhất.
- Hiển thị dưới dạng khối (display: block) trên các màn hình từ mốc md trở lên (>= 768px, ví dụ: máy tính bảng, laptop).
```
2. `5 spacing utilities (margin/padding)`
```
- mt-3: margin-top mức 3 (tạo khoảng cách đẩy lề phía trên, thường tương đương 16px).

- px-4: padding trục x (tạo khoảng đệm bên trong ở bên trái và phải) mức 4 (thường tương đương 24px).

- mb-auto: margin-bottom auto (khoảng cách lề dưới tự động tính toán, thường để đẩy phần tử khác xuống sát đáy).

- mx-auto: margin trục x tự động (khoảng lề trái và phải tự động chia đều, rất hay dùng để căn giữa phần tử theo chiều ngang).

- py-2: padding trục y (tạo khoảng đệm bên trong ở phía trên và dưới) mức 2 (thường tương đương 8px).
```
3. Sự khác nhau giữa `.container`, `.container-fluid`, `.container-md`
```
.container: Đặt chiều rộng tối đa (max-width) cố định cho từng mốc kích thước màn hình. Khi co kéo trình duyệt, bề ngang của nó sẽ thu/phóng theo từng bậc.

.container-fluid: Tràn viền. Luôn luôn chiếm 100% chiều rộng của màn hình ở mọi thiết bị.

.container-md: Chiếm 100% chiều rộng (như fluid) ở các màn hình nhỏ. Chỉ khi màn hình đạt đến kích thước md (>= 768px) trở lên, nó mới co lại và có max-width cố định giống như .container bình thường.
```

### PHẦN C — PHÂN TÍCH (20 điểm)
#### Câu C1 (10đ) — Tùy biến Bootstrap
1. Quy trình đổi màu primary từ xanh sang #E63946:
```
   Bước 1: Chuẩn bị công cụ
    - Cài Node.js
    - Cài Sass: npm install -g sass
    - Tải Bootstrap source code (file .scss) từ getbootstrap.com

    Bước 2: Tạo file tùy chỉnh
    - Tạo file custom.scss:

    ```
    scss$primary: #E63946;
    @import "bootstrap/scss/bootstrap";
    ```

    Bước 3: Compile
    - Chạy lệnh: sass custom.scss custom.css

    Bước 4: Dùng file CSS đã compile
    <link rel="stylesheet" href="custom.css">

    - Không sửa trực tiếp file Bootstrap gốc, mà tạo file custom.scss riêng, khai báo biến trước khi import Bootstrap.
```
2. Tại sao KHÔNG nên override trực tiếp?
Cách sai:
`css.btn-primary { background: red; }`

Lý do:
```
- Chỉ đổi được background, không đổi hover, active, disabled
- Phải override nhiều class: .btn-primary, .btn-primary:hover, .btn-primary:active, .btn-outline-primary, .bg-primary, .text-primary, .border-primary...
- Tốn nhiều dòng code, dễ bỏ sót
- Khó bảo trì khi cần đổi màu lần 2
```
Cách dung (dùng SASS variables):
`$primary: #E63946;`
```
- Đổi 1 biến = tất cả class liên quan tự động đổi
- Bootstrap tự tính toán màu hover, active, disabled dựa trên màu gốc
- Dễ bảo trì, chỉnh sửa sau này
```

#### Câu C2 (10đ) — So sánh
CSS từ PBT_05: [responsive.css](../PBT_05/css/responsive.css)  
`Navbar:`
```
.header { ... }           /* 7 dòng */
.header .container { ... } /* 4 dòng */
.logo { ... }             /* 3 dòng */
.hamburger { ... }        /* 7 dòng */
.nav { ... }              /* 1 dòng */
.nav a { ... }            /* 4 dòng */
@media (min-width: 768px) {
    .hamburger { ... }    /* 2 dòng */
    .nav { ... }          /* 2 dòng */

=> Tổng navbar: 30 dòng CSS
}
```
`Product card:`
```
.product-card { ... }     /* 7 dòng */
.product-card img { ... } /* 4 dòng */
.product-card h3 { ... }  /* 3 dòng */
.price { ... }            /* 5 dòng */
.btn { ... }              /* 9 dòng */
@media (min-width: 768px) {
    .product-card h3 { ... } /* 2 dòng */
}
=>Tổng card: 30 dòng CSS
```
=> Tổng: 60 dòng CSS thuần
Bootstrap:
```
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler">...</button>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">...</ul>
        </div>
    </div>
</nav>

<div class="card">
    <img src="..." class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">Tên sản phẩm</h5>
        <p class="card-text text-danger fw-bold">29.990.000đ</p>
        <button class="btn btn-primary w-100">Mua ngay</button>
    </div>
</div>
```
=> Tổng: 0 dòng CSS
2. So sánh chi tiết:  
|Tiêu chí|CSS thuần|Bootstrap|
|-|-|-|
|Số dòng CSS|Nhiều. Phải tự định nghĩa từ đầu mọi thuộc tính (padding, margin, flexbox, grid, breakpoints). Như ví dụ trên mất khoảng ~60 dòng|Gần như bằng 0. Chủ yếu chỉ cần gán các class có sẵn vào HTML (vd: navbar, card, d-flex, d-md-none).Gần như bằng 0. Chủ yếu chỉ cần gán các class có sẵn vào HTML (vd: navbar, card, d-flex, d-md-none).|
Thời gian viết code|lâu|nhanh|
|Hiểu logic|Cao. Kiểm soát hoàn toàn code, dễ dàng tạo ra giao diện riêng k có code dư thừa.|Thấp. Phải override các thuộc tính mặc định của Bootstrap (thường phải dùng !important hoặc setup SCSS phức tạp), giống các trang khác.|

4. Khi nào NÊN và KHÔNG NÊN dùng Bootstrap
Nên dùng Bootstrap khi:

- Làm bài tập trên trường (nộp nhanh)
- Dự án admin nội bộ công ty (không cần đẹp, chỉ cần chạy)
- Deadline gấp (làm trong 1-2 ngày)
- Làm prototype để demo cho khách hàng
- Team nhiều người (thống nhất code dễ hơn)
- Trang web cơ bản (blog cá nhân, trang tin tức)

Không nên dùng Bootstrap khi:

- Website thương mại lớn (Shopee, Tiki - cần design độc đáo)
- Landing page bán hàng (cần nổi bật, khác biệt đối thủ)
- Website portfolio (muốn thể hiện kỹ năng CSS)
- Dự án cần tối ưu tốc độ (Bootstrap nặng 180KB)
- Design phức tạp không khớp grid Bootstrap
- Muốn học sâu CSS (dùng Bootstrap nhiều sẽ không biết viết CSS thuần)

## TRACK B — TAILWINDCSS
### PHẦN A — ĐỌC HIỂU (20 điểm)
#### Câu A1 (10đ) — Utility Classes
```
<div class="flex items-center justify-between p-4 bg-white shadow-md rounded-lg 
            hover:shadow-xl transition-shadow duration-300">
```
Class|	CSS tương đương
|-|-|
flex|	display: flex
items-center|	align-items: center
justify-between|	justify-content: space-between
p-4|	padding: 1rem (16px)
bg-white|	background-color: #fff
shadow-md|	box-shadow mức medium
rounded-lg|	border-radius: 0.5rem
hover:shadow-xl|	Khi hover => shadow lớn hơn
transition-shadow|	Transition cho thuộc tính box-shadow
duration-300|	Thời gian transition 300ms

```
<img class="w-16 h-16 rounded-full object-cover" ...>
```
| Class          | CSS tương đương         |
| -------------- | ----------------------- |
| `w-16`         | `width: 4rem` (64px)    |
| `h-16`         | `height: 4rem`          |
| `rounded-full` | `border-radius: 9999px` |
| `object-cover` | `object-fit: cover`     |

```
<div class="ml-4 flex-1">
```
| Class    | CSS tương đương                     |
| -------- | ----------------------------------- |
| `ml-4`   | `margin-left: 1rem`                 |
| `flex-1` | `flex: 1 1 0%` — chiếm phần còn lại |

```
<h3 class="text-lg font-semibold text-gray-800 truncate">
```
| Class           | CSS tương đương                                                  |
| --------------- | ---------------- |
| `text-lg`       | `font-size: 1.125rem`                                            |
| `font-semibold` | `font-weight: 600`                                               |
| `text-gray-800` | Màu chữ gray-800                                                 |
| `truncate`      | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` |

```
<p class="text-sm text-gray-500">
```
| Class           | CSS tương đương       |
| --------------- | --------------------- |
| `text-sm`       | `font-size: 0.875rem` |
| `text-gray-500` | Màu chữ gray-500      |

```
<button class="px-4 py-2 bg-blue-500 text-white rounded-md 
               hover:bg-blue-600 focus:ring-2 focus:ring-blue-300">
```
| Class                 | CSS tương đương              |
| --------------------- | ---------------------------- |
| `px-4`                | `padding-left/right: 1rem`   |
| `py-2`                | `padding-top/bottom: 0.5rem` |
| `bg-blue-500`         | Nền xanh 500                 |
| `text-white`          | Chữ trắng                    |
| `rounded-md`          | `border-radius: 0.375rem`    |
| `hover:bg-blue-600`   | Hover => nền đậm hơn          |
| `focus:ring-2`        | Focus => ring 2px             |
| `focus:ring-blue-300` | Màu ring xanh nhạt           |

#### Câu A2 (10đ) — Responsive & States

1. Prefix responsive (md:, lg:, xl:)

Tailwind hoạt động theo kiểu Mobile-First giống Bootstrap, tức là ưu tiên code cho màn hình điện thoại trước rồi mới mở rộng lên màn hình lớn.

`md:grid-cols-2 lg:grid-cols-4` nghĩa là:
| Viewport       | Grid columns     |
| -------------- | ---------------- |
| `<768px`       | 1 cột (mặc định) |
| `≥768px (md)`  | 2 cột            |
| `≥1024px (lg)` | 4 cột            |

### 2. State modifiers

| Modifier | Khi nào áp dụng |
|----------|------------------|
| `hover:` | Khi rê chuột vào element |
| `focus:` | Khi element được focus |
| `active:` | Khi đang giữ chuột nhấn |
| `group-hover:` | Khi phần tử cha có class `group` được hover |

1. Ẩn mobile, hiện flex từ tablet  
Tương đương Bootstrap `d-none d-md-flex`:

```
class="hidden md:flex"
```

- `hidden` → `display: none` (mobile)
- `md:flex` → từ ≥768px: `display: flex`

### PHẦN C — PHÂN TÍCH (20 điểm)
#### Câu C1 (10đ) — Tailwind vs CSS thuần
Component chọn để so sánh: `Product card`  
`CSS thuần:`
```
HTML:
<div class="product-card">
    <img src="https://placehold.co/300x300" alt="Product 1">
    <h3>iPhone 15 Pro Max</h3>
    <p class="price">29.990.000đ</p>
    <button class="btn">Mua ngay</button>
</div>

CSS:
.product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    background: white;
}

.product-card img {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 12px;
}

.product-card h3 {
    font-size: 16px;
    margin-bottom: 8px;
}

.price {
    color: #e74c3c;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
}

.btn {
    background: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    width: 100%;
}
```
`Tailwind:`
```
<div class="border border-gray-300 rounded-lg p-4 text-center bg-white">
    <img src="..." class="w-full rounded mb-3">
    <h3 class="text-base md:text-lg mb-2">Tên sản phẩm</h3>
    <p class="text-red-500 text-lg font-bold mb-3">29.990.000đ</p>
    <button class="w-full bg-blue-500 text-white px-5 py-2 rounded 
                   text-sm hover:bg-blue-600">
        Mua ngay
    </button>
</div>
```

1. HTML file size 
 
| Tiêu chí | CSS thuần | Tailwind |
|-----------|------------|-----------|
| HTML size | HTML ngắn, gọn vì chỉ dùng class semantic | HTML dài hơn do nhiều utility class |
| CSS size | Phải tự viết CSS riêng | Gần như không cần CSS custom |
| Maintainability | Dễ đọc, dễ quản lý file CSS | Sửa nhanh trực tiếp trong HTML |
| Reusability | Dùng lại bằng class riêng | Có thể dùng `@apply` để gom class |

2. Maintainability (dễ đọc? dễ sửa?)

| Tiêu chí | CSS thuần | Tailwind |
|---|---|---|
| Dễ đọc HTML | HTML ngắn, class dễ hiểu (`product-card`, `btn`) | HTML dài hơn do nhiều utility class |
| Dễ sửa style | Sửa trong file CSS, áp dụng toàn component | Sửa trực tiếp trong HTML bằng utility class |
| Debug | Dễ tìm lỗi nếu CSS tổ chức tốt | Nhìn phát biết style nằm đâu, sửa nhanh 

3. Reusability (dùng lại thế nào? @apply?)

| Tiêu chí    | CSS thuần| Tailwind|
| -| -| - |
| Reusability | Tạo class riêng (`product-card`, `btn`) rồi dùng lại nhiều nơi | Thường bị lặp nhiều utility class; có thể gom bằng `@apply` hoặc component framework (Vue/React) |

**`@apply`:** Trong file CSS build Tailwind, gom utilities thành class semantic:

```
@layer components {
  .card-product {
    @apply rounded-lg shadow-md hover:shadow-xl transition-shadow;
  }
}
```

Sau đó dùng lại:
```
<div class="card-product">
    ...
</div>
```

## Câu C2 — Performance

### 1. HTML dài nhưng CSS output nhỏ hơn Bootstrap?

Bootstrap ship **toàn bộ** grid, components, utilities (~200KB+ minified). Tailwind **JIT/Purge** chỉ giữ class **thực sự xuất hiện** trong HTML/JS → file CSS cuối thường **vài KB–vài chục KB**.

### 2. PurgeCSS / Tailwind JIT

Quét source (HTML, JSX, Vue…) → chỉ **generate CSS cho class tìm thấy**. Loại bỏ hàng nghìn utility không dùng (`bg-fuchsia-900`, `mt-96`, …).

### 3. Khi KHÔNG nên dùng Tailwind (2 tình huống)

1. **Email templates** — hỗ trợ utility class kém, cần inline CSS cổ điển.
2. **Dự án bắt buộc design system riêng phức tạp** với component API chặt — team đã có hệ thống SCSS/BEM lớn, migrate Tailwind tốn kém hơn lợi ích.