# Bài 4.1 — useState với số (Đếm) (10 phút)
```
import React, { useState } from 'react';

function Challenge4_1() {
    const [count, setCount] = useState(0);

    let statusText = "Số không";
    let color = "black";
    
    if (count > 0) {
        statusText = "Số dương";
        color = "green";
    } else if (count < 0) {
        statusText = "Số âm";
        color = "red";
    }

    return (
        <div style={{ padding: "20px", borderBottom: "1px solid #ccc", textAlign: "center" }}>
            <h2>Bài 4.1: useState với Số</h2>
            
            <h3 style={{ color: color }}>
                Bộ đếm: {count} ({statusText})
            </h3>
            
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "15px" }}>
                <button onClick={() => setCount(count + 1)}>Tăng (+1)</button>
                <button onClick={() => setCount(count - 1)}>Giảm (-1)</button>
                <button onClick={() => setCount(count + 5)}>Tăng 5 (+5)</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

export default Challenge4_1;
```

# Bài 4.2 — useState với chuỗi (Input) (10 phút)
```
import React, { useState } from 'react';

function Challenge4_2() {
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
            <h2>Bài 4.2: useState với Chuỗi</h2>
            
            {/* 1. Đếm ký tự */}
            <div style={{ marginBottom: "15px" }}>
                <label>Nội dung (tối đa 100 ký tự): </label>
                <input 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    maxLength={100}
                />
                <span style={{ marginLeft: "10px", fontSize: "14px", color: "#666" }}>
                    {text.length}/100
                </span>
            </div>

            {/* 2. Email hợp lệ */}
            <div style={{ marginBottom: "15px" }}>
                <label>Email: </label>
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Nhập email..."
                />
                {email.includes("@") && (
                    <span style={{ color: "green", marginLeft: "10px", fontSize: "14px" }}>
                        Email hợp lệ
                    </span>
                )}
            </div>

            {/* 3. Mật khẩu ẩn/hiện */}
            <div style={{ marginBottom: "15px" }}>
                <label>Mật khẩu: </label>
                <input 
                    type={showPassword ? "text" : "password"} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button 
                    onClick={() => setShowPassword(!showPassword)} 
                    style={{ marginLeft: "5px", cursor: "pointer" }}
                >
                    {showPassword ? "Ẩn" : "Hiện"}
                </button>
            </div>
        </div>
    );
}

export default Challenge4_2;
```
# Bài 4.3 — useState với boolean (Toggle) (10 phút)
```
import React, { useState } from 'react';

function Challenge4_3() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLightOn, setIsLightOn] = useState(false);

    return (
        <div style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
            <h2>Bài 4.3: useState với Boolean (Toggle)</h2>
            
            {/* 1. Accordion */}
            <div style={{ border: "1px solid #ddd", borderRadius: "5px", marginBottom: "20px", maxWidth: "400px" }}>
                <div 
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ padding: "10px", background: "#f0f0f0", cursor: "pointer", fontWeight: "bold" }}
                >
                    {isOpen ? "Thu gọn nội dung" : "Bấm để xem chi tiết"}
                </div>
                {isOpen && (
                    <div style={{ padding: "15px", background: "#fff" }}>
                        Đây là nội dung chi tiết bên trong Accordion! Việc dùng <code>!isOpen</code> giúp đảo ngược trạng thái dễ dàng.
                    </div>
                )}
            </div>

            {/* 2. Bóng đèn */}
            <div style={{ 
                padding: "20px", 
                background: isLightOn ? "#fff9c4" : "#e0e0e0", 
                borderRadius: "8px",
                textAlign: "center",
                maxWidth: "200px"
            }}>
                <div style={{ fontSize: "50px", marginBottom: "15px" }}>
                    {isLightOn ? "On" : "Off"}
                </div>
                <button onClick={() => setIsLightOn(!isLightOn)}>
                    {isLightOn ? "Tắt đèn" : "Bật đèn"}
                </button>
            </div>
        </div>
    );
}

export default Challenge4_3;
```

# Bài 4.4 — Kết hợp nhiều useState (10 phút)
```
import React, { useState } from 'react';

function Challenge4_4() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    
    function handleSubmit() {
        // Reset lỗi trước khi check
        setError("");

        // Validate rỗng
        if (!name.trim() || !email.trim() || !age) {
            setError("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        // Validate tuổi (0 - 100)
        const ageNum = parseInt(age);
        if (ageNum <= 0 || ageNum >= 100) {
            setError("Tuổi phải lớn hơn 0 và nhỏ hơn 100!");
            return;
        }

        // Nếu qua hết validate thì cho qua
        setSubmitted(true);
    }
    
    function handleReset() {
        setName("");
        setEmail("");
        setAge("");
        setSubmitted(false);
        setError("");
    }
    
    return (
        <div style={{ padding: "20px" }}>
            <h2>Bài 4.4: Form đăng ký</h2>
            
            {!submitted ? (
                <div style={{ maxWidth: "300px" }}>
                    {/* Hiển thị lỗi nếu có */}
                    {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
                    
                    <div style={{ marginBottom: "10px" }}>
                        <label>Tên: </label>
                        <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ width: "100%", padding: "5px" }}
                        />
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>Email: </label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: "100%", padding: "5px" }}
                        />
                    </div>
                    
                    <div style={{ marginBottom: "15px" }}>
                        <label>Tuổi: </label>
                        <input 
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            style={{ width: "100%", padding: "5px" }}
                        />
                    </div>
                    
                    <button 
                        onClick={handleSubmit}
                        style={{ width: "100%", padding: "10px", background: "#3498db", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                    >
                        Đăng ký
                    </button>
                </div>
            ) : (
                <div style={{ background: "#d4edda", padding: "20px", borderRadius: "4px", color: "#155724", maxWidth: "300px" }}>
                    <h3 style={{ marginTop: 0 }}>🎉 Xin chào {name}!</h3>
                    <p>Đăng ký thành công.</p>
                    <p><strong>Email của bạn:</strong> {email}</p>
                    <p><strong>Tuổi:</strong> {age}</p>
                    <button 
                        onClick={handleReset}
                        style={{ marginTop: "10px", padding: "8px 15px", cursor: "pointer" }}
                    >
                        Đăng ký lại
                    </button>
                </div>
            )}
        </div>
    );
}

export default Challenge4_4;
```
