import React, { useState } from 'react';

const keysToGuess = ['a', 's', 'd', 'f', 'g', 'h'];

function Challenge5_3() {
    const [targetKey, setTargetKey] = useState('a');
    const [message, setMessage] = useState('Bắt đầu nào!');
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [bgColor, setBgColor] = useState('#ffffff');

    const handleKeyDown = (e) => {
        if (e.ctrlKey && e.key === 'd') {
            e.preventDefault();
            setBgColor(prev => prev === '#ffffff' ? '#e0f7fa' : '#ffffff');
            return;
        }

        if (e.key === targetKey) {
            setMessage('Chính xác!');
            setTargetKey(keysToGuess[Math.floor(Math.random() * keysToGuess.length)]);
        } else if (keysToGuess.includes(e.key)) {
            setMessage('Sai rồi, thử lại nhé!');
        }

        const step = 20;
        if (e.key === 'ArrowUp') setPosition(p => ({ ...p, y: p.y - step }));
        if (e.key === 'ArrowDown') setPosition(p => ({ ...p, y: p.y + step }));
        if (e.key === 'ArrowLeft') setPosition(p => ({ ...p, x: p.x - step }));
        if (e.key === 'ArrowRight') setPosition(p => ({ ...p, x: p.x + step }));
    };

    return (
        <div 
            tabIndex={0}
            onKeyDown={handleKeyDown} 
            style={{ 
                padding: "20px", 
                backgroundColor: bgColor, 
                outline: "none", 
                borderBottom: "1px solid #ccc",
                minHeight: "300px",
                position: "relative"
            }}
        >
            <h2>Bài 5.3: Keyboard Events</h2>
            <p><em>(Click chuột vào khu vực này để kích hoạt bắt phím)</em></p>
            <p><strong>Phím tắt:</strong> Nhấn <code>Ctrl + D</code> để đổi màu nền.</p>
            
            <div style={{ marginBottom: "20px", padding: "10px", border: "1px dashed #999" }}>
                <h3>Game đoán phím</h3>
                <p>Hãy nhấn phím: <strong style={{ fontSize: "24px", color: "blue" }}>{targetKey.toUpperCase()}</strong></p>
                <p>{message}</p>
            </div>

            <p>Dùng 4 phím mũi tên để di chuyển ô vuông bên dưới:</p>
            <div style={{
                position: "absolute",
                width: "40px",
                height: "40px",
                backgroundColor: "#e74c3c",
                top: `calc(100% - 100px + ${position.y}px)`,
                left: `calc(50% - 20px + ${position.x}px)`,
                transition: "0.1s linear"
            }}></div>
        </div>
    );
}

export default Challenge5_3;