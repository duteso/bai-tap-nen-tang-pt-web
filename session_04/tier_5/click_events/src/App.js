import React, { useState } from 'react';

function Challenge5_1() {
    const [bgColor, setBgColor] = useState('#f0f0f0');
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const changeRandomColor = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setBgColor(randomColor);
    };

    return (
        <div style={{ padding: "20px", backgroundColor: bgColor, transition: "0.3s", borderBottom: "1px solid #ccc" }}>
            <h2>Bài 5.1: Click Events</h2>
            
            <button onClick={changeRandomColor} style={{ marginBottom: "15px" }}>
                Đổi màu nền ngẫu nhiên
            </button>
            
            <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                <button onClick={() => setCountA(countA + 1)}>Nút A ({countA})</button>
                <button onClick={() => setCountB(countB + 1)}>Nút B ({countB})</button>
            </div>

            <button onClick={() => setIsLiked(!isLiked)}>
                {isLiked ? 'Đã thích' : 'Thích'}
            </button>
        </div>
    );
}

export default Challenge5_1;