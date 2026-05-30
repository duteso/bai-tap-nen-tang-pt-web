# PHIẾU BÀI TẬP 07 | JAVASCRIPT BASICS — Variables, Data Types, Control Structures
## PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)
### Câu A1 (5đ) — var / let / const
- Đoạn 1:
```
console.log(x);
var x = 5;

Output:
undefined

Giải thích: var bị hoisting và được khởi tạo mặc định là undefined.
```
- Đoạn 2
```
console.log(y);
let y = 10;

Output:
ReferenceError: Cannot access 'y' before initialization

Giải thích: let có Temporal Dead Zone (TDZ) => không truy cập được trước khi khai báo.
```

- Đoạn 3:
```
const z = 15;
z = 20;
console.log(z);

Output:
TypeError: Assignment to constant variable.

Giải thích: const là hằng, không cho phép gán lại giá trị.
console.log(z) không chạy vì code lỗi ở dòng z = 20.
```

- Đoạn 4:
```
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

Output:
[1, 2, 3, 4]

Giải thích: const không đổi được tham chiếu của mảng, nhưng vẫn sửa được nội dung bên trong.
```

- Đoạn 5
```
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);

Output:
Trong block: 2
Ngoài block: 1

Giải thích: let có block scope => biến trong {} là biến khác, không ảnh hưởng biến ngoài.
```

Sau khi chạy file `var_let_const.js` với mỗi đoạn code, kết quả output giống như những gì dự đoán ở trên.

### Câu A2 (5đ) — Data Types & Coercion
```
console.log(typeof null);         // object
console.log(typeof undefined);    // undefined
console.log(typeof NaN);          // number
console.log("5" + 3);             // "53"
console.log("5" - 3);             // 2
console.log("5" * "3");           // 15
console.log(true + true);         // 2
console.log([] + []);             // ""
console.log([] + {});             // "[object Object]"
console.log({} + []);             // 0
```
- Giải thích sự khác biệt giữa "5" + 3 và "5" - 3"
```
"5" + 3 (Kết quả: "53"): Toán tử + trong JavaScript có hai chức năng: cộng số học và nối chuỗi. Khi phát hiện một trong hai toán hạng là chuỗi (ở đây là "5"), JS sẽ ưu tiên ép kiểu toán hạng còn lại (3) thành chuỗi và thực hiện phép nối chuỗi.

"5" - 3 (Kết quả: 2): Toán tử - (và các toán tử *, /) chỉ có duy nhất một chức năng là tính toán số học. Khi sử dụng toán tử này, JS sẽ tự động ép kiểu toán hạng dạng chuỗi ("5") về kiểu số (number là 5), sau đó thực hiện phép trừ số học (5 - 3 = 2).
```

### Câu A3 (5đ) — So sánh == vs ===
```
console.log(5 == "5");           // true
console.log(5 === "5");          // false
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(NaN == NaN);         // false
console.log(0 == false);         // true
console.log(0 === false);        // false
console.log("" == false);        // true
```
- Nên sử dụng ===
    - Do `==` so sánh tương đối, tự động ép kiểu. Nghĩa là nếu hai bên khác kiểu dữ liệu (ví dụ bên trái là chuỗi, bên phải là số), JavaScript sẽ ngầm tự biến đổi về cùng một kiểu rồi mới so sánh giá trị. Điều này tạo ra những kết quả phi logic và rất dễ gây ra bug ẩn. Ví dụ: 0 == false hoặc "" == false đều trả về true.

    - `===` So sánh tuyệt đối, không ép kiểu, kiểm tra cả giá trị và kiểu dữ liệu. Nếu khác kiểu dữ liệu, => false. Chỉ khi cùng kiểu dữ liệu, nó mới so sánh tiếp giá trị. Dùng === giúp code rõ ràng, dễ kiểm soát và chạy đúng với logic mong muốn.

### Câu A4 (5đ) — Truthy & Falsy
- Các giá trị Falsy trong JavaScript:

    - false
    - 0 (bao gồm cả -0 và 0n đối với BigInt)
    - "" (chuỗi rỗng, bao gồm cả '' và ``)
    - null
    - undefined
    - NaN
- Dự đoán:
```
if ("0") console.log("A");           // In "A" (Chuỗi khác rỗng là Truthy)
if ("") console.log("B");            // Không in (Chuỗi rỗng là Falsy)
if ([]) console.log("C");            // In "C" (Mảng luôn là Truthy)
if ({}) console.log("D");            // In "D" (Object luôn là Truthy)
if (null) console.log("E");          // Không in (null là Falsy)
if (0) console.log("F");             // Không in (0 là Falsy)
if (-1) console.log("G");            // In "G" (Số khác 0 là Truthy)
if (" ") console.log("H");           // In "H" (Chuỗi có chứa khoảng trắng là khác rỗng => Truthy)
```

### Câu A5 (5đ) — Template Literals
- Cách 1:
```
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
```

- Cách 2:
```
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
```

- Cách 3:
```
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
```

## PHẦN C — SUY LUẬN (20 điểm)
### Câu C1 (10đ) — Debug JavaScript
Câu C1 (10đ) — Debug JavaScript
Dưới đây là 6 lỗi trong đoạn code, giải thích nguyên nhân và cách sửa:

