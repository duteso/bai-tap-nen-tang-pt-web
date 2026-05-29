#    Bài 1.1 — Component render lần đầu (8 phút)
1. Tại sao component chỉ render 1 lần?
```
Vì không có gì thay đổi cả. Component này không có useState, không có props thay đổi — React nhìn vào thấy "ổn rồi, không cần làm gì thêm" nên nó chỉ gọi LifecycleDemo() đúng 1 lần lúc trang load xong rồi thôi.
```

2. Khi nào nó sẽ render lại?
```
Có 3 trường hợp React sẽ gọi lại function component:
- Một là gọi setState - phổ biến nhất. Thêm useState vào rồi thay đổi giá trị là nó render lại.

function LifecycleDemo() {
    console.log("render!");

    const [count, setCount] = useState(0); // thêm cái này

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            {/* nhấn nút => setCount => render lại => console log thêm 1 lần */}
        </div>
    );
}

- Hai là props thay đổi - component cha truyền props mới xuống thì component con render lại.

- Ba là component cha render lại - cha render thì con cũng bị gọi lại theo, dù props không đổi.
```

# Bài 1.2 — Biến "bình thường" vs useState (12 phút)
Thử nghiệm 1 - BadCounter
```
Nhấn nút thì Console hiện Count: 1, Count: 2, Count: 3... đúng - tức là biến count thực ra đang tăng trong bộ nhớ. Nhưng màn hình vẫn hiện số 0 mãi không đổi.
Lý do: React không biết gì về cái biến let count đó. Nó không theo dõi biến thường. Mà dù có biết đi nữa thì mỗi lần React gọi lại BadCounter() - let count = 0 lại chạy từ đầu, reset về 0 hết.
```

Thử nghiệm 2 - GoodCounter
```
Nhấn nút thì màn hình cập nhật ngay, số tăng lên rõ ràng. setCount làm 2 việc cùng lúc: lưu giá trị mới lại, và báo React render lại.
```

Thử nghiệm 3 — log "render" mấy lần?
```
Nếu thêm console.log("render!") vào GoodCounter thì:

Load trang => thấy render! 1 lần
Nhấn nút 3 lần => thấy thêm 3 lần nữa

Tổng là 4 lần. Mỗi lần setCount được gọi là React chạy lại cả cái function GoodCounter() từ đầu - đó là re-render. Cái const [count, setCount] = useState(0) không reset về 0 vì React tự nhớ giá trị state ở chỗ khác, không phải trong biến thường.
```