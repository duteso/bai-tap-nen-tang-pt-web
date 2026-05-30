import React from 'react';
import UserCard from './components/UserCard';
import PriceTag from './components/PriceTag';

function App() {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Danh sách Người dùng</h2>
            
            {/* Hiển thị 3 UserCard với dữ liệu khác nhau */}
            <UserCard 
                name="Nguyễn Văn A" 
                email="nguyenvana@gmail.com" 
                avatar="https://i.pravatar.cc/150?img=11" 
            />
            <UserCard 
                name="Trần Thị B" 
                email="tranthib@gmail.com" 
                avatar="https://i.pravatar.cc/150?img=5" 
            />
            <UserCard 
                name="Lê Văn C" 
                email="levanc@gmail.com" 
                avatar="https://i.pravatar.cc/150?img=12" 
            />

            <h2>Thẻ Giá (Price Tag)</h2>
            <PriceTag originalPrice={1500000} salePrice={1200000} />
            <br />
            <PriceTag originalPrice={500000} /> {/* Không có giá sale */}
        </div>
    );
}

export default App;