1. Lỗi logic so sánh:
```
- Code cũ: if (giaSauGiam = 0)

- Giải thích: Sử dụng toán tử gán (=) thay vì toán tử so sánh (===). Điều này khiến giaSauGiam luôn bị gán bằng 0 (Falsy), lệnh trong if không bao giờ chạy và hàm luôn trả về 0.

Cách sửa: Sửa thành if (giaSauGiam === 0)
```

2. Lỗi với var trong vòng lặp bất đồng bộ:
```
- Code cũ: for (var i = 0; i < 5; i++) { setTimeout(...) }

- Giải thích: Biến var có function scope (hoặc global scope), không có block scope. Khi vòng lặp chạy xong rất nhanh, i đã tăng lên 5. Một giây sau, 5 callback của setTimeout mới thực thi và cùng tham chiếu đến biến i lúc này đã là 5. Kết quả in ra "Item 5" 5 lần.

- Cách sửa: Thay var i = 0 bằng let i = 0 (vì let có block scope, mỗi vòng lặp sẽ tạo ra một bản sao i riêng biệt).
```
3. Lỗi truyền sai kiểu dữ liệu đầu vào:
```
- Code cũ: tinhGiaGiamGia("100000", 20)

- Giải thích: Truyền chuỗi "100000" thay vì số. Dù JavaScript sẽ tự động ép kiểu ngầm định (coercion) khi thực hiện phép trừ/nhân, nhưng đây là thói quen code rất xấu, dễ gây bug nếu sau này có phép cộng (+).

- Cách sửa: Bỏ dấu ngoặc kép, truyền số 100000 hoặc ép kiểu Number("100000").
```

4. Lỗi thiếu kiểm tra giá bán:
```
- Code cũ: Hàm chỉ kiểm tra phanTramGiam mà bỏ quên giaBan.

- Giải thích: Nếu giaBan bị truyền vào là số âm, hoặc NaN, hoặc chuỗi, code vẫn tiếp tục chạy và cho ra kết quả sai lệch.

- Cách sửa: Thêm điều kiện if (typeof giaBan !== "number" || isNaN(giaBan) || giaBan < 0) { return "Giá bán không hợp lệ"; }
```
5. Lỗi xử lý kiểu trả về của hàm:
```
- Code cũ: console.log("Giá: " + gia2)

Giải thích: Khi phanTramGiam = 110, hàm trả về chuỗi "Phần trăm giảm không hợp lệ". Câu lệnh in ra sẽ nối chuỗi mù quáng thành: "Giá: Phần trăm giảm không hợp lệ", gây vô nghĩa về mặt UI/UX.

Cách sửa: Kiểm tra giá trị trả về trước khi nối chuỗi: if (typeof gia2 === "number") console.log("Giá: " + gia2 + "đ"); else console.log(gia2);
```
6. Lỗi sử dụng từ khóa khai báo lỗi thời:
```
- Code cũ: var giamGia = ...

- Giải thích: Việc dùng var không còn được khuyến khích trong ES6+ vì dễ gây rò rỉ scope và lỗi hoisting. Biến giamGia này không thay đổi lại giá trị sau khi tính.

- Cách sửa: Thay var giamGia thành const giamGia.
```

### Câu C2 (10đ) — Bài toán thực tế
```
function inHoaDon(danhSachMon, isWednesday = false, tipPercent = 5) {
    const VAT_RATE = 0.08;
    let subTotal = 0;
    
    console.log("--- HÓA ĐƠN NHÀ HÀNG ---");

    for (let i = 0; i < danhSachMon.length; i++) {
        const mon = danhSachMon[i];
        const thanhTien = mon.price * mon.quantity;
        subTotal += thanhTien;
        
        console.log(`${i + 1}. ${mon.name} (x${mon.quantity}): ${thanhTien.toLocaleString('vi-VN')}đ`);
    }

    let discountPercent = 0;
    if (subTotal > 1000000) {
        discountPercent = 15;
    } else if (subTotal > 500000) {
        discountPercent = 10;
    }
    if (isWednesday) discountPercent += 5;

    const discountAmount = subTotal * (discountPercent / 100);
    const afterDiscount = subTotal - discountAmount;

    const vatAmount = afterDiscount * VAT_RATE;
    const tipAmount = afterDiscount * (tipPercent / 100);
    const finalTotal = afterDiscount + vatAmount + tipAmount;

    const formatVND = (num) => num.toLocaleString('vi-VN') + "đ";

    console.log("------------------------");
    console.log(`Tổng cộng:      ${formatVND(subTotal)}`);
    console.log(`Giảm giá (${discountPercent}%):  ${formatVND(discountAmount)}`);
    console.log(`VAT (8%):       ${formatVND(vatAmount)}`);
    console.log(`Tip (${tipPercent}%):       ${formatVND(tipAmount)}`);
    console.log("------------------------");
    console.log(`THANH TOÁN:     ${formatVND(finalTotal)}`);
}

const order = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 }
];

inHoaDon(order, false, 5);
```