import React, { useState } from 'react';

function Challenge5_2() {
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

    return (
        <div style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
            <h2>Bài 5.2: Input Events</h2>
            
            <div style={{ marginBottom: "15px" }}>
                <label>Email: </label>
                <input 
                    type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Nhập email..."
                />
                {email && !email.includes('@') && <span style={{ color: 'red', marginLeft: "10px" }}>⚠️ Thiếu ký tự @</span>}
                {email && email.includes('@') && <span style={{ color: 'green', marginLeft: "10px" }}>✅ Hợp lệ</span>}
            </div>

            <div style={{ marginBottom: "15px" }}>
                <label>Nội dung: </label><br/>
                <textarea 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    rows={4} 
                    style={{ width: "100%", marginTop: "5px" }}
                />
            </div>

            <p><strong>Số từ:</strong> {wordCount}</p>
            <p style={{ background: "#eee", padding: "10px" }}><strong>Preview:</strong> {text}</p>
        </div>
    );
}

export default Challenge5_2;