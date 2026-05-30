#  Bài 2.1 — Hiển thị biến đơn giản (8 phút)
```
import React from 'react';

function Challenge2_1() {
    const name = "Dương Thế Sơn";
    const age = 20;
    const hometown = "Bắc Giang";

    const currentHour = new Date().getHours();
    let greeting = "Chào buổi tối";
    if (currentHour < 12) greeting = "Chào buổi sáng";
    else if (currentHour < 18) greeting = "Chào buổi chiều";

    const weight = 57;
    const height = 1.65;
    const bmi = (weight / (height * height)).toFixed(1);

    return (
        <div style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
            <h2>Bài 2.1: Biến đơn giản</h2>
            
            <p><strong>Thông tin:</strong> {name}, {age} tuổi, quê ở {hometown}</p>
            
            <p><strong>Lời chào:</strong> {greeting}!</p>
            
            <p><strong>Chỉ số BMI:</strong> {bmi} (Cân nặng: {weight}kg, Chiều cao: {height}m)</p>
        </div>
    );
}

export default Challenge2_1;
```

# Bài 2.2 — Conditional Rendering (Hiển thị có điều kiện) (10 phút)
```
import React from 'react';

function Challenge2_2() {
    const isOnline = true;
    const isLoggedIn = true;
    const stock = 0;

    return (
        <div style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
            <h2>Bài 2.2: Hiển thị có điều kiện</h2>

            {/* 1. Trạng thái Online/Offline (Dùng Ternary) */}
            <p>Trạng thái User: {isOnline ? "Online" : "Offline"}</p>

            {/* 2. Hiện/ẩn menu (Dùng &&) */}
            {isLoggedIn && (
                <ul style={{ background: "#f0f0f0", padding: "10px 30px" }}>
                    <li>Thông tin tài khoản</li>
                    <li>Đơn hàng của tôi</li>
                    <li>Đăng xuất</li>
                </ul>
            )}

            {/* 3. Hiển thị "Hết hàng" (Dùng Ternary / &&) */}
            <div>
                <h3>Sản phẩm: iPhone 16</h3>
                {stock === 0 ? (
                    <p style={{ color: "red", fontWeight: "bold" }}>Hết hàng</p>
                ) : (
                    <p>Còn lại: {stock} sản phẩm</p>
                )}
            </div>
        </div>
    );
}

export default Challenge2_2;
```

# Bài 2.3 — Render danh sách (List Rendering) (10 phút)
```
import React from 'react';

function Challenge2_3() {
    const products = [
        { id: 1, name: "Tai nghe Bluetooth", price: 450000 },
        { id: 2, name: "Bàn phím cơ", price: 1200000 },
        { id: 3, name: "Chuột Gaming", price: 850000 },
        { id: 4, name: "Màn hình 24 inch", price: 2500000 },
        { id: 5, name: "Lót chuột", price: 150000 }
    ];

    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Bài 2.3: Render danh sách</h2>
            
            <ul>
                {products.map((product) => (
                    <li 
                        key={product.id} 
                        style={{ color: product.price > 1000000 ? "red" : "black" }}
                    >
                        {product.name} - {product.price.toLocaleString('vi-VN')}đ
                    </li>
                ))}
            </ul>

            <h3 style={{ marginTop: "20px" }}>
                Tổng giá trị: {totalPrice.toLocaleString('vi-VN')}đ
            </h3>
        </div>
    );
}

export default Challenge2_3;
```