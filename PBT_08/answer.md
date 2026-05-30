# PHIẾU BÀI TẬP 08 | JAVASCRIPT FUNCTIONS, ARRAYS & OBJECTS
## PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)
### Câu A1 (5đ) — Function Declaration vs Expression vs Arrow
```
// 1. Function Declaration
function tinhThueBaoHiem1(luong) {
    const thue = luong > 11000000 ? 0.1 : 0;
    return { thuong: luong * thue, thuc_nhan: luong * (1 - thue) };
}

// 2. Function Expression
const tinhThueBaoHiem2 = function(luong) {
    const thue = luong > 11000000 ? 0.1 : 0;
    return { thuong: luong * thue, thuc_nhan: luong * (1 - thue) };
};

// 3. Arrow Function
const tinhThueBaoHiem3 = (luong) => {
    const thue = luong > 11000000 ? 0.1 : 0;
    return { thuong: luong * thue, thuc_nhan: luong * (1 - thue) };
};
```

- Sự khác nhau về Hoisting (Cơ chế đẩy khai báo lên đầu scope):
```
- Function Declaration: Được hoisting toàn bộ (cả tên hàm và nội dung hàm). Có thể gọi hàm trước khi khai báo trong code.

- Function Expression & Arrow Function: Bị chi phối bởi từ khóa khai báo (var, let, const). Nếu dùng let/const, biến lưu hàm sẽ bị đưa vào vùng TDZ (Temporal Dead Zone), gọi trước khi khởi tạo sẽ báo lỗi ReferenceError.
```

### Câu A2 (5đ) — Scope & Closure
- Đoạn 1:
```
console.log(c.increment());  // 1
console.log(c.increment());  // 2
console.log(c.increment());  // 3
console.log(c.decrement());  // 2
console.log(c.getCount());   // 2
```

- Đoạn 2:
```
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
```

- `var` tạo biến có Function Scope (hoặc Global Scope). Vòng lặp for chạy xong lập tức khiến i = 3. Các hàm callback của setTimeout bị đẩy vào Web APIs, sau 100ms mới chạy. Khi chạy, chúng cùng tham chiếu đến một vùng nhớ chung của biến i lúc này đã là 3.

- `let` tạo biến có Block Scope. Mỗi vòng lặp sẽ tạo ra một scope hoàn toàn mới và một bản sao riêng của biến j. Các callback của setTimeout ghi nhớ scope tương ứng của chúng tại thời điểm vòng lặp chạy, nên in ra đúng 0, 1, 2.

### Câu A3 (5đ) — Array Methods
```
// 1. Lấy các số chẵn
nums.filter(n => n % 2 === 0);

// 2. Nhân mỗi số với 3
nums.map(n => n * 3);

// 3. Tính tổng tất cả
nums.reduce((sum, n) => sum + n, 0);

// 4. Tìm số đầu tiên > 7
nums.find(n => n > 7);

// 5. Kiểm tra CÓ số > 10 không
nums.some(n => n > 10);

// 6. Kiểm tra TẤT CẢ đều > 0
nums.every(n => n > 0);

// 7. Tạo mảng "Số X là [chẵn/lẻ]"
nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);

// 8. Đảo ngược mảng (không mutate gốc)
[...nums].reverse(); // Hoặc nums.toReversed() nếu dùng môi trường ES2023+
```

### Câu A4 (5đ) — Object Destructuring & Spread
```
// Destructuring
console.log(name, price, ram, color);  // "iPhone 16" 25990000 8 "Titan"
console.log(specs);                    // ReferenceError: specs is not defined
// (Vì specs ở đây chỉ đóng vai trò là đường dẫn để bóc tách ram và color, không được khai báo thành biến)

// Spread
console.log(updated.price);            // 23990000
console.log(updated.sale);             // true
console.log(product.price);            // 25990000 (Không đổi)

// Spread gotcha
console.log(product.specs.ram);        // 16
```
```
Giải thích (Tại sao lại là 16?): Toán tử Spread (...) chỉ thực hiện Shallow Copy (Sao chép nông). Nghĩa là nó chỉ tạo ra tham chiếu mới cho các giá trị nguyên thủy ở cấp độ đầu tiên (level 1). Với các Object lồng nhau (như specs), bản sao copy và bản gốc product vẫn trỏ chung về cùng một địa chỉ bộ nhớ. Sửa copy.specs.ram sẽ làm thay đổi cả product.specs.ram.
```

## PHẦN B — THỰC HÀNH CODE (60 điểm)
## PHẦN C — SUY LUẬN (20 điểm)
### Câu C1 (10đ) — Refactor Code
```
const processOrders = (orders) => orders
    .filter(({ status, total }) => status === "completed" && total > 100000)
    .map(({ id, customer, total }) => ({
        id, customer, total, discount: total * 0.1, finalTotal: total * 0.9
    }))
    .sort((a, b) => b.finalTotal - a.finalTotal);
```

### Câu C2 (10đ) — Thiết kế API
```
const miniArray = {
    map(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) result.push(fn(arr[i], i, arr));
        return result;
    },
    filter(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) result.push(arr[i]);
        }
        return result;
    },
    reduce(arr, fn, initialValue) {
        let accumulator = initialValue !== undefined ? initialValue : arr[0];
        let startIndex = initialValue !== undefined ? 0 : 1;
        
        for (let i = startIndex; i < arr.length; i++) {
            accumulator = fn(accumulator, arr[i], i, arr);
        }
        return accumulator;
    }
};
```
