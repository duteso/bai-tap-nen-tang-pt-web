# PHIẾU BÀI TẬP 09 | DOM MANIPULATION & EVENTS
## PHẦN A — KIỂM TRA ĐỌC HIỂU (15 điểm)
### Câu A1 (5đ) — DOM Tree
1. Dom tree:
```
div#app
├── header
│   ├── h1 ("Todo App")
│   └── nav
│       ├── a.active ("All")
│       ├── a ("Active")
│       └── a ("Completed")
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button ("Add")
    └── ul#todoList
        ├── li.todo-item ("Learn HTML")
        └── li.todo-item.completed ("Learn CSS")
```
2. querySelector:
```
document.querySelector("h1");
document.querySelector("#todoInput");
document.querySelectorAll(".todo-item");
document.querySelector("nav a.active");
document.querySelector("#todoList li:first-child");
document.querySelectorAll("nav a");
```

### Câu A2 (5đ) — innerHTML vs textContent
- innerHTML: Lấy hoặc gán toàn bộ nội dung HTML bên trong một phần tử.
    - Khi nào dùng: Khi cần tạo và render các thẻ HTML mới vào DOM từ một chuỗi (ví dụ: div.innerHTML = "<strong>Hello</strong>";).

- textContent: Chỉ lấy hoặc gán nội dung văn bản thuần túy, bỏ qua mọi thẻ HTML.
    - Khi nào dùng: Khi chỉ cần cập nhật text và muốn ngăn chặn trình duyệt render HTML/Script (bảo mật tốt hơn).

- Lỗ hổng XSS: innerHTML phân tích cú pháp chuỗi đầu vào như một mã HTML thực thi. Nếu người dùng nhập mã độc (chứa thẻ `<script>` hoặc các thuộc tính chứa mã JavaScript như onerror), trình duyệt sẽ chạy đoạn mã đó, dẫn đến tấn công XSS.

- Cách sửa:
    - Thay vì dùng innerHTML, hãy dùng textContent (hoặc innerText) để ép chuỗi độc hại trở thành văn bản hiển thị thông thường:
    ```
    const userInput = document.querySelector("#search").value;
    document.querySelector("#result").textContent = userInput; // An toàn
    ```

### Câu A3 (5đ) — Event Bubbling
- Bình thường (khi click #btn):
```
BUTTON
INNER
OUTER
```
- Nếu bỏ comment e.stopPropagation():
```
BUTTON
```
(Giải thích: stopPropagation ngăn chặn sự kiện nổi bọt (bubbling) lên các phần tử cha, nên chỉ event listener của chính button đó được kích hoạt).

## 
### Câu C1 (8đ) — Debug DOM Code
- 7 Lỗi và cách sửa:

- Lỗi Syntax sự kiện click:

    - Sai: addEventListener("onclick", ...)

    - Sửa: Đổi "onclick" thành "click".

- Lỗi gán giá trị cho Hằng số / Mất tham chiếu DOM:

    - Sai: countDisplay = count; (trong #resetBtn)

    - Sửa: Đổi thành countDisplay.textContent = count;

- Thiếu ngoặc đơn khi gọi hàm:

    - Sai: item.remove; (trong #clearHistory)

    - Sửa: Đổi thành item.remove();

- Lỗi kiểu dữ liệu khi lấy từ localStorage:

    - Sai: count = localStorage.getItem("count"); (trả về chuỗi). Khi nhấn Increment, count++ sẽ ép kiểu đúng, nhưng khởi tạo không an toàn.

    - Sửa: count = Number(localStorage.getItem("count")) || 0;

- Lỗi thiếu logic phục hồi historyList từ localStorage:

    - Sai: Sự kiện load chỉ gán lại số đếm count mà quên không đẩy chuỗi HTML vào lại historyList.

    - Sửa: Thêm dòng historyList.innerHTML = localStorage.getItem("history") || ""; vào callback của sự kiện load.

- Lỗi xóa node không gắn lại listener khi load từ local storage:

    - Vấn đề: Do lưu bằng innerHTML, các sự kiện click gắn trên các thẻ <li> cũ sẽ bị mất khi tải lại trang.

    - Sửa: Cần dùng Event Delegation thay vì bind trực tiếp vào từng thẻ <li>. Bind click lên historyList, kiểm tra e.target.tagName === 'LI' rồi xóa.

- Lỗi dùng innerHTML thiếu bảo mật/tối ưu:

    - Sai: countDisplay.innerHTML = count;

    - Sửa: Dùng countDisplay.textContent = count;

Câu C2 (7đ) — Performance
1. Giải thích Event Delegation:
```
Tại sao bind 1000 events là BAD PRACTICE: Mỗi Event Listener tạo ra một object trong bộ nhớ (Memory). 1000 listeners làm tiêu tốn bộ nhớ dư thừa. Ngoài ra, khi phần tử bị xóa đi, cần dọn dẹp các sự kiện thủ công để tránh rò rỉ bộ nhớ; khi chèn thẻ mới lại phải gắn sự kiện mới.
```
```
Event Delegation giải quyết thế nào: Kỹ thuật này gắn duy nhất 1 event listener lên phần tử cha chung (ví dụ: <ul>). Khi click vào <li> con, sự kiện sẽ nổi bọt (bubble) lên thẻ <ul>. Thẻ cha sẽ hứng sự kiện này và dùng event.target để biết chính xác thẻ con nào vừa bị tương tác.
```

2. Refactor bằng DocumentFragment:

```
const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    fragment.appendChild(div); // Không chạm tới giao diện thật
}

document.body.appendChild(fragment);
```
- Giải thích: document.body.appendChild() trong vòng lặp buộc trình duyệt tính toán lại bố cục (Reflow) và vẽ lại giao diện (Repaint) 1000 lần. DocumentFragment là một DOM node ảo tồn tại ẩn trên RAM. Append vào Fragment không ảnh hưởng UI. Cuối cùng, chỉ với thao tác đẩy toàn bộ Fragment vào body, trình duyệt xử lý Reflow và Repaint đúng 1 lần, hiệu suất cải thiện đáng kể